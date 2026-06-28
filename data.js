// Scotland Grand Tour — Trip Data
// All attractions, hotels, restaurants and route waypoints for the 14-day itinerary.
// Image strategy: `wiki` field is a Wikipedia page title. script.js fetches the
// page's lead image via the Wikipedia REST summary API at runtime (no API key).
// Search URLs are composed from name + locale at render time.

window.TRIP = {
  title: "Scotland Grand Tour",
  subtitle: "Edinburgh to Oxford, by the long way round",
  dates: "Monday 20 July – Sunday 2 August 2026",
  travellers: "2 adults",
  pickup: "Edinburgh Airport",
  dropoff: "Oxford city centre",

  // Search-link defaults — applied to every hotel/Airbnb link via script.js.
  // 15-year-old counts as adult on Airbnb (their policy: 13+ = adult).
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
    { label: "Driving days", value: "12" },
    { label: "Total miles", value: "~1,100" },
    { label: "Overnight stops", value: "8" }
  ],

  // Ordered overnight + handover waypoints for the route line
  route: [
    { lat: 55.9533, lng: -3.1883, label: "Edinburgh",   nights: "1–2",   day: 1  },
    { lat: 56.7058, lng: -3.7290, label: "Pitlochry",   nights: "3",     day: 3  },
    { lat: 57.4778, lng: -4.2247, label: "Inverness",   nights: "4–5",   day: 4  },
    { lat: 57.8954, lng: -5.1592, label: "Ullapool",    nights: "6",     day: 6  },
    { lat: 57.7264, lng: -5.6843, label: "Gairloch",    nights: "7",     day: 7  },
    { lat: 57.4126, lng: -6.1959, label: "Portree (Skye)", nights: "8–9", day: 8 },
    { lat: 56.6863, lng: -5.0987, label: "Glencoe",     nights: "10",    day: 10 },
    { lat: 55.8642, lng: -4.2518, label: "Glasgow",     nights: "11–13", day: 11 },
    { lat: 51.7520, lng: -1.2577, label: "Oxford",      nights: "drop-off", day: 14 }
  ],

  // Detour pins worth showing on the map (key day-trip waypoints)
  detours: [
    { lat: 57.4806, lng: -4.4925, label: "Culloden",         day: 5 },
    { lat: 57.3239, lng: -4.4426, label: "Urquhart Castle",  day: 5 },
    { lat: 57.5747, lng: -4.0936, label: "Chanonry Point",   day: 5 },
    { lat: 57.7589, lng: -4.8597, label: "Corrieshalloch",   day: 6 },
    { lat: 57.4344, lng: -5.8160, label: "Applecross",       day: 8 },
    { lat: 57.4150, lng: -5.6300, label: "Bealach na Bà",    day: 8 },
    { lat: 57.2740, lng: -5.5161, label: "Eilean Donan",     day: 10 },
    { lat: 56.8728, lng: -5.4357, label: "Glenfinnan",       day: 11 },
    { lat: 56.0959, lng: -4.6356, label: "Luss",             day: 11 }
  ],

  carRental: [
    { name: "Enterprise", note: "Depots at Edinburgh Airport and Oxford city centre. One-way fee typically £80–£150.", url: "https://www.enterprise.co.uk", recommended: true },
    { name: "Europcar",   note: "Same route coverage, competitive pricing.", url: "https://www.europcar.co.uk" },
    { name: "Rentalcars.com", note: "Compare all providers, one-way fees shown upfront.", url: "https://www.rentalcars.com" }
  ],

  priorityBookings: [
    { rank: 1,  what: "Portree, Skye (Nights 8–9)",      why: "Fewest beds in Scotland in July",   url: "https://www.cuillinhills-hotel-skye.co.uk" },
    { rank: 2,  what: "Clachaig Inn, Glencoe (Night 10)", why: "Sells out 3–4 months ahead",         url: "https://www.clachaig.com" },
    { rank: 3,  what: "Ullapool (Night 6)",               why: "Tiny village, very few rooms",       url: "https://www.theceilidhplace.com" },
    { rank: 4,  what: "Gairloch (Night 7)",               why: "Remote, very limited stock",         url: "https://www.theoldinn.net" },
    { rank: 5,  what: "Jacobite Steam Train (Day 11)",    why: "Sells out months ahead in summer",   url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { rank: 6,  what: "Applecross Inn lunch (Day 8)",     why: "Famous pub, books up fast",          url: "https://www.applecross.uk.com/inn/" },
    { rank: 7,  what: "Inverness (Nights 4–5)",           why: "Popular city, book early",           url: "https://www.rocpool.com/rocpool-reserve-hotel-inverness/" },
    { rank: 8,  what: "Car rental",                       why: "Peak summer, automatics go fast",    url: "https://www.enterprise.co.uk" },
    { rank: 9,  what: "Edinburgh (Nights 1–2)",           why: "City centre fills up in July",       url: "https://www.booking.com/searchresults.html?ss=Edinburgh" },
    { rank: 10, what: "Scorrybreac, Skye (Day 9 dinner)", why: "Best restaurant on Skye",            url: "https://www.scorrybreac.com" }
  ],

  practical: [
    { title: "Fuel",            body: "Fill up at every petrol station in the Highlands. Stations can be 30–40 miles apart and close by 6–7pm. Top up without fail in Inverness, Ullapool, Gairloch, Portree and Fort William." },
    { title: "Midges",          body: "July and August are peak midge season. Buy Smidge spray on arrival (pharmacies and outdoor shops). Worst at dawn and dusk in still, humid air." },
    { title: "Single-track roads", body: "Pull into passing places on your left when meeting oncoming traffic. Do not drive onto the grass verge — it is often soft. A small wave to other drivers is customary." },
    { title: "Bealach na Bà",   body: "Day 8. Single-track with 20% gradients and tight hairpin bends. Manageable in a standard hire car at low speed. In poor conditions, take the coastal road via Lochcarron instead." },
    { title: "Weather",         body: "Pack waterproof layers regardless of forecast. The west coast catches significantly more rain than the east. Misty days in Glencoe and on Skye are atmospheric, not a disappointment." },
    { title: "Oxford LEZ",      body: "Oxford city centre has a Low Emission Zone. Most modern hire cars comply, but confirm with your rental company before drop-off." }
  ],

  restaurantsToBook: [
    { name: "Applecross Inn",       when: "Day 8 lunch",   url: "https://www.applecross.uk.com/inn/" },
    { name: "Scorrybreac, Skye",    when: "Day 9 dinner",  url: "https://www.scorrybreac.com" },
    { name: "Cail Bruich, Glasgow", when: "Day 12 dinner", url: "https://www.cailbruich.co.uk" },
    { name: "Jacobite Steam Train", when: "Day 11",        url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" }
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
        { name: "Royal Mile",       wiki: "Royal_Mile",      desc: "The medieval spine of the Old Town, running from the Castle down to Holyrood.", locale: "Edinburgh" },
        { name: "Grassmarket",      wiki: "Grassmarket",     desc: "Historic market square below the Castle rock — pubs, bistros, and the evening crowd.", locale: "Edinburgh" }
      ],
      hotels: [
        { name: "The Balmoral Hotel",   style: "5-star landmark on Princes Street", price: "£200–£250", url: "https://www.booking.com/hotel/gb/the-balmoral.html", locale: "Edinburgh" },
        { name: "Nira Caledonia",       style: "Boutique townhouse, New Town",      price: "£160–£200", url: "https://www.niracaledonia.com", locale: "Edinburgh" },
        { name: "Hotel du Vin Edinburgh", style: "Boutique with a great wine bar",  price: "£130–£170", url: "https://www.hotelduvin.com/locations/edinburgh/", locale: "Edinburgh" },
        { name: "Grassmarket Hotel",    style: "Central, good value",               price: "£110–£150", url: "https://www.grassmarkethotel.co.uk", locale: "Edinburgh" }
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
        { name: "Knockendarroch Hotel",  style: "Award-winning boutique B&B",         price: "£130–£160", url: "https://www.knockendarroch.co.uk", locale: "Pitlochry" },
        { name: "Moulin Hotel",          style: "Historic inn with its own brewery",  price: "£90–£120",  url: "https://www.moulinhotel.co.uk",    locale: "Pitlochry" }
      ],
      restaurants: []
    },

    {
      num: 4, date: "Thu 23 Jul", weekday: "Thursday",
      title: "Pitlochry → Inverness",
      leg: "A9 over the Pass of Drumochter",
      route: "A9",
      miles: "75", drive: "1.5 hrs",
      overnight: "Inverness",
      checkin: "2026-07-23", checkout: "2026-07-25",
      hero: "Inverness",
      blurb: "The A9 climbs to 460m — the highest point on any A-road in the UK. Break the drive at Rothiemurchus, ride the Cairngorm funicular on a clear day, and arrive in Inverness in time for the river walk.",
      attractions: [
        { name: "Rothiemurchus Estate",      wiki: "Rothiemurchus",       desc: "Ancient Caledonian pine forest, red squirrels, short waymarked walks. Free.", url: "https://www.rothiemurchus.net", locale: "Aviemore" },
        { name: "Cairngorm Mountain Railway", wiki: "Cairngorm_Mountain_Railway", desc: "Funicular to a 1,097m summit. Spectacular on a clear day.", url: "https://www.cairngormmountain.org", locale: "Aviemore" },
        { name: "Leakey's Bookshop",         wiki: "Leakey%27s_Bookshop", desc: "Largest second-hand bookshop in Scotland, in a converted church.", url: "https://www.leakeysbookshop.com", locale: "Inverness" }
      ],
      hotels: [
        { name: "Rocpool Reserve Hotel", style: "5-star boutique",          price: "£180–£230", url: "https://www.rocpool.com/rocpool-reserve-hotel-inverness/", locale: "Inverness" },
        { name: "Ness Walk Hotel",       style: "5-star riverside",         price: "£200–£250", url: "https://www.nesswalk.com",                                locale: "Inverness" },
        { name: "Heathmount Hotel",      style: "Boutique with great restaurant", price: "£120–£150", url: "https://www.heathmounthotel.com",                  locale: "Inverness" },
        { name: "Ballifeary Guest House", style: "Victorian B&B",           price: "£90–£120",  url: "https://www.ballifeary.co.uk",                            locale: "Inverness" }
      ],
      restaurants: [
        { name: "Rocpool Restaurant", note: "Inverness's modern bistro by the river — book ahead.", url: "https://www.rocpool.com/rocpool-restaurant-inverness/" }
      ]
    },

    {
      num: 5, date: "Fri 24 Jul", weekday: "Friday",
      title: "Inverness day loop",
      leg: "Culloden · Loch Ness · Black Isle",
      route: "60-mile loop",
      miles: "60", drive: "—",
      overnight: "Inverness",
      hero: "Loch_Ness",
      blurb: "A combined loop: Culloden in the morning, Urquhart Castle and a Loch Ness cruise at lunch, and an afternoon at Chanonry Point watching for wild bottlenose dolphins. You will not do everything — choose.",
      attractions: [
        { name: "Culloden Battlefield", wiki: "Battle_of_Culloden", desc: "Site of the last battle on British soil (1746). Outstanding visitor centre — book online, allow two hours.", url: "https://www.nts.org.uk/visit/places/culloden", locale: "Inverness" },
        { name: "Inverness Castle",     wiki: "Inverness_Castle",   desc: "Recently reopened visitor attraction with panoramic city views.", url: "https://www.invernesscastle.com", locale: "Inverness" },
        { name: "Urquhart Castle",      wiki: "Urquhart_Castle",    desc: "Dramatic ruined castle on the shore of Loch Ness — best views from the tower.", url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/", locale: "Drumnadrochit" },
        { name: "Loch Ness Cruise",     wiki: "Loch_Ness",          desc: "Jacobite Cruises from Tomnahurich Bridge or Drumnadrochit — see the loch from the water.", url: "https://www.jacobite.co.uk", locale: "Loch Ness" },
        { name: "Chanonry Point",       wiki: "Chanonry_Point",     desc: "One of the best places in the UK to see wild bottlenose dolphins from shore. Best one hour after low tide.", locale: "Fortrose" },
        { name: "Moray Firth",          wiki: "Moray_Firth",        desc: "Coastal drive through the Black Isle — seals, seabirds, big skies.", locale: "Black Isle" }
      ],
      hotels: [],
      restaurants: [
        { name: "The Mustard Seed", note: "Riverside, good value, locally driven menu.", url: "https://www.mustardseedrestaurant.co.uk" },
        { name: "Inverness Victorian Market", note: "Covered arcade worth a browse before dinner.", url: "https://www.invernessmarket.co.uk" }
      ]
    },

    {
      num: 6, date: "Sat 25 Jul", weekday: "Saturday",
      title: "Inverness → Ullapool",
      leg: "A835 west into the wilderness",
      route: "A835",
      miles: "60", drive: "1.5 hrs",
      overnight: "Ullapool",
      checkin: "2026-07-25", checkout: "2026-07-26",
      hero: "Ullapool",
      blurb: "The drive leaves populated Highlands behind and enters genuine wilderness. Corrieshalloch Gorge is a ten-minute stop you must not miss.",
      attractions: [
        { name: "Corrieshalloch Gorge", wiki: "Corrieshalloch_Gorge", desc: "60-metre deep box gorge with a Victorian suspension bridge over the Falls of Measach. Free, ten-minute walk.", url: "https://www.nts.org.uk/visit/places/corrieshalloch-gorge", locale: "Ullapool" },
        { name: "Ullapool harbour",     wiki: "Ullapool",            desc: "Whitewashed fishing town on Loch Broom — walk the seafront and watch the boats come in.", locale: "Ullapool" },
        { name: "Ullapool Museum",      wiki: "Ullapool_Museum",     desc: "Small but excellent — local history of the herring trade and Highland clearances.", url: "https://www.ullapoolmuseum.co.uk", locale: "Ullapool" }
      ],
      hotels: [
        { name: "The Ceilidh Place",   style: "Boutique hotel with bookshop and live music", price: "£120–£160", url: "https://www.theceilidhplace.com", locale: "Ullapool" },
        { name: "The Ferry Boat Inn",  style: "Harbour inn with sea views",                   price: "£90–£120",  url: "https://www.ferryboatinn.com",    locale: "Ullapool" }
      ],
      restaurants: [
        { name: "The Ceilidh Place", note: "Hotel, bookshop, music venue and restaurant in one.", url: "https://www.theceilidhplace.com" },
        { name: "The Seafood Shack",  note: "Informal harbourside seafood, freshly landed.", url: "https://www.seafoodshack.co.uk" }
      ]
    },

    {
      num: 7, date: "Sun 26 Jul", weekday: "Sunday",
      title: "Ullapool → Gairloch via Glen Torridon",
      leg: "A832 / A896 through Torridonian sandstone country",
      route: "A832 · A896",
      miles: "65", drive: "2 hrs",
      overnight: "Gairloch",
      checkin: "2026-07-26", checkout: "2026-07-27",
      hero: "Torridon",
      blurb: "One of Scotland's most spectacular drives, beneath An Teallach and through Glen Torridon. The rock here is 750-million-year-old sandstone — among the oldest exposed on Earth.",
      attractions: [
        { name: "Beinn Eighe National Nature Reserve", wiki: "Beinn_Eighe", desc: "Free, short waymarked walks through ancient Caledonian pinewoods.", url: "https://www.nnr.scot/nnr/beinn-eighe/", locale: "Kinlochewe" },
        { name: "Shieldaig village", wiki: "Shieldaig", desc: "Small fishing village on Loch Torridon — excellent coffee or lunch stop.", locale: "Shieldaig" },
        { name: "Gairloch beach",    wiki: "Gairloch",  desc: "White sand, turquoise water, views to the Outer Hebrides on a clear day.", locale: "Gairloch" },
        { name: "An Teallach",       wiki: "An_Teallach", desc: "Among the finest mountains in Scotland — the road passes right beneath it.", locale: "Dundonnell" }
      ],
      hotels: [
        { name: "Shieldaig Lodge Hotel", style: "Victorian hunting lodge, luxury",  price: "£180–£220", url: "https://www.shieldaiglodge.com", locale: "Gairloch" },
        { name: "The Old Inn, Gairloch", style: "Traditional Highland inn",          price: "£100–£130", url: "https://www.theoldinn.net",       locale: "Gairloch" },
        { name: "Gairloch Hotel",        style: "Seafront hotel",                    price: "£90–£120",  url: "https://www.gairlochhotel.com",   locale: "Gairloch" }
      ],
      restaurants: []
    },

    {
      num: 8, date: "Mon 27 Jul", weekday: "Monday",
      title: "Gairloch → Skye via Applecross",
      leg: "Bealach na Bà and the Pass of the Cattle",
      route: "A896 · Bealach na Bà",
      miles: "80", drive: "3 hrs",
      overnight: "Portree, Isle of Skye",
      checkin: "2026-07-27", checkout: "2026-07-29",
      hero: "Bealach_na_B%C3%A0",
      blurb: "From Tornapress, the road climbs 626 metres in tight hairpin bends — the highest road pass in the UK outside the Cairngorms. Lunch at the Applecross Inn (book ahead), then north to the Skye Bridge.",
      attractions: [
        { name: "Bealach na Bà",     wiki: "Bealach_na_B%C3%A0", desc: "The Pass of the Cattle — 20% gradients, hairpins, and on a clear day a view to the Outer Hebrides.", locale: "Applecross" },
        { name: "Applecross village", wiki: "Applecross",        desc: "Tiny west-coast village reached by mountain pass or coastal road. Famous pub, famous langoustines.", locale: "Applecross" },
        { name: "Skye Bridge",        wiki: "Skye_Bridge",       desc: "Free crossing onto the island at Kyle of Lochalsh.", locale: "Kyle of Lochalsh" }
      ],
      hotels: [
        { name: "Cuillin Hills Hotel", style: "Victorian country house with bay views", price: "£140–£180", url: "https://www.cuillinhills-hotel-skye.co.uk", locale: "Portree" },
        { name: "Bosville Hotel",      style: "Boutique, central Portree",               price: "£120–£160", url: "https://www.bosvillehotel.co.uk",          locale: "Portree" },
        { name: "Rosedale Hotel",      style: "Harbourfront, traditional",               price: "£110–£140", url: "https://www.rosedalehotelskye.co.uk",       locale: "Portree" }
      ],
      restaurants: [
        { name: "Applecross Inn", note: "One of the most famous pubs in Scotland — langoustines, crab, haddock. Book ahead.", url: "https://www.applecross.uk.com/inn/" }
      ]
    },

    {
      num: 9, date: "Tue 28 Jul", weekday: "Tuesday",
      title: "Isle of Skye — full day",
      leg: "Island day trip from Portree",
      route: "80-mile island loop",
      miles: "80", drive: "—",
      overnight: "Portree, Isle of Skye",
      hero: "Old_Man_of_Storr",
      blurb: "Quiraing and Kilt Rock in the morning, Fairy Pools or Dunvegan in the afternoon. Arrive early at every car park — Skye gets very busy by mid-morning.",
      attractions: [
        { name: "The Quiraing",        wiki: "Quiraing",       desc: "Dramatic landslip landscape of pinnacles and hidden plateaus — arrive before 9am.", locale: "Staffin" },
        { name: "Old Man of Storr",    wiki: "Old_Man_of_Storr", desc: "Iconic rock pinnacle — 45-minute walk up, well worth the climb.", locale: "Trotternish" },
        { name: "Kilt Rock & Mealt Falls", wiki: "Kilt_Rock", desc: "Columnar basalt sea cliff that genuinely looks like a kilt. Five-minute viewpoint walk.", locale: "Trotternish" },
        { name: "Fairy Pools",         wiki: "Fairy_Pools",    desc: "Crystal-clear turquoise pools and waterfalls at the foot of the Cuillin. Arrive early.", locale: "Glenbrittle" },
        { name: "Dunvegan Castle",     wiki: "Dunvegan_Castle", desc: "Oldest continuously inhabited castle in Scotland, seat of Clan MacLeod. Allow two hours.", url: "https://www.dunvegancastle.com", locale: "Dunvegan" }
      ],
      hotels: [],
      restaurants: [
        { name: "Scorrybreac",      note: "Finest restaurant on Skye — tasting menu, local produce. Book weeks ahead.", url: "https://www.scorrybreac.com" },
        { name: "Dulse and Brose",  note: "Dependable bistro inside the Bosville Hotel.",                                url: "https://www.bosvillehotel.co.uk/eat-drink/" }
      ]
    },

    {
      num: 10, date: "Wed 29 Jul", weekday: "Wednesday",
      title: "Skye → Glencoe via Eilean Donan",
      leg: "Skye Bridge · Glen Shiel · Fort William · Glencoe",
      route: "A87 · A82",
      miles: "100", drive: "2.5 hrs",
      overnight: "Glencoe / Ballachulish",
      checkin: "2026-07-29", checkout: "2026-07-30",
      hero: "Eilean_Donan",
      blurb: "Eilean Donan in the morning light, the Five Sisters of Kintail through the windscreen, lunch in Fort William under Ben Nevis, and the Three Sisters of Glencoe by late afternoon.",
      attractions: [
        { name: "Eilean Donan Castle", wiki: "Eilean_Donan",    desc: "The most photographed castle in Scotland, on a tidal island where three sea lochs meet.", url: "https://www.eileandonancastle.com", locale: "Dornie" },
        { name: "Five Sisters of Kintail", wiki: "Five_Sisters_of_Kintail", desc: "One of Scotland's great mountain drives — the scenery from the car is the experience.", locale: "Glen Shiel" },
        { name: "Ben Nevis",            wiki: "Ben_Nevis",       desc: "Britain's highest mountain at 1,345m. Drive into Glen Nevis for the view.", locale: "Fort William" },
        { name: "Glen Nevis gorge walk", wiki: "Glen_Nevis",     desc: "1–2 hour walk through dramatic gorge — no equipment needed.", locale: "Fort William" },
        { name: "Glencoe Visitor Centre", wiki: "Glen_Coe",      desc: "Context on the 1692 Massacre of Glencoe. Walk the Signal Rock loop afterwards.", url: "https://www.nts.org.uk/visit/places/glencoe", locale: "Glencoe" },
        { name: "Three Sisters of Glencoe", wiki: "Glen_Coe",    desc: "The unmissable viewpoint on the A82 — pull over and take it in.", locale: "Glencoe" }
      ],
      hotels: [
        { name: "Clachaig Inn",        style: "Legendary walkers' inn, in the glen itself", price: "£110–£150", url: "https://www.clachaig.com",            locale: "Glencoe" },
        { name: "Ballachulish Hotel",  style: "Lochside, outstanding views",                 price: "£130–£170", url: "https://www.ballachulish-hotel.co.uk", locale: "Ballachulish" }
      ],
      restaurants: []
    },

    {
      num: 11, date: "Thu 30 Jul", weekday: "Thursday",
      title: "Glencoe → Glasgow via Glenfinnan",
      leg: "Glen Etive · Glenfinnan Viaduct · Loch Lomond",
      route: "A82 · A830",
      miles: "100", drive: "3 hrs",
      overnight: "Glasgow",
      checkin: "2026-07-30", checkout: "2026-08-02",
      hero: "Glenfinnan_Viaduct",
      blurb: "Optional dawn detour up Glen Etive (Bond's Skyfall), the Glenfinnan Viaduct of Harry Potter fame, the Jacobite Steam Train if you booked it, and Loch Lomond on the run-in to Glasgow.",
      attractions: [
        { name: "Glen Etive",            wiki: "Glen_Etive",         desc: "12-mile dead-end road into a remote, beautiful glen used in James Bond Skyfall. Allow an hour.", locale: "Glencoe" },
        { name: "Glenfinnan Viaduct",    wiki: "Glenfinnan_Viaduct", desc: "21-arch Victorian railway viaduct featured in the Harry Potter films. 15-minute walk to the viewpoint.", locale: "Glenfinnan" },
        { name: "Glenfinnan Monument",   wiki: "Glenfinnan_Monument", desc: "Marks where Bonnie Prince Charlie raised his standard in 1745.", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument", locale: "Glenfinnan" },
        { name: "Jacobite Steam Train",  wiki: "Jacobite_(train)",   desc: "Fort William to Mallaig and back — one of the great railway journeys in the world. Book months ahead.", url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip", locale: "Fort William" },
        { name: "Luss village",          wiki: "Luss",               desc: "Picturesque estate cottages on the western shore of Loch Lomond. Pub lunch at the Luss Inn.", url: "https://www.lochlomond-trossachs.org/places/luss/", locale: "Loch Lomond" }
      ],
      hotels: [
        { name: "Kimpton Blythswood Square", style: "5-star, 10-min walk to Glasgow Central", price: "£180–£230", url: "https://www.kimptonblythswoodsquare.com", locale: "Glasgow" },
        { name: "Hotel du Vin Glasgow",      style: "Boutique, great wine bar",                price: "£120–£160", url: "https://www.hotelduvin.com/locations/glasgow/", locale: "Glasgow" },
        { name: "Dakota Glasgow",            style: "Design hotel, excellent service",         price: "£130–£170", url: "https://www.dakotahotels.co.uk/glasgow/",       locale: "Glasgow" }
      ],
      restaurants: []
    },

    {
      num: 12, date: "Fri 31 Jul", weekday: "Friday",
      title: "Glasgow day trip",
      leg: "Eastern Loch Lomond · Trossachs",
      route: "Variable",
      miles: "60–90", drive: "—",
      overnight: "Glasgow",
      hero: "Loch_Lomond",
      blurb: "Final day with the car. The eastern shore of Loch Lomond and the Trossachs is the recommended use — quieter than the western road, and a Loch Katrine steamship at the heart of it. Stirling or Culzean are good alternatives.",
      attractions: [
        { name: "Loch Lomond eastern shore", wiki: "Loch_Lomond", desc: "Through Balmaha and Rowardennan — accessible only by car, far quieter than the western shore.", locale: "Balmaha" },
        { name: "Loch Katrine steamship",    wiki: "Loch_Katrine", desc: "Cruise on the Sir Walter Scott steamship at the heart of the Trossachs.", url: "https://www.lochkatrine.com", locale: "Trossachs" },
        { name: "Stirling Castle",           wiki: "Stirling_Castle", desc: "One of Scotland's greatest castles, where Mary Queen of Scots was crowned.", url: "https://www.historicenvironment.scot/visit-a-place/places/stirling-castle/", locale: "Stirling" },
        { name: "Culzean Castle",            wiki: "Culzean_Castle", desc: "Dramatic clifftop castle on the Ayrshire coast, one hour south of Glasgow.", url: "https://www.nts.org.uk/visit/places/culzean-castle-and-country-park", locale: "Ayrshire" }
      ],
      hotels: [],
      restaurants: [
        { name: "Cail Bruich",       note: "Michelin Bib Gourmand — book well ahead.", url: "https://www.cailbruich.co.uk" },
        { name: "Ubiquitous Chip",   note: "Glasgow institution, beautiful courtyard.", url: "https://www.ubiquitouschip.co.uk" }
      ]
    },

    {
      num: 13, date: "Sat 1 Aug", weekday: "Saturday",
      title: "Glasgow — last day in Scotland",
      leg: "City day — keep the car at the hotel",
      route: "—",
      miles: "—", drive: "—",
      overnight: "Glasgow",
      hero: "Kelvingrove_Art_Gallery_and_Museum",
      blurb: "Pick two from the museums, the cathedral and the West End. End with a final Scottish dinner before the long drive south tomorrow.",
      attractions: [
        { name: "Burrell Collection",    wiki: "Burrell_Collection",          desc: "Free, in Pollok Country Park — one of Britain's great private art collections, recently reopened.", url: "https://www.glasgowlife.org.uk/museums/venues/the-burrell-collection", locale: "Glasgow" },
        { name: "Kelvingrove Art Gallery", wiki: "Kelvingrove_Art_Gallery_and_Museum", desc: "Free, world-class collection inside a Spanish Baroque palace.", url: "https://www.glasgowlife.org.uk/museums/venues/kelvingrove-art-gallery-and-museum", locale: "Glasgow" },
        { name: "Glasgow Cathedral",     wiki: "Glasgow_Cathedral",           desc: "12th-century cathedral; the Victorian Necropolis on the hill behind it has the best city view.", url: "https://www.historicenvironment.scot/visit-a-place/places/glasgow-cathedral/", locale: "Glasgow" },
        { name: "Ashton Lane",           wiki: "Ashton_Lane",                  desc: "Cobbled West End lane of bars and bistros, classic Glasgow night out.", locale: "Glasgow" },
        { name: "Glasgow Science Centre", wiki: "Glasgow_Science_Centre",      desc: "On the Clyde, with a 127m rotating tower.", url: "https://www.glasgowsciencecentre.org", locale: "Glasgow" }
      ],
      hotels: [],
      restaurants: [
        { name: "Ox and Finch", note: "Small plates, West End — buzzing.", url: "https://www.oxandfinch.com" },
        { name: "The Gannet",   note: "Modern Scottish in Finnieston.",     url: "https://www.thegannetgla.com" }
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
      blurb: "Depart Glasgow 07:00–07:30. M74 is clear on Sunday mornings. Join M6 at Carlisle, M40 at Birmingham, exit at J8A (Wheatley) for Oxford. Arrive 12:30–13:30 — comfortable for the afternoon check-in. Drop the car in Oxford city centre or Headington.",
      attractions: [
        { name: "Oxford city centre", wiki: "Oxford", desc: "Walk to your daughter's college, find lunch, drop the car.", locale: "Oxford" }
      ],
      hotels: [],
      restaurants: []
    }
  ]
};
