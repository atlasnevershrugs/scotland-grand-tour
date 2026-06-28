// Scotland Grand Tour — Trip Data (v5: optimum after Munro's Pod cancelled)
// 14 calendar days · 13 overnights · 9 main driving days · ~1,150 miles
// Two bookings confirmed: Rosemount Hotel (Pitlochry), Cherrytrees (Drumnadrochit).
// Maximum Highland time: Skye 3 nights, Gairloch 2 nights (Torridon day),
// Glasgow trimmed to 1 night since it's revisitable from Oxford.

window.TRIP = {
  title: "Scotland Grand Tour",
  subtitle: "Edinburgh to Oxford, the long way round",
  dates: "Monday 20 July – Sunday 2 August 2026",
  travellers: "2 adults + 1 teen (15)",
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
    { label: "Overnight stops", value: "8" },
    { label: "Total miles", value: "~1,150" },
    { label: "Driving days", value: "9" }
  ],

  // Ordered overnight + handover waypoints for the route line
  route: [
    { lat: 55.9533, lng: -3.1883, label: "Edinburgh",        nights: "1–2",   day: 1  },
    { lat: 56.7058, lng: -3.7290, label: "Pitlochry",        nights: "3",     day: 3  },
    { lat: 57.3315, lng: -4.4733, label: "Drumnadrochit",    nights: "4–5",   day: 4  },
    { lat: 57.8954, lng: -5.1592, label: "Ullapool",         nights: "6",     day: 6  },
    { lat: 57.7264, lng: -5.6843, label: "Gairloch",         nights: "7–8",   day: 7  },
    { lat: 57.4126, lng: -6.1959, label: "Portree (Skye)",   nights: "9–11",  day: 9  },
    { lat: 56.6863, lng: -5.0987, label: "Glencoe",          nights: "12",    day: 12 },
    { lat: 55.8642, lng: -4.2518, label: "Glasgow",          nights: "13",    day: 13 },
    { lat: 51.7520, lng: -1.2577, label: "Oxford",           nights: "drop-off", day: 14 }
  ],

  // Detour pins worth showing on the map (key day-trip waypoints)
  detours: [
    { lat: 57.4806, lng: -4.4925, label: "Culloden",            day: 5  },
    { lat: 57.3239, lng: -4.4426, label: "Urquhart Castle",     day: 5  },
    { lat: 57.5747, lng: -4.0936, label: "Chanonry Point",      day: 5  },
    { lat: 57.7589, lng: -4.8597, label: "Corrieshalloch",      day: 6  },
    { lat: 57.6900, lng: -5.4700, label: "Loch Maree",          day: 8  },
    { lat: 57.7750, lng: -5.5970, label: "Inverewe Garden",     day: 8  },
    { lat: 57.5483, lng: -5.6770, label: "Lower Diabaig",       day: 8  },
    { lat: 57.4344, lng: -5.8160, label: "Applecross",          day: 9  },
    { lat: 57.4150, lng: -5.6300, label: "Bealach na Bà",       day: 9  },
    { lat: 57.3025, lng: -6.3919, label: "Talisker Distillery", day: 11 },
    { lat: 57.2493, lng: -6.7724, label: "Neist Point",         day: 11 },
    { lat: 57.1928, lng: -6.1144, label: "Elgol / Loch Coruisk",day: 11 },
    { lat: 57.2740, lng: -5.5161, label: "Eilean Donan",        day: 12 },
    { lat: 56.8728, lng: -5.4357, label: "Glenfinnan",          day: 13 },
    { lat: 56.0959, lng: -4.6356, label: "Luss",                day: 13 }
  ],

  carRental: [
    { name: "Enterprise", note: "Depots at Edinburgh Airport and Oxford city centre. One-way fee typically £80–£150.", url: "https://www.enterprise.co.uk", recommended: true },
    { name: "Europcar",   note: "Same route coverage, competitive pricing.", url: "https://www.europcar.co.uk" },
    { name: "Rentalcars.com", note: "Compare all providers, one-way fees shown upfront.", url: "https://www.rentalcars.com" }
  ],

  priorityBookings: [
    { rank: 1,  what: "Portree, Skye (Nights 9–11)",       why: "Hardest booking in Scotland — 3 nights",     url: "https://www.cuillinhills-hotel-skye.co.uk" },
    { rank: 2,  what: "Gairloch (Nights 7–8)",             why: "Remote, very limited stock, 2 nights",        url: "https://www.theoldinn.net" },
    { rank: 3,  what: "Clachaig Inn, Glencoe (Night 12)",  why: "Sells out 3–4 months ahead",                   url: "https://www.clachaig.com" },
    { rank: 4,  what: "Ullapool (Night 6)",                why: "Tiny village, very few rooms",                 url: "https://www.theceilidhplace.com" },
    { rank: 5,  what: "Pitlochry (Night 3)",               why: "Rosemount Hotel — booked, ref WTB1AA5B1B",     url: "https://www.rosemount-hotel.co.uk/b-and-b-pitlochry/", done: true },
    { rank: 6,  what: "Drumnadrochit (Nights 4–5)",        why: "Cherrytrees Airbnb — booked",                  url: "https://www.airbnb.com", done: true },
    { rank: 7,  what: "Jacobite Steam Train (Day 13)",     why: "Sells out months ahead in summer",             url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" },
    { rank: 8,  what: "Applecross Inn lunch (Day 9)",      why: "Famous pub, books up fast",                    url: "https://www.applecross.uk.com/inn/" },
    { rank: 9,  what: "Elgol boat trip (Day 11)",          why: "Loch Coruisk — small boats, limited slots",    url: "https://bellajane.co.uk/" },
    { rank: 10, what: "Edinburgh (Nights 1–2)",            why: "City centre fills up in July",                 url: "https://www.booking.com/searchresults.html?ss=Edinburgh" }
  ],

  practical: [
    { title: "Fuel",            body: "Fill up at every petrol station in the Highlands. Stations can be 30–40 miles apart and close by 6–7pm. Top up without fail in Inverness, Ullapool, Gairloch, Portree and Fort William." },
    { title: "Midges",          body: "July and August are peak midge season. Buy Smidge spray on arrival (pharmacies and outdoor shops). Worst at dawn and dusk in still, humid air." },
    { title: "Single-track roads", body: "Pull into passing places on your left when meeting oncoming traffic. Do not drive onto the grass verge — it is often soft. A small wave to other drivers is customary." },
    { title: "Bealach na Bà",   body: "Day 9. Single-track with 20% gradients and tight hairpin bends. Manageable in a standard hire car at low speed. In poor conditions, take the coastal road via Lochcarron instead." },
    { title: "Weather",         body: "Pack waterproof layers regardless of forecast. The west coast catches significantly more rain than the east. Misty days in Glencoe and on Skye are atmospheric, not a disappointment." },
    { title: "Oxford LEZ",      body: "Oxford city centre has a Low Emission Zone. Most modern hire cars comply, but confirm with your rental company before drop-off." }
  ],

  restaurantsToBook: [
    { name: "Applecross Inn",       when: "Day 9 lunch",   url: "https://www.applecross.uk.com/inn/" },
    { name: "Scorrybreac, Skye",    when: "Day 10 dinner", url: "https://www.scorrybreac.com" },
    { name: "Elgol boat trip",      when: "Day 11 — book ahead", url: "https://bellajane.co.uk/" },
    { name: "Cail Bruich, Glasgow", when: "Day 13 dinner", url: "https://www.cailbruich.co.uk" },
    { name: "Jacobite Steam Train", when: "Day 13",        url: "https://www.westcoastrailways.co.uk/jacobite/jacobite-steam-train-trip" }
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
      title: "Drumnadrochit → Ullapool",
      leg: "A82 north to Inverness, then A835 into wilderness",
      route: "A82 · A835",
      miles: "75", drive: "1 hr 45 min",
      overnight: "Ullapool",
      checkin: "2026-07-25", checkout: "2026-07-26",
      hero: "Ullapool",
      blurb: "Leave Loch Ness behind, swing through Inverness, and head west on the A835. The drive leaves populated Highlands behind and enters genuine wilderness. Corrieshalloch Gorge is a ten-minute stop you must not miss.",
      attractions: [
        { name: "Corrieshalloch Gorge", wiki: "Corrieshalloch_Gorge", desc: "60-metre deep box gorge with a Victorian suspension bridge over the Falls of Measach. Free, ten-minute walk.", url: "https://www.nts.org.uk/visit/places/corrieshalloch-gorge", locale: "Ullapool" },
        { name: "Ullapool harbour",     wiki: "Ullapool",            desc: "Whitewashed fishing town on Loch Broom — walk the seafront and watch the boats come in.", locale: "Ullapool" },
        { name: "Ullapool Museum",      wiki: "Ullapool_Museum",     desc: "Small but excellent — local history of the herring trade and Highland clearances.", url: "https://www.ullapoolmuseum.co.uk", locale: "Ullapool" }
      ],
      hotels: [
        { name: "The Ceilidh Place",  style: "Boutique hotel with bookshop and live music", price: "£120–£160", url: "https://www.theceilidhplace.com", locale: "Ullapool" },
        { name: "The Ferry Boat Inn", style: "Harbour inn with sea views",                  price: "£90–£120",  url: "https://www.ferryboatinn.com",    locale: "Ullapool" }
      ],
      restaurants: [
        { name: "The Ceilidh Place",  note: "Hotel, bookshop, music venue and restaurant in one.",                  url: "https://www.theceilidhplace.com" },
        { name: "The Seafood Shack",  note: "Informal harbourside seafood, freshly landed.",                        url: "https://www.seafoodshack.co.uk" }
      ]
    },

    {
      num: 7, date: "Sun 26 Jul", weekday: "Sunday",
      title: "Ullapool → Gairloch via Glen Torridon",
      leg: "A832 / A896 through Torridonian sandstone country",
      route: "A832 · A896",
      miles: "65", drive: "2 hrs",
      overnight: "Gairloch",
      checkin: "2026-07-26", checkout: "2026-07-28",
      hero: "Torridon",
      blurb: "One of the most spectacular drives in Scotland, beneath An Teallach and through Glen Torridon. The rock here is 750-million-year-old sandstone — among the oldest exposed on Earth. Today is the scenic transit; tomorrow you walk in it.",
      attractions: [
        { name: "Beinn Eighe National Nature Reserve", wiki: "Beinn_Eighe", desc: "Drive-by stop today on the short waymarked Woodland Trail — save the proper Mountain Trail for tomorrow.", url: "https://www.nnr.scot/nnr/beinn-eighe/", locale: "Kinlochewe" },
        { name: "Shieldaig village", wiki: "Shieldaig",   desc: "Small fishing village on Loch Torridon — excellent coffee or lunch stop, Nanny's tea room recommended.", locale: "Shieldaig" },
        { name: "An Teallach",       wiki: "An_Teallach", desc: "Among the finest mountains in Scotland — the road passes right beneath it. Pull over at the Dundonnell viewpoint.", locale: "Dundonnell" },
        { name: "Gairloch beach",    wiki: "Gairloch",    desc: "White sand, turquoise water, views to the Outer Hebrides on a clear day. Big Sand Beach to the west is even better.", locale: "Gairloch" }
      ],
      hotels: [
        { name: "Shieldaig Lodge Hotel", style: "Victorian hunting lodge, luxury", price: "£180–£220", url: "https://www.shieldaiglodge.com", locale: "Gairloch" },
        { name: "The Old Inn, Gairloch", style: "Traditional Highland inn",        price: "£100–£130", url: "https://www.theoldinn.net",      locale: "Gairloch" },
        { name: "Gairloch Hotel",        style: "Seafront hotel",                  price: "£90–£120",  url: "https://www.gairlochhotel.com",  locale: "Gairloch" }
      ],
      restaurants: []
    },

    {
      num: 8, date: "Mon 27 Jul", weekday: "Monday",
      title: "A day in the Torridons",
      leg: "Walking and west-coast drives based at Gairloch",
      route: "Local · 60-mile flex",
      miles: "60", drive: "—",
      overnight: "Gairloch",
      hero: "Beinn_Eighe",
      blurb: "A full day in one of Scotland's most ancient landscapes. Walk the Beinn Eighe Mountain Trail in the morning, drift to Inverewe's strange tropical garden by lunch, and finish with the single-track drive to Lower Diabaig — true west-coast remoteness.",
      attractions: [
        { name: "Beinn Eighe Mountain Trail", wiki: "Beinn_Eighe", desc: "The proper waymarked walk — 4 miles, climbing to 550m for some of the finest views of the Torridons. 3–4 hours, well-marked. Different from the woodland trail you passed yesterday.", locale: "Kinlochewe" },
        { name: "Loch Maree",                 wiki: "Loch_Maree", desc: "One of Scotland's most beautiful lochs, with ancient Caledonian pine islands and Slioch rising on the far shore. Drive the A832 along its length.", locale: "Wester Ross" },
        { name: "Inverewe Garden",            wiki: "Inverewe_Garden", desc: "NTS — world-renowned subtropical garden in the Highlands, made possible by the Gulf Stream and a century of patient planting.", url: "https://www.nts.org.uk/visit/places/inverewe", locale: "Poolewe" },
        { name: "Lower Diabaig coastal road", wiki: "Diabaig", desc: "Single-track 8-mile drive to a tiny coastal hamlet — extreme west-coast remoteness. 90-min round trip with viewpoints over Loch Torridon.", locale: "Diabaig" },
        { name: "Big Sand Beach",             wiki: null, desc: "Two miles of white sand 5 km west of Gairloch — extraordinary on a clear day. Free, with the campsite road giving easy access.", locale: "Gairloch" },
        { name: "Gairloch Marine Wildlife Centre", wiki: null, desc: "Whale and dolphin boat trips from Gairloch harbour with Hebridean Whale Cruises — minke whales, dolphins, porpoises, basking sharks in season.", url: "https://www.hebridean-whale-cruises.co.uk/", locale: "Gairloch" }
      ],
      hotels: [],
      restaurants: [
        { name: "The Old Inn, Gairloch", note: "Traditional Highland gastropub — venison, langoustines, locally brewed ale.", url: "https://www.theoldinn.net" }
      ]
    },

    {
      num: 9, date: "Tue 28 Jul", weekday: "Tuesday",
      title: "Gairloch → Skye via Applecross",
      leg: "Bealach na Bà and the Pass of the Cattle",
      route: "A896 · Bealach na Bà",
      miles: "80", drive: "3 hrs",
      overnight: "Portree, Isle of Skye",
      checkin: "2026-07-28", checkout: "2026-07-31",
      hero: "Bealach_na_B%C3%A0",
      blurb: "From Tornapress, the road climbs 626 metres in tight hairpin bends — the highest road pass in the UK outside the Cairngorms. Lunch at the Applecross Inn (book ahead), then north to the Skye Bridge and three nights on the island.",
      attractions: [
        { name: "Bealach na Bà",      wiki: "Bealach_na_B%C3%A0", desc: "The Pass of the Cattle — 20% gradients, hairpins, and on a clear day a view to the Outer Hebrides.", locale: "Applecross" },
        { name: "Applecross village", wiki: "Applecross",         desc: "Tiny west-coast village reached by mountain pass or coastal road. Famous pub, famous langoustines.", locale: "Applecross" },
        { name: "Skye Bridge",        wiki: "Skye_Bridge",        desc: "Free crossing onto the island at Kyle of Lochalsh.", locale: "Kyle of Lochalsh" }
      ],
      hotels: [
        { name: "Cuillin Hills Hotel", style: "Victorian country house with bay views", price: "£140–£180", url: "https://www.cuillinhills-hotel-skye.co.uk", locale: "Portree" },
        { name: "Bosville Hotel",      style: "Boutique, central Portree",              price: "£120–£160", url: "https://www.bosvillehotel.co.uk",          locale: "Portree" },
        { name: "Rosedale Hotel",      style: "Harbourfront, traditional",              price: "£110–£140", url: "https://www.rosedalehotelskye.co.uk",      locale: "Portree" }
      ],
      restaurants: [
        { name: "Applecross Inn", note: "One of the most famous pubs in Scotland — langoustines, crab, haddock. Book ahead.", url: "https://www.applecross.uk.com/inn/" }
      ]
    },

    {
      num: 10, date: "Wed 29 Jul", weekday: "Wednesday",
      title: "Skye Day 1 — Trotternish",
      leg: "The dramatic north — Quiraing, Storr, Kilt Rock",
      route: "Island loop · north",
      miles: "60", drive: "—",
      overnight: "Portree, Isle of Skye",
      hero: "Old_Man_of_Storr",
      blurb: "Start with Trotternish in the morning before crowds arrive. Quiraing and Old Man of Storr are both genuinely worth a 2-3 hour walk each. Kilt Rock is a five-minute viewpoint on the way back south.",
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
      title: "Skye → Glencoe via Eilean Donan",
      leg: "Skye Bridge · Glen Shiel · Fort William · Glencoe",
      route: "A87 · A82",
      miles: "100", drive: "2.5 hrs",
      overnight: "Glencoe / Ballachulish",
      checkin: "2026-07-31", checkout: "2026-08-01",
      hero: "Eilean_Donan",
      blurb: "Leave Portree in good time. Eilean Donan in the morning light, the Five Sisters of Kintail through the windscreen, lunch in Fort William under Ben Nevis, and the Three Sisters of Glencoe by late afternoon.",
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
      blurb: "Depart Glasgow 07:00–07:30. M74 is clear on Sunday mornings. Join M6 at Carlisle, M40 at Birmingham, exit at J8A (Wheatley) for Oxford. Arrive 12:30–13:30 — comfortable for the afternoon check-in. Glasgow and Edinburgh can be revisited from Oxford any weekend; the Highlands cannot.",
      attractions: [
        { name: "Oxford city centre", wiki: "Oxford", desc: "Walk to your daughter's college, find lunch, drop the car.", locale: "Oxford" }
      ],
      hotels: [],
      restaurants: []
    }
  ]
};
