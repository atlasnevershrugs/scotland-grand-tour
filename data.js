// Scotland Grand Tour — Trip Data (v6: Raasay swap)
// 14 calendar days · 13 overnights · 8 overnight stops · ~1,100 miles
// Bookings confirmed: Rosemount Hotel (Pitlochry), Cherrytrees (Drumnadrochit),
// Isle of Raasay Distillery / Borodale House (Raasay, booking in progress).
// Swap from v5: Ullapool + Gairloch (3 nights) → Raasay (3 nights via Sconser
// ferry). Loses NW Highlands + Bealach na Bà; gains a confirmed quality
// distillery hotel during the impossible-to-book Skye-area week.

window.TRIP = {
  title: "Scotland Grand Tour",
  subtitle: "Edinburgh to Oxford via Loch Ness, Raasay, Skye and Glencoe",
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
    { label: "Total miles", value: "~1,100" },
    { label: "Driving days", value: "9" }
  ],

  route: [
    { lat: 55.9533, lng: -3.1883, label: "Edinburgh",        nights: "1–2",   day: 1  },
    { lat: 56.7058, lng: -3.7290, label: "Pitlochry",        nights: "3",     day: 3  },
    { lat: 57.3315, lng: -4.4733, label: "Drumnadrochit",    nights: "4–5",   day: 4  },
    { lat: 57.3700, lng: -6.0676, label: "Raasay",           nights: "6–8",   day: 6  },
    { lat: 57.4126, lng: -6.1959, label: "Portree (Skye)",   nights: "9–11",  day: 9  },
    { lat: 56.6863, lng: -5.0987, label: "Glencoe",          nights: "12",    day: 12 },
    { lat: 55.8642, lng: -4.2518, label: "Glasgow",          nights: "13",    day: 13 },
    { lat: 51.7520, lng: -1.2577, label: "Oxford",           nights: "drop-off", day: 14 }
  ],

  detours: [
    { lat: 57.4806, lng: -4.4925, label: "Culloden",            day: 5  },
    { lat: 57.3239, lng: -4.4426, label: "Urquhart Castle",     day: 5  },
    { lat: 57.5747, lng: -4.0936, label: "Chanonry Point",      day: 5  },
    { lat: 57.2740, lng: -5.5161, label: "Eilean Donan",        day: 6  },
    { lat: 57.3236, lng: -6.1083, label: "Sconser ferry",       day: 6  },
    { lat: 57.4400, lng: -6.0700, label: "Calum's Road",        day: 8  },
    { lat: 57.2877, lng: -6.1747, label: "Sligachan",           day: 9  },
    { lat: 57.2493, lng: -6.7724, label: "Neist Point",         day: 11 },
    { lat: 57.2438, lng: -6.2599, label: "Fairy Pools",         day: 11 },
    { lat: 57.3025, lng: -6.3919, label: "Talisker Distillery", day: 11 },
    { lat: 57.1928, lng: -6.1144, label: "Elgol",               day: 11 },
    { lat: 56.8728, lng: -5.4357, label: "Glenfinnan",          day: 13 },
    { lat: 56.0959, lng: -4.6356, label: "Luss",                day: 13 }
  ],

  carRental: [
    { name: "Enterprise", note: "Depots at Edinburgh Airport and Oxford city centre. One-way fee typically £80–£150.", url: "https://www.enterprise.co.uk", recommended: true },
    { name: "Europcar",   note: "Same route coverage, competitive pricing.", url: "https://www.europcar.co.uk" },
    { name: "Rentalcars.com", note: "Compare all providers, one-way fees shown upfront.", url: "https://www.rentalcars.com" }
  ],

  priorityBookings: [
    { rank: 1,  what: "Portree, Skye",                 dates: "Tue 28 Jul → Fri 31 Jul · 3 nights",  why: "Hardest booking in Scotland",                       url: "https://www.cuillinhills-hotel-skye.co.uk" },
    { rank: 2,  what: "Isle of Raasay Distillery",     dates: "Sat 25 Jul → Tue 28 Jul · 3 nights",  why: "Borodale House at the distillery — book NOW",        url: "https://raasaydistillery.com/visit/borodale-house/" },
    { rank: 3,  what: "Clachaig Inn, Glencoe",         dates: "Fri 31 Jul → Sat 1 Aug · 1 night",    why: "Sells out 3–4 months ahead",                         url: "https://www.clachaig.com" },
    { rank: 4,  what: "CalMac Sconser↔Raasay ferry",   dates: "Sat 25 Jul out · Tue 28 Jul return",  why: "Vehicle ferry — book in advance, tight in summer",  url: "https://www.calmac.co.uk/sconser-raasay" },
    { rank: 5,  what: "Pitlochry",                     dates: "Wed 22 Jul → Thu 23 Jul · 1 night",   why: "Rosemount Hotel — booked",                           url: "https://www.rosemount-hotel.co.uk/b-and-b-pitlochry/", done: true },
    { rank: 6,  what: "Drumnadrochit",                 dates: "Thu 23 Jul → Sat 25 Jul · 2 nights",  why: "Cherrytrees Airbnb — booked",                        url: "https://www.airbnb.com", done: true },
    { rank: 7,  what: "Jacobite Steam Train",          dates: "Sat 1 Aug · Day 13 morning",          why: "Sells out months ahead in summer",                   url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { rank: 8,  what: "Edinburgh",                     dates: "Mon 20 Jul → Wed 22 Jul · 2 nights",  why: "City centre fills up in July",                       url: "https://www.booking.com/searchresults.html?ss=Edinburgh" },
    { rank: 9,  what: "Elgol boat trip",               dates: "Thu 30 Jul · Day 11",                 why: "Loch Coruisk — small boats, limited slots",          url: "https://bellajane.co.uk/" },
    { rank: 10, what: "Scorrybreac, Skye dinner",      dates: "Wed 29 Jul · Day 10 evening",         why: "Best restaurant on Skye",                            url: "https://www.scorrybreac.com" }
  ],

  practical: [
    { title: "Fuel",            body: "Fill up at every petrol station in the Highlands. Stations can be 30–40 miles apart and close by 6–7pm. Top up without fail in Inverness, on Skye (Portree, Broadford), and at Fort William." },
    { title: "Midges",          body: "July and August are peak midge season. Buy Smidge spray on arrival (pharmacies and outdoor shops). Worst at dawn and dusk in still, humid air — Raasay can be particularly midgy on still evenings." },
    { title: "Single-track roads", body: "Pull into passing places on your left when meeting oncoming traffic. Do not drive onto the grass verge — it is often soft. A small wave to other drivers is customary. Most of Raasay's roads are single-track." },
    { title: "Sconser ↔ Raasay ferry", body: "CalMac vehicle ferry, 25-min crossing, ~9 services daily 7am–6pm. Book the car in advance via calmac.co.uk — Saturday and Sunday capacity is tight in July. Arrive 15 min before departure with your booking reference." },
    { title: "Weather",         body: "Pack waterproof layers regardless of forecast. The west coast catches significantly more rain than the east. Misty days on Raasay and Skye are atmospheric, not a disappointment." },
    { title: "Oxford LEZ",      body: "Oxford city centre has a Low Emission Zone. Most modern hire cars comply, but confirm with your rental company before drop-off." }
  ],

  restaurantsToBook: [
    { name: "Isle of Raasay Distillery dinner", when: "Days 6–8 — for hotel guests; arrange at check-in", url: "https://raasaydistillery.com/" },
    { name: "Scorrybreac, Skye",    when: "Wed 29 Jul · Day 10 dinner", url: "https://www.scorrybreac.com" },
    { name: "Jacobite Steam Train", when: "Sat 1 Aug · Day 13 morning", url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { name: "Cail Bruich, Glasgow", when: "Sat 1 Aug · Day 13 dinner",  url: "https://www.cailbruich.co.uk" }
  ],

  // === DAY BY DAY =============================================================
  days: [
    {
      num: 1, date: "Mon 20 Jul", weekday: "Monday",
      title: "Arrive Edinburgh",
      leg: "Edinburgh Airport → city centre",
      route: "—",
      miles: "10", drive: "20 min",
      overnight: "Edinburgh",
      checkin: "2026-07-20", checkout: "2026-07-22",
      hero: "Edinburgh",
      blurb: "Pick up the hire car at Edinburgh Airport and drive to your city centre hotel. Park it — you will not need it for two days. Walk the Royal Mile in the evening and have dinner in the Grassmarket.",
      attractions: [
        { name: "Royal Mile",  wiki: "Royal_Mile",  desc: "The medieval spine of the Old Town, running from the Castle down to Holyrood.", locale: "Edinburgh" },
        { name: "Grassmarket", wiki: "Grassmarket", desc: "Historic market square below the Castle rock — pubs, bistros, and the evening crowd.", locale: "Edinburgh" }
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
      blurb: "Castle in the morning, Old Town tours and museums by midday, then up Calton Hill or Arthur's Seat for the panorama. A theatrical dinner at the Witchery rounds it off.",
      attractions: [
        { name: "Edinburgh Castle",         wiki: "Edinburgh_Castle",   desc: "Book online before you arrive — opens 9:30am, allow two hours.", url: "https://www.edinburghcastle.scot", locale: "Edinburgh" },
        { name: "The Real Mary King's Close", wiki: "Mary_King%27s_Close", desc: "Underground 17th-century street, tours sell out — book ahead.", url: "https://www.realmarykingsclose.com", locale: "Edinburgh" },
        { name: "St Giles' Cathedral",      wiki: "St_Giles%27_Cathedral", desc: "High Kirk of Edinburgh, free to enter, exquisite Thistle Chapel.", url: "https://www.stgilescathedral.org.uk", locale: "Edinburgh" },
        { name: "Calton Hill",              wiki: "Calton_Hill",        desc: "Acropolis-style monuments and the best panorama of the city.", locale: "Edinburgh" },
        { name: "National Museum of Scotland", wiki: "National_Museum_of_Scotland", desc: "Free, two hours minimum, world-class galleries.", url: "https://www.nms.ac.uk/national-museum-of-scotland/", locale: "Edinburgh" },
        { name: "Arthur's Seat",            wiki: "Arthur%27s_Seat",    desc: "Extinct volcano in the middle of the city — one-hour climb, no kit needed.", locale: "Edinburgh" }
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
      leg: "A93 scenic via the Cairngorms",
      route: "A93",
      miles: "85", drive: "2–2.5 hrs",
      overnight: "Pitlochry — Rosemount Hotel ✓",
      checkin: "2026-07-22", checkout: "2026-07-23",
      hero: "Pitlochry",
      blurb: "Take the A93 through Braemar instead of the A9. The Hermitage waterfall and Queen's View are unmissable; Balmoral and Blair Castle are picks based on your appetite. Booked at the Rosemount Hotel.",
      attractions: [
        { name: "The Hermitage, Dunkeld", wiki: "The_Hermitage,_Dunkeld", desc: "20–30 min woodland walk to Ossian's Hall above a thundering falls. Free.", url: "https://www.forestryandland.gov.scot/visit/forest-parks/tay-forest-park/hermitage", locale: "Dunkeld" },
        { name: "Queen's View",       wiki: "Queen%27s_View",  desc: "One of the most photographed views in Scotland, above Loch Tummel. Five-minute walk.", locale: "Pitlochry" },
        { name: "Balmoral Castle",    wiki: "Balmoral_Castle", desc: "The royal Highland retreat near Braemar. Check opening dates before detouring.", url: "https://www.balmoralcastle.com", locale: "Braemar" },
        { name: "Blair Castle",       wiki: "Blair_Castle",    desc: "Scotland's most-visited castle outside Edinburgh — Atholl Highlanders parade ground.", url: "https://www.blair-castle.co.uk", locale: "Blair Atholl" },
        { name: "Pitlochry Dam Fish Ladder", wiki: "Pitlochry_Dam", desc: "Watch salmon leap upstream in season — free, on the way into town.", locale: "Pitlochry" }
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
      leg: "A9 to Inverness, then A82 along Loch Ness",
      route: "A9 · A82",
      miles: "90", drive: "2 hrs",
      overnight: "Drumnadrochit — Cherrytrees Airbnb ✓",
      checkin: "2026-07-23", checkout: "2026-07-25",
      hero: "Inverness",
      blurb: "The A9 climbs over the Pass of Drumochter (highest A-road in the UK at 460m). Continue past Inverness down the western shore of Loch Ness to Drumnadrochit — your base for the next two nights, with Urquhart Castle literally on your doorstep.",
      attractions: [
        { name: "Rothiemurchus Estate",       wiki: "Rothiemurchus",              desc: "Ancient Caledonian pine forest, red squirrels, short waymarked walks. Free.", url: "https://www.rothiemurchus.net", locale: "Aviemore" },
        { name: "Cairngorm Mountain Railway", wiki: "Cairngorm_Mountain_Railway", desc: "Funicular to a 1,097m summit. Spectacular on a clear day.", url: "https://www.cairngormmountain.org", locale: "Aviemore" },
        { name: "Leakey's Bookshop",          wiki: "Leakey%27s_Bookshop",        desc: "Largest second-hand bookshop in Scotland, in a converted church. Worth a detour into Inverness.", url: "https://www.leakeysbookshop.com", locale: "Inverness" }
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
      blurb: "From Drumnadrochit, Urquhart Castle and a Loch Ness cruise are literally a 5-minute drive. Add Culloden (25 min via Inverness) and a chance at wild dolphins at Chanonry Point in the afternoon (35 min).",
      attractions: [
        { name: "Urquhart Castle",      wiki: "Urquhart_Castle",    desc: "Dramatic ruined castle on the shore of Loch Ness — 5-minute drive from Cherrytrees. Best views from the tower.", url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/", locale: "Drumnadrochit" },
        { name: "Loch Ness Cruise",     wiki: "Loch_Ness",          desc: "Jacobite Cruises depart from Drumnadrochit pier (and Tomnahurich Bridge in Inverness) — see the loch from the water.", url: "https://www.jacobite.co.uk", locale: "Loch Ness" },
        { name: "Culloden Battlefield", wiki: "Battle_of_Culloden", desc: "Site of the last battle on British soil (1746). Outstanding visitor centre — book online, allow two hours.", url: "https://www.nts.org.uk/visit/places/culloden", locale: "Inverness" },
        { name: "Inverness Castle",     wiki: "Inverness_Castle",   desc: "Recently reopened visitor attraction with panoramic city views.", url: "https://www.invernesscastle.com", locale: "Inverness" },
        { name: "Chanonry Point",       wiki: "Chanonry_Point",     desc: "One of the best places in the UK to see wild bottlenose dolphins from shore. Best one hour after low tide.", locale: "Fortrose" },
        { name: "Moray Firth",          wiki: "Moray_Firth",        desc: "Coastal drive through the Black Isle — seals, seabirds, big skies.", locale: "Black Isle" }
      ],
      hotels: [],
      restaurants: [
        { name: "Fiddler's, Drumnadrochit", note: "Local highland pub with proper portions and an absurd whisky list, 2 min from the Airbnb.", url: "https://fiddledrum.co.uk/" },
        { name: "The Mustard Seed (Inverness)", note: "Riverside, good value, locally driven menu.", url: "https://www.mustardseedrestaurant.co.uk" }
      ]
    },

    {
      num: 6, date: "Sat 25 Jul", weekday: "Saturday",
      title: "Drumnadrochit → Raasay",
      leg: "A82 · A87 · Eilean Donan · Skye Bridge · Sconser ferry",
      route: "A82 · A87",
      miles: "140", drive: "4 hrs + 25 min ferry",
      overnight: "Raasay — Borodale House (distillery)",
      checkin: "2026-07-25", checkout: "2026-07-28",
      hero: "Isle_of_Raasay",
      blurb: "The long drive west — A82 south then A87 through Kintail. Pause for Eilean Donan in the morning light and the Five Sisters of Kintail through the windscreen. Over the Skye Bridge, down to Sconser, and the 25-minute CalMac ferry across to Raasay. Welcome dram waiting at the distillery.",
      attractions: [
        { name: "Eilean Donan Castle",     wiki: "Eilean_Donan",            desc: "The most photographed castle in Scotland, on a tidal island where three sea lochs meet. Allow 1.5 hours — perfect mid-morning break on the long drive.", url: "https://www.eileandonancastle.com", locale: "Dornie" },
        { name: "Five Sisters of Kintail", wiki: "Five_Sisters_of_Kintail", desc: "Scotland's most dramatic mountain drive — the scenery from the car IS the experience. Slow down on the A87 through Glen Shiel.", locale: "Glen Shiel" },
        { name: "Skye Bridge",             wiki: "Skye_Bridge",             desc: "Free crossing onto Skye at Kyle of Lochalsh — your first taste of the island.", locale: "Kyle of Lochalsh" },
        { name: "Sconser ferry pier",      wiki: null,                       desc: "CalMac ferry departure to Raasay. 25-minute crossing, ~9 services a day. Book the car in advance via calmac.co.uk.", url: "https://www.calmac.co.uk/sconser-raasay", locale: "Sconser" }
      ],
      hotels: [],
      restaurants: []
    },

    {
      num: 7, date: "Sun 26 Jul", weekday: "Sunday",
      title: "Raasay — Distillery and Dùn Caan",
      leg: "Full day on Raasay",
      route: "Local · 20 miles",
      miles: "20", drive: "—",
      overnight: "Raasay — Borodale House",
      hero: "Isle_of_Raasay",
      blurb: "A full day on Raasay. Start at the distillery (your hotel) for the morning tour — single malt at sea level. After lunch, walk Dùn Caan, the flat-topped summit at 444m — four to five hours return, classic Hebridean views over to the Cuillin. Evening dram in front of the fire.",
      attractions: [
        { name: "Isle of Raasay Distillery", wiki: null, desc: "Working single-malt distillery opened 2017 — first on Raasay in 170+ years. Standard 90-min tour with tastings, available daily. Restaurant and dramming room for guests.", url: "https://raasaydistillery.com/", locale: "Raasay" },
        { name: "Dùn Caan",                  wiki: "Dùn_Caan", desc: "Raasay's flat-topped summit, 444m. 4–5 hour return walk from Inverarish, well-trodden path. Boswell and Johnson danced on the top in 1773.", locale: "Raasay" },
        { name: "Raasay House",              wiki: "Raasay_House", desc: "Georgian mansion turned activity centre — café/restaurant, kayaks, bike hire, walking maps.", url: "https://www.raasay-house.co.uk/", locale: "Raasay" },
        { name: "Inverarish & shore walk",   wiki: null, desc: "Raasay's main village — small shop, primary school, distillery on the hill. Walk south along the shore for the iron mining ruins.", locale: "Raasay" }
      ],
      hotels: [],
      restaurants: [
        { name: "Borodale House restaurant", note: "On-site at the distillery — for hotel residents, with the full Raasay-aged whisky list.", url: "https://raasaydistillery.com/" },
        { name: "Raasay House café",         note: "Casual lunch and dinner option in the Georgian house — the alternative on Raasay.", url: "https://www.raasay-house.co.uk/" }
      ]
    },

    {
      num: 8, date: "Mon 27 Jul", weekday: "Monday",
      title: "Raasay — Calum's Road and the wild north",
      leg: "Drive Inverarish → Arnish via Calum's Road",
      route: "Local · 30 miles round-trip",
      miles: "30", drive: "—",
      overnight: "Raasay — Borodale House",
      hero: "Isle_of_Raasay",
      blurb: "Today is about Calum's Road — the two-mile single-track to Arnish, built by one man, Calum MacLeod, over ten years after the council refused. Brochel Castle ruins at the southern end. Wild north Raasay walks, otters at dusk on the shore, and a third evening with a Hebridean malt.",
      attractions: [
        { name: "Calum's Road",     wiki: "Calum's_Road", desc: "The famous single-track road to Arnish, hand-built by Calum MacLeod between 1964–74. Drive it slowly. Memorial cairn at the Arnish end.", locale: "Raasay" },
        { name: "Brochel Castle",   wiki: "Brochel_Castle", desc: "Ruined 15th-century clifftop castle of the MacLeods of Raasay — at the start of Calum's Road. Free, dramatic views.", locale: "Raasay" },
        { name: "Hallaig",          wiki: "Hallaig", desc: "Cleared village on the east coast, immortalised in Sorley MacLean's Gaelic poem. Two-hour walk down through woodland from the road.", locale: "Raasay" },
        { name: "North Raasay walks", wiki: null, desc: "Wild walks beyond Arnish — Fladda viewpoint, the lighthouse at Eyre, otter-spotting along the shoreline.", locale: "Raasay" }
      ],
      hotels: [],
      restaurants: [
        { name: "Borodale House restaurant", note: "Final Raasay dinner — the tasting menu pairs each course with a Raasay-aged whisky.", url: "https://raasaydistillery.com/" }
      ]
    },

    {
      num: 9, date: "Tue 28 Jul", weekday: "Tuesday",
      title: "Raasay → Skye",
      leg: "Inverarish ferry → Sconser → Portree",
      route: "Ferry + A87",
      miles: "20", drive: "25-min ferry + 30 min",
      overnight: "Portree, Isle of Skye",
      checkin: "2026-07-28", checkout: "2026-07-31",
      hero: "Sligachan",
      blurb: "Pack up after a leisurely distillery breakfast. Morning ferry from Inverarish back to Sconser, then a short drive north — pause at Sligachan Old Bridge for the iconic Cuillin view before checking in at Portree. Afternoon free for the harbour, a Storr scouting drive, or simply Portree café crawling.",
      attractions: [
        { name: "Sligachan Old Bridge",  wiki: "Sligachan", desc: "The classic Skye photograph — the old stone bridge with the Cuillin Black ridge behind. Five minutes from Sconser, on the A87.", locale: "Sligachan" },
        { name: "Portree harbour",       wiki: "Portree",   desc: "Pastel-painted houses around the harbour — Skye's main town. Afternoon walking, shops, dinner spots all here.", locale: "Portree" }
      ],
      hotels: [
        { name: "Cuillin Hills Hotel", style: "Victorian country house with bay views", price: "£140–£180", url: "https://www.cuillinhills-hotel-skye.co.uk", locale: "Portree" },
        { name: "Bosville Hotel",      style: "Boutique, central Portree",              price: "£120–£160", url: "https://www.bosvillehotel.co.uk",          locale: "Portree" },
        { name: "Rosedale Hotel",      style: "Harbourfront, traditional",              price: "£110–£140", url: "https://www.rosedalehotelskye.co.uk",      locale: "Portree" }
      ],
      restaurants: []
    },

    {
      num: 10, date: "Wed 29 Jul", weekday: "Wednesday",
      title: "Skye Day 1 — Trotternish",
      leg: "The dramatic north — Quiraing, Storr, Kilt Rock",
      route: "Island loop · north",
      miles: "60", drive: "—",
      overnight: "Portree, Isle of Skye",
      hero: "Old_Man_of_Storr",
      blurb: "Start with Trotternish in the morning before crowds arrive. Quiraing and Old Man of Storr are both genuinely worth a 2–3 hour walk each. Kilt Rock is a five-minute viewpoint on the way back south.",
      attractions: [
        { name: "The Quiraing",            wiki: "Quiraing",            desc: "Dramatic landslip landscape of pinnacles and hidden plateaus — arrive before 9am.", locale: "Staffin" },
        { name: "Old Man of Storr",        wiki: "Old_Man_of_Storr",    desc: "Iconic rock pinnacle — 45-minute walk up, well worth the climb.", locale: "Trotternish" },
        { name: "Kilt Rock & Mealt Falls", wiki: "Kilt_Rock",           desc: "Columnar basalt sea cliff that genuinely looks like a kilt. Five-minute viewpoint walk.", locale: "Trotternish" }
      ],
      hotels: [],
      restaurants: [
        { name: "Scorrybreac",      note: "Finest restaurant on Skye — tasting menu, local produce. Book weeks ahead.", url: "https://www.scorrybreac.com" },
        { name: "Dulse and Brose",  note: "Dependable bistro inside the Bosville Hotel.",                                url: "https://www.bosvillehotel.co.uk/eat-drink/" }
      ]
    },

    {
      num: 11, date: "Thu 30 Jul", weekday: "Thursday",
      title: "Skye Day 2 — Cuillin & West",
      leg: "Fairy Pools · Talisker · Dunvegan · Neist Point",
      route: "Island loop · west",
      miles: "75", drive: "—",
      overnight: "Portree, Isle of Skye",
      hero: "Neist_Point",
      blurb: "The Cuillin side of Skye. Fairy Pools first thing (arrive before 9am), Talisker Distillery for the peat-smoke tour, Dunvegan Castle and the Coral Beaches, and Neist Point Lighthouse on the westernmost tip for sunset. The Elgol boat to Loch Coruisk is an alternative half-day.",
      attractions: [
        { name: "Fairy Pools",             wiki: "Fairy_Pools",    desc: "Crystal-clear turquoise pools and waterfalls at the foot of the Cuillin. 30-min walk each way. Arrive early — extremely popular.", locale: "Glenbrittle" },
        { name: "Talisker Distillery",     wiki: "Talisker_distillery", desc: "Skye's only single malt distillery, on the shores of Loch Harport. The peat-smoke standard tour is excellent — book ahead.", url: "https://www.malts.com/en-row/distilleries/talisker/", locale: "Carbost" },
        { name: "Dunvegan Castle",         wiki: "Dunvegan_Castle", desc: "Oldest continuously inhabited castle in Scotland, seat of Clan MacLeod. Allow two hours.", url: "https://www.dunvegancastle.com", locale: "Dunvegan" },
        { name: "Claigan Coral Beaches",   wiki: "Claigan",         desc: "Crushed white coralline algae makes these beaches glow against turquoise sea. 30-min walk from the car park near Dunvegan.", locale: "Dunvegan" },
        { name: "Neist Point Lighthouse",  wiki: "Neist_Point",     desc: "The westernmost point of Skye, with a clifftop lighthouse and views to the Outer Hebrides. 25-min walk each way — best at sunset.", locale: "Glendale" },
        { name: "Elgol & Loch Coruisk boat trip", wiki: "Loch_Coruisk", desc: "Small boat from Elgol pier into Loch Coruisk — surrounded by the Black Cuillin, the most dramatic anchorage in Britain. ~4 hours round trip. Book ahead.", url: "https://bellajane.co.uk/", locale: "Elgol" }
      ],
      hotels: [],
      restaurants: [
        { name: "Loch Bay Restaurant", note: "Michelin-starred seafood in Stein, Waternish — 30 min north of Portree. Book weeks ahead.", url: "https://www.lochbay-restaurant.co.uk/" }
      ]
    },

    {
      num: 12, date: "Fri 31 Jul", weekday: "Friday",
      title: "Skye → Glencoe",
      leg: "Skye Bridge · Glen Shiel · Fort William · Glencoe",
      route: "A87 · A82",
      miles: "100", drive: "2.5 hrs",
      overnight: "Glencoe / Ballachulish",
      checkin: "2026-07-31", checkout: "2026-08-01",
      hero: "Three_Sisters_of_Glencoe",
      blurb: "Leave Portree in good time. Back across the Skye Bridge and south through Glen Shiel (Eilean Donan already done on Day 6). Lunch in Fort William under Ben Nevis, then the Three Sisters of Glencoe in late afternoon and a walkers' inn dinner at the Clachaig.",
      attractions: [
        { name: "Five Sisters of Kintail", wiki: "Five_Sisters_of_Kintail", desc: "One of Scotland's great mountain drives — second pass through, now southbound. The scenery from the car is the experience.", locale: "Glen Shiel" },
        { name: "Ben Nevis",                wiki: "Ben_Nevis",       desc: "Britain's highest mountain at 1,345m. Drive into Glen Nevis for the view from the foot of the mountain.", locale: "Fort William" },
        { name: "Glen Nevis gorge walk",    wiki: "Glen_Nevis",     desc: "1–2 hour walk through dramatic gorge — no equipment needed.", locale: "Fort William" },
        { name: "Glencoe Visitor Centre",   wiki: "Glen_Coe",      desc: "Context on the 1692 Massacre of Glencoe. Walk the Signal Rock loop afterwards.", url: "https://www.nts.org.uk/visit/places/glencoe", locale: "Glencoe" },
        { name: "Three Sisters of Glencoe", wiki: "Glen_Coe",      desc: "The unmissable viewpoint on the A82 — pull over and take it in.", locale: "Glencoe" }
      ],
      hotels: [
        { name: "Clachaig Inn",        style: "Legendary walkers' inn, in the glen itself", price: "£110–£150", url: "https://www.clachaig.com",            locale: "Glencoe" },
        { name: "Ballachulish Hotel",  style: "Lochside, outstanding views",                 price: "£130–£170", url: "https://www.ballachulish-hotel.co.uk", locale: "Ballachulish" }
      ],
      restaurants: []
    },

    {
      num: 13, date: "Sat 1 Aug", weekday: "Saturday",
      title: "Glencoe → Glasgow via Glenfinnan",
      leg: "Glen Etive · Glenfinnan Viaduct · Loch Lomond",
      route: "A82 · A830",
      miles: "130", drive: "3.5 hrs",
      overnight: "Glasgow",
      checkin: "2026-08-01", checkout: "2026-08-02",
      hero: "Glenfinnan_Viaduct",
      blurb: "Last day in the Highlands. Glen Etive at dawn for the Skyfall view, the Glenfinnan Viaduct (or the Jacobite Steam Train if you booked it), and Loch Lomond's western shore at Luss before pulling into Glasgow for one well-earned final dinner.",
      attractions: [
        { name: "Glen Etive",            wiki: "Glen_Etive",         desc: "12-mile dead-end road into a remote, beautiful glen used in James Bond Skyfall. Allow an hour for the round trip.", locale: "Glencoe" },
        { name: "Glenfinnan Viaduct",    wiki: "Glenfinnan_Viaduct", desc: "21-arch Victorian railway viaduct featured in the Harry Potter films. 15-minute walk to the viewpoint.", locale: "Glenfinnan" },
        { name: "Glenfinnan Monument",   wiki: "Glenfinnan_Monument", desc: "Marks where Bonnie Prince Charlie raised his standard in 1745.", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument", locale: "Glenfinnan" },
        { name: "Jacobite Steam Train",  wiki: "Jacobite_(train)",   desc: "Fort William to Mallaig and back — one of the great railway journeys in the world. Book months ahead.", url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip", locale: "Fort William" },
        { name: "Luss village",          wiki: "Luss",               desc: "Picturesque estate cottages on the western shore of Loch Lomond. Pub lunch at the Luss Inn.", url: "https://www.lochlomond-trossachs.org/places/luss/", locale: "Loch Lomond" }
      ],
      hotels: [
        { name: "Kimpton Blythswood Square", style: "5-star, 10-min walk to Glasgow Central", price: "£180–£230", url: "https://www.kimptonblythswoodsquare.com",        locale: "Glasgow" },
        { name: "Hotel du Vin Glasgow",      style: "Boutique, great wine bar",               price: "£120–£160", url: "https://www.hotelduvin.com/locations/glasgow/",    locale: "Glasgow" },
        { name: "Dakota Glasgow",            style: "Design hotel, excellent service",        price: "£130–£170", url: "https://www.dakotahotels.co.uk/glasgow/",          locale: "Glasgow" }
      ],
      restaurants: [
        { name: "Cail Bruich",     note: "Michelin Bib Gourmand — book well ahead.",  url: "https://www.cailbruich.co.uk" },
        { name: "Ubiquitous Chip", note: "Glasgow institution, beautiful courtyard.", url: "https://www.ubiquitouschip.co.uk" }
      ]
    },

    {
      num: 14, date: "Sun 2 Aug", weekday: "Sunday",
      title: "Glasgow → Oxford",
      leg: "M74 · M6 · M40 — handover day",
      route: "M74 · M6 · M40",
      miles: "350", drive: "5–5.5 hrs",
      overnight: "Oxford",
      hero: "Oxford",
      blurb: "Depart Glasgow 07:00–07:30. M74 is clear on Sunday mornings. Join M6 at Carlisle, M40 at Birmingham, exit at J8A (Wheatley) for Oxford. Arrive 12:30–13:30 — comfortable for the afternoon check-in.",
      attractions: [
        { name: "Oxford city centre", wiki: "Oxford", desc: "Walk to your daughter's college, find lunch, drop the car.", locale: "Oxford" }
      ],
      hotels: [],
      restaurants: []
    }
  ]
};
