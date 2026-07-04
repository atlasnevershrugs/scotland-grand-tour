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
    { label: "Total miles", value: "~1,150" },
    { label: "Driving days", value: "9" }
  ],

  route: [
    { lat: 55.9533, lng: -3.1883, label: "Edinburgh",     nights: "1–2",   day: 1  },
    { lat: 56.7058, lng: -3.7290, label: "Pitlochry",     nights: "3",     day: 3  },
    { lat: 57.3315, lng: -4.4733, label: "Drumnadrochit", nights: "4–5",   day: 4  },
    { lat: 57.3700, lng: -6.0676, label: "Raasay",        nights: "6–8",   day: 6  },
    { lat: 57.5470, lng: -5.5100, label: "Torridon",      nights: "9",     day: 9  },
    { lat: 56.8198, lng: -5.1052, label: "Fort William",  nights: "10",    day: 10 },
    { lat: 56.6863, lng: -5.0987, label: "Glencoe",       nights: "11–12", day: 11 },
    { lat: 55.8642, lng: -4.2518, label: "Glasgow",       nights: "13",    day: 13 },
    { lat: 51.7520, lng: -1.2577, label: "Oxford",        nights: "drop-off", day: 14 }
  ],

  detours: [
    { lat: 57.4806, lng: -4.4925, label: "Culloden",            day: 5  },
    { lat: 57.3239, lng: -4.4426, label: "Urquhart Castle",     day: 5  },
    { lat: 57.5747, lng: -4.0936, label: "Chanonry Point",      day: 5  },
    { lat: 57.2740, lng: -5.5161, label: "Eilean Donan",        day: 6  },
    { lat: 57.3236, lng: -6.1083, label: "Sconser ferry",       day: 6  },
    { lat: 57.6437, lng: -6.2680, label: "Quiraing",            day: 7  },
    { lat: 57.5070, lng: -6.1836, label: "Old Man of Storr",    day: 7  },
    { lat: 57.6083, lng: -6.1636, label: "Kilt Rock",           day: 7  },
    { lat: 57.2493, lng: -6.2599, label: "Fairy Pools",         day: 8  },
    { lat: 57.3025, lng: -6.3919, label: "Talisker",            day: 8  },
    { lat: 57.4256, lng: -6.7876, label: "Neist Point",         day: 8  },
    { lat: 57.1450, lng: -6.1130, label: "Elgol",               day: 8  },
    { lat: 57.4200, lng: -5.7000, label: "Bealach na Bà",       day: 9  },
    { lat: 57.4344, lng: -5.8160, label: "Applecross",          day: 9  },
    { lat: 57.6100, lng: -5.3500, label: "Beinn Eighe",         day: 10 },
    { lat: 57.6900, lng: -5.4700, label: "Loch Maree",          day: 10 },
    { lat: 56.8728, lng: -5.4357, label: "Glenfinnan",          day: 11 },
    { lat: 56.7969, lng: -5.0037, label: "Ben Nevis",           day: 11 },
    { lat: 56.6164, lng: -5.0034, label: "Glen Etive",          day: 12 },
    { lat: 56.0959, lng: -4.6356, label: "Luss",                day: 13 }
  ],

  carRental: [
    { name: "Enterprise", note: "Depots at Edinburgh Airport and Oxford city centre. One-way fee typically £80–£150.", url: "https://www.enterprise.co.uk", recommended: true },
    { name: "Europcar",   note: "Same route coverage, competitive pricing.", url: "https://www.europcar.co.uk" },
    { name: "Rentalcars.com", note: "Compare all providers, one-way fees shown upfront.", url: "https://www.rentalcars.com" }
  ],

  priorityBookings: [
    { rank: 1,  what: "Isle of Raasay Distillery",     dates: "Sat 25 Jul → Tue 28 Jul · 3 nights",  why: "Borodale House at the working distillery — your Skye base",   url: "https://raasaydistillery.com/visit/borodale-house/" },
    { rank: 2,  what: "Clachaig Inn, Glencoe",         dates: "Thu 30 Jul → Sat 1 Aug · 2 nights",    why: "Sells out 3–4 months ahead",                                  url: "https://www.clachaig.com" },
    { rank: 3,  what: "CalMac Sconser↔Raasay ferry",   dates: "Sat 25 Jul + day-trips + Tue 28 out",  why: "Foot passengers — book/verify Sconser parking",              url: "https://www.calmac.co.uk/sconser-raasay" },
    { rank: 4,  what: "Jacobite Steam Train",          dates: "Thu 30 Jul · Day 11 morning",          why: "Sells out months ahead in summer",                            url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { rank: 5,  what: "Torridon area",                 dates: "Tue 28 Jul → Wed 29 Jul · 1 night",    why: "Remote, tiny stock — book early",                             url: "https://www.thetorridon.com" },
    { rank: 6,  what: "Fort William",                  dates: "Wed 29 Jul → Thu 30 Jul · 1 night",    why: "Busy hub for the Jacobite train — book early",                url: "https://www.booking.com/searchresults.html?ss=Fort+William" },
    { rank: 7,  what: "Applecross Inn lunch",          dates: "Tue 28 Jul · Day 9 lunch",             why: "Famous pub, books up fast",                                   url: "https://www.applecross.uk.com/inn/" },
    { rank: 8,  what: "Edinburgh",                     dates: "Mon 20 Jul → Wed 22 Jul · 2 nights",   why: "City centre fills up in July",                                url: "https://www.booking.com/searchresults.html?ss=Edinburgh" },
    { rank: 9,  what: "Glasgow",                        dates: "Sat 1 Aug → Sun 2 Aug · 1 night",      why: "Last night before the Oxford drive",                          url: "https://www.booking.com/searchresults.html?ss=Glasgow" },
    { rank: 10, what: "Elgol boat trip (optional)",    dates: "Mon 27 Jul · Day 8",                   why: "Loch Coruisk — small boats, limited slots",                   url: "https://bellajane.co.uk/" }
  ],

  practical: [
    { title: "Leave the car on Skye", body: "Borodale is a 12-min walk from the Raasay pier and you tour Skye every day — so park the car at Sconser and cross as foot passengers (~£4 return vs ~£16 for the car). Confirm multi-day Sconser parking with CalMac / the distillery, and ask Borodale about a luggage pickup at the pier." },
    { title: "Sconser ↔ Raasay ferry", body: "CalMac, 25-min crossing, ~9 sailings/day on weekdays (fewer on Sundays — first ~10am). As foot passengers you can turn up and go, but verify the timetable for your Skye day-trips at calmac.co.uk." },
    { title: "Fuel", body: "Fill up at every petrol station in the Highlands. Stations can be 30–40 miles apart and close by 6–7pm. Top up in Inverness, on Skye (Portree/Broadford), Lochcarron, and at Fort William." },
    { title: "Midges", body: "July and August are peak midge season. Buy Smidge spray on arrival (pharmacies and outdoor shops). Worst at dawn and dusk in still, humid air." },
    { title: "Bealach na Bà", body: "Day 9. Single-track with 20% gradients and tight hairpin bends. Manageable in a standard hire car at low speed. In poor conditions, take the coastal road via Lochcarron instead." },
    { title: "Oxford LEZ", body: "Oxford city centre has a Low Emission Zone. Most modern hire cars comply, but confirm with your rental company before drop-off." }
  ],

  restaurantsToBook: [
    { name: "Isle of Raasay Distillery dinner", when: "Days 6–8 — for hotel guests; arrange at check-in", url: "https://raasaydistillery.com/" },
    { name: "Applecross Inn",       when: "Tue 28 Jul · Day 9 lunch", url: "https://www.applecross.uk.com/inn/" },
    { name: "Jacobite Steam Train", when: "Thu 30 Jul · Day 11 morning", url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
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
      overnight: "Pitlochry",
      checkin: "2026-07-22", checkout: "2026-07-23",
      hero: "Pitlochry",
      blurb: "Take the A93 through Braemar instead of the A9. The Hermitage waterfall and Queen's View are unmissable; Balmoral and Blair Castle are picks based on your appetite.",
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
      overnight: "Drumnadrochit",
      checkin: "2026-07-23", checkout: "2026-07-25",
      hero: "Inverness",
      blurb: "The A9 climbs over the Pass of Drumochter (highest A-road in the UK at 460m). Continue past Inverness down the western shore of Loch Ness to Drumnadrochit — base for the next two nights, with Urquhart Castle a short drive away.",
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
      blurb: "From Drumnadrochit, Urquhart Castle and a Loch Ness cruise are a 5-minute drive. Add Culloden (25 min via Inverness) and a chance at wild dolphins at Chanonry Point in the afternoon (35 min).",
      attractions: [
        { name: "Urquhart Castle",      wiki: "Urquhart_Castle",    desc: "Dramatic ruined castle on the shore of Loch Ness — 5-minute drive from Drumnadrochit. Best views from the tower.", url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/", locale: "Drumnadrochit" },
        { name: "Loch Ness Cruise",     wiki: "Loch_Ness",          desc: "Jacobite Cruises depart from Drumnadrochit pier (and Tomnahurich Bridge in Inverness) — see the loch from the water.", url: "https://www.jacobite.co.uk", locale: "Loch Ness" },
        { name: "Culloden Battlefield", wiki: "Battle_of_Culloden", desc: "Site of the last battle on British soil (1746). Outstanding visitor centre — book online, allow two hours.", url: "https://www.nts.org.uk/visit/places/culloden", locale: "Inverness" },
        { name: "Inverness Castle",     wiki: "Inverness_Castle",   desc: "Recently reopened visitor attraction with panoramic city views.", url: "https://www.invernesscastle.com", locale: "Inverness" },
        { name: "Chanonry Point",       wiki: "Chanonry_Point",     desc: "One of the best places in the UK to see wild bottlenose dolphins from shore. Best one hour after low tide.", locale: "Fortrose" },
        { name: "Moray Firth",          wiki: "Moray_Firth",        desc: "Coastal drive through the Black Isle — seals, seabirds, big skies.", locale: "Black Isle" }
      ],
      hotels: [],
      restaurants: [
        { name: "Fiddler's, Drumnadrochit", note: "Local highland pub with proper portions and an absurd whisky list.", url: "https://fiddledrum.co.uk/" },
        { name: "The Mustard Seed (Inverness)", note: "Riverside, good value, locally driven menu.", url: "https://www.mustardseedrestaurant.co.uk" }
      ]
    },

    {
      num: 6, date: "Sat 25 Jul", weekday: "Saturday",
      title: "Drumnadrochit → Raasay",
      leg: "A82 · A87 · Eilean Donan · Skye Bridge · Sconser ferry",
      route: "A82 · A87",
      miles: "140", drive: "4 hrs + 25 min ferry",
      overnight: "Raasay",
      checkin: "2026-07-25", checkout: "2026-07-28",
      hero: "Isle_of_Raasay",
      blurb: "The long drive west — A82 south then A87 through Kintail. Pause for Eilean Donan in the morning light and the Five Sisters through the windscreen. Over the Skye Bridge to Sconser, park the car, and cross to Raasay as foot passengers. Distillery tour and dinner on-site tonight.",
      attractions: [
        { name: "Eilean Donan Castle",     wiki: "Eilean_Donan",            desc: "The most photographed castle in Scotland, on a tidal island where three sea lochs meet. Perfect mid-morning break on the long drive.", url: "https://www.eileandonancastle.com", locale: "Dornie" },
        { name: "Five Sisters of Kintail", wiki: "Five_Sisters_of_Kintail", desc: "Scotland's most dramatic mountain drive — the scenery from the car IS the experience. Slow down on the A87 through Glen Shiel.", locale: "Glen Shiel" },
        { name: "Skye Bridge",             wiki: "Skye_Bridge",             desc: "Free crossing onto Skye at Kyle of Lochalsh — you'll cross this several times over the coming days.", locale: "Kyle of Lochalsh" },
        { name: "Isle of Raasay Distillery", wiki: null, desc: "Your base for three nights — a working single-malt distillery opened 2017, the first on Raasay in 170+ years. Evening tour and tastings for guests.", url: "https://raasaydistillery.com/", locale: "Raasay" }
      ],
      hotels: [],
      restaurants: []
    },

    {
      num: 7, date: "Sun 26 Jul", weekday: "Sunday",
      title: "Skye day-trip — Trotternish",
      leg: "Foot ferry to Sconser · north Skye",
      route: "Ferry + Skye A855 loop",
      miles: "70", drive: "—",
      overnight: "Raasay",
      hero: "Old_Man_of_Storr",
      blurb: "Ferry across to your Skye-parked car and drive north to the Trotternish peninsula. Quiraing and Old Man of Storr are both worth a 2–3 hour walk each; Kilt Rock is a five-minute viewpoint. Sunday ferries are limited (first ~10am, last back ~6pm) so keep an eye on the return sailing.",
      attractions: [
        { name: "The Quiraing",            wiki: "Quiraing",            desc: "Dramatic landslip landscape of pinnacles and hidden plateaus. About 1 hr from Sconser.", locale: "Staffin" },
        { name: "Old Man of Storr",        wiki: "Old_Man_of_Storr",    desc: "Iconic rock pinnacle — 45-minute walk up, well worth the climb.", locale: "Trotternish" },
        { name: "Kilt Rock & Mealt Falls", wiki: "Kilt_Rock",           desc: "Columnar basalt sea cliff that genuinely looks like a kilt. Five-minute viewpoint walk.", locale: "Trotternish" }
      ],
      hotels: [],
      restaurants: [
        { name: "Borodale House restaurant", note: "Back on Raasay for dinner — the full Raasay-aged whisky list.", url: "https://raasaydistillery.com/" }
      ]
    },

    {
      num: 8, date: "Mon 27 Jul", weekday: "Monday",
      title: "Skye day-trip — Cuillin & West",
      leg: "Foot ferry to Sconser · west Skye",
      route: "Ferry + Skye west loop",
      miles: "90", drive: "—",
      overnight: "Raasay",
      hero: "Neist_Point",
      blurb: "Weekday early ferry means you can beat the crowds. Fairy Pools first thing, Talisker Distillery, Dunvegan Castle and the Coral Beaches, and Neist Point Lighthouse on the westernmost tip. The Elgol boat to Loch Coruisk is an alternative half-day.",
      attractions: [
        { name: "Fairy Pools",             wiki: "Fairy_Pools",    desc: "Crystal-clear turquoise pools and waterfalls at the foot of the Cuillin. Arrive before 9am — get the early ferry.", locale: "Glenbrittle" },
        { name: "Talisker Distillery",     wiki: "Talisker_distillery", desc: "Skye's only single malt distillery, on the shores of Loch Harport. The peat-smoke standard tour is excellent — book ahead.", url: "https://www.malts.com/en-row/distilleries/talisker/", locale: "Carbost" },
        { name: "Dunvegan Castle",         wiki: "Dunvegan_Castle", desc: "Oldest continuously inhabited castle in Scotland, seat of Clan MacLeod. Allow two hours.", url: "https://www.dunvegancastle.com", locale: "Dunvegan" },
        { name: "Claigan Coral Beaches",   wiki: "Claigan",         desc: "Crushed white coralline algae makes these beaches glow against turquoise sea. 30-min walk from the car park near Dunvegan.", locale: "Dunvegan" },
        { name: "Neist Point Lighthouse",  wiki: "Neist_Point",     desc: "The westernmost point of Skye, with a clifftop lighthouse and views to the Outer Hebrides. 25-min walk each way.", locale: "Glendale" },
        { name: "Elgol & Loch Coruisk boat trip", wiki: "Loch_Coruisk", desc: "Small boat from Elgol pier into Loch Coruisk — surrounded by the Black Cuillin. ~4 hours round trip. Book ahead.", url: "https://bellajane.co.uk/", locale: "Elgol" }
      ],
      hotels: [],
      restaurants: [
        { name: "Scorrybreac (Portree)", note: "Finest restaurant on Skye — tasting menu. If you want a Skye dinner, book this and take a later ferry back.", url: "https://www.scorrybreac.com" }
      ]
    },

    {
      num: 9, date: "Tue 28 Jul", weekday: "Tuesday",
      title: "Raasay → Torridon via Bealach na Bà",
      leg: "Ferry off · Skye Bridge · Bealach na Bà · Applecross",
      route: "A87 · A896 · Bealach na Bà",
      miles: "95", drive: "3.5 hrs",
      overnight: "Torridon",
      checkin: "2026-07-28", checkout: "2026-07-29",
      hero: "Bealach_na_B%C3%A0",
      blurb: "A quick Raasay morning (Calum's Road drive, distillery shop), then the final ferry to Sconser and off the island. Over the Skye Bridge to the mainland and the legendary Bealach na Bà — the Pass of the Cattle — climbing 626m in hairpin bends. Lunch at the Applecross Inn, then north into Torridon.",
      attractions: [
        { name: "Calum's Road",     wiki: "Calum's_Road", desc: "Quick morning drive before the ferry — the two-mile single-track to Arnish, hand-built by one man over ten years. Brochel Castle ruins at the start.", locale: "Raasay" },
        { name: "Bealach na Bà",    wiki: "Bealach_na_B%C3%A0", desc: "The Pass of the Cattle — 20% gradients, hairpins, and on a clear day a view back to Skye and the Outer Hebrides.", locale: "Applecross" },
        { name: "Applecross village", wiki: "Applecross", desc: "Tiny west-coast village at the foot of the pass. The Applecross Inn is one of the most famous pubs in Scotland — langoustines, crab, haddock. Book lunch ahead.", url: "https://www.applecross.uk.com/inn/", locale: "Applecross" },
        { name: "Shieldaig village", wiki: "Shieldaig", desc: "Small fishing village on Loch Torridon — a good coffee or photo stop as you come into Torridon.", locale: "Shieldaig" }
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
      title: "Torridon walking day → Fort William",
      leg: "Beinn Eighe · Loch Maree · drive south",
      route: "A896 · A87 · A82",
      miles: "95", drive: "2.5 hrs (after walks)",
      overnight: "Fort William",
      checkin: "2026-07-29", checkout: "2026-07-30",
      hero: "Beinn_Eighe",
      blurb: "The morning is the recovered Torridon walking day — the Beinn Eighe Mountain Trail climbs to 550m through 750-million-year-old sandstone for some of Scotland's finest mountain views. Drive the length of Loch Maree, then head south to Fort William for the night, ready for the Jacobite train.",
      attractions: [
        { name: "Beinn Eighe Mountain Trail", wiki: "Beinn_Eighe", desc: "The proper waymarked walk — 4 miles, climbing to 550m. 3–4 hours, well-marked, from the Coille na Glas-Leitire car park near Kinlochewe.", url: "https://www.nnr.scot/nnr/beinn-eighe/", locale: "Kinlochewe" },
        { name: "Loch Maree",                 wiki: "Loch_Maree", desc: "One of Scotland's most beautiful lochs, with ancient Caledonian pine islands and Slioch rising on the far shore. Drive the A832 along its length.", locale: "Wester Ross" }
      ],
      hotels: [
        { name: "The Lime Tree",         style: "Art-gallery hotel in an old manse",    price: "£130–£170", url: "https://www.limetreefortwilliam.co.uk/", locale: "Fort William" },
        { name: "Glenfinnan House Hotel", style: "Historic country house by Loch Shiel", price: "£160–£210", url: "https://www.glenfinnanhouse.com/", locale: "Glenfinnan" },
        { name: "Fort William centre (Airbnb/hotels)", style: "Wide choice near the High Street & station", price: "£110–£200", url: "https://www.booking.com/searchresults.html?ss=Fort+William", locale: "Fort William" }
      ],
      restaurants: [
        { name: "Crannog Restaurant", note: "Loch-side seafood on Fort William's old pier.", url: "https://crannog.net/" }
      ]
    },

    {
      num: 11, date: "Thu 30 Jul", weekday: "Thursday",
      title: "Glenfinnan & the Jacobite → Glencoe",
      leg: "Jacobite Steam Train · Glenfinnan · Ben Nevis · A82 south",
      route: "A830 · A82",
      miles: "50", drive: "1.5 hrs",
      overnight: "Glencoe / Ballachulish",
      checkin: "2026-07-30", checkout: "2026-08-01",
      hero: "Glenfinnan_Viaduct",
      blurb: "The Jacobite Steam Train departs Fort William 10:15 and crosses the Glenfinnan Viaduct — one of the great railway journeys in the world (book months ahead). If you'd rather drive, the Glenfinnan viewpoint gives the classic shot. Ben Nevis and Glen Nevis are on the doorstep. Then the short drive south to Glencoe for two nights.",
      attractions: [
        { name: "Jacobite Steam Train",  wiki: "Jacobite_(train)",   desc: "Fort William to Mallaig and back, crossing the viaduct. Departs 10:15, returns 16:00. Book months ahead.", url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip", locale: "Fort William" },
        { name: "Glenfinnan Viaduct",    wiki: "Glenfinnan_Viaduct", desc: "21-arch Victorian railway viaduct featured in the Harry Potter films. 15-minute walk to the viewpoint if you're not on the train.", locale: "Glenfinnan" },
        { name: "Glenfinnan Monument",   wiki: "Glenfinnan_Monument", desc: "Marks where Bonnie Prince Charlie raised his standard in 1745.", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument", locale: "Glenfinnan" },
        { name: "Ben Nevis",             wiki: "Ben_Nevis",       desc: "Britain's highest mountain at 1,345m. View it from the Glen Nevis road at the foot of the mountain.", locale: "Fort William" },
        { name: "Glen Nevis gorge walk", wiki: "Glen_Nevis",     desc: "1–2 hour walk through a dramatic gorge to Steall Falls — no equipment needed. If the train ate the morning, save this for another trip.", locale: "Fort William" }
      ],
      hotels: [
        { name: "Clachaig Inn",        style: "Legendary walkers' inn, in the glen itself", price: "£110–£150", url: "https://www.clachaig.com",            locale: "Glencoe" },
        { name: "Ballachulish Hotel",  style: "Lochside, outstanding views",                 price: "£130–£170", url: "https://www.ballachulish-hotel.co.uk", locale: "Ballachulish" }
      ],
      restaurants: []
    },

    {
      num: 12, date: "Fri 31 Jul", weekday: "Friday",
      title: "Glencoe day",
      leg: "Three Sisters · Glen Etive · Lost Valley walk",
      route: "Local · A82 · Glen Etive",
      miles: "40", drive: "—",
      overnight: "Glencoe / Ballachulish",
      hero: "Glen_Coe",
      blurb: "A full day in the glen. The Three Sisters viewpoint on the A82 is unmissable. Walk the Lost Valley (Coire Gabhail, 2–3 hrs) where the MacDonalds hid their cattle, drive the dead-end Glen Etive road (the Skyfall location), and get context at the Glencoe Visitor Centre.",
      attractions: [
        { name: "Three Sisters of Glencoe", wiki: "Glen_Coe",    desc: "The unmissable viewpoint on the A82 — pull over and take it in.", locale: "Glencoe" },
        { name: "Glencoe Visitor Centre",   wiki: "Glen_Coe",    desc: "Context on the 1692 Massacre of Glencoe. Walk the Signal Rock loop afterwards.", url: "https://www.nts.org.uk/visit/places/glencoe", locale: "Glencoe" },
        { name: "Glen Etive",               wiki: "Glen_Etive",  desc: "12-mile dead-end road into a remote, beautiful glen used in James Bond Skyfall. Allow an hour for the round trip.", locale: "Glencoe" }
      ],
      hotels: [],
      restaurants: [
        { name: "Clachaig Inn (Boots Bar)", note: "The classic Glencoe walkers' dinner — ales, hearty food, mountain company.", url: "https://www.clachaig.com" }
      ]
    },

    {
      num: 13, date: "Sat 1 Aug", weekday: "Saturday",
      title: "Glencoe → Glasgow via Loch Lomond",
      leg: "A82 · Loch Lomond · Luss",
      route: "A82",
      miles: "95", drive: "2.5 hrs",
      overnight: "Glasgow",
      checkin: "2026-08-01", checkout: "2026-08-02",
      hero: "Loch_Lomond",
      blurb: "Drop down the A82 past Rannoch Moor and along the western shore of Loch Lomond. Lunch at Luss, then into Glasgow late afternoon for one final Scottish dinner — Cail Bruich or the Ubiquitous Chip.",
      attractions: [
        { name: "Luss village", wiki: "Luss", desc: "Picturesque estate cottages on the western shore of Loch Lomond. Pub lunch at the Luss Inn, short shoreline walk.", url: "https://www.lochlomond-trossachs.org/places/luss/", locale: "Loch Lomond" }
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
