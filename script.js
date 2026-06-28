/* =========================================================================
   Scotland Grand Tour — Renderer
   ========================================================================= */

(function () {
  const T = window.TRIP;
  if (!T) return;

  /* ---------- url helpers (external sources) ---------- */
  const enc = encodeURIComponent;
  const tripadvisorSearch = q => `https://www.tripadvisor.com/Search?q=${enc(q)}`;
  const bookingSearch     = q => `https://www.booking.com/searchresults.html?ss=${enc(q)}`;
  const airbnbSearch      = loc => `https://www.airbnb.com/s/${enc(loc)}/homes`;
  const wikiPage          = title => `https://en.wikipedia.org/wiki/${title}`;

  /* ---------- Wikipedia image fetcher with cache ---------- */
  const imageCache = {};
  async function fetchWikiImage(title) {
    if (!title) return null;
    if (imageCache[title] !== undefined) return imageCache[title];
    try {
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`, {
        headers: { 'Accept': 'application/json' }
      });
      if (!res.ok) { imageCache[title] = null; return null; }
      const data = await res.json();
      const src = (data.originalimage && data.originalimage.source)
               || (data.thumbnail && data.thumbnail.source)
               || null;
      imageCache[title] = src;
      return src;
    } catch (e) {
      imageCache[title] = null;
      return null;
    }
  }
  function lazyLoadImage(imgEl, wikiTitle, fallback) {
    if (!imgEl) return;
    fetchWikiImage(wikiTitle).then(src => {
      if (src) {
        imgEl.src = src;
        imgEl.style.opacity = '0';
        imgEl.onload = () => { imgEl.style.transition = 'opacity .6s ease'; imgEl.style.opacity = '1'; };
      } else if (fallback) {
        fallback();
      }
    });
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

  /* ---------- ILLUSTRATED SVG MAP ---------- */
  function buildIllustratedMap() {
    const stops = T.route;
    // Project lat/lng into a stylised 1100x700 illustration canvas.
    // Use a vertical-only stretch so Scotland reads tall; Oxford at the very bottom.
    const W = 1100, H = 720;
    const lats = stops.map(s => s.lat);
    const lngs = stops.map(s => s.lng);
    const latMin = Math.min(...lats), latMax = Math.max(...lats);
    const lngMin = Math.min(...lngs), lngMax = Math.max(...lngs);
    const pad = 90;
    const project = (lat, lng) => {
      const x = pad + ((lng - lngMin) / (lngMax - lngMin)) * (W - 2*pad);
      const y = pad + ((latMax - lat) / (latMax - latMin)) * (H - 2*pad - 60);
      return [x, y];
    };

    const points = stops.map(s => ({ ...s, xy: project(s.lat, s.lng) }));

    // Curving route path (quadratic between consecutive pins)
    let pathD = '';
    points.forEach((p, i) => {
      const [x, y] = p.xy;
      if (i === 0) pathD += `M ${x} ${y}`;
      else {
        const [px, py] = points[i-1].xy;
        const mx = (px + x) / 2;
        const my = (py + y) / 2 - 14;
        pathD += ` Q ${mx} ${my} ${x} ${y}`;
      }
    });

    // Stylised coastline scribbles for west/north
    const coast = `
      <path class="coast" d="M 120 540 Q 80 470 110 410 Q 70 330 130 270 Q 100 200 160 150 Q 200 110 270 100 Q 360 90 430 130" />
      <path class="coast" d="M 800 540 Q 870 480 860 410 Q 900 340 870 270 Q 920 210 880 150" />
      <path class="coast" d="M 250 600 Q 360 620 470 600 Q 600 590 710 600" />
    `;

    const compass = `
      <g class="compass" transform="translate(990,90)">
        <circle r="22" fill="none" stroke="currentColor" stroke-width="1"/>
        <path d="M 0 -18 L 4 0 L 0 18 L -4 0 Z" />
        <text x="0" y="-26" text-anchor="middle" fill="currentColor" style="font: italic 11px Fraunces, serif">N</text>
      </g>
    `;

    const pinSvg = points.map((p, i) => {
      const [x, y] = p.xy;
      const isHandover = p.label === 'Oxford';
      const fill = isHandover ? 'var(--whisky)' : 'var(--heather)';
      return `
        <g class="pin" data-day="${p.day}" style="cursor:pointer" transform="translate(${x},${y})">
          <circle class="pin-circle" r="14" style="fill:${fill}" />
          <text class="pin-number" text-anchor="middle" dy="4">${i + 1}</text>
          <text class="pin-label" text-anchor="${x > W*0.7 ? 'end' : 'start'}" x="${x > W*0.7 ? -20 : 20}" y="-2">${p.label}</text>
          <text class="pin-nights" text-anchor="${x > W*0.7 ? 'end' : 'start'}" x="${x > W*0.7 ? -20 : 20}" y="14">${p.nights === 'drop-off' ? 'Drop-off' : 'Night ' + p.nights}</text>
        </g>
      `;
    }).join('');

    const detourSvg = T.detours.map(d => {
      const [x, y] = project(d.lat, d.lng);
      return `<g class="detour" transform="translate(${x},${y})">
        <circle r="4" fill="var(--whisky)" stroke="var(--cream)" stroke-width="1.5"/>
        <text class="pin-nights" text-anchor="start" x="8" y="3">${d.label}</text>
      </g>`;
    }).join('');

    const svg = `
      <svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img">
        <rect width="${W}" height="${H}" fill="var(--cream)" />
        <g opacity=".5">${coast}</g>
        <g>${detourSvg}</g>
        <path class="route-line" d="${pathD}" />
        <g>${pinSvg}</g>
        ${compass}
        <text x="60" y="60" class="title-serif">Edinburgh → Oxford</text>
        <text x="60" y="82" class="meta">14 days · ~1,100 miles · 12 driving days</text>
        <g transform="translate(60, ${H - 60})">
          <circle r="6" fill="var(--heather)"/>
          <text x="14" y="4" class="legend">Overnight stop</text>
          <circle cx="160" r="4" fill="var(--whisky)"/>
          <text x="170" y="4" class="legend">Key day-trip waypoint</text>
        </g>
      </svg>
    `;
    document.getElementById('illustrated-map').innerHTML = svg;

    // Make pins clickable -> scroll to day
    document.querySelectorAll('.illustrated-map .pin').forEach(g => {
      g.addEventListener('click', () => {
        const day = g.getAttribute('data-day');
        const el = document.getElementById(`day-${day}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }
  buildIllustratedMap();

  /* ---------- LEAFLET INTERACTIVE MAP ---------- */
  function buildLeaflet() {
    if (!window.L) return;
    const map = L.map('leaflet', {
      scrollWheelZoom: false,
      attributionControl: true
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const latlngs = T.route.map(s => [s.lat, s.lng]);
    L.polyline(latlngs, {
      color: '#6B4E8C', weight: 3, opacity: 0.85, dashArray: '6 8', lineCap: 'round'
    }).addTo(map);

    T.route.forEach((s, i) => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="route-pin">${i + 1}</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      const m = L.marker([s.lat, s.lng], { icon }).addTo(map);
      m.bindPopup(
        `<b>${s.label}</b>${s.nights === 'drop-off' ? 'Drop-off' : 'Night ' + s.nights}<br/>
         <a href="#day-${s.day}">Jump to day ${s.day} →</a>`
      );
    });

    T.detours.forEach(d => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="route-pin route-pin-detour" title="${d.label}"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
      });
      L.marker([d.lat, d.lng], { icon }).addTo(map).bindPopup(`<b>${d.label}</b>Day ${d.day}`);
    });

    const bounds = L.latLngBounds(latlngs);
    map.fitBounds(bounds, { padding: [40, 40] });

    // Hook popup links to smooth-scroll
    map.on('popupopen', e => {
      const link = e.popup.getElement().querySelector('a');
      if (link) {
        link.addEventListener('click', ev => {
          ev.preventDefault();
          const id = link.getAttribute('href');
          const el = document.querySelector(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  }
  buildLeaflet();

  /* ---------- QUICK-REFERENCE TABLE ---------- */
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
    html += `</tbody>`;
    t.innerHTML = html;
  }
  buildQref();

  /* ---------- PRIORITY BOOKINGS ---------- */
  function buildPriority() {
    const c = document.getElementById('priority-grid');
    T.priorityBookings.forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a class="priority-card" href="${p.url}" target="_blank" rel="noopener">
          <div class="priority-rank" data-rank="${p.rank}">Priority ${p.rank}</div>
          <h3 class="priority-what">${p.what}</h3>
          <p class="priority-why">${p.why}</p>
          <span class="priority-link">Book direct</span>
        </a>`;
      c.appendChild(li);
    });
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

  /* ---------- DAY BY DAY ---------- */
  function attractionCard(a) {
    const card = document.createElement('article');
    card.className = 'attr-card';

    const imgWrap = document.createElement('div');
    imgWrap.className = 'attr-img';
    const placeholder = document.createElement('div');
    placeholder.className = 'attr-img-placeholder';
    placeholder.textContent = a.name;
    imgWrap.appendChild(placeholder);

    if (a.wiki) {
      const img = document.createElement('img');
      img.alt = a.name; img.loading = 'lazy';
      imgWrap.appendChild(img);
      lazyLoadImage(img, a.wiki, () => { img.remove(); });
    }
    card.appendChild(imgWrap);

    const body = document.createElement('div');
    body.className = 'attr-body';

    const links = [];
    links.push(`<a class="chip chip-ta" href="${tripadvisorSearch(a.name + ' ' + (a.locale || ''))}" target="_blank" rel="noopener">TripAdvisor</a>`);
    if (a.url) links.push(`<a class="chip chip-site" href="${a.url}" target="_blank" rel="noopener">Official site</a>`);
    if (a.wiki) links.push(`<a class="chip" href="${wikiPage(a.wiki)}" target="_blank" rel="noopener">Wikipedia</a>`);

    body.innerHTML = `
      <h4 class="attr-name">${a.name}</h4>
      <p class="attr-desc">${a.desc}</p>
      <div class="attr-links">${links.join('')}</div>`;
    card.appendChild(body);

    return card;
  }

  function hotelCard(h) {
    const card = document.createElement('article');
    card.className = 'hotel-card';
    const taQ = `${h.name} ${h.locale || ''}`.trim();
    const bkQ = `${h.name} ${h.locale || ''}`.trim();
    const airQ = h.locale || h.name;

    card.innerHTML = `
      <p class="hotel-locale">${h.locale || ''}</p>
      <h4 class="hotel-name">${h.name}</h4>
      <p class="hotel-style">${h.style}</p>
      <div class="hotel-price-row">
        <span class="hotel-price-label">Per night</span>
        <span class="hotel-price-value">${h.price}</span>
      </div>
      <div class="hotel-links">
        <a class="chip chip-ta" href="${tripadvisorSearch(taQ)}" target="_blank" rel="noopener">TripAdvisor</a>
        <a class="chip chip-bk" href="${bookingSearch(bkQ)}" target="_blank" rel="noopener">Booking.com</a>
        <a class="chip chip-airbnb" href="${airbnbSearch(airQ)}" target="_blank" rel="noopener">Airbnb area</a>
        ${h.url ? `<a class="chip chip-site" href="${h.url}" target="_blank" rel="noopener">Hotel site</a>` : ''}
      </div>`;
    return card;
  }

  function restaurantCard(r) {
    const a = document.createElement('a');
    a.className = 'rest-card';
    a.href = r.url || tripadvisorSearch(r.name);
    a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `<h4 class="rest-name">${r.name}</h4><p class="rest-note">${r.note || ''}</p>`;
    return a;
  }

  function buildDay(d) {
    const sec = document.createElement('article');
    sec.className = 'day';
    sec.id = `day-${d.num}`;

    // Head
    const head = document.createElement('header');
    head.className = 'day-head';

    const text = document.createElement('div');
    text.className = 'day-head-text';
    text.innerHTML = `
      <div class="day-num-row">
        <span class="day-num">Day ${String(d.num).padStart(2,'0')}</span>
        <span class="day-date">${d.weekday} · ${d.date}</span>
      </div>
      <h3 class="day-title">${d.title}</h3>
      <p class="day-blurb">${d.blurb}</p>`;
    head.appendChild(text);

    const hero = document.createElement('div');
    hero.className = 'day-hero';
    const heroImg = document.createElement('img');
    heroImg.alt = d.title; heroImg.loading = 'lazy';
    hero.appendChild(heroImg);
    const heroPlace = document.createElement('div');
    heroPlace.className = 'day-hero-placeholder';
    heroPlace.textContent = d.overnight;
    hero.appendChild(heroPlace);
    lazyLoadImage(heroImg, d.hero, () => { heroImg.remove(); });
    head.appendChild(hero);

    sec.appendChild(head);

    // Drive strip
    const strip = document.createElement('div');
    strip.className = 'drive-strip';
    strip.innerHTML = `
      <div class="drive-stat"><div class="drive-stat-label">Route</div><div class="drive-stat-value">${d.route}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Distance</div><div class="drive-stat-value">${d.miles} ${d.miles !== '—' ? 'mi' : ''}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Drive time</div><div class="drive-stat-value">${d.drive}</div></div>
      <div class="drive-stat"><div class="drive-stat-label">Overnight</div><div class="drive-stat-value">${d.overnight}</div></div>`;
    sec.appendChild(strip);

    // Attractions
    if (d.attractions && d.attractions.length) {
      const label = document.createElement('h4');
      label.className = 'day-section-label';
      label.textContent = 'See & do';
      sec.appendChild(label);
      const grid = document.createElement('div');
      grid.className = 'attractions-grid';
      d.attractions.forEach(a => grid.appendChild(attractionCard(a)));
      sec.appendChild(grid);
    }

    // Hotels
    if (d.hotels && d.hotels.length) {
      const label = document.createElement('h4');
      label.className = 'day-section-label';
      label.textContent = 'Where to stay';
      sec.appendChild(label);
      const grid = document.createElement('div');
      grid.className = 'hotels-grid';
      d.hotels.forEach(h => grid.appendChild(hotelCard(h)));
      sec.appendChild(grid);
    }

    // Restaurants
    if (d.restaurants && d.restaurants.length) {
      const label = document.createElement('h4');
      label.className = 'day-section-label';
      label.textContent = 'Eat & drink';
      sec.appendChild(label);
      const grid = document.createElement('div');
      grid.className = 'restaurants-strip';
      d.restaurants.forEach(r => grid.appendChild(restaurantCard(r)));
      sec.appendChild(grid);
    }

    return sec;
  }

  const dayList = document.getElementById('day-list');
  T.days.forEach(d => dayList.appendChild(buildDay(d)));

  /* ---------- PRACTICAL NOTES ---------- */
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
        <div>
          <span class="rl-name">${r.name}</span>
          <span class="rl-when">${r.when}</span>
        </div>
        <a href="${r.url}" target="_blank" rel="noopener">Book →</a>`;
      cl.appendChild(li);
    });
  }
  buildPractical();
})();
