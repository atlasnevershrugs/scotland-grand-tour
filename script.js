/* =========================================================================
   Scotland Grand Tour — Renderer (v2: visual-first, photo-mosaic, mini-maps)
   ========================================================================= */

(function () {
  const T = window.TRIP;
  const E = window.TRIP_ENRICH || { attractions: {}, stays: {} };
  if (!T) return;

  /* ---------- url helpers ---------- */
  const enc = encodeURIComponent;
  const P = T.party || { adults: 2, children: 0, rooms: 1, priceMax: 250, currency: "GBP" };

  // Fallback search URLs when no direct URL is available
  const tripadvisorSearch = q => `https://www.tripadvisor.com/Search?q=${enc(q)}`;

  function tripadvisorHotelSearch(q, ci, co) {
    const p = new URLSearchParams({ q, ssrcs: "hotels", adults: String(P.adults), rooms: String(P.rooms) });
    if (ci) p.set("checkIn", ci);
    if (co) p.set("checkOut", co);
    return `https://www.tripadvisor.com/SearchForHotels?${p}`;
  }
  function bookingSearch(q, ci, co) {
    const p = new URLSearchParams({
      ss: q,
      group_adults: String(P.adults),
      group_children: String(P.children),
      no_rooms: String(P.rooms),
      nflt: `price=${P.currency}-0-${P.priceMax}-1`,
      selected_currency: P.currency
    });
    if (ci) p.set("checkin", ci);
    if (co) p.set("checkout", co);
    return `https://www.booking.com/searchresults.html?${p}`;
  }
  function airbnbSearch(loc, ci, co) {
    const p = new URLSearchParams({
      adults: String(P.adults),
      children: String(P.children),
      price_max: String(P.priceMax),
      currency: P.currency
    });
    if (ci) p.set("checkin", ci);
    if (co) p.set("checkout", co);
    return `https://www.airbnb.com/s/${enc(loc)}/homes?${p}`;
  }
  const wikiPage = title => `https://en.wikipedia.org/wiki/${title}`;

  function fmtDate(iso) {
    if (!iso) return "";
    const [y, m, d] = iso.split("-").map(Number);
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const dt = new Date(Date.UTC(y, m - 1, d));
    return `${days[dt.getUTCDay()]} ${d} ${months[m - 1]}`;
  }

  /* ---------- Wikipedia image fetchers ---------- */
  const wikiImageCache = {};
  async function fetchWikiImage(title) {
    if (!title) return null;
    if (wikiImageCache[title] !== undefined) return wikiImageCache[title];
    try {
      const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
      if (!r.ok) { wikiImageCache[title] = null; return null; }
      const d = await r.json();
      const src = d.originalimage?.source || d.thumbnail?.source || null;
      wikiImageCache[title] = src;
      return src;
    } catch { wikiImageCache[title] = null; return null; }
  }

  // Multi-image fetcher: media-list endpoint returns ALL media on a page.
  // We filter to plausible photos.
  const wikiGalleryCache = {};
  async function fetchAttractionGallery(title, max = 5) {
    if (!title) return [];
    if (wikiGalleryCache[title] !== undefined) return wikiGalleryCache[title].slice(0, max);
    try {
      const r = await fetch(`https://en.wikipedia.org/api/rest_v1/page/media-list/${title}`);
      if (!r.ok) { wikiGalleryCache[title] = []; return []; }
      const d = await r.json();
      const items = (d.items || [])
        .filter(it =>
          it.type === "image" &&
          /\.(jpe?g|png)$/i.test(it.title) &&
          !/(map|locator|location|icon|logo|coat[_ ]of[_ ]arms|flag|seal|svg|diagram|chart|graph|plan_)/i.test(it.title)
        )
        .map(it => {
          const filename = it.title.replace(/^File:/, "");
          return {
            thumb: `https://commons.wikimedia.org/wiki/Special:FilePath/${enc(filename)}?width=800`,
            full:  `https://commons.wikimedia.org/wiki/Special:FilePath/${enc(filename)}?width=1800`,
            commonsPage: `https://commons.wikimedia.org/wiki/${enc(it.title)}`,
            caption: decodeURIComponent(filename).replace(/[_]/g, " ").replace(/\.(jpe?g|png)$/i, "")
          };
        });
      wikiGalleryCache[title] = items;
      return items.slice(0, max);
    } catch { wikiGalleryCache[title] = []; return []; }
  }

  /* ---------- HERO ---------- */
  const heroStats = document.getElementById('hero-stats');
  T.stats.forEach(s => {
    const d = document.createElement('div');
    d.className = 'hero-stat';
    d.innerHTML = `<span class="hero-stat-value">${s.value}</span>
                   <span class="hero-stat-label">${s.label}</span>`;
    heroStats.appendChild(d);
  });

  /* ---------- ILLUSTRATED SVG MAP (Scotland highlighted, Oxford off-scale) ---------- */
  function buildIllustratedMap() {
    const W = 1100, H = 800;
    const scot = T.route.filter(s => s.label !== 'Oxford');
    const oxford = T.route.find(s => s.label === 'Oxford');

    // Project ONLY the Scotland stops so Scotland fills the frame (not to scale
    // versus England — Oxford is drawn separately below as an off-map node).
    const lats = scot.map(s => s.lat), lngs = scot.map(s => s.lng);
    const latMin = Math.min(...lats), latMax = Math.max(...lats);
    const lngMin = Math.min(...lngs), lngMax = Math.max(...lngs);
    const REGION = { x0: 175, x1: W - 130, y0: 150, y1: 560 };
    const project = (lat, lng) => [
      REGION.x0 + ((lng - lngMin) / (lngMax - lngMin)) * (REGION.x1 - REGION.x0),
      REGION.y0 + ((latMax - lat) / (latMax - latMin)) * (REGION.y1 - REGION.y0)
    ];
    const points = scot.map(s => ({ ...s, xy: project(s.lat, s.lng) }));

    // Route line through the Scottish stops
    let pathD = '';
    points.forEach((p, i) => {
      const [x, y] = p.xy;
      if (i === 0) pathD += `M ${x} ${y}`;
      else {
        const [px, py] = points[i-1].xy;
        const mx = (px + x) / 2, my = (py + y) / 2 - 14;
        pathD += ` Q ${mx} ${my} ${x} ${y}`;
      }
    });

    // Highlighted "Scotland" panel behind the pins
    const xs = points.map(p => p.xy[0]), ys = points.map(p => p.xy[1]);
    const hx0 = Math.min(...xs) - 90, hx1 = Math.max(...xs) + 105;
    const hy0 = Math.min(...ys) - 78, hy1 = Math.max(...ys) + 55;
    const highlight = `
      <g>
        <rect x="${hx0}" y="${hy0}" width="${hx1 - hx0}" height="${hy1 - hy0}" rx="28"
              fill="var(--heather)" opacity="0.08" />
        <rect x="${hx0}" y="${hy0}" width="${hx1 - hx0}" height="${hy1 - hy0}" rx="28"
              fill="none" stroke="var(--heather)" stroke-width="1.5" stroke-dasharray="2 7" opacity="0.55" />
        <text x="${hx0 + 22}" y="${hy0 + 40}" style="font: italic 30px Fraunces, serif" fill="var(--heather)" opacity="0.6">Scotland</text>
      </g>`;

    const coast = `
      <path class="coast" d="M 150 540 Q 110 470 140 410 Q 100 330 160 270 Q 130 200 190 150 Q 230 110 300 100" />
      <path class="coast" d="M 820 540 Q 890 480 880 410 Q 920 340 890 270 Q 940 210 900 150" />
    `;
    const compass = `
      <g class="compass" transform="translate(1010,100)">
        <circle r="22" fill="none" stroke="currentColor" stroke-width="1"/>
        <path d="M 0 -18 L 4 0 L 0 18 L -4 0 Z" />
        <text x="0" y="-26" text-anchor="middle" fill="currentColor" style="font: italic 11px Fraunces, serif">N</text>
      </g>
    `;

    const pinSvg = points.map((p, i) => {
      const [x, y] = p.xy;
      const anchorLeft = x > W * 0.72;
      return `
        <g class="pin" data-day="${p.day}" style="cursor:pointer" transform="translate(${x},${y})">
          <circle class="pin-circle" r="14" />
          <text class="pin-number" text-anchor="middle" dy="4">${i + 1}</text>
          <text class="pin-label" text-anchor="${anchorLeft ? 'end' : 'start'}" x="${anchorLeft ? -20 : 20}" y="-2">${p.label}</text>
          <text class="pin-nights" text-anchor="${anchorLeft ? 'end' : 'start'}" x="${anchorLeft ? -20 : 20}" y="14">${p.nights === 'drop-off' ? 'Drop-off' : 'Nights ' + p.nights}</text>
        </g>`;
    }).join('');

    const detourSvg = T.detours.map(d => {
      const [x, y] = project(d.lat, d.lng);
      return `<g class="detour" transform="translate(${x},${y})">
        <circle r="4" fill="var(--whisky)" stroke="var(--cream)" stroke-width="1.5"/>
        <text class="pin-nights" text-anchor="start" x="8" y="3">${d.label}</text>
      </g>`;
    }).join('');

    // Oxford as an off-scale node at the bottom, linked by a long dashed "drive"
    const glasgow = points[points.length - 1].xy; // Glasgow is the last Scottish stop
    const oxX = W * 0.5, oxY = 728;
    const oxfordSvg = `
      <g>
        <line x1="${glasgow[0]}" y1="${glasgow[1] + 18}" x2="${oxX}" y2="${oxY - 20}"
              stroke="var(--whisky)" stroke-width="2" stroke-dasharray="2 8" stroke-linecap="round" opacity="0.8" />
        <text x="${(glasgow[0] + oxX) / 2 + 18}" y="${(glasgow[1] + oxY) / 2}" style="font: italic 13px Fraunces, serif" fill="var(--whisky)">350 mi · ~5½ hrs south</text>
        <g class="pin" data-day="${oxford.day}" style="cursor:pointer" transform="translate(${oxX},${oxY})">
          <circle r="13" fill="var(--whisky)" stroke="var(--cream)" stroke-width="2" />
          <text text-anchor="middle" dy="4" style="font: 700 11px Inter, sans-serif" fill="var(--cream)">★</text>
          <text text-anchor="middle" x="0" y="34" style="font: 500 15px Fraunces, serif" fill="var(--ink)">Oxford</text>
          <text text-anchor="middle" x="0" y="52" style="font: italic 11px Fraunces, serif" fill="var(--stone)">Drop-off · England</text>
        </g>
      </g>`;

    document.getElementById('illustrated-map').innerHTML = `
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Route through Scotland ending at Oxford">
        <rect width="${W}" height="${H}" fill="var(--cream)" />
        <g opacity=".45">${coast}</g>
        ${highlight}
        <g>${detourSvg}</g>
        <path class="route-line" d="${pathD}" />
        ${oxfordSvg}
        <g>${pinSvg}</g>
        ${compass}
        <text x="60" y="62" class="title-serif">Edinburgh → Oxford</text>
        <text x="60" y="84" class="meta">14 days · ~1,150 miles · 8 Highland &amp; island stops</text>
        <g transform="translate(60, ${H - 46})">
          <circle r="6" fill="var(--heather)"/>
          <text x="14" y="4" class="legend">Overnight stop</text>
          <circle cx="160" r="4" fill="var(--whisky)"/>
          <text x="170" y="4" class="legend">Day-trip waypoint</text>
        </g>
      </svg>`;

    document.querySelectorAll('.illustrated-map .pin').forEach(g => {
      g.addEventListener('click', () => {
        const day = g.getAttribute('data-day');
        const el = document.getElementById(`day-${day}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
  buildIllustratedMap();

  /* ---------- MAIN LEAFLET MAP ---------- */
  function buildLeaflet() {
    if (!window.L) return;
    const map = L.map('leaflet', { scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // Scotland stops only — Oxford is the handover drive and would force the
    // whole map to zoom out to fit England. The illustrated hero map above
    // shows Oxford as an off-scale node instead.
    const scot = T.route.filter(s => s.label !== 'Oxford');
    const latlngs = scot.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, { color: '#6B4E8C', weight: 3, opacity: 0.85, dashArray: '6 8', lineCap: 'round' }).addTo(map);
    scot.forEach((s, i) => {
      const icon = L.divIcon({ className: '', html: `<div class="route-pin">${i+1}</div>`, iconSize: [30,30], iconAnchor: [15,15] });
      L.marker([s.lat, s.lng], { icon }).addTo(map).bindPopup(
        `<b>${s.label}</b>${s.nights === 'drop-off' ? 'Drop-off' : 'Nights ' + s.nights}<br/>
         <a href="#day-${s.day}">Jump to day ${s.day} →</a>`);
    });
    T.detours.forEach(d => {
      const icon = L.divIcon({ className: '', html: `<div class="route-pin route-pin-detour" title="${d.label}"></div>`, iconSize: [18,18], iconAnchor: [9,9] });
      L.marker([d.lat, d.lng], { icon }).addTo(map).bindPopup(`<b>${d.label}</b>Day ${d.day}`);
    });
    map.fitBounds(L.latLngBounds(latlngs), { padding: [40, 40] });
    map.on('popupopen', e => {
      const link = e.popup.getElement().querySelector('a');
      if (link) link.addEventListener('click', ev => {
        ev.preventDefault();
        document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }
  buildLeaflet();

  /* ---------- PER-DAY MINI MAPS (lazy via IntersectionObserver) ---------- */
  function getDayRoute(dayNum) {
    const overnights = T.route.filter(r => r.day <= dayNum);
    const current = overnights[overnights.length - 1];
    const isTravelDay = current && current.day === dayNum;
    const previous = isTravelDay && overnights.length >= 2 ? overnights[overnights.length - 2] : null;
    const detours = T.detours.filter(d => d.day === dayNum);
    const pts = [];
    if (previous) pts.push({ ...previous, kind: 'start' });
    if (current)  pts.push({ ...current,  kind: isTravelDay ? 'end' : 'base' });
    detours.forEach(d => pts.push({ ...d, kind: 'detour' }));
    return pts;
  }

  function initMinimap(el, dayNum) {
    if (!window.L) return;
    const pts = getDayRoute(dayNum);
    if (!pts.length) return;
    const map = L.map(el, {
      scrollWheelZoom: false, dragging: false, doubleClickZoom: false,
      zoomControl: false, attributionControl: false, keyboard: false, touchZoom: false
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 16 }).addTo(map);
    const overnightPts = pts.filter(p => p.kind !== 'detour').map(p => [p.lat, p.lng]);
    if (overnightPts.length >= 2) {
      L.polyline(overnightPts, { color: '#6B4E8C', weight: 3, opacity: 0.9, dashArray: '5 6', lineCap: 'round' }).addTo(map);
    }
    pts.forEach(p => {
      const isDetour = p.kind === 'detour';
      const cls = isDetour ? 'mini-pin mini-pin-detour' : 'mini-pin';
      const icon = L.divIcon({
        className: '',
        html: `<div class="${cls}" title="${p.label}"></div>`,
        iconSize: isDetour ? [10,10] : [16,16],
        iconAnchor: isDetour ? [5,5] : [8,8]
      });
      L.marker([p.lat, p.lng], { icon, keyboard: false, interactive: false }).addTo(map);
    });
    const all = pts.map(p => [p.lat, p.lng]);
    map.fitBounds(L.latLngBounds(all), { padding: [22, 22] });
    // For single-point days (Edinburgh stay), zoom in a bit
    if (pts.length === 1) map.setZoom(11);
  }

  const minimapObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.initialised === 'true') return;
      const dayNum = parseInt(el.dataset.day, 10);
      initMinimap(el, dayNum);
      el.dataset.initialised = 'true';
      minimapObserver.unobserve(el);
    });
  }, { rootMargin: '400px 0px' });

  /* ---------- QUICK-REF TABLE ---------- */
  function buildQref() {
    const t = document.getElementById('qref-table');
    let html = `<thead><tr>
      <th>Day</th><th>Date</th><th>Route</th><th>Miles</th><th>Drive time</th><th>Overnight</th>
    </tr></thead><tbody>`;
    T.days.forEach(d => {
      const handover = d.num === 14 ? ' qref-handover' : '';
      html += `<tr class="${handover}">
        <td class="qref-day-cell">${d.num === 14 ? '↓' : d.num}</td>
        <td class="qref-num">${d.date}</td>
        <td class="qref-route">${d.leg}</td>
        <td class="qref-num">${d.miles}</td>
        <td class="qref-num">${d.drive}</td>
        <td><a href="#day-${d.num}" style="color:var(--heather);font-weight:600">${d.overnight}</a></td>
      </tr>`;
    });
    document.getElementById('qref-table').innerHTML = html + `</tbody>`;
  }
  buildQref();

  /* ---------- PRIORITY BOOKINGS ---------- */
  function buildPriority() {
    const c = document.getElementById('priority-grid');
    const pending = T.priorityBookings.filter(p => !p.done);
    const booked  = T.priorityBookings.filter(p => p.done);

    pending.forEach((p, i) => {
      const n = i + 1;
      const li = document.createElement('li');
      const datesLine = p.dates ? `<p class="priority-dates">${p.dates}</p>` : '';
      li.innerHTML = `
        <a class="priority-card" href="${p.url}" target="_blank" rel="noopener">
          <div class="priority-rank-row">
            <div class="priority-rank" data-rank="${n}">To book ${n}</div>
          </div>
          <h3 class="priority-what">${p.what}</h3>
          ${datesLine}
          <p class="priority-why">${p.why}</p>
          <span class="priority-link">Book direct</span>
        </a>`;
      c.appendChild(li);
    });

    if (booked.length) {
      const divider = document.createElement('li');
      divider.className = 'priority-divider';
      divider.innerHTML = `<span>Already booked</span>`;
      c.appendChild(divider);

      booked.forEach(p => {
        const li = document.createElement('li');
        const datesLine = p.dates ? `<p class="priority-dates">${p.dates}</p>` : '';
        li.innerHTML = `
          <a class="priority-card priority-card-done" href="${p.url}" target="_blank" rel="noopener">
            <div class="priority-rank-row">
              <span class="priority-booked-tag">✓ Booked</span>
            </div>
            <h3 class="priority-what">${p.what}</h3>
            ${datesLine}
            <p class="priority-why">${p.why}</p>
            <span class="priority-link">View property</span>
          </a>`;
        c.appendChild(li);
      });
    }
  }
  buildPriority();

  /* ---------- CAR RENTAL ---------- */
  function buildCars() {
    const u = document.getElementById('car-list');
    T.carRental.forEach(c => {
      const li = document.createElement('li');
      li.className = 'car-card' + (c.recommended ? ' recommended' : '');
      li.innerHTML = `
        <div class="car-card-head">
          <span class="car-card-name">${c.name}</span>
          ${c.recommended ? '<span class="car-badge">Recommended</span>' : ''}
        </div>
        <p class="car-card-note">${c.note}</p>
        <a class="car-card-link" href="${c.url}" target="_blank" rel="noopener">Compare &amp; book</a>`;
      u.appendChild(li);
    });
  }
  buildCars();

  /* ===================================================================
     LIGHTBOX (built once, shared across days)
     =================================================================== */
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button class="lb-close" aria-label="Close">×</button>
    <button class="lb-prev"  aria-label="Previous">‹</button>
    <button class="lb-next"  aria-label="Next">›</button>
    <figure class="lb-figure">
      <img class="lb-img" alt="" />
      <figcaption class="lb-caption">
        <span class="lb-title"></span>
        <span class="lb-source"></span>
      </figcaption>
    </figure>`;
  document.body.appendChild(lightbox);

  let lbState = { images: [], idx: 0 };
  function openLightbox(images, idx) {
    lbState = { images, idx };
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderLb();
  }
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function renderLb() {
    const img = lbState.images[lbState.idx];
    if (!img) return;
    const imgEl = lightbox.querySelector('.lb-img');
    imgEl.src = img.full || img.thumb;
    imgEl.alt = img.attractionName || img.caption || '';
    lightbox.querySelector('.lb-title').textContent = img.attractionName || '';
    const src = lightbox.querySelector('.lb-source');
    src.innerHTML = img.commonsPage
      ? `Image source: <a href="${img.commonsPage}" target="_blank" rel="noopener">Wikimedia Commons</a> (${lbState.idx + 1} of ${lbState.images.length})`
      : `${lbState.idx + 1} of ${lbState.images.length}`;
  }
  function lbNext() { lbState.idx = (lbState.idx + 1) % lbState.images.length; renderLb(); }
  function lbPrev() { lbState.idx = (lbState.idx - 1 + lbState.images.length) % lbState.images.length; renderLb(); }

  lightbox.querySelector('.lb-close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lb-next').addEventListener('click', lbNext);
  lightbox.querySelector('.lb-prev').addEventListener('click', lbPrev);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => {
    if (lightbox.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') lbNext();
    if (e.key === 'ArrowLeft')  lbPrev();
  });

  /* ===================================================================
     PHOTO MOSAIC (per day)
     =================================================================== */
  // Editorial size pattern (cycles): col-span × row-span
  const MOSAIC_PATTERN = [
    { cs: 2, rs: 2 },  // hero
    { cs: 1, rs: 1 },
    { cs: 1, rs: 1 },
    { cs: 1, rs: 2 },
    { cs: 1, rs: 1 },
    { cs: 2, rs: 1 },
    { cs: 1, rs: 1 },
    { cs: 1, rs: 1 },
    { cs: 2, rs: 2 },
    { cs: 1, rs: 1 },
    { cs: 1, rs: 1 },
    { cs: 2, rs: 1 }
  ];

  async function buildMosaic(grid, attractions) {
    const allImages = [];
    // Pull up to 4 images per attraction. Sequential to be polite to Wikipedia.
    for (const a of attractions) {
      const gallery = await fetchAttractionGallery(a.wiki, 4);
      gallery.forEach(g => allImages.push({ ...g, attractionName: a.name, attraction: a }));
      // If gallery empty, still try a single hero image via summary endpoint
      if (gallery.length === 0 && a.wiki) {
        const src = await fetchWikiImage(a.wiki);
        if (src) allImages.push({
          thumb: src, full: src, caption: a.name, attractionName: a.name, attraction: a
        });
      }
    }
    if (!allImages.length) {
      grid.innerHTML = `<div class="mosaic-empty">No photos available for this stop.</div>`;
      return;
    }
    // Cap to 12 images per day for visual balance.
    const images = allImages.slice(0, 12);
    grid.innerHTML = '';
    images.forEach((im, i) => {
      const pat = MOSAIC_PATTERN[i % MOSAIC_PATTERN.length];
      const tile = document.createElement('button');
      tile.className = 'mosaic-tile';
      tile.style.gridColumn = `span ${pat.cs}`;
      tile.style.gridRow    = `span ${pat.rs}`;
      tile.setAttribute('aria-label', `View ${im.attractionName}`);
      const img = document.createElement('img');
      img.loading = 'lazy';
      img.src = im.thumb;
      img.alt = im.attractionName;
      tile.appendChild(img);
      const overlay = document.createElement('span');
      overlay.className = 'mosaic-caption';
      overlay.textContent = im.attractionName;
      tile.appendChild(overlay);
      tile.addEventListener('click', () => openLightbox(images, i));
      grid.appendChild(tile);
    });
  }

  /* ===================================================================
     ATTRACTION KEY (link chips below each mosaic)
     =================================================================== */
  function buildAttractionKey(list, attractions) {
    attractions.forEach((a, idx) => {
      const enrich = E.attractions[a.name] || {};
      const li = document.createElement('li');
      li.className = 'attr-key';
      const chips = [];
      if (enrich.tripadvisor) {
        chips.push(`<a class="chip chip-ta" href="${enrich.tripadvisor}" target="_blank" rel="noopener">TripAdvisor</a>`);
      } else {
        chips.push(`<a class="chip chip-ta" href="${tripadvisorSearch(a.name + ' ' + (a.locale || ''))}" target="_blank" rel="noopener">TripAdvisor search</a>`);
      }
      if (a.url) chips.push(`<a class="chip chip-site" href="${a.url}" target="_blank" rel="noopener">Official site</a>`);
      (enrich.blogs || []).forEach(b => {
        chips.push(`<a class="chip chip-blog" href="${b.url}" target="_blank" rel="noopener" title="${b.title}">${b.source}</a>`);
      });
      if (a.wiki) chips.push(`<a class="chip chip-wiki" href="${wikiPage(a.wiki)}" target="_blank" rel="noopener">Wikipedia</a>`);
      li.innerHTML = `
        <div class="attr-key-head">
          <span class="attr-key-num">${idx + 1}</span>
          <h5 class="attr-key-name">${a.name}</h5>
          ${a.locale ? `<span class="attr-key-loc">${a.locale}</span>` : ''}
        </div>
        <p class="attr-key-desc">${a.desc || ''}</p>
        <div class="attr-key-chips">${chips.join('')}</div>`;
      list.appendChild(li);
    });
  }

  /* ===================================================================
     STAY CARDS (Airbnb primary) + demoted hotel strip
     =================================================================== */
  function stayCard(pick) {
    const a = document.createElement('a');
    a.className = 'stay-card stay-card-' + (pick.type || 'airbnb');
    if (pick.confirmed) a.className += ' stay-card-confirmed';
    a.href = pick.url; a.target = '_blank'; a.rel = 'noopener';

    const typeLabel = pick.confirmed
      ? 'Booked stay'
      : ({
          'airbnb':       'Airbnb · property',
          'airbnb-area':  'Airbnb · curated area search',
          'bnb':          'Independent B&B'
        }[pick.type] || 'Stay');

    const imgHtml = pick.image
      ? `<div class="stay-image"><img loading="lazy" src="${pick.image}" alt="${pick.title}"/></div>`
      : `<div class="stay-image stay-image-fallback"><span>${pick.title}</span></div>`;

    // NOTE: we intentionally do NOT render booking reference numbers — this
    // file ships to the public site. Keep refs out of data-enrichment.js.
    const confirmedBadge = pick.confirmed
      ? `<span class="stay-badge-confirmed" title="Booking confirmed">✓ Booked</span>`
      : '';

    a.innerHTML = `
      ${imgHtml}
      <div class="stay-body">
        <div class="stay-header-row">
          <span class="stay-type">${typeLabel}</span>
          ${confirmedBadge}
        </div>
        <h4 class="stay-title">${pick.title}</h4>
        <p class="stay-why">${pick.why || ''}</p>
        <div class="stay-meta-row">
          ${pick.price ? `<span class="stay-price">${pick.price}</span>` : ''}
          <span class="stay-cta">${pick.confirmed ? 'Booking details' : 'View'} →</span>
        </div>
      </div>`;
    return a;
  }

  function hotelMini(h, ci, co) {
    const taQ = `${h.name} ${h.locale || ''}`.trim();
    const bkQ = taQ;
    const airQ = h.locale || h.name;
    const card = document.createElement('div');
    card.className = 'hotel-mini';
    card.innerHTML = `
      <div class="hotel-mini-head">
        <h5 class="hotel-mini-name">${h.name}</h5>
        <span class="hotel-mini-price">${h.price}</span>
      </div>
      <p class="hotel-mini-style">${h.style}</p>
      <div class="hotel-mini-chips">
        <a class="chip chip-ta"     href="${tripadvisorHotelSearch(taQ, ci, co)}" target="_blank" rel="noopener">TripAdvisor</a>
        <a class="chip chip-bk"     href="${bookingSearch(bkQ, ci, co)}"          target="_blank" rel="noopener">Booking.com</a>
        <a class="chip chip-airbnb" href="${airbnbSearch(airQ, ci, co)}"          target="_blank" rel="noopener">Airbnb area</a>
        ${h.url ? `<a class="chip chip-site" href="${h.url}" target="_blank" rel="noopener">Site</a>` : ''}
      </div>`;
    return card;
  }

  /* ===================================================================
     RESTAURANTS (compact)
     =================================================================== */
  function restaurantCard(r) {
    const a = document.createElement('a');
    a.className = 'rest-card';
    a.href = r.url || tripadvisorSearch(r.name);
    a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `<h4 class="rest-name">${r.name}</h4><p class="rest-note">${r.note || ''}</p>`;
    return a;
  }

  /* ===================================================================
     BUILD ONE DAY SECTION
     =================================================================== */
  function buildDay(d) {
    const sec = document.createElement('article');
    sec.className = 'day';
    sec.id = `day-${d.num}`;

    // Day header
    const head = document.createElement('header');
    head.className = 'day-head';
    head.innerHTML = `
      <div class="day-num-row">
        <span class="day-num">Day ${String(d.num).padStart(2, '0')}</span>
        <span class="day-date">${d.weekday} · ${d.date}</span>
      </div>
      <h3 class="day-title">${d.title}</h3>
      <p class="day-blurb">${d.blurb}</p>`;
    sec.appendChild(head);

    // Top row: minimap + drive strip
    const topRow = document.createElement('div');
    topRow.className = 'day-top-row';

    const mini = document.createElement('div');
    mini.className = 'day-minimap';
    mini.dataset.day = String(d.num);
    mini.id = `minimap-${d.num}`;
    topRow.appendChild(mini);
    minimapObserver.observe(mini);

    const strip = document.createElement('div');
    strip.className = 'drive-strip';
    strip.innerHTML = `
      <div class="drive-stat"><div class="drive-stat-label">Route</div><div class="drive-stat-value">${d.route}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Distance</div><div class="drive-stat-value">${d.miles}${d.miles !== '—' ? ' mi' : ''}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Drive</div><div class="drive-stat-value">${d.drive}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Overnight</div><div class="drive-stat-value">${d.overnight}</div></div>`;
    topRow.appendChild(strip);

    sec.appendChild(topRow);

    // See & do — mosaic + key
    if (d.attractions && d.attractions.length) {
      const lab = document.createElement('h4');
      lab.className = 'day-section-label';
      lab.textContent = 'See & do';
      sec.appendChild(lab);

      const grid = document.createElement('div');
      grid.className = 'mosaic-grid';
      grid.innerHTML = `<div class="mosaic-loading">Loading photos…</div>`;
      sec.appendChild(grid);

      const list = document.createElement('ol');
      list.className = 'attr-key-list';
      buildAttractionKey(list, d.attractions);
      sec.appendChild(list);

      // Lazy-build mosaic when day section is near viewport
      const mosaicObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          if (grid.dataset.initialised === 'true') return;
          grid.dataset.initialised = 'true';
          buildMosaic(grid, d.attractions);
          mosaicObs.unobserve(grid);
        });
      }, { rootMargin: '500px 0px' });
      mosaicObs.observe(grid);
    }

    // Where to stay — Airbnb primary
    const stays = (E.stays && E.stays[d.num]) || [];
    const hotels = d.hotels || [];
    if (stays.length || hotels.length) {
      const lab = document.createElement('h4');
      lab.className = 'day-section-label';
      lab.textContent = 'Where to stay';
      sec.appendChild(lab);

      if (d.checkin && d.checkout) {
        const meta = document.createElement('p');
        meta.className = 'stay-meta';
        meta.innerHTML = `
          <span class="stay-meta-dates">${fmtDate(d.checkin)} → ${fmtDate(d.checkout)}</span>
          <span class="stay-meta-sep">·</span>
          <span class="stay-meta-party">${P.label || `${P.adults} guests · 1 room · max ${P.currency} ${P.priceMax}/night`}</span>`;
        sec.appendChild(meta);
      }

      if (stays.length) {
        const stayGrid = document.createElement('div');
        stayGrid.className = 'stays-grid';
        stays.forEach(s => stayGrid.appendChild(stayCard(s)));
        sec.appendChild(stayGrid);
      }

      if (hotels.length) {
        const details = document.createElement('details');
        details.className = 'hotels-also';
        const sum = document.createElement('summary');
        sum.innerHTML = `Also nearby — <strong>${hotels.length} named hotel${hotels.length === 1 ? '' : 's'}</strong> from the original itinerary`;
        details.appendChild(sum);
        const strip = document.createElement('div');
        strip.className = 'hotels-strip';
        hotels.forEach(h => strip.appendChild(hotelMini(h, d.checkin, d.checkout)));
        details.appendChild(strip);
        sec.appendChild(details);
      }
    }

    // Eat & drink
    if (d.restaurants && d.restaurants.length) {
      const lab = document.createElement('h4');
      lab.className = 'day-section-label';
      lab.textContent = 'Eat & drink';
      sec.appendChild(lab);
      const grid = document.createElement('div');
      grid.className = 'restaurants-strip';
      d.restaurants.forEach(r => grid.appendChild(restaurantCard(r)));
      sec.appendChild(grid);
    }

    return sec;
  }

  const dayList = document.getElementById('day-list');
  T.days.forEach(d => dayList.appendChild(buildDay(d)));

  /* ===================================================================
     BOOKINGS GUIDE — every stop, every option, in one place
     =================================================================== */
  function bookingsLocale(d) {
    return d.overnight.split(/[—\/,]/)[0].trim();
  }
  function nightsBetween(ci, co) {
    if (!ci || !co) return 0;
    const a = new Date(ci + 'T00:00:00Z'), b = new Date(co + 'T00:00:00Z');
    return Math.round((b - a) / 86400000);
  }
  function buildBookingGuide() {
    const grid = document.getElementById('bookings-grid');
    if (!grid) return;
    T.days.filter(d => d.checkin && d.checkout).forEach(d => {
      const loc = bookingsLocale(d);
      const stays = (E.stays && E.stays[d.num]) || [];
      const isBooked = !!d.booked;
      const isPartial = !!d.partial;
      const nights = nightsBetween(d.checkin, d.checkout);

      const datesInner = `
        <div class="bk-head-text">
          <h3 class="bk-title">${loc}</h3>
          <p class="bk-dates">
            <span class="bk-dates-range">${fmtDate(d.checkin)} → ${fmtDate(d.checkout)}</span>
            <span class="bk-dates-sep">·</span>
            <span class="bk-nights">${nights} night${nights === 1 ? '' : 's'}</span>
          </p>
        </div>`;

      const searchRow = `
        <div class="bk-search-row">
          <a class="bk-search-btn bk-search-airbnb" href="${airbnbSearch(loc, d.checkin, d.checkout)}" target="_blank" rel="noopener">
            Search Airbnb<small>${nights} night${nights === 1 ? '' : 's'}, 3 adults, ≤£250</small>
          </a>
          <a class="bk-search-btn bk-search-booking" href="${bookingSearch(loc, d.checkin, d.checkout)}" target="_blank" rel="noopener">
            Search Booking.com<small>${nights} night${nights === 1 ? '' : 's'}, 3 adults, ≤£250</small>
          </a>
        </div>`;

      // Hotels block
      let hotelsBlock = '';
      if (d.hotels && d.hotels.length) {
        const rows = d.hotels.map(h => `
          <tr>
            <td class="bk-prop-name">${h.name}</td>
            <td class="bk-prop-style">${h.style}</td>
            <td class="bk-prop-price">${h.price}</td>
            <td class="bk-prop-link"><a href="${h.url}" target="_blank" rel="noopener">Book →</a></td>
          </tr>`).join('');
        hotelsBlock = `
          <div class="bk-block">
            <h4 class="bk-block-title">Hotels</h4>
            <div class="bk-table-wrap">
              <table class="bk-table">
                <thead><tr><th>Name</th><th>Style</th><th>Per night</th><th></th></tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>`;
      }

      // B&Bs / unique stays block (exclude airbnb-area; that's covered by the Airbnb button above)
      const bnbs = stays.filter(s => s.type !== 'airbnb-area');
      let bnbsBlock = '';
      if (bnbs.length) {
        const rows = bnbs.map(s => `
          <tr>
            <td class="bk-prop-name">${s.title}</td>
            <td class="bk-prop-style">${s.why || ''}</td>
            <td class="bk-prop-price">${s.price || ''}</td>
            <td class="bk-prop-link"><a href="${s.url}" target="_blank" rel="noopener">Book →</a></td>
          </tr>`).join('');
        bnbsBlock = `
          <div class="bk-block">
            <h4 class="bk-block-title">B&amp;Bs &amp; unique stays</h4>
            <div class="bk-table-wrap">
              <table class="bk-table">
                <thead><tr><th>Name</th><th>Notes</th><th>Per night</th><th></th></tr></thead>
                <tbody>${rows}</tbody>
              </table>
            </div>
          </div>`;
      }

      const body = searchRow + hotelsBlock + bnbsBlock;

      if (isBooked) {
        // Booked stops: green badge + collapsed by default (options tucked inside)
        const details = document.createElement('details');
        details.className = 'bk-stop bk-stop-confirmed';
        details.innerHTML = `
          <summary class="bk-summary">
            ${datesInner}
            <span class="bk-status bk-status-done">✓ Booked</span>
            <span class="bk-expand-hint">options</span>
          </summary>
          <div class="bk-details-body">${body}</div>`;
        grid.appendChild(details);
      } else {
        const card = document.createElement('article');
        card.className = 'bk-stop' + (isPartial ? ' bk-stop-partial' : '');
        const statusBadge = isPartial
          ? `<span class="bk-status bk-status-partial">◐ Part-booked</span>`
          : `<span class="bk-status bk-status-todo">To book</span>`;
        const noteBlock = (isPartial && d.partialNote)
          ? `<p class="bk-partial-note">${d.partialNote}</p>`
          : '';
        card.innerHTML = `
          <header class="bk-head">
            ${datesInner}
            ${statusBadge}
          </header>
          ${noteBlock}
          ${body}`;
        grid.appendChild(card);
      }
    });
  }
  buildBookingGuide();

  /* ---------- FERRY & SKYE DAY-TRIP LOGISTICS ---------- */
  function buildFerry() {
    const F = T.ferry;
    if (!F) return;
    const titleEl = document.getElementById('ferry-title');
    const ledeEl = document.getElementById('ferry-lede');
    const panel = document.getElementById('ferry-panel');
    if (!panel) return;
    if (titleEl) titleEl.textContent = F.title;
    if (ledeEl) ledeEl.textContent = F.lede;

    const steps = (F.steps || []).map(s => `
      <li class="ferry-step">
        <span class="ferry-step-n">${s.n}</span>
        <div>
          <h4 class="ferry-step-title">${s.title}</h4>
          <p class="ferry-step-body">${s.body}</p>
        </div>
      </li>`).join('');

    const fares = (F.fares || []).map(f => `
      <tr>
        <td class="ferry-fare-who">${f.who}</td>
        <td class="ferry-fare-num">${f.single}</td>
        <td class="ferry-fare-num">${f.ret}</td>
      </tr>`).join('');

    const sched = (F.schedule || []).map(s => `
      <tr>
        <td class="ferry-sched-day">${s.day}</td>
        <td>${s.offRaasay}</td>
        <td>${s.backToRaasay}</td>
      </tr>`).join('');

    const tips = (F.tips || []).map(t => `<li>${t}</li>`).join('');

    const bookings = (F.bookings || []).map(b => `
      <tr>
        <td class="ferry-bk-ref">${b.ref}</td>
        <td class="ferry-bk-route">${b.route}</td>
        <td class="ferry-bk-date">${b.date}</td>
        <td class="ferry-bk-note">${b.note}</td>
        <td class="ferry-bk-who">${b.who}</td>
      </tr>`).join('');

    const bookingsBlock = (F.bookings && F.bookings.length) ? `
      <div class="ferry-block ferry-block-full">
        <h4 class="ferry-block-title">Ferry crossings to book — Sconser ⇄ Raasay</h4>
        <div class="ferry-table-wrap">
          <table class="ferry-table">
            <thead><tr><th>Ret.</th><th>Route</th><th>When</th><th>What it's for</th><th>Tickets</th></tr></thead>
            <tbody>${bookings}</tbody>
          </table>
        </div>
        <p class="ferry-fine">${F.bookingsNote || ''}</p>
        <a class="bk-search-btn ferry-book-btn" href="${F.ticketingUrl || F.bookingUrl}" target="_blank" rel="noopener">
          Book crossings on CalMac<small>ticketing.calmac.co.uk · Turn Up &amp; Go route</small>
        </a>
      </div>` : '';

    panel.innerHTML = `
      <div class="ferry-operator">
        <span>${F.operator}</span>
        <span class="ferry-cta-row">
          <a class="chip chip-site" href="${F.ticketingUrl || F.bookingUrl}" target="_blank" rel="noopener">Book tickets ↗</a>
          <a class="chip" href="${F.bookingUrl}" target="_blank" rel="noopener">Route info ↗</a>
          <a class="chip" href="${F.timetableUrl}" target="_blank" rel="noopener">Timetable PDF ↗</a>
        </span>
      </div>

      <ol class="ferry-steps">${steps}</ol>

      <div class="ferry-tables">
        <div class="ferry-block">
          <h4 class="ferry-block-title">Fares — cross on foot, leave the car at Sconser</h4>
          <div class="ferry-table-wrap">
            <table class="ferry-table">
              <thead><tr><th>Ticket</th><th>Single</th><th>Return</th></tr></thead>
              <tbody>${fares}</tbody>
            </table>
          </div>
          <p class="ferry-fine">${F.faresNote}</p>
        </div>

        <div class="ferry-block">
          <h4 class="ferry-block-title">Sailings — plan your Skye day around these</h4>
          <div class="ferry-table-wrap">
            <table class="ferry-table">
              <thead><tr><th>Day</th><th>Off Raasay (to your car)</th><th>Back to Raasay</th></tr></thead>
              <tbody>${sched}</tbody>
            </table>
          </div>
          <ul class="ferry-tips">${tips}</ul>
        </div>
      </div>

      ${bookingsBlock}`;
  }
  buildFerry();

  /* ---------- PRACTICAL NOTES (unchanged) ---------- */
  function buildPractical() {
    const g = document.getElementById('practical-grid');
    T.practical.forEach(n => {
      const card = document.createElement('div');
      card.className = 'practical-card';
      card.innerHTML = `<h4 class="practical-title">${n.title}</h4><p class="practical-body">${n.body}</p>`;
      g.appendChild(card);
    });
    const cl = document.getElementById('restaurant-checklist');
    T.restaurantsToBook.forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div><span class="rl-name">${r.name}</span><span class="rl-when">${r.when}</span></div>
        <a href="${r.url}" target="_blank" rel="noopener">Book →</a>`;
      cl.appendChild(li);
    });
  }
  buildPractical();
})();
