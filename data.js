// Scotland Grand Tour — Trip Data (v7: recover the lost Highlands)
// 14 calendar days · 13 overnights · 8 Scotland stops · ~1,150 miles
// Skye is done as day-trips from Raasay (no Skye accommodation needed).
// The freed nights recover Bealach na Bà, Torridon, Fort William + Glencoe.

window.TRIP = {
  title: "Scotland Grand Tour",
  subtitle: "Edinburgh to Oxford via Loch Ness, Raasay, Skye, Torridon and Glencoe",
  dates: "Monday 20 July – Sunday 2 August 2026",
  travellers: "2 adults + 1 teen (15)",
  pickup: "Edinburgh Airport",
  dropoff: "Oxford city centre",

  party: {
    adults: 3,
    children: 0,
    rooms: 1,
    priceMax: 250,
    currency: "GBP",
    label: "2 adults + 1 teen (15) · 1 room · under £250/night"
  },

  stats: [
    { label: "Days", value: "14" },
    { label: "Overnight stops", value: "8" },
    { label: "Total miles", value: "~1,250" },
    { label: "Driving days", value: "10" }
  ],

  route: [
    { lat: 55.9533, lng: -3.1883, label: "Edinburgh",     nights: "1–2",   day: 1  },
    { lat: 56.7058, lng: -3.7290, label: "Pitlochry",     nights: "3",     day: 3  },
    { lat: 57.3315, lng: -4.4733, label: "Drumnadrochit", nights: "4–5",   day: 4  },
    { lat: 57.3700, lng: -6.0676, label: "Raasay",        nights: "6–8",   day: 6  },
    { lat: 57.5470, lng: -5.5100, label: "Torridon",      nights: "9",     day: 9  },
    { lat: 56.8198, lng: -5.1052, label: "Fort William",  nights: "10–12", day: 10 },
    { lat: 54.3807, lng: -2.9063, label: "Lake District", nights: "13",    day: 13 },
    { lat: 51.7520, lng: -1.2577, label: "Oxford",        nights: "drop-off", day: 14 }
  ],

  detours: [
    { lat: 55.8556, lng: -3.1601, label: "Rosslyn Chapel",      day: 2  },
    { lat: 55.9057, lng: -3.4360, label: "Jupiter Artland",     day: 2  },
    { lat: 56.5658, lng: -3.5900, label: "The Hermitage",       day: 3  },
    { lat: 56.6930, lng: -3.8760, label: "Queen's View",        day: 3  },
    { lat: 57.1200, lng: -3.6700, label: "Cairngorms NP",       day: 4  },
    { lat: 57.4776, lng: -4.0940, label: "Culloden",            day: 5  },
    { lat: 57.4730, lng: -4.0740, label: "Clava Cairns",        day: 5  },
    { lat: 57.3239, lng: -4.4426, label: "Urquhart Castle",     day: 5  },
    { lat: 57.1450, lng: -4.6790, label: "Fort Augustus",       day: 5  },
    { lat: 57.5747, lng: -4.0936, label: "Chanonry Point",      day: 5  },
    { lat: 57.2740, lng: -5.5161, label: "Eilean Donan",        day: 6  },
    { lat: 57.3236, lng: -6.1083, label: "Sconser ferry",       day: 6  },
    { lat: 57.6437, lng: -6.2680, label: "Quiraing",            day: 7  },
    { lat: 57.5070, lng: -6.1836, label: "Old Man of Storr",    day: 7  },
    { lat: 57.6083, lng: -6.1636, label: "Kilt Rock",           day: 7  },
    { lat: 57.5860, lng: -6.3560, label: "Fairy Glen",          day: 7  },
    { lat: 57.2493, lng: -6.2599, label: "Fairy Pools",         day: 8  },
    { lat: 57.4900, lng: -6.6210, label: "Coral Beaches",       day: 8  },
    { lat: 57.4490, lng: -6.5900, label: "Dunvegan Castle",     day: 8  },
    { lat: 57.4256, lng: -6.7876, label: "Neist Point",         day: 8  },
    { lat: 57.1450, lng: -6.1130, label: "Elgol",               day: 8  },
    { lat: 57.4200, lng: -5.7000, label: "Bealach na Bà",       day: 9  },
    { lat: 57.4344, lng: -5.8160, label: "Applecross",          day: 9  },
    { lat: 57.6100, lng: -5.3500, label: "Beinn Eighe",         day: 10 },
    { lat: 57.6900, lng: -5.4700, label: "Loch Maree",          day: 10 },
    { lat: 56.8728, lng: -5.4357, label: "Glenfinnan",          day: 11 },
    { lat: 57.0060, lng: -5.8280, label: "Mallaig",             day: 11 },
    { lat: 56.9600, lng: -5.8320, label: "Silver Sands of Morar", day: 11 },
    { lat: 56.8430, lng: -5.1030, label: "Neptune's Staircase", day: 11 },
    { lat: 56.7969, lng: -5.0037, label: "Ben Nevis",           day: 11 },
    { lat: 56.6813, lng: -5.1006, label: "Glencoe (Three Sisters)", day: 12 },
    { lat: 56.6164, lng: -5.0034, label: "Glen Etive",          day: 12 },
    { lat: 56.6000, lng: -4.7500, label: "Rannoch Moor",        day: 12 },
    { lat: 56.0959, lng: -4.6356, label: "Luss",                day: 13 }
  ],

  carRental: [
    { name: "Enterprise", note: "Depots at Edinburgh Airport and Oxford city centre. One-way fee typically £80–£150.", url: "https://www.enterprise.co.uk", recommended: true },
    { name: "Europcar",   note: "Same route coverage, competitive pricing.", url: "https://www.europcar.co.uk" },
    { name: "Rentalcars.com", note: "Compare all providers, one-way fees shown upfront.", url: "https://www.rentalcars.com" }
  ],

  // Pending items render first (numbered by urgency); booked items carry
  // done:true and are grouped at the end with a "Booked" badge, no specifics.
  priorityBookings: [
    { what: "Jacobite Steam Train",        dates: "Thu 30 Jul · Day 11 morning",         why: "Sells out months ahead in summer",                 url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { what: "Applecross Inn lunch",        dates: "Tue 28 Jul · Day 9 lunch",            why: "Famous pub, books up fast",                        url: "https://www.applecross.uk.com/inn/" },
    { what: "Elgol boat trip (optional)",  dates: "Mon 27 Jul · Day 8",                  why: "Loch Coruisk — small boats, limited slots",        url: "https://bellajane.co.uk/" },

    { what: "Isle of Raasay Distillery",   dates: "Sat 25 Jul → Tue 28 Jul · 3 nights",  why: "Borodale House at the distillery — your Skye base", url: "https://raasaydistillery.com/visit/borodale-house/", done: true },
    { what: "Pitlochry",                   dates: "Wed 22 Jul → Thu 23 Jul · 1 night",   why: "First Highland overnight",                         url: "https://www.rosemount-hotel.co.uk/b-and-b-pitlochry/", done: true },
    { what: "Drumnadrochit",               dates: "Thu 23 Jul → Sat 25 Jul · 2 nights",  why: "Loch Ness base",                                   url: "https://www.airbnb.com", done: true },
    { what: "Torridon (Ledgowan Lodge)",   dates: "Tue 28 Jul → Wed 29 Jul · 1 night",   why: "Four Poster + rollout bed, breakfast (Achnasheen)", url: "https://www.ledgowanlodge.co.uk/", done: true },
    { what: "Fort William",                dates: "Wed 29 Jul → Sat 1 Aug · 3 nights",   why: "Clan MacDuff (night 1) + Beinn Brèagha 2-bed house (nights 2–3)", url: "https://www.clanmacduff.co.uk/", done: true },
    { what: "Car rental",                  dates: "Mon 20 Jul → Sun 2 Aug",              why: "Enterprise — Edinburgh Airport pickup, Oxford drop-off", url: "https://www.enterprise.co.uk", done: true },
    { what: "CalMac Sconser⇄Raasay ferry", dates: "Round trip · Sat 25 + Tue 28 Jul",     why: "Foot round trip booked (3 adults); day-trip hops 26/27 are turn-up-and-go", url: "https://ticketing.calmac.co.uk/B2C-Calmac/#/desktop/step1/destinations/single", done: true },
    { what: "Lake District",               dates: "Sat 1 Aug → Sun 2 Aug · 1 night",     why: "The Waterhead / Lakehouse Rooms, Ambleside — lakeside", url: "https://www.englishlakes.co.uk/hotels/waterhead-hotel/", done: true },
    { what: "Edinburgh",                   dates: "Mon 20 Jul → Wed 22 Jul · 2 nights",  why: "Booked — property details to be added", url: "https://www.booking.com/searchresults.html?ss=Edinburgh", done: true }
  ],

  practical: [
    { title: "🎟 Pre-book these — they sell out", body: "Several stops need <strong>timed tickets booked online in advance</strong> (some sell out days ahead in peak summer): <strong>Edinburgh Castle</strong>, <strong>Rosslyn Chapel</strong> &amp; <strong>Jupiter Artland</strong> (Day 2); the <strong>Cairngorm funicular</strong> (Day 4); <strong>Urquhart Castle</strong> — book the timed slot AND a parking bay — plus the <strong>Loch Ness cruise</strong> &amp; <strong>Culloden</strong> (Day 5); <strong>Dunvegan Castle</strong> &amp; the <strong>Elgol / Loch Coruisk boat</strong> (Day 8). Look for the red 🎟 Book-ahead tag on those cards." },
    { title: "Leave the car on Skye", body: "Borodale is a 12-min walk from the Raasay pier and you tour Skye every day — so park the car at Sconser and cross as foot passengers (~£4 return vs ~£16 for the car). Confirm multi-day Sconser parking with CalMac / Borodale House, and ask Borodale about a luggage pickup at the pier." },
    { title: "Sconser ↔ Raasay ferry", body: "CalMac, 25-min crossing, ~9 sailings/day on weekdays (fewer on Sundays — first ~10am). As foot passengers you can turn up and go, but verify the timetable for your Skye day-trips at calmac.co.uk." },
    { title: "Fuel", body: "Fill up at every petrol station in the Highlands. Stations can be 30–40 miles apart and close by 6–7pm. Top up in Inverness, on Skye (Portree/Broadford), Lochcarron, and at Fort William." },
    { title: "Midges", body: "July and August are peak midge season. Buy Smidge spray on arrival (pharmacies and outdoor shops). Worst at dawn and dusk in still, humid air." },
    { title: "Bealach na Bà", body: "Day 9. Single-track with 20% gradients and tight hairpin bends. Manageable in a standard hire car at low speed. In poor conditions, take the coastal road via Lochcarron instead." },
    { title: "Oxford LEZ", body: "Oxford city centre has a Low Emission Zone. Most modern hire cars comply, but confirm with your rental company before drop-off." }
  ],

  restaurantsToBook: [
    { name: "Borodale House dinner (Raasay)", when: "Days 6–8 — for hotel guests; arrange at check-in", url: "https://raasaydistillery.com/" },
    { name: "Applecross Inn",       when: "Tue 28 Jul · Day 9 lunch", url: "https://www.applecross.uk.com/inn/" },
  ],

  // Ferry logistics for the Raasay base + Skye day-trips (Days 6–9).
  // Verified against the CalMac summer 2026 timetable & fares (valid 27 Mar–18 Oct 2026).
  ferry: {
    title: "Raasay ferry & the Skye day-trips",
    lede: "You sleep on Raasay but tour Skye by day. The smart move — park the car on Skye at Sconser and cross as foot passengers. The car stays exactly where you need it each morning, and you skip the car-ferry fare entirely.",
    operator: "CalMac · MV Hallaig (23-car ferry) · 25-min crossing · Turn Up & Go",
    bookingUrl: "https://www.calmac.co.uk/en-gb/route-information/sconser-raasay/",
    ticketingUrl: "https://ticketing.calmac.co.uk/B2C-Calmac/#/desktop/step1/destinations/single",
    timetableUrl: "https://assets.calmac.co.uk/media/ekkepavl/stt-17-sconser-raasay-27-03.pdf",
    // Every Sconser⇄Raasay crossing needed across the 3 Raasay nights (foot
    // passengers — car stays parked free at Sconser). 6 crossings = 3 returns.
    bookings: [
      { ref: "A", route: "Sconser → Raasay", date: "Sat 25 Jul", note: "Arrival — park car at Sconser, cross with luggage", who: "Foot × 3" },
      { ref: "A", route: "Raasay → Sconser", date: "Tue 28 Jul", note: "Departure — collect car, drive to Torridon", who: "Foot × 3" },
      { ref: "B", route: "Raasay → Sconser", date: "Sun 26 Jul", note: "Skye Day 1 (Trotternish) — out (Sun first sailing 10:00)", who: "Foot × 3" },
      { ref: "B", route: "Sconser → Raasay", date: "Sun 26 Jul", note: "Skye Day 1 — back (Sun last sailing 17:00)", who: "Foot × 3" },
      { ref: "C", route: "Raasay → Sconser", date: "Mon 27 Jul", note: "Skye Day 2 (Cuillin & West) — out (07:55)", who: "Foot × 3" },
      { ref: "C", route: "Sconser → Raasay", date: "Mon 27 Jul", note: "Skye Day 2 — back (last 18:45)", who: "Foot × 3" }
    ],
    bookingsNote: "6 crossings = 3 return tickets, all foot passengers (2 adults £5.30 + teen £2.70 per return ≈ £13.30/return, ~£40 total). It's a Turn Up & Go route so you don't reserve a specific sailing — buy at ticketing.calmac.co.uk or at the Sconser slipway. The car stays parked free at Sconser the whole time.",
    steps: [
      { n: 1, title: "Drive to Sconser", body: "From Drumnadrochit ~4 hrs via Eilean Donan and the Skye Bridge. The Sconser slipway is right on the A87, about 6 miles south of Portree." },
      { n: 2, title: "Park free at Sconser", body: "Borodale House confirms you can leave the car free in the Sconser slipway car park and cross on foot. No official CalMac limit on multi-day parking is published, so give them a quick call to confirm 3 nights is fine." },
      { n: 3, title: "Cross as foot passengers", body: "25-minute crossing. Adult return £5.30, teen (5–15) £2.70 — versus £17.50 to take the car. Turn up and go; no sailing to reserve." },
      { n: 4, title: "Walk up to Borodale House", body: "Borodale House is a ~10-min walk (or 2-min drive) uphill from Raasay pier. No shuttle is advertised — email Borodale ahead about a luggage pickup for your arrival on Day 6." }
    ],
    fares: [
      { who: "Adult — foot passenger", single: "£2.65", ret: "£5.30" },
      { who: "Teen 5–15 — foot passenger", single: "£1.35", ret: "£2.70" },
      { who: "Under 5 · bicycle", single: "free", ret: "free" },
      { who: "Car (only if you bring it)", single: "£8.75", ret: "£17.50" }
    ],
    faresNote: "RET (Road Equivalent Tariff) fares. Passenger and car tickets are separate — a car ticket does not cover the people in it. Buy foot tickets online, by phone, or at the port.",
    schedule: [
      { day: "Mon–Sat", offRaasay: "First 07:55, then roughly hourly (~11 sailings)", backToRaasay: "Last from Sconser 18:45 (Sat 20:00)" },
      { day: "Sunday", offRaasay: "Only 10:00 · 12:15 · 16:30", backToRaasay: "Last from Sconser 17:00 (only 10:30 · 13:00 · 17:00)" }
    ],
    tips: [
      "Day 7 is a Sunday — the first boat off Raasay isn't until 10:00 and the last back is 17:00, so keep that Skye day (Trotternish) tighter or start slow.",
      "Day 8 is a weekday — catch the 07:55 off Raasay to be on Skye by ~08:25 and hit the Fairy Pools before the crowds.",
      "Be at the slipway to board no later than 10 minutes before departure.",
      "Timetable valid 27 Mar – 18 Oct 2026 — re-check at calmac.co.uk close to travel."
    ]
  },

  // === DAY BY DAY =============================================================
  days: [
    {
      num: 1, date: "Mon 20 Jul", weekday: "Monday",
      title: "Arrive Edinburgh",
      stay: { name: "Kildonan Lodge, Edinburgh", lat: 55.9316, lng: -3.1734, mapUrl: "https://www.google.com/maps/search/?api=1&query=Kildonan%20Lodge%20Hotel%20Edinburgh%20EH16%205PE" },
      depart: "Land 06:25, collect the hire car ~07:30. Kildonan check-in is 15:00 — drop bags early and explore Edinburgh on foot.",
      foodNote: "Both self-catering stays (Cherrytrees on Day 4 and Beinn Brèagha on Day 10) have a big supermarket on the doorstep on arrival day — so you don't need to haul groceries from Edinburgh. Carry only a small non-perishable car pantry (tea/coffee, long-life milk, breakfast bars, snacks, water) for the drives and the remote Raasay & Torridon nights, plus any Indian or specialty items the Highland Co-ops won't stock.",
      shops: [
        { name: "M&S Food — Princes Street", lat: 55.9526, lng: -3.1966, note: "Central Edinburgh foodhall — salads & food-to-go for the car pantry.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Marks%20and%20Spencer%20Princes%20Street%20Edinburgh" },
        { name: "Waitrose — Morningside", lat: 55.9245, lng: -3.2093, note: "Nearest Waitrose (~2 mi from Newington) — the last one until the Lakes.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Waitrose%20Morningside%20Edinburgh%20EH10%204AX" },
        { name: "Tesco Extra — Corstorphine", lat: 55.9425, lng: -3.286, note: "Large superstore on the west side for a full shop.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Tesco%20Extra%20Corstorphine%20Edinburgh" }
      ],
      leg: "Edinburgh Airport → city centre",
      route: "—",
      miles: "10", drive: "20 min",
      overnight: "Edinburgh",
      checkin: "2026-07-20", checkout: "2026-07-22", booked: true,
      hero: "Edinburgh",
      blurb: "Pick up the hire car at Edinburgh Airport and drive to your city centre hotel. Park it — you will not need it for two days. Walk the Royal Mile in the evening and have dinner in the Grassmarket.",
      attractions: [
        { name: "Royal Mile", lat: 55.9503, lng: -3.1899,  wiki: "Royal_Mile",  desc: "The medieval spine of the Old Town, running from the Castle down to Holyrood.", locale: "Edinburgh" },
        { name: "Grassmarket", lat: 55.9478, lng: -3.1958, wiki: "Grassmarket", desc: "Historic market square below the Castle rock — pubs, bistros, and the evening crowd.", locale: "Edinburgh" }
      ],
      hotels: [
        { name: "The Balmoral Hotel",     style: "5-star landmark on Princes Street", price: "£200–£250", url: "https://www.booking.com/hotel/gb/the-balmoral.html", locale: "Edinburgh" },
        { name: "Nira Caledonia",         style: "Boutique townhouse, New Town",      price: "£160–£200", url: "https://www.niracaledonia.com",                       locale: "Edinburgh" },
        { name: "Hotel du Vin Edinburgh", style: "Boutique with a great wine bar",    price: "£130–£170", url: "https://www.hotelduvin.com/locations/edinburgh/",     locale: "Edinburgh" },
        { name: "Grassmarket Hotel",      style: "Central, good value",               price: "£110–£150", url: "https://www.grassmarkethotel.co.uk",                  locale: "Edinburgh" }
      ],
      restaurants: []
    },

    {
      num: 2, date: "Tue 21 Jul", weekday: "Tuesday",
      title: "Edinburgh on foot",
      leg: "City day — no driving",
      route: "—",
      miles: "—", drive: "—",
      overnight: "Edinburgh",
      hero: "Edinburgh_Castle",
      blurb: "A key castle plus green space and important buildings. Edinburgh Castle in the morning, then out to nature — Arthur's Seat and Holyrood Park in the heart of the city, and the 100-acre Jupiter Artland sculpture garden on the edge of town. Add the mysterious Rosslyn Chapel and the panorama from Calton Hill.",
      attractions: [
        { name: "Edinburgh Castle", lat: 55.9486, lng: -3.1999, wiki: "Edinburgh_Castle", desc: "The one castle not to miss — book online, opens 9:30am, allow two hours for the crown jewels and the view over the city.", url: "https://www.edinburghcastle.scot", locale: "Edinburgh", bookAhead: true, bookNote: "Timed entry — sells out weeks ahead in summer; book online." },
        { name: "Arthur's Seat & Holyrood Park", lat: 55.9441, lng: -3.1618, wiki: "Arthur%27s_Seat", desc: "An extinct volcano and wild park in the middle of the city — drive up to Dunsapie Loch for the view with barely a stroll, or amble the low paths. No kit needed.", locale: "Edinburgh" },
        { name: "Jupiter Artland", lat: 55.9057, lng: -3.436, wiki: "Jupiter_Artland", desc: "Award-winning 100-acre sculpture garden of meadow and woodland just outside the city — 30+ works incl. Charles Jencks's landform. Relaxed, outdoors, no hiking.", url: "https://www.jupiterartland.org", locale: "Wilkieston", bookAhead: true, bookNote: "Timed-entry tickets — pre-book online (10% off 48h ahead)." },
        { name: "Rosslyn Chapel", lat: 55.8556, lng: -3.1601, wiki: "Rosslyn_Chapel", desc: "15th-century chapel famed for its mysterious stone carvings (the Da Vinci Code chapel), a 20-min drive south — an atmospheric half-hour indoors.", url: "https://www.rosslynchapel.com", locale: "Roslin", bookAhead: true, bookNote: "90-minute timed slots — book online to guarantee entry." },
        { name: "Calton Hill", lat: 55.9549, lng: -3.1826, wiki: "Calton_Hill", desc: "Acropolis-style monuments and the best easy panorama of the city — five minutes up from the street.", locale: "Edinburgh" },
        { name: "St Giles' Cathedral", lat: 55.9497, lng: -3.1907, wiki: "St_Giles%27_Cathedral", desc: "The High Kirk of Edinburgh on the Royal Mile — free to enter, with the exquisite Thistle Chapel.", url: "https://www.stgilescathedral.org.uk", locale: "Edinburgh" }
      ],
      hotels: [],
      restaurants: [
        { name: "The Witchery by the Castle", note: "Theatrical Gothic dining room — book weeks ahead.", url: "https://www.thewitchery.com" },
        { name: "Dishoom Edinburgh",          note: "Cult Bombay café in St Andrew Square.",            url: "https://www.dishoom.com/edinburgh/" }
      ]
    },

    {
      num: 3, date: "Wed 22 Jul", weekday: "Wednesday",
      title: "Edinburgh → Pitlochry",
      stay: { name: "Rosemount Hotel, Pitlochry", lat: 56.7042, lng: -3.7276, mapUrl: "https://www.google.com/maps/search/?api=1&query=Rosemount%20Hotel%20Pitlochry%20PH16%205HT" },
      depart: "Leave Edinburgh by ~10:00 — the Hermitage forest walk (Dunkeld) en route; Rosemount check-in from 16:00.",
      shops: [
        { name: "M&S Foodhall — Inveralmond, Perth", lat: 56.4205, lng: -3.4675, note: "Right on the A9 as you skirt Perth (~46 mi in; 26 mi / 35 min left to Pitlochry). Zero detour. Foodhall with salads & food-to-go.", mapUrl: "https://www.google.com/maps/search/?api=1&query=M%26S%20Foodhall%20Inveralmond%20Perth%20PH1%203EE" },
        { name: "Tesco Extra — Crieff Rd, Perth (24h)", lat: 56.403, lng: -3.461, note: "Big 24-hour superstore beside Inveralmond — fresh counters and salad/food-to-go.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Tesco%20Extra%20Crieff%20Road%20Perth%20PH1%202NR" },
        { name: "Co-op — Pitlochry (West Moulin Rd)", lat: 56.7055, lng: -3.7285, note: "The only supermarket in Pitlochry itself — top-ups only.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Co-op%20Pitlochry%20West%20Moulin%20Road" }
      ],
      leg: "A9 north via Perth & Dunkeld",
      route: "A9 · Perth",
      miles: "72", drive: "~1h30",
      overnight: "Pitlochry",
      checkin: "2026-07-22", checkout: "2026-07-23", booked: true,
      hero: "Pitlochry",
      blurb: "Straight up the A9 via Perth — stock up at the Perth supermarkets on the way (Pitlochry has only a Co-op). The magical forest walk at The Hermitage, Dunkeld — towering Douglas firs to the thundering Black Linn Falls — is non-negotiable. Around Pitlochry it is all gentle water and woodland: Queen's View over Loch Tummel, the salmon ladder in town, Faskally Wood and the Linn of Tummel by the loch, and the Garry Bridge gorge viewpoint — plus more Perthshire woodland if you want it: the Birks of Aberfeldy, Cluny House Gardens and the Birnam Oak.",
      attractions: [
        { name: "The Hermitage, Dunkeld", lat: 56.5658, lng: -3.59, wiki: "The_Hermitage,_Dunkeld", desc: "A magical Perthshire forest walk beneath Britain's tallest Douglas firs to Ossian's Hall, perched above the thundering Black Linn Falls. 20–30 min loop, free — a non-negotiable stop.", url: "https://www.forestryandland.gov.scot/visit/forest-parks/tay-forest-park/hermitage", locale: "Dunkeld", enroute: true, mustDo: true },
        { name: "Queen's View", lat: 56.693, lng: -3.876, wiki: "Queen%27s_View", desc: "One of the most photographed views in Scotland, over Loch Tummel to Schiehallion. Five-minute walk from the car park.", locale: "Pitlochry" },
        { name: "Pitlochry Dam Fish Ladder", lat: 56.701, lng: -3.736, wiki: "Pitlochry_Dam", desc: "Watch salmon leap upstream in season from the glass-sided viewing chamber — free, right in town, no walking.", locale: "Pitlochry" },
        { name: "Faskally Wood", lat: 56.7230, lng: -3.7420, wiki: "Faskally_Forest", desc: "A gentle woodland walk around Loch Faskally, a mile north of Pitlochry — the easy-access Dunmore Trail loops the loch (herons, kingfishers, summer water lilies), and it's the home of the autumn Enchanted Forest. Flat, free, no climb.", url: "https://forestryandland.gov.scot/visit/forest-parks/tay-forest-park/faskally", locale: "Pitlochry" },
        { name: "Linn of Tummel", lat: 56.7350, lng: -3.7720, wiki: null, desc: "A gentle NTS riverside walk to the rapids where the Tummel and Garry rivers meet — oak woodland, a Victorian bridge and salmon leaping in the linn. Flat paths, free.", url: "https://www.nts.org.uk/visit/places/linn-of-tummel", locale: "Pitlochry" },
        { name: "Garry Bridge", lat: 56.7430, lng: -3.7770, wiki: null, desc: "A dramatic viewpoint over the wooded River Garry gorge just above Pitlochry (and a bungee-jump spot if anyone is brave). A two-minute stop from the car.", locale: "Killiecrankie" },
        { name: "The Birks of Aberfeldy", lat: 56.6155, lng: -3.8760, wiki: "Birks_of_Aberfeldy", desc: "A beautiful wooded gorge above Aberfeldy — the Robert Burns trail climbs past the Falls of Moness through birch and oak. The lower riverside section is an easy stroll (full loop ~2 miles). Free.", locale: "Aberfeldy" },
        { name: "Cluny House Gardens", lat: 56.6420, lng: -3.8050, wiki: "Cluny_House", desc: "A secluded Himalayan woodland garden near Aberfeldy — carpets of Asiatic primulas, red squirrels, and the UK's widest-girthed conifer (a giant Wellingtonia). Small admission; gentle paths.", url: "https://www.clunyhousegardens.com", locale: "Aberfeldy" },
        { name: "Birnam Oak", lat: 56.5545, lng: -3.5800, wiki: null, desc: "The 500-year-old survivor of Shakespeare's Birnam Wood (Macbeth), leaning over the River Tay — a flat half-mile riverside stroll from Dunkeld across Telford's bridge. Free.", locale: "Dunkeld" },
        { name: "Pine Cone Point", lat: 56.5700, lng: -3.6050, wiki: null, desc: "An easy woodland walk from The Hermitage to a sheltered viewpoint with benches under the pines — panoramic Perthshire views, gentle inclines, family-friendly. Free.", locale: "Dunkeld" },
        { name: "The Enchanted Forest", lat: 56.7235, lng: -3.7415, wiki: null, desc: "🍂 Autumn event only (mid-Oct to early Nov) — a spectacular sound-and-light show staged in Faskally Wood. NOT running during your July visit; listed for reference.", url: "https://enchantedforest.org.uk/", locale: "Pitlochry" },
      ],
      hotels: [
        { name: "Fonab Castle Hotel",    style: "4-star lochside castle hotel",      price: "£150–£190", url: "https://www.fonabcastlehotel.com",  locale: "Pitlochry" },
        { name: "Knockendarroch Hotel",  style: "Award-winning boutique B&B",        price: "£130–£160", url: "https://www.knockendarroch.co.uk",  locale: "Pitlochry" },
        { name: "Moulin Hotel",          style: "Historic inn with its own brewery", price: "£90–£120",  url: "https://www.moulinhotel.co.uk",     locale: "Pitlochry" }
      ],
      restaurants: []
    },

    {
      num: 4, date: "Thu 23 Jul", weekday: "Thursday",
      title: "Pitlochry → Drumnadrochit",
      depart: "Leave Pitlochry by ~09:30 — the Cairngorms forest & funicular take time; shop at Tesco Inshes; Cherrytrees check-in 15:00.",
      foodNote: "Cherrytrees is self-catering (full kitchen + microwave) — do the big shop at Tesco Extra Inshes as you reach Inverness, about 15 min before arrival. It is also the last full-size supermarket before Skye & Raasay, so stock the car pantry for the island nights here too.",
      shops: [
        { name: "Tesco Extra — Inshes, Inverness", lat: 57.4625, lng: -4.1965, note: "On the A9 at Inshes roundabout, ~15 min before Cherrytrees. Big shop for the kitchen + the Skye/Raasay stock-up.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Tesco%20Extra%20Inshes%20Inverness%20IV2%203TW" },
        { name: "M&S — Eastgate, Inverness", lat: 57.4775, lng: -4.2235, note: "Central Inverness — M&S salads & food-to-go, ~5 min into town.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Marks%20and%20Spencer%20Eastgate%20Inverness" },
        { name: "Morrisons — Inverness", lat: 57.482, lng: -4.21, note: "Full superstore with a café / salad counter.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Morrisons%20Inverness%20Millburn%20Road" }
      ],
      leg: "A9 to Inverness, then A82 along Loch Ness",
      route: "A9 · A82",
      miles: "90", drive: "2 hrs",
      overnight: "Drumnadrochit",
      checkin: "2026-07-23", checkout: "2026-07-25", booked: true,
      stay: { name: "Cherrytrees, Drumnadrochit (your Airbnb)", lat: 57.34032326116966, lng: -4.498363249003887, mapUrl: "https://www.google.com/maps/search/?api=1&query=57.34032326116966%2C-4.498363249003887" },
      hero: "Inverness",
      blurb: "The A9 climbs over the Pass of Drumochter and straight through the Cairngorms National Park — Britain's biggest — before dropping to Inverness and down the west shore of Loch Ness to Drumnadrochit, your base for two nights. Break the drive at Aviemore for ancient forest and a funicular ride to the mountain-top views.",
      attractions: [
        { name: "Cairngorms National Park", lat: 57.12, lng: -3.67, wiki: "Cairngorms_National_Park", desc: "The UK's largest national park — you drive right through it on the A9. Ancient forest, mountains and moorland; pull off around Aviemore for the scenery.", locale: "Aviemore", enroute: true },
        { name: "Rothiemurchus Estate", lat: 57.167, lng: -3.828, wiki: "Rothiemurchus", desc: "Ancient Caledonian pine forest with red squirrels and gentle, flat trails around Loch an Eilein — a short, easy woodland stroll, free.", url: "https://www.rothiemurchus.net", locale: "Aviemore", enroute: true },
        { name: "Cairngorm Mountain Railway", lat: 57.133, lng: -3.671, wiki: "Cairngorm_Mountain_Railway", desc: "A funicular carries you to a 1,097m viewpoint — huge Highland panoramas with no climbing. Spectacular on a clear day.", url: "https://www.cairngormmountain.org", locale: "Aviemore", enroute: true, bookAhead: true, bookNote: "Funicular runs to timed slots — book online in advance." }
      ],
      hotels: [
        { name: "Rocpool Reserve Hotel",  style: "5-star boutique (Inverness)",      price: "£180–£230", url: "https://www.rocpool.com/rocpool-reserve-hotel-inverness/", locale: "Inverness" },
        { name: "Ness Walk Hotel",        style: "5-star riverside (Inverness)",     price: "£200–£250", url: "https://www.nesswalk.com",                                 locale: "Inverness" },
        { name: "Loch Ness Lodge",        style: "Boutique luxury overlooking Loch Ness", price: "£200–£250", url: "https://www.loch-ness-lodge.com",                    locale: "Drumnadrochit" }
      ],
      restaurants: [
        { name: "Rocpool Restaurant", note: "Inverness's modern bistro by the river — book ahead.", url: "https://www.rocpool.com/rocpool-restaurant-inverness/" }
      ]
    },

    {
      num: 5, date: "Fri 24 Jul", weekday: "Friday",
      title: "Loch Ness & Black Isle loop",
      leg: "Urquhart on your doorstep · Culloden · Chanonry Point",
      route: "60-mile loop",
      miles: "60", drive: "—",
      overnight: "Drumnadrochit",
      hero: "Loch_Ness",
      blurb: "From Drumnadrochit, Urquhart Castle and a Loch Ness cruise are five minutes away. Loop down to Fort Augustus for the canal locks, or east to the ancient Clava Cairns and the moving Culloden battlefield, then out to Chanonry Point for a chance at wild dolphins in the afternoon.",
      attractions: [
        { name: "Urquhart Castle", lat: 57.3239, lng: -4.4426, wiki: "Urquhart_Castle", desc: "Dramatic ruined castle on the shore of Loch Ness, 5 minutes from Drumnadrochit — one of the great Highland castle views, best from the tower.", url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/", locale: "Drumnadrochit", bookAhead: true, bookNote: "Pre-book a timed slot AND a parking bay — sells out ~a week ahead in summer; none sold at the gate once full." },
        { name: "Loch Ness Cruise", lat: 57.332, lng: -4.477, wiki: "Loch_Ness", desc: "See the legendary loch from the water — Jacobite Cruises leave from Drumnadrochit pier. An easy hour afloat, Nessie-spotting optional.", url: "https://www.jacobite.co.uk", locale: "Loch Ness", bookAhead: true, bookNote: "Popular sailings — reserve your departure time ahead." },
        { name: "Fort Augustus", lat: 57.145, lng: -4.679, wiki: "Fort_Augustus", desc: "Pretty village at the south end of Loch Ness where the Caledonian Canal steps down through a flight of locks — watch the boats, no walking required.", locale: "Fort Augustus" },
        { name: "Clava Cairns", lat: 57.473, lng: -4.074, wiki: "Clava_Cairns", desc: "Atmospheric 4,000-year-old Bronze-Age burial cairns and standing stones (the Outlander inspiration) in a quiet copse — a short, flat wander, free.", url: "https://www.historicenvironment.scot/visit-a-place/places/clava-cairns/", locale: "Inverness" },
        { name: "Culloden Battlefield", lat: 57.4776, lng: -4.094, wiki: "Battle_of_Culloden", desc: "Moor where the 1746 Jacobite rising ended — an important, moving site with an outstanding visitor centre. Flat paths, allow two hours.", url: "https://www.nts.org.uk/visit/places/culloden", locale: "Inverness", bookAhead: true, bookNote: "Timed entry (NTS) — book online; slots go by midday in summer." },
        { name: "Chanonry Point", lat: 57.5747, lng: -4.0936, wiki: "Chanonry_Point", desc: "One of the best spots in the UK to see wild bottlenose dolphins from the beach — best an hour after low tide. A short stroll from the car.", locale: "Fortrose" }
      ],
      hotels: [],
      restaurants: [
        { name: "Fiddler's, Drumnadrochit", note: "Local Highland pub with proper portions and a warm welcome.", url: "https://fiddledrum.co.uk/" },
        { name: "The Mustard Seed (Inverness)", note: "Riverside, good value, locally driven menu.", url: "https://www.mustardseedrestaurant.co.uk" }
      ]
    },

    {
      num: 6, date: "Sat 25 Jul", weekday: "Saturday",
      title: "Drumnadrochit → Raasay",
      stay: { name: "Isle of Raasay Distillery (Borodale House)", lat: 57.348, lng: -6.08, mapUrl: "https://www.google.com/maps/search/?api=1&query=Isle%20of%20Raasay%20Distillery%20Borodale%20House%20IV40%208PB" },
      depart: "Leave Drumnadrochit by ~08:30 — ~4h drive + the Broadford shop; aim for an early-afternoon Sconser → Raasay ferry.",
      foodNote: "Raasay has only a small community shop, so this is a stock-up drive. Do your last real shop at Broadford Co-op — about 15 min before the Sconser ferry.",
      shops: [
        { name: "Broadford Co-op (Isle of Skye)", lat: 57.2405, lng: -5.913, note: "Last proper shop before the ferry — only ~13 mi / 15 min before Sconser. Open 7am–10pm, car park. Fresh food & food-to-go.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Co-op%20Broadford%20Isle%20of%20Skye%20IV49%209AE" },
        { name: "Kyle of Lochalsh Co-op", lat: 57.2805, lng: -5.713, note: "Right before the Skye Bridge (~20 mi before Sconser) — earlier top-up option.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Co-op%20Kyle%20of%20Lochalsh%20IV40%208BH" },
        { name: "Co-op — Portree (Woodpark Rd)", lat: 57.411, lng: -6.1955, note: "Skye's biggest shop, ~6 mi past Sconser — handy on your Skye day-trips (Days 7–8).", mapUrl: "https://www.google.com/maps/search/?api=1&query=Co-op%20Portree%20Woodpark%20Road%20IV51%209HQ" }
      ],
      leg: "A82 · A87 · Eilean Donan · Skye Bridge · Sconser ferry",
      route: "A82 · A87",
      miles: "140", drive: "4 hrs + 25 min ferry",
      overnight: "Raasay",
      checkin: "2026-07-25", checkout: "2026-07-28", booked: true,
      hero: "Isle_of_Raasay",
      blurb: "The long drive west — A82 south, then A87 through Kintail. Pause for Eilean Donan in the morning light and the Five Sisters through the windscreen. Over the Skye Bridge to Sconser, park the car and cross to Raasay as foot passengers for three island nights.",
      attractions: [
        { name: "Eilean Donan Castle", lat: 57.274, lng: -5.5161, wiki: "Eilean_Donan", desc: "The most photographed castle in Scotland, on a tidal island where three sea lochs meet — the perfect mid-morning stop on the drive west.", url: "https://www.eileandonancastle.com", locale: "Dornie", enroute: true },
        { name: "Five Sisters of Kintail", lat: 57.178, lng: -5.34, wiki: "Five_Sisters_of_Kintail", desc: "Scotland's most dramatic mountain drive — the view through the windscreen IS the experience. Slow down on the A87 through Glen Shiel.", locale: "Glen Shiel", enroute: true },
        { name: "Skye Bridge", lat: 57.279, lng: -5.718, wiki: "Skye_Bridge", desc: "The free sweep onto Skye at Kyle of Lochalsh — you'll cross it several times over the coming days.", locale: "Kyle of Lochalsh", enroute: true }
      ],
      hotels: [],
      restaurants: []
    },

    {
      num: 7, date: "Sun 26 Jul", weekday: "Sunday",
      title: "Skye day-trip — Trotternish",
      depart: "Catch the ~10:00 first Sunday ferry off Raasay — Sunday sailings are limited and the last one back is ~17:00.",
      leg: "Foot ferry to Sconser · north Skye",
      route: "Ferry + Skye A855 loop",
      miles: "70", drive: "—",
      overnight: "Raasay",
      hero: "Old_Man_of_Storr",
      blurb: "Ferry across to your Skye-parked car and drive the Trotternish loop. The Quiraing and Old Man of Storr are stunning straight from the roadside viewpoints; Kilt Rock is a five-minute stop; and the Fairy Glen near Uig is a gentle wander. Sunday ferries are limited (first ~10am, last back ~6pm) so watch the return sailing.",
      attractions: [
        { name: "The Quiraing", lat: 57.6437, lng: -6.268, wiki: "Quiraing", desc: "Otherworldly landslip of pinnacles and hidden plateaus — the roadside viewpoint at the Quiraing car park delivers the drama with no climb needed.", locale: "Staffin" },
        { name: "Old Man of Storr", lat: 57.507, lng: -6.1836, wiki: "Old_Man_of_Storr", desc: "Skye's iconic rock pinnacle — clearly seen from the roadside pull-offs and the lower path; skip the steep summit and just take the view.", locale: "Trotternish" },
        { name: "Kilt Rock & Mealt Falls", lat: 57.6083, lng: -6.1636, wiki: "Kilt_Rock", desc: "A basalt sea cliff that looks like a pleated kilt, with a waterfall plunging to the sea — a five-minute viewpoint from the car park.", locale: "Trotternish" },
        { name: "Fairy Glen", lat: 57.586, lng: -6.356, wiki: "Fairy_Glen,_Skye", desc: "A miniature landscape of grassy cones and spiral stone rings near Uig — a gentle 15-minute wander, wonderfully odd.", locale: "Uig" }
      ],
      hotels: [],
      restaurants: [
        { name: "Borodale House restaurant", note: "Back on Raasay for dinner — hearty island cooking with Cuillin views across the sound.", url: "https://raasaydistillery.com/" }
      ]
    },

    {
      num: 8, date: "Mon 27 Jul", weekday: "Monday",
      title: "Skye day-trip — Cuillin & West",
      depart: "Catch the 07:55 ferry off Raasay — beat the crowds to the Fairy Pools.",
      leg: "Foot ferry to Sconser · west Skye",
      route: "Ferry + Skye west loop",
      miles: "90", drive: "—",
      overnight: "Raasay",
      hero: "Neist_Point",
      blurb: "Catch the early weekday ferry to beat the crowds. Fairy Pools first thing, then the Coral Beaches and Neist Point lighthouse in the west, with Dunvegan Castle and its gardens to round the day. Prefer the sea? Swap in the Elgol boat trip into Loch Coruisk.",
      attractions: [
        { name: "Fairy Pools", lat: 57.2493, lng: -6.2599, wiki: "Fairy_Pools", desc: "Crystal-clear turquoise pools and little waterfalls at the foot of the Cuillin — a flat 20–30 min there-and-back. Arrive early on the first ferry.", locale: "Glenbrittle" },
        { name: "Claigan Coral Beaches", lat: 57.49, lng: -6.621, wiki: "Claigan", desc: "Beaches of crushed white coralline algae glowing against turquoise water — an easy 30-min shoreline walk near Dunvegan.", locale: "Dunvegan" },
        { name: "Neist Point Lighthouse", lat: 57.4256, lng: -6.7876, wiki: "Neist_Point", desc: "Skye's westernmost tip — the clifftop viewpoint over the lighthouse and out to the Hebrides is a short walk from the car park.", locale: "Glendale" },
        { name: "Dunvegan Castle & Gardens", lat: 57.449, lng: -6.59, wiki: "Dunvegan_Castle", desc: "Skye's key castle — seat of Clan MacLeod for 800 years, with lovely waterside gardens. A relaxed couple of hours.", url: "https://www.dunvegancastle.com", locale: "Dunvegan", bookAhead: true, bookNote: "Busy in summer — book online to skip the queue." },
        { name: "Elgol & Loch Coruisk boat trip", lat: 57.145, lng: -6.113, wiki: "Loch_Coruisk", desc: "Optional small-boat trip from Elgol into Loch Coruisk beneath the Black Cuillin — seals en route. ~4 hours; book ahead.", url: "https://bellajane.co.uk/", locale: "Elgol", bookAhead: true, bookNote: "Tiny boats, only a few sailings a day — book well ahead." }
      ],
      hotels: [],
      restaurants: [
        { name: "Scorrybreac (Portree)", note: "Finest restaurant on Skye — tasting menu. If you want a Skye dinner, book this and take a later ferry back.", url: "https://www.scorrybreac.com" }
      ]
    },

    {
      num: 9, date: "Tue 28 Jul", weekday: "Tuesday",
      title: "Raasay → Torridon via Bealach na Bà",
      stay: { name: "Ledgowan Lodge, Achnasheen", lat: 57.5765, lng: -5.085, mapUrl: "https://www.google.com/maps/search/?api=1&query=Ledgowan%20Lodge%20Hotel%20Achnasheen%20IV22%202EJ" },
      depart: "Early ferry off Raasay (~09:00) — Bealach na Bà + Applecross lunch; Ledgowan check-in 15:00–23:00.",
      leg: "Ferry off · Skye Bridge · Bealach na Bà · Applecross",
      route: "A87 · A896 · Bealach na Bà",
      miles: "95", drive: "3.5 hrs",
      overnight: "Torridon",
      checkin: "2026-07-28", checkout: "2026-07-29", booked: true,
      hero: "Bealach_na_B%C3%A0",
      blurb: "A quick Raasay morning — the Calum's Road drive to Arnish — then the final ferry to Sconser and off the island. Over the Skye Bridge to the mainland and the legendary Bealach na Bà, the Pass of the Cattle, climbing 626m in hairpins with Skye and the Hebrides behind you. Lunch at the Applecross Inn, then the coast road into Torridon.",
      attractions: [
        { name: "Calum's Road", lat: 57.44, lng: -6.04,     wiki: "Calum's_Road", desc: "Quick morning drive before the ferry — the two-mile single-track to Arnish, hand-built by one man over ten years. Brochel Castle ruins at the start.", locale: "Raasay" },
        { name: "Bealach na Bà", lat: 57.42, lng: -5.7,    wiki: "Bealach_na_B%C3%A0", desc: "The Pass of the Cattle — 20% gradients, hairpins, and on a clear day a view back to Skye and the Outer Hebrides.", locale: "Applecross", enroute: true },
        { name: "Applecross village", lat: 57.4344, lng: -5.816, wiki: "Applecross", desc: "Tiny west-coast village at the foot of the pass. The Applecross Inn is one of the most famous pubs in Scotland — langoustines, crab, haddock. Book lunch ahead.", url: "https://www.applecross.uk.com/inn/", locale: "Applecross", enroute: true },
        { name: "Shieldaig village", lat: 57.523, lng: -5.656, wiki: "Shieldaig", desc: "Small fishing village on Loch Torridon — a good coffee or photo stop as you come into Torridon.", locale: "Shieldaig", enroute: true }
      ],
      hotels: [
        { name: "The Torridon",        style: "5-star Victorian shooting lodge, lochside", price: "£220–£250", url: "https://www.thetorridon.com", locale: "Torridon" },
        { name: "The Torridon Inn",    style: "Relaxed sister inn, walkers' favourite",   price: "£120–£160", url: "https://www.thetorridon.com/the-inn/", locale: "Torridon" },
        { name: "Tigh an Eilean, Shieldaig", style: "Seafront hotel in Shieldaig village", price: "£140–£180", url: "https://www.tighaneilean.co.uk", locale: "Shieldaig" }
      ],
      restaurants: [
        { name: "Applecross Inn", note: "The Day 9 lunch highlight — book a table ahead.", url: "https://www.applecross.uk.com/inn/" }
      ]
    },

    {
      num: 10, date: "Wed 29 Jul", weekday: "Wednesday",
      title: "Torridon & Loch Maree → Fort William",
      stay: { name: "Clan MacDuff Hotel, Fort William", lat: 56.7945, lng: -5.112, mapUrl: "https://www.google.com/maps/search/?api=1&query=Clan%20MacDuff%20Hotel%20Fort%20William%20PH33%206RW" },
      depart: "Leave Torridon by ~10:00 — the Loch Maree drive south; Fort William / Clan MacDuff by mid-afternoon.",
      foodNote: "Fort William nights 2–3 are self-catering (Beinn Brèagha — full kitchen, dishwasher, washing machine). Do the big shop at Morrisons Blar Mhor on arrival; it is the largest supermarket in the whole west Highlands.",
      shops: [
        { name: "Morrisons — Blar Mhor, Fort William", lat: 56.8285, lng: -5.0955, note: "The big shop for the self-catering house (Aldi & Lidl alongside). Café with a salad counter.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Morrisons%20Blar%20Mhor%20Fort%20William%20PH33%207PT" },
        { name: "M&S Foodhall — Fort William", lat: 56.827, lng: -5.101, note: "Salads & food-to-go in town (Inverlochy).", mapUrl: "https://www.google.com/maps/search/?api=1&query=M%26S%20Foodhall%20Fort%20William" },
        { name: "Tesco — Fort William", lat: 56.8205, lng: -5.1085, note: "Handy in-town top-ups.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Tesco%20Fort%20William" }
      ],
      leg: "Loch Maree scenic drive · south to your 3-night base",
      route: "A896 · A87 · A82",
      miles: "95", drive: "2.5 hrs (after walks)",
      overnight: "Fort William",
      checkin: "2026-07-29", checkout: "2026-08-01", booked: true,
      hero: "Beinn_Eighe",
      blurb: "An easy morning in Wester Ross before the drive south. The A832 runs the length of beautiful Loch Maree with the great bulk of Slioch across the water; stop at the Beinn Eighe reserve viewpoints for the mountain scenery, then head down to Fort William — your single base for the next THREE nights (one unpack for the Road to the Isles and the Glencoe day-trip).",
      attractions: [
        { name: "Loch Maree", lat: 57.69, lng: -5.47, wiki: "Loch_Maree", desc: "One of Scotland's most beautiful lochs — ancient pine islands and Slioch rising across the water. The A832 drive along its length is the highlight; pull off at the viewpoints.", locale: "Wester Ross", enroute: true },
        { name: "Beinn Eighe viewpoints", lat: 57.61, lng: -5.35, wiki: "Beinn_Eighe", desc: "Britain's oldest national nature reserve. Stop at the roadside viewpoints and the visitor centre for the quartzite-topped mountain views — no climb required.", url: "https://www.nnr.scot/nnr/beinn-eighe/", locale: "Kinlochewe", enroute: true }
      ],
      hotels: [
        { name: "Clan Macduff Hotel",   style: "4★ family-run, Loch Linnhe views, breakfast incl.", price: "£150–£200", url: "https://www.clanmacduff.co.uk/", locale: "Fort William" },
        { name: "The Lime Tree",         style: "Boutique art-gallery hotel in an old manse",        price: "£130–£170", url: "https://www.limetreefortwilliam.co.uk/", locale: "Fort William" },
        { name: "Cruachan Hotel",        style: "Central, triple/family rooms, breakfast incl.",     price: "£120–£170", url: "https://www.cruachanhotel.co.uk/", locale: "Fort William" },
        { name: "Onich Hotel (alt — closer to the glen)", style: "Lochside, family rooms, 15 min south toward Glencoe", price: "£90–£150", url: "https://www.onichhotel.co.uk/", locale: "Onich" }
      ],
      restaurants: [
        { name: "Crannog Restaurant", note: "Loch-side seafood on Fort William's old pier.", url: "https://crannog.net/" },
        { name: "The Lime Tree", note: "Well-regarded modern Scottish in the hotel of the same name.", url: "https://www.limetreefortwilliam.co.uk/" }
      ]
    },

    {
      num: 11, date: "Thu 30 Jul", weekday: "Thursday",
      title: "Glenfinnan & the Road to the Isles",
      stay: { name: "Beinn Brèagha House, Fort William", lat: 56.829, lng: -5.101, mapUrl: "https://www.google.com/maps/search/?api=1&query=13%20Lochy%20Road%20Fort%20William%20PH33%206NJ" },
      leg: "Day out from Fort William · Glenfinnan · Morar beaches · Mallaig",
      route: "A830 loop",
      miles: "40", drive: "—",
      overnight: "Fort William (night 2 of 3)",
      hero: "Glenfinnan_Viaduct",
      blurb: "No packing today — you're based in Fort William. Take the A830 'Road to the Isles' west: the Glenfinnan Viaduct and Monument, then the Silver Sands of Morar — dazzling white beaches and turquoise water — out to the fishing port of Mallaig for lunch. Back near town, wander the locks of Neptune's Staircase beneath Ben Nevis. (The Jacobite steam train crosses the viaduct in summer if you'd rather ride than drive.)",
      attractions: [
        { name: "Glenfinnan Viaduct", lat: 56.8728, lng: -5.4357, wiki: "Glenfinnan_Viaduct", desc: "The 21-arch Victorian viaduct of Harry Potter fame, curving above the glen — a 10-minute walk to the viewpoint, or watch the steam train cross if it's running.", locale: "Glenfinnan", enroute: true },
        { name: "Glenfinnan Monument", lat: 56.87, lng: -5.433, wiki: "Glenfinnan_Monument", desc: "On the shore of Loch Shiel where Bonnie Prince Charlie raised his standard in 1745 — a short stroll to a classic Highland view.", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument", locale: "Glenfinnan", enroute: true },
        { name: "Silver Sands of Morar", lat: 56.96, lng: -5.832, wiki: "Morar", desc: "Dazzling white-sand beaches and turquoise shallows along the Road to the Isles — pull over anywhere between Arisaig and Morar. The trip's best beaches.", locale: "Morar", enroute: true },
        { name: "Mallaig", lat: 57.006, lng: -5.828, wiki: "Mallaig", desc: "Bustling little fishing port at the end of the road — fresh seafood, harbour views and ferries to the small isles. A relaxed lunch stop.", locale: "Mallaig", enroute: true },
        { name: "Neptune's Staircase", lat: 56.843, lng: -5.103, wiki: "Neptune%27s_Staircase", desc: "Thomas Telford's eight-lock flight lifting the Caledonian Canal at Banavie, with Ben Nevis behind — an easy towpath potter, free.", locale: "Banavie" },
        { name: "Ben Nevis", lat: 56.7969, lng: -5.0037, wiki: "Ben_Nevis", desc: "Britain's highest mountain (1,345m) — admire it from the Glen Nevis road at its foot; no climb.", locale: "Fort William" }
      ],
      hotels: [],
      restaurants: [
        { name: "Lochaber Larder / Fort William High St", note: "Plenty of casual dinner options back in town after the train.", url: "https://www.visitscotland.com/places-to-go/fort-william" }
      ]
    },

    {
      num: 12, date: "Fri 31 Jul", weekday: "Friday",
      title: "Glencoe day-trip",
      stay: { name: "Beinn Brèagha House, Fort William", lat: 56.829, lng: -5.101, mapUrl: "https://www.google.com/maps/search/?api=1&query=13%20Lochy%20Road%20Fort%20William%20PH33%206NJ" },
      leg: "Day out from Fort William · Three Sisters · Glen Etive · Lost Valley",
      route: "A82 · 30 min each way",
      miles: "60", drive: "—",
      overnight: "Fort William (night 3 of 3)",
      hero: "Glen_Coe",
      blurb: "Glencoe is a 30-minute drive south down the A82 — an easy day-trip from Fort William. Pull over for the Three Sisters, get the story at the visitor centre, and drive the dead-end Glen Etive road into the mountains. Just north, the A82 crosses the wild expanse of Rannoch Moor — one of Europe's last true wildernesses. Lunch at the Clachaig Inn on the way back.",
      attractions: [
        { name: "Three Sisters of Glencoe", lat: 56.668, lng: -4.998, wiki: "Glen_Coe", desc: "Scotland's most dramatic glen — the Three Sisters ridges tower over the A82. Pull into the viewpoint and take it in; 30 min south of Fort William.", locale: "Glencoe" },
        { name: "Glencoe Visitor Centre", lat: 56.674, lng: -5.101, wiki: "Glen_Coe", desc: "The story of the glen and the 1692 massacre, plus an easy Signal Rock woodland loop behind it.", url: "https://www.nts.org.uk/visit/places/glencoe", locale: "Glencoe" },
        { name: "Glen Etive", lat: 56.6164, lng: -5.0034, wiki: "Glen_Etive", desc: "A 12-mile dead-end road into a remote, beautiful glen (the Skyfall location) — one of Scotland's great scenic drives. Allow an hour round trip.", locale: "Glencoe" },
        { name: "Rannoch Moor", lat: 56.6, lng: -4.75, wiki: "Rannoch_Moor", desc: "One of the last great wildernesses in Europe — a vast, empty sweep of bog, lochans and mountains that the A82 crosses just north of Glencoe. Stop at the laybys.", locale: "Rannoch Moor" }
      ],
      hotels: [],
      restaurants: [
        { name: "Clachaig Inn (Boots Bar)", note: "Legendary Glencoe walkers' pub — perfect lunch stop mid-day-trip even though you're based in Fort William.", url: "https://www.clachaig.com" }
      ]
    },

    {
      num: 13, date: "Sat 1 Aug", weekday: "Saturday",
      title: "Fort William → Lake District",
      stay: { name: "The Waterhead Inn, Ambleside", lat: 54.4232, lng: -2.964, mapUrl: "https://www.google.com/maps/search/?api=1&query=Waterhead%20Hotel%20Ambleside%20LA22%200HD" },
      depart: "Leave Fort William by ~09:00 — long A82/M74/M6 run (~4.5h) + a Luss leg-stretch; Waterhead check-in 15:00–19:00.",
      shops: [
        { name: "Booths — Windermere", lat: 54.4108, lng: -2.9075, note: "The North's quality supermarket, by Windermere station — big fresh & deli range.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Booths%20Windermere" },
        { name: "Co-op — Ambleside (Compston Rd)", lat: 54.4288, lng: -2.9635, note: "Central Ambleside for quick top-ups.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Co-op%20Ambleside%20Compston%20Road" },
        { name: "Morrisons / M&S — Kendal", lat: 54.328, lng: -2.747, note: "Larger stores ~20 min south for a full shop.", mapUrl: "https://www.google.com/maps/search/?api=1&query=Morrisons%20Kendal" }
      ],
      leg: "A82 · Loch Lomond · M74 · M6 — halfway south to Cumbria",
      route: "A82 · M74 · M6",
      miles: "~250", drive: "4–4.5 hrs",
      overnight: "Lake District",
      checkin: "2026-08-01", checkout: "2026-08-02", booked: true,
      hero: "Lake_District",
      blurb: "Break the long haul south. Down the A82 through Glencoe and along Loch Lomond (leg-stretch at Luss), then M74/M6 into Cumbria. An easy afternoon arrival in the Lake District — Windermere or Ambleside — for a lakeside evening before the final push to Oxford tomorrow.",
      attractions: [
        { name: "Loch Lomond & The Trossachs National Park", lat: 56.24, lng: -4.62, wiki: "Loch_Lomond_and_The_Trossachs_National_Park", desc: "The A82 hugs the bonnie banks of Loch Lomond for miles — Scotland's first national park. An easy scenic drive south with plenty of laybys.", locale: "Loch Lomond", enroute: true },
        { name: "Luss village", lat: 56.0959, lng: -4.6356, wiki: "Luss", desc: "Postcard estate village on Loch Lomond's shore — pretty cottages and a quick shoreline stroll before the motorway.", url: "https://www.lochlomond-trossachs.org/places/luss/", locale: "Loch Lomond", enroute: true },
        { name: "Windermere & Ambleside", lat: 54.423, lng: -2.964, wiki: "Windermere", desc: "England's largest lake — an easy late-afternoon arrival for a lakeside stroll or a short cruise, then dinner in Ambleside.", locale: "Lake District" }
      ],
      hotels: [
        { name: "The Waterhead, Ambleside",       style: "Lakeside inn at Waterhead pier, family rooms", price: "£160–£230", url: "https://www.englishlakes.co.uk/hotels/waterhead-hotel/", locale: "Ambleside" },
        { name: "Ambleside Salutation Hotel",     style: "Central Ambleside, family rooms + small spa",  price: "£130–£200", url: "https://www.hotelambleside.uk.com/", locale: "Ambleside" },
        { name: "Lindeth Howe, Bowness",          style: "Country-house hotel above Windermere",         price: "£150–£220", url: "https://www.lindeth-howe.co.uk/", locale: "Bowness" }
      ],
      restaurants: []
    },

    {
      num: 14, date: "Sun 2 Aug", weekday: "Sunday",
      title: "Lake District → Oxford",
      depart: "Leave Ambleside by ~08:00 — ~4.5h to Oxford to make the 13:00 Enterprise car drop-off.",
      leg: "M6 · M40 — the final leg",
      route: "M6 · M40",
      miles: "~270", drive: "4.5–5 hrs",
      overnight: "Oxford",
      hero: "Oxford",
      blurb: "The last stretch — M6 south, M40 into Oxford, arriving early-to-mid afternoon, comfortable for your daughter's course check-in. The Highland road trip ends here; the relaxed Oxford fortnight begins.",
      attractions: [
        { name: "Oxford", lat: 51.752, lng: -1.2577, wiki: "Oxford", desc: "Journey's end. Settle in ahead of your daughter's residential course (2–15 Aug).", locale: "Oxford" }
      ],
      hotels: [],
      restaurants: []
    }
  ]
};
