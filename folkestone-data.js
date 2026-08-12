/* ============================================================
   EAST KENT FROM FOLKESTONE · 11–14 Aug 2026
   Third itinerary, same engine/design as the Scotland & England pages.
   Based on the user's folkestone-itinerary.pdf. Public info only.
   Photos load from Wikipedia via each attraction's `wiki` slug.
   ============================================================ */
window.TRIP = {
  title: "East Kent from Folkestone",
  subtitle: "Four days of coast, castles and shingle — based in Folkestone",
  dates: "11–14 Aug 2026",
  travellers: "2 adults + 1 (age 15)",
  pickup: "Base: Folkestone (you're already staying here)",
  dropoff: "Out via Canterbury · Fri 14 Aug",

  stats: [
    { label: "Days", value: "4" },
    { label: "Base", value: "Folkestone" },
    { label: "Nights", value: "3" },
    { label: "Travellers", value: "2 + 1" }
  ],

  // Single base — Folkestone. All four days are day-trips out and back.
  route: [
    { lat: 51.0810, lng: 1.1660, label: "Folkestone", nights: "3", day: 1 }
  ],

  // Day-trip waypoints (small dots on the overview map).
  detours: [
    { lat: 51.1430, lng: 0.8720, label: "Ashford Outlet",  day: 1 },
    { lat: 50.9370, lng: 0.7930, label: "Camber Sands",    day: 1 },
    { lat: 50.9510, lng: 0.7370, label: "Rye",             day: 1 },
    { lat: 51.1390, lng: 1.3720, label: "South Foreland",  day: 2 },
    { lat: 51.2210, lng: 1.4050, label: "Deal",            day: 2 },
    { lat: 51.2020, lng: 1.4010, label: "Walmer",          day: 2 },
    { lat: 51.2930, lng: 1.3320, label: "Richborough",     day: 2 },
    { lat: 51.2750, lng: 1.3410, label: "Sandwich",        day: 2 },
    { lat: 51.0730, lng: 1.0840, label: "Hythe (railway)", day: 3 },
    { lat: 50.9130, lng: 0.9750, label: "Dungeness",       day: 3 },
    { lat: 51.2800, lng: 1.0830, label: "Canterbury",      day: 4 }
  ],

  practical: [
    { title: "🎟 English Heritage membership pays off", body: "A joint <strong>English Heritage membership (~£111)</strong> covers three of Wednesday's stops free — <strong>Deal Castle</strong>, <strong>Walmer Castle</strong> and <strong>Richborough Roman Fort</strong>. Note what it does <em>not</em> cover: <strong>South Foreland Lighthouse</strong> (National Trust) and <strong>Canterbury Cathedral</strong> (you pay at the door)." },
    { title: "Book the steam railway (Thursday)", body: "The <strong>Romney, Hythe &amp; Dymchurch Railway</strong> is a miniature steam line — <strong>book ahead</strong> for August. Board at Hythe, 10 minutes from Folkestone, and ride the full length to Dungeness." },
    { title: "Wednesday timing — Richborough closes 4pm", body: "Richborough Roman Fort <strong>closes at 4pm sharp</strong>, so leave Walmer by 3. And don't trust the satnav on the final approach to Richborough — follow the brown signs." },
    { title: "Parking", body: "Ashford Designer Outlet: ~£3 for four hours, number-plate recognition (no ticket). Camber Sands: main car parks £6/hour; <strong>Broomfield is free but has no toilets</strong>." },
    { title: "Spare-hour options", body: "If a day runs short: <strong>Samphire Hoe</strong> (15 min — a park built from Channel-Tunnel spoil beneath the cliffs), <strong>Whitstable</strong> (oysters and a west-facing sunset, 50 min), or <strong>Leeds Castle</strong> (40 min, right at the edge of range)." },
    { title: "Thursday swap option — Thanet", body: "Instead of Dungeness you could do <strong>Thanet</strong>: Ramsgate, Broadstairs, and Margate's <strong>Shell Grotto</strong> and <strong>Turner Contemporary</strong> — about 50 min each way." }
  ],

  restaurantsToBook: [
    { name: "Romney, Hythe & Dymchurch Railway", when: "Thu 13 Aug — book ahead", url: "https://www.rhdr.org.uk/" },
    { name: "Dinner in Rye", when: "Tue 11 Aug eve", url: "https://www.google.com/maps/search/?api=1&query=best%20pubs%20restaurants%20Rye%20East%20Sussex" },
    { name: "Dinner in Sandwich", when: "Wed 12 Aug eve", url: "https://www.google.com/maps/search/?api=1&query=restaurants%20Sandwich%20Kent" }
  ],

  days: [
    /* ---------------- DAY 1 — Tue 11 · Ashford, Camber Sands & Rye ---------------- */
    {
      num: 1, date: "Tue 11 Aug", weekday: "Tuesday",
      title: "Ashford outlet, Camber Sands & Rye",
      stay: { name: "Folkestone · your base (night 1 of 3)", lat: 51.0810, lng: 1.1660, mapUrl: "https://www.google.com/maps/search/?api=1&query=Folkestone%20Kent" },
      transport: "car",
      depart: "Shopping, sand and supper, all running west in one line. Outlet opens 10am; aim for the beach by early afternoon and Rye for dinner.",
      leg: "Folkestone → Ashford → Camber Sands → Rye",
      route: "By car", miles: "55", drive: "—",
      overnight: "Folkestone",
      blurb: "An easy first day heading west. Start at the Ashford Designer Outlet for 130+ brands under one roof, then out to Camber Sands — the only proper sandy, dune-backed beach on this coast — before finishing in Rye, a impossibly pretty hill town of cobbled lanes and good pubs. Eat there before the short drive back.",
      attractions: [
        { name: "Ashford Designer Outlet", seq: 1, lat: 51.1430, lng: 0.8720, wiki: null, desc: "Opens 10am, ~20 min from Folkestone. 130+ brands. Parking ~£3 for four hours — number-plate recognition, no ticket to display.", url: "https://www.ashforddesigneroutlet.com/", locale: "Ashford", enroute: true },
        { name: "Camber Sands", seq: 2, lat: 50.9370, lng: 0.7930, wiki: "Camber_Sands", desc: "~35 min on. Miles of golden sand and dunes — the only proper sandy beach on this stretch. Main car parks £6/hour; Broomfield is free but has no toilets. (~14:00)", locale: "East Sussex", enroute: true },
        { name: "Rye", seq: 3, lat: 50.9510, lng: 0.7370, wiki: "Rye,_East_Sussex", desc: "Ten minutes from the beach — cobbled Mermaid Street, the Ypres Tower, and the best pubs on this coast. Eat here before heading back. (~17:30)", locale: "East Sussex", enroute: true }
      ],
      restaurants: [
        { name: "Dinner in Rye", note: "Mermaid Street and the old town have the best pubs on the coast — The Mermaid Inn, The Standard, or a harbourside spot.", url: "https://www.google.com/maps/search/?api=1&query=best%20pubs%20restaurants%20Rye%20East%20Sussex" }
      ]
    },

    /* ---------------- DAY 2 — Wed 12 · Lighthouse, Deal, Walmer & Sandwich ---------------- */
    {
      num: 2, date: "Wed 12 Aug", weekday: "Wednesday",
      title: "Lighthouse, Deal, Walmer & Sandwich",
      stay: { name: "Folkestone · your base (night 2 of 3)", lat: 51.0810, lng: 1.1660, mapUrl: "https://www.google.com/maps/search/?api=1&query=Folkestone%20Kent" },
      transport: "car",
      depart: "A straight line north up the coast — three of today's castles are free on your English Heritage card. Watch the clock: Richborough closes 4pm sharp, so leave Walmer by 3.",
      leg: "Folkestone → St Margaret's → Deal → Walmer → Richborough → Sandwich",
      route: "By car", miles: "45", drive: "—",
      overnight: "Folkestone",
      blurb: "Kent's castle coast. Begin at the clifftop South Foreland Lighthouse above the white cliffs, then two of Henry VIII's Tudor artillery forts — Deal and Walmer — and the Roman fort at Richborough where Britain's Roman story begins. End in Sandwich, a perfectly preserved medieval town that keeps no opening hours.",
      attractions: [
        { name: "South Foreland Lighthouse", seq: 1, lat: 51.1390, lng: 1.3720, wiki: "South_Foreland_Lighthouse", desc: "Opens 11am. Park in St Margaret's at Cliffe for a shorter walk in along the white cliffs. National Trust — NOT covered by your English Heritage card. (~11:00)", url: "https://www.nationaltrust.org.uk/visit/kent/the-white-cliffs-of-dover", locale: "St Margaret's at Cliffe", enroute: true },
        { name: "Deal Castle", seq: 2, lat: 51.2210, lng: 1.4050, wiki: "Deal_Castle", desc: "Free with English Heritage. Henry VIII's Tudor gun fort, shaped like a Tudor rose — one of the finest artillery castles in the country. (~12:45)", url: "https://www.english-heritage.org.uk/visit/places/deal-castle/", locale: "Deal", enroute: true },
        { name: "Walmer Castle & Gardens", seq: 3, lat: 51.2020, lng: 1.4010, wiki: "Walmer_Castle", desc: "Free with EH. Lunch at the tearoom; the gardens are the real draw. The Duke of Wellington died here — his rooms are preserved. (~13:45)", url: "https://www.english-heritage.org.uk/visit/places/walmer-castle-and-gardens/", locale: "Walmer", enroute: true },
        { name: "Richborough Roman Fort", seq: 4, lat: 51.2930, lng: 1.3320, wiki: "Richborough_Castle", desc: "Free with EH. Where the Romans landed in AD 43 — huge walls in the fields. Closes 4pm sharp; leave Walmer by 3, and don't trust the satnav on the final approach. (~15:15)", url: "https://www.english-heritage.org.uk/visit/places/richborough-roman-fort/", locale: "Sandwich", enroute: true },
        { name: "Sandwich", seq: 5, lat: 51.2750, lng: 1.3410, wiki: "Sandwich,_Kent", desc: "Last, because the town needs no ticket and keeps no hours — the medieval Strand, the quay, and dinner. (~16:15)", locale: "Kent", enroute: true }
      ],
      restaurants: [
        { name: "Dinner in Sandwich", note: "The Strand and quay have riverside pubs and restaurants — a relaxed end after a castle-heavy day.", url: "https://www.google.com/maps/search/?api=1&query=restaurants%20Sandwich%20Kent" }
      ]
    },

    /* ---------------- DAY 3 — Thu 13 · Romney Marsh & Dungeness ---------------- */
    {
      num: 3, date: "Thu 13 Aug", weekday: "Thursday",
      title: "Romney Marsh & Dungeness",
      stay: { name: "Folkestone · your base (night 3 of 3)", lat: 51.0810, lng: 1.1660, mapUrl: "https://www.google.com/maps/search/?api=1&query=Folkestone%20Kent" },
      transport: "car",
      depart: "Board the miniature steam train at Hythe (10 min away) — book ahead — and ride it out to the shingle desert of Dungeness. Back to the Harbour Arm for supper.",
      leg: "Hythe → Dungeness → Prospect Cottage → Folkestone Harbour Arm",
      route: "By car + steam train", miles: "35", drive: "—",
      overnight: "Folkestone",
      blurb: "The strangest, most beautiful day. Ride the little Romney, Hythe & Dymchurch steam railway across the marsh to Dungeness — a vast shingle headland with a lighthouse, a power station and Britain's only desert. Derek Jarman's Prospect Cottage and its shingle garden are here too. Back to Folkestone's Harbour Arm for street food and music as the sun goes down. (Swap option: Thanet — Margate's Shell Grotto & Turner Contemporary, ~50 min each way.)",
      attractions: [
        { name: "Romney, Hythe & Dymchurch Railway", seq: 1, lat: 51.0730, lng: 1.0840, wiki: "Romney,_Hythe_and_Dymchurch_Railway", desc: "Board at Hythe, 10 min from Folkestone — a one-third-size steam railway that runs the full length of the marsh to Dungeness. Book ahead for August. (~10:00)", url: "https://www.rhdr.org.uk/", locale: "Hythe", bookAhead: true, bookNote: "Book tickets online in advance — August sailings of the steam service fill up." },
        { name: "Dungeness Lighthouse", seq: 2, lat: 50.9130, lng: 0.9750, wiki: "Dungeness_Lighthouse", desc: "160+ steps to the top, for the power station, the shingle desert, and France on a clear day. (~12:00)", url: "https://www.dungenesslighthouse.com/", locale: "Dungeness", enroute: true },
        { name: "Prospect Cottage", seq: 3, lat: 50.9200, lng: 0.9720, wiki: "Prospect_Cottage", desc: "Derek Jarman's black-and-yellow fisherman's cottage and famous shingle garden. Exterior free to view; smoked fish and a good pub ten minutes away. (~13:30)", locale: "Dungeness", enroute: true },
        { name: "Folkestone Harbour Arm", seq: 4, lat: 51.0790, lng: 1.1880, wiki: "Folkestone", desc: "Back for supper — food stalls, live music, and the lighthouse bar at the end of the old harbour pier. (~18:00)", url: "https://www.folkestoneharbourarm.co.uk/", locale: "Folkestone" }
      ],
      restaurants: [
        { name: "Folkestone Harbour Arm", note: "A pier of food stalls, bars and music — the lighthouse champagne bar at the very end is the spot for sunset.", url: "https://www.folkestoneharbourarm.co.uk/" }
      ]
    },

    /* ---------------- DAY 4 — Fri 14 · Folkestone, then Canterbury on the way out ---------------- */
    {
      num: 4, date: "Fri 14 Aug", weekday: "Friday",
      title: "Folkestone, then Canterbury on the way out",
      transport: "car",
      depart: "One last Folkestone morning, then Canterbury on the way out — it closes at 4pm and isn't on the EH card, so you'll pay here.",
      leg: "Folkestone (Creative Quarter, The Leas) → Canterbury",
      route: "By car", miles: "35", drive: "—",
      overnight: "Folkestone",
      blurb: "A gentle finish. Wander the Old High Street's Creative Quarter — galleries and independents up a steep cobbled lane, with Docker sourdough from the bakery — then the clifftop Leas promenade with its restored Victorian water-lift. Head north to Canterbury and its magnificent cathedral on the way out of Kent.",
      attractions: [
        { name: "Old High Street / Creative Quarter", seq: 1, lat: 51.0810, lng: 1.1790, wiki: "Folkestone", desc: "Galleries and independent shops up a steep cobbled lane — pick up Docker bread from the bakery. (~09:00)", url: "https://www.creativefolkestone.org.uk/", locale: "Folkestone", enroute: true },
        { name: "The Leas", seq: 2, lat: 51.0790, lng: 1.1720, wiki: null, desc: "A grand clifftop promenade with a restored Victorian water-lift down to the beach. (~10:00)", locale: "Folkestone", enroute: true },
        { name: "Canterbury Cathedral", seq: 3, lat: 51.2800, lng: 1.0830, wiki: "Canterbury_Cathedral", desc: "30 min north, on the way out. One of England's greatest cathedrals — closes 4pm and isn't EH, so you pay here. Westgate Gardens nearby if there's time. (~11:30)", url: "https://www.canterbury-cathedral.org/", locale: "Canterbury", enroute: true }
      ],
      restaurants: [
        { name: "Lunch in Canterbury", note: "The lanes around the cathedral are full of cafés and pubs for a last Kentish lunch before you move on.", url: "https://www.google.com/maps/search/?api=1&query=restaurants%20near%20Canterbury%20Cathedral" }
      ]
    }
  ]
};
