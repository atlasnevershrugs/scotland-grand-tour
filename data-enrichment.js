// Scotland Grand Tour — Enrichment data (v6: Raasay swap)
// This file ships to the public site. Personal booking details
// (references, paid prices, host names, exact arrival times) must not
// be added here. Only publicly-listed property info belongs in this file.

window.TRIP_ENRICH = {

  /* ======================================================================
   * ATTRACTIONS
   * ====================================================================== */
  attractions: {

    // ---- Day 1: Edinburgh arrival -------------------------------------------
    "Royal Mile": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d188788-Reviews-Royal_Mile-Edinburgh_Scotland.html",
      blogs: [
        { title: "Old & New Towns of Edinburgh", source: "Visit Scotland", url: "https://www.visitscotland.com/things-to-do/unesco-trail/edinburgh-old-new-towns" },
        { title: "Edinburgh travel guide", source: "Rough Guides", url: "https://www.roughguides.com/scotland/edinburgh-lothians/" }
      ]
    },
    "Grassmarket": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d2194374-Reviews-Grassmarket-Edinburgh_Scotland.html",
      blogs: [
        { title: "Old & New Towns of Edinburgh", source: "Visit Scotland", url: "https://www.visitscotland.com/things-to-do/unesco-trail/edinburgh-old-new-towns" },
        { title: "Edinburgh travel guide", source: "Rough Guides", url: "https://www.roughguides.com/scotland/edinburgh-lothians/" }
      ]
    },

    // ---- Day 2: Edinburgh city day ------------------------------------------
    "Edinburgh Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d187653-Reviews-Edinburgh_Castle-Edinburgh_Scotland.html",
      blogs: [
        { title: "Edinburgh Castle", source: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/edinburgh-castle/" },
        { title: "Edinburgh Castle", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/edinburgh-castle-p245821" }
      ]
    },
    "The Real Mary King's Close": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d191321-Reviews-The_Real_Mary_King_s_Close-Edinburgh_Scotland.html",
      blogs: [{ title: "The Real Mary King's Close", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/the-real-mary-kings-close-p2460951" }]
    },
    "St Giles' Cathedral": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d187655-Reviews-St_Giles_Cathedral-Edinburgh_Scotland.html",
      blogs: [
        { title: "St Giles' Cathedral", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/st-giles-cathedral-p245681" },
        { title: "St Giles Cathedral", source: "Lonely Planet", url: "https://www.lonelyplanet.com/scotland/edinburgh/old-town/attractions/st-giles-cathedral/a/poi-sig/1118163/1341114" }
      ]
    },
    "Calton Hill": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d190124-Reviews-Calton_Hill-Edinburgh_Scotland.html",
      blogs: [{ title: "12 fascinating things to do in Edinburgh", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/edinburgh/things-to-do" }]
    },
    "National Museum of Scotland": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d2359701-Reviews-National_Museum_of_Scotland-Edinburgh_Scotland.html",
      blogs: [{ title: "National Museum of Scotland", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/national-museum-of-scotland-p246591" }]
    },
    "Arthur's Seat": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186525-d195211-Reviews-Arthur_s_Seat-Edinburgh_Scotland.html",
      blogs: [{ title: "Holyrood Park and Arthur's Seat", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/holyrood-park-and-arthurs-seat-p914341" }]
    },

    // ---- Day 3: Edinburgh → Pitlochry ---------------------------------------
    "The Hermitage, Dunkeld": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g190751-d5288271-Reviews-The_Hermitage-Dunkeld_Perth_and_Kinross_Scotland.html",
      blogs: [
        { title: "The Hermitage", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/the-hermitage" },
        { title: "The Hermitage and Braan Walk", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/perthshire/hermitage.shtml" }
      ]
    },
    "Queen's View": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186566-d1170688-Reviews-Queen_s_View-Pitlochry_Perth_and_Kinross_Scotland.html",
      blogs: [
        { title: "Queen's View", source: "Forestry and Land Scotland", url: "https://forestryandland.gov.scot/visit/forest-parks/tay-forest-park/queens-view" },
        { title: "Allean Forest trail near Queen's View", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/perthshire/queens-view.shtml" }
      ]
    },
    "Balmoral Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g190738-d212160-Reviews-Balmoral_Castle-Ballater_Aberdeenshire_Scotland.html",
      blogs: [{ title: "Balmoral Castle", source: "Lonely Planet", url: "https://www.lonelyplanet.com/scotland/central-scotland/deeside-and-donside/attractions/balmoral-castle/a/poi-sig/1122895/360597" }]
    },
    "Blair Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g946548-d318884-Reviews-Blair_Castle_Gardens-Blair_Atholl_Pitlochry_Perth_and_Kinross_Scotland.html",
      blogs: [{ title: "Blair Castle", source: "Lonely Planet", url: "https://www.lonelyplanet.com/scotland/blair-atholl/attractions/blair-castle/a/poi-sig/1122570/1318977" }]
    },
    "Pitlochry Dam Fish Ladder": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186566-d4236412-Reviews-Pitlochry_Dam_Power_Station_And_Fish_Ladder-Pitlochry_Perth_and_Kinross_Scotland.html",
      blogs: [{ title: "Loch Faskally and the salmon ladder", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/perthshire/salmon-ladder.shtml" }]
    },

    // ---- Day 4: Pitlochry → Drumnadrochit -----------------------------------
    "Rothiemurchus Estate": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186537-d629534-Reviews-Rothiemurchus-Aviemore_Aviemore_and_the_Cairngorms_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Rothiemurchus Forest and the Iron Bridge", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/cairngorms/rothiemurchus.shtml" },
        { title: "Unmissable things in and around Aviemore", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/aviemore/things-to-do" }
      ]
    },
    "Cairngorm Mountain Railway": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186537-d555324-Reviews-Cairngorm_Mountain_Resort-Aviemore_Aviemore_and_the_Cairngorms_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Aviemore things to do", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/aviemore/things-to-do" },
        { title: "Cairn Gorm via the northern corries", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/cairngorms/cairngorm.shtml" }
      ]
    },
    "Leakey's Bookshop": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186543-d191390-Reviews-Leakey_s_Second_hand_Bookshop-Inverness_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Scotland's most enchanting bookshop", source: "Live Breathe Scotland", url: "https://www.livebreathescotland.com/leakeys-bookshop/" },
        { title: "How to visit Leakey's Bookshop", source: "Solosophie", url: "https://www.solosophie.com/leakeys-bookshop-inverness/" }
      ]
    },

    // ---- Day 5: Loch Ness & Black Isle loop ---------------------------------
    "Urquhart Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551809-d189551-Reviews-Urquhart_Castle-Drumnadrochit_Loch_Ness_Region_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Urquhart Castle", source: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit-a-place/places/urquhart-castle/" },
        { title: "Urquhart Castle history and stories", source: "Historic Environment Scotland", url: "https://www.historicenvironment.scot/visit/all/urquhart-castle/history-and-stories/" }
      ]
    },
    "Loch Ness Cruise": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186543-d1220424-Reviews-Loch_Ness_by_Jacobite-Inverness_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Legendary Loch Ness Cruises", source: "Jacobite (official)", url: "https://www.jacobite.co.uk/" },
        { title: "Loch Ness cruises and tours", source: "Jacobite (official)", url: "https://www.jacobite.co.uk/tours" }
      ]
    },
    "Culloden Battlefield": {
      tripadvisor: "https://www.tripadvisor.co.uk/Attraction_Review-g4600483-d191384-Reviews-Culloden_Battlefield-Culloden_Moor_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Culloden", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/culloden" },
        { title: "Culloden Battlefield and Visitor Centre", source: "Visit Inverness Loch Ness", url: "https://www.visitinvernesslochness.com/listings/culloden-battlefield-and-visitor-centre" }
      ]
    },
    "Inverness Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186543-d8180365-Reviews-The_Inverness_Castle_Experience-Inverness_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Things to do in Inverness", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/inverness/things-to-do" },
        { title: "Inverness Castle Experience", source: "Official site", url: "https://invernesscastle.scot/" }
      ]
    },
    "Chanonry Point": {
      tripadvisor: "https://www.tripadvisor.co.uk/Attraction_Review-g783108-d2366132-Reviews-Chanonry_Point-Fortrose_Ross_and_Cromarty_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Chanonry Point walk", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/lochness/Chanonry.shtml" },
        { title: "Dolphin watching at Chanonry Point", source: "Visit Inverness Loch Ness", url: "https://www.explore-inverness.com/what-to-do/attractions/dolphin-watching-at-chanonry-point/" }
      ]
    },
    "Moray Firth": {
      blogs: [{ title: "Wildlife watching on the Black Isle", source: "North Coast 500", url: "https://www.northcoast500.com/see-do/wildlife-nature/a-highlands-hidden-gem-wildlife-watching-on-the-black-isle/" }]
    },

    // ---- Day 6: Drumnadrochit → Raasay (drive day) --------------------------
    "Eilean Donan Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186547-d189549-Reviews-Eilean_Donan_Castle-Kyle_of_Lochalsh_Lochalsh_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Eilean Donan Castle Visitor Centre", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/eilean-donan-castle-visitor-centre-p248371" },
        { title: "Eilean Donan Castle (official)", source: "eileandonancastle.com", url: "https://www.eileandonancastle.com/" }
      ]
    },
    "Five Sisters of Kintail": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1021314-d194066-Reviews-Kintail_Lodge_Hotel-Shiel_Bridge_Lochalsh_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Kintail", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/kintail" },
        { title: "Five Sisters of Kintail", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/kintail/Fivesisters.shtml" }
      ]
    },
    "Skye Bridge": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186547-d15113844-Reviews-Skye_Bridge-Kyle_of_Lochalsh_Lochalsh_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Isle of Skye", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/islands/isle-skye" },
        { title: "Skye Bridge", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/skye-places/skye-bridge" }
      ]
    },
    "Sconser ferry pier": {
      blogs: [
        { title: "Sconser to Raasay ferry", source: "CalMac (official)", url: "https://www.calmac.co.uk/sconser-raasay" }
      ]
    },

    // ---- Days 7-8: Raasay ---------------------------------------------------
    "Isle of Raasay Distillery": {
      blogs: [
        { title: "Isle of Raasay Distillery (official)", source: "raasaydistillery.com", url: "https://raasaydistillery.com/" },
        { title: "Borodale House — stay at the distillery", source: "raasaydistillery.com", url: "https://raasaydistillery.com/visit/borodale-house/" },
        { title: "Visit & tours — Isle of Raasay Distillery", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/isle-of-raasay-distillery-p2412961" }
      ]
    },
    "Dùn Caan": {
      blogs: [
        { title: "Dùn Caan, Raasay", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/duncaan.shtml" },
        { title: "Dùn Caan walk", source: "Raasay House", url: "https://www.raasay-house.co.uk/things-to-do" }
      ]
    },
    "Raasay House": {
      blogs: [
        { title: "Raasay House (official)", source: "raasay-house.co.uk", url: "https://www.raasay-house.co.uk/" },
        { title: "Raasay House", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/raasay-house-p251281" }
      ]
    },
    "Inverarish & shore walk": {
      blogs: [
        { title: "Raasay", source: "Visit Scotland", url: "https://www.visitscotland.com/places-to-go/islands/raasay" }
      ]
    },
    "Calum's Road": {
      blogs: [
        { title: "Calum's Road, Raasay", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/news/calums-road-raasay/" },
        { title: "Calum's Road", source: "Atlas Obscura", url: "https://www.atlasobscura.com/places/calums-road" }
      ]
    },
    "Brochel Castle": {
      blogs: [
        { title: "Brochel Castle", source: "Canmore", url: "https://canmore.org.uk/site/11522/raasay-brochel-castle" }
      ]
    },
    "Hallaig": {
      blogs: [
        { title: "Hallaig, Raasay", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/hallaig.shtml" },
        { title: "Hallaig — Sorley MacLean's poem", source: "Scottish Poetry Library", url: "https://www.scottishpoetrylibrary.org.uk/poem/hallaig/" }
      ]
    },
    "North Raasay walks": {
      blogs: [
        { title: "Walks on Raasay", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/raasay/" }
      ]
    },

    // ---- Day 9: Raasay → Torridon via Bealach na Bà -------------------------
    "Bealach na Bà": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551815-d4106283-Reviews-Bealach_na_Ba_Road-Applecross_Ross_and_Cromarty_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "How to drive Scotland's best road", source: "Scotland's Stories", url: "https://scotlands-stories.com/visiting-applecross/" },
        { title: "Applecross walks", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/torridon/applecross.shtml" }
      ]
    },
    "Applecross village": {
      tripadvisor: "https://www.tripadvisor.com/Tourism-g551815-Applecross_Ross_and_Cromarty_Scottish_Highlands_Scotland-Vacations.html",
      blogs: [
        { title: "The Applecross Inn (official)", source: "applecross.uk.com", url: "https://www.applecross.uk.com/inn/" },
        { title: "Why I visit Applecross every year", source: "Scotland's Stories", url: "https://scotlands-stories.com/visiting-applecross/" }
      ]
    },
    "Shieldaig village": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551819-d519798-Reviews-Glen_Torridon-Shieldaig_Ross_and_Cromarty_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Shieldaig", source: "Visit Scotland", url: "https://www.visitscotland.com/info/towns-villages/shieldaig-p254381" },
        { title: "Shieldaig peninsula walk", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/torridon/Shieldaig.shtml" }
      ]
    },

    // ---- Day 10: Torridon walking day ---------------------------------------
    "Beinn Eighe Mountain Trail": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1147549-d1021173-Reviews-Beinn_Eighe_Mountain_Trail-Kinlochewe_Ross_and_Cromarty_Scottish_Highlands_Scotl.html",
      blogs: [
        { title: "Mountain Trail, Beinn Eighe NNR", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/torridon/Mountaintrail.shtml" },
        { title: "Beinn Eighe NNR — visiting the reserve", source: "NatureScot", url: "https://www.nature.scot/enjoying-outdoors/visit-our-nature-reserves/beinn-eighe-and-loch-maree-islands-national-nature-reserve" }
      ]
    },
    "Loch Maree": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g315988-d519794-Reviews-Loch_Maree-Gairloch_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Loch Maree Islands National Nature Reserve", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/loch-maree-islands-p333771" },
        { title: "Beautiful lochs in Scotland", source: "Visit Scotland", url: "https://www.visitscotland.com/things-to-do/landscapes-nature/lochs" }
      ]
    },

    // ---- Skye day-trip stops (Days 7-8) -------------------------------------
    "Sligachan Old Bridge": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g4422085-d8459998-Reviews-Sligachan_Old_Bridge-Sligachan_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Sligachan", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/skye-places/sligachan" }
      ]
    },
    "Portree harbour": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551883-d240398-Reviews-Portree_Harbour-Portree_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Portree", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/towns-villages/portree" }
      ]
    },

    // ---- Day 10: Skye Day 1 — Trotternish -----------------------------------
    "The Quiraing": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551883-d196764-Reviews-Quiraing-Portree_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Quiraing hill circuit", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/quiraing.shtml" },
        { title: "The Quiraing walk", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/the-quiraing" }
      ]
    },
    "Old Man of Storr": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186585-d218457-Reviews-The_Old_Man_of_Storr-Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "The Old Man of Storr", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/old-man-of-storr.shtml" },
        { title: "Old Man of Storr", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/old-man-of-storr" }
      ]
    },
    "Kilt Rock & Mealt Falls": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186585-d1426039-Reviews-Kilt_Rock-Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [{ title: "Kilt Rock | Staffin", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/skye-places/kilt-rock" }]
    },

    // ---- Day 11: Skye Day 2 — Cuillin & West --------------------------------
    "Fairy Pools": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186585-d2335113-Reviews-Fairy_Pools-Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Fairy Pools and Coire na Creiche", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/fairypools.shtml" },
        { title: "Fairy Pools walk", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/fairy-pools" }
      ]
    },
    "Talisker Distillery": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1052514-d320898-Reviews-Talisker_Distillery-Carbost_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Talisker Distillery Visitor Centre", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/talisker-distillery-visitors-centre-p418581" },
        { title: "Hebridean Whisky Trail — Talisker", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/hebridean-whisky-trail-talisker-distillery-p2689801" }
      ]
    },
    "Dunvegan Castle": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551875-d191357-Reviews-Dunvegan_Castle_Gardens-Dunvegan_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Dunvegan Castle & Gardens", source: "Visit Scotland", url: "https://www.visitscotland.com/info/see-do/dunvegan-castle-gardens-p248681" },
        { title: "Dunvegan Castle (official)", source: "dunvegancastle.com", url: "https://www.dunvegancastle.com/" }
      ]
    },
    "Claigan Coral Beaches": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186585-d2706995-Reviews-Claigan_Coral_Beach-Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Coral Beaches, Claigan near Dunvegan", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/coralbeaches.shtml" },
        { title: "Coral Beach walk, Claigan, Dunvegan", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/coral-beach" }
      ]
    },
    "Neist Point Lighthouse": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g635693-d661598-Reviews-Neist_Point-Glendale_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Neist Point", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/skye/neistpoint.shtml" },
        { title: "Neist Point Lighthouse walk", source: "isleofskye.com", url: "https://www.isleofskye.com/skye-guide/top-ten-skye-walks/neist-point-lighthouse" }
      ]
    },
    "Elgol & Loch Coruisk boat trip": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1224708-d2287003-Reviews-Bella_Jane_Boat_Trips_AquaXplore-Elgol_Isle_of_Skye_The_Hebrides_Scotland.html",
      blogs: [
        { title: "Bella Jane Boat Trips, Elgol", source: "isleofskye.com", url: "https://www.isleofskye.com/activities/boat-trips/skye-boat-trips/bella-jane-boat-trips" },
        { title: "Misty Isle Boat Trips, Elgol to Loch Coruisk", source: "isleofskye.com", url: "https://www.isleofskye.com/activities/boat-trips/skye-boat-trips/misty-isle-boat-trips" }
      ]
    },

    // ---- Day 12: Skye → Glencoe ---------------------------------------------
    "Ben Nevis": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186545-d194657-Reviews-Ben_Nevis-Fort_William_Lochaber_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Ben Nevis — Scotland's iconic mountain", source: "Visit Scotland", url: "https://www.visitscotland.com/things-to-do/outdoor-activities/walking/mountains-hills/ben-nevis" },
        { title: "Ben Nevis by the Mountain Path", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/fortwilliam/bennevis.shtml" }
      ]
    },
    "Glen Nevis gorge walk": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186545-d10832664-Reviews-Glen_Nevis_Visitor_Center-Fort_William_Lochaber_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Steall Falls and the Nevis Gorge", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/fortwilliam/steallfalls.shtml" },
        { title: "Steall Falls and Nevis Gorge walk", source: "Countryfile", url: "https://www.countryfile.com/go-outdoors/walks/walk-steall-falls-and-the-nevis-gorge-highland" }
      ]
    },
    "Glencoe Visitor Centre": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1478744-d4092417-Reviews-Glencoe_Visitor_Centre-Glencoe_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Glencoe Visitor Centre", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glencoe/highlights/visitor-centre" },
        { title: "Glencoe National Nature Reserve", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glencoe" }
      ]
    },
    "Three Sisters of Glencoe": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1478744-d14795168-Reviews-The_Three_Sisters-Glencoe_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Bidean nam Bian", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/fortwilliam/bideannambian.shtml" },
        { title: "Glencoe National Nature Reserve", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glencoe" }
      ]
    },

    // ---- Day 13: Glencoe → Glasgow ------------------------------------------
    "Glen Etive": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g656902-d3315620-Reviews-Glen_Etive-Glencoe_Village_Glencoe_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Skyfall filming locations in Scotland", source: "Visit Scotland", url: "https://www.visitscotland.com/things-to-do/attractions/tv-film/skyfall" },
        { title: "Buachaille Etive Mòr", source: "Walkhighlands", url: "https://www.walkhighlands.co.uk/fortwilliam/buachailleetivemor.shtml" }
      ]
    },
    "Glenfinnan Viaduct": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1029082-d2643233-Reviews-Glenfinnan_Viaduct-Glenfinnan_Lochaber_Scottish_Highlands_Scotland.html",
      blogs: [{ title: "Glenfinnan Viaduct", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument/highlights/viaduct" }]
    },
    "Glenfinnan Monument": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g1029082-d536268-Reviews-Glenfinnan_Monument-Glenfinnan_Lochaber_Scottish_Highlands_Scotland.html",
      blogs: [
        { title: "Glenfinnan Monument", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument" },
        { title: "The 1745 Rising", source: "National Trust for Scotland", url: "https://www.nts.org.uk/visit/places/glenfinnan-monument/1745-rising" }
      ]
    },
    "Jacobite Steam Train": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g186545-d656785-Reviews-Jacobite_Steam_Train-Fort_William_Lochaber_Scottish_Highlands_Scotland.html",
      blogs: [{ title: "The Jacobite Steam Train", source: "West Coast Railways", url: "https://westcoastrailways.co.uk/jacobite/steam-train-trip" }]
    },
    "Luss village": {
      tripadvisor: "https://www.tripadvisor.com/Attraction_Review-g551943-d2704523-Reviews-Luss_Visitor_Centre-Luss_Loch_Lomond_and_The_Trossachs_National_Park_Scotland.html",
      blogs: [{ title: "Luss", source: "Loch Lomond & The Trossachs National Park", url: "https://www.lochlomond-trossachs.org/discover-the-park/towns-villages/luss/" }]
    }
  },

  /* ======================================================================
   * STAYS — keyed by day number. Each stop lists 2-3 accommodation options.
   * ====================================================================== */
  stays: {

    // ---- Day 1: Edinburgh (nights 1-2) --------------------------------------
    1: [
      {
        title: "Old Town & Royal Mile Airbnbs",
        type: "airbnb-area",
        url: "https://www.airbnb.com/s/Edinburgh-Old-Town--Edinburgh--Scotland--United-Kingdom/homes?checkin=2026-07-20&checkout=2026-07-22&adults=3&children=0&price_max=250&currency=GBP",
        image: "https://images.unsplash.com/photo-1566139884132-9b153c2c5d6a?w=1400",
        why: "Hand-picked Old Town flats steps from the Royal Mile and the Castle, pre-filtered for your two-night arrival window, 3 adults, and the £250 cap.",
        price: "£140–£230/night"
      },
      {
        title: "23 Mayfield",
        type: "bnb",
        url: "https://www.23mayfield.co.uk/",
        image: "https://www.23mayfield.co.uk/img/about.jpg",
        why: "Multi-award-winning Victorian villa B&B with Jacobean/Tudor-styled ensuites (incl. family rooms for 3), candlelit breakfast, free parking. 15-min walk into the Royal Mile.",
        price: "£170–£230/night"
      },
      {
        title: "Barony House",
        type: "bnb",
        url: "https://baronyhouse.co.uk/",
        image: "https://baronyhouse.co.uk/wp-content/uploads/2023/01/barony-house-edinburgh-exterior.jpg",
        why: "Family-run artist-designed 5-Star Gold guest house on Mayfield Gardens with locally-sourced breakfast and free parking — useful when the car matters.",
        price: "£160–£220/night"
      }
    ],

    // ---- Day 3: Pitlochry --------------------------------------------------
    3: [
      {
        title: "Rosemount Hotel",
        type: "bnb",
        url: "https://www.rosemount-hotel.co.uk/b-and-b-pitlochry/",
        why: "Long-standing family-style independent B&B at 12 Higher Oakfield, just above Pitlochry centre. Mid-range rates, breakfast included.",
        price: "£95–£160/night"
      },
      {
        title: "Pitlochry cottages on Airbnb",
        type: "airbnb-area",
        url: "https://www.airbnb.com/s/Pitlochry--United-Kingdom/homes?checkin=2026-07-22&checkout=2026-07-23&adults=3&price_max=250&currency=GBP",
        why: "Self-catering alternatives — Pitlochry averages 4.8/5 on Airbnb.",
        price: "£90–£220/night"
      }
    ],

    // ---- Day 4: Drumnadrochit (Loch Ness) ----------------------------------
    4: [
      {
        title: "Drumnadrochit & Loch Ness self-catering (Airbnb)",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Drumnadrochit--Inverness--United-Kingdom/homes?checkin=2026-07-23&checkout=2026-07-25&adults=3&price_max=250&currency=GBP",
        why: "Entire flats and cottages on the loch shore — closest base to Urquhart Castle and the Loch Ness cruise pier.",
        price: "£120–£230/night"
      },
      {
        title: "Inverness city alternatives",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Inverness--Scotland--United-Kingdom/homes?checkin=2026-07-23&checkout=2026-07-25&adults=3&price_max=250&currency=GBP",
        why: "Closer to Inverness centre — 25 min drive from Urquhart Castle but more dining options nearby.",
        price: "£100–£230/night"
      },
      {
        title: "Loch Ness Lodge",
        type: "bnb",
        url: "https://www.loch-ness-lodge.com",
        why: "Boutique lodge overlooking Loch Ness, walking distance from Urquhart Castle.",
        price: "£200–£250/night"
      }
    ],

    // ---- Day 6: Raasay -----------------------------------------------------
    6: [
      {
        title: "Borodale House at Isle of Raasay Distillery",
        type: "bnb",
        url: "https://raasaydistillery.com/visit/borodale-house/",
        why: "6-room boutique hotel at the working distillery, on the south-east of Raasay (IV40 8PB). Single malts on tap, in-house restaurant, Cuillin views across the Sound of Raasay.",
        price: "from ~£220/night"
      },
      {
        title: "Raasay House",
        type: "bnb",
        url: "https://www.raasay-house.co.uk/",
        why: "Georgian house turned activity centre, dormitory + private rooms, café and restaurant. Family rooms available, kayaks and bike hire on site.",
        price: "£120–£200/night"
      },
      {
        title: "Raasay cottages on Airbnb",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Raasay--United-Kingdom/homes?checkin=2026-07-25&checkout=2026-07-28&adults=3&price_max=250&currency=GBP",
        why: "Tiny inventory (Raasay has fewer than 20 listings total) — filtered for your dates and party.",
        price: "£100–£200/night"
      }
    ],

    // ---- Day 9: Torridon (night 9) ------------------------------------------
    9: [
      {
        title: "The Torridon Inn",
        type: "bnb",
        url: "https://www.thetorridon.com/the-inn/",
        why: "Relaxed sister to the 5-star Torridon lodge — a walkers' and road-trippers' favourite at the head of Upper Loch Torridon, with a good bar and mountain views. Family rooms available.",
        price: "£120–£160/night"
      },
      {
        title: "The Torridon (5-star lodge)",
        type: "bnb",
        url: "https://www.thetorridon.com",
        why: "Victorian shooting lodge on the loch — Scotland's finest Highland country-house hotel if you want to splurge for one remote night.",
        price: "£220–£250/night"
      },
      {
        title: "Torridon & Shieldaig cottages (Airbnb)",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Torridon--United-Kingdom/homes?checkin=2026-07-28&checkout=2026-07-29&adults=3&price_max=250&currency=GBP",
        why: "Tiny inventory in this remote glen — filtered for your night and party. Shieldaig village a few miles west has a little more stock.",
        price: "£110–£220/night"
      }
    ],

    // ---- Day 10: Fort William (night 10) ------------------------------------
    10: [
      {
        title: "The Lime Tree — hotel & art gallery",
        type: "bnb",
        url: "https://www.limetreefortwilliam.co.uk/",
        why: "Boutique hotel in a converted manse with its own art gallery, a short walk from Fort William centre and the Jacobite departure — the town's most characterful stay.",
        price: "£130–£170/night"
      },
      {
        title: "Glenfinnan House Hotel",
        type: "bnb",
        url: "https://www.glenfinnanhouse.com/",
        why: "Historic country house on Loch Shiel, 5 min from the viaduct — perfect if you want to be right by Glenfinnan for the morning.",
        price: "£160–£210/night"
      },
      {
        title: "Fort William centre (Airbnb & hotels)",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Fort-William--United-Kingdom/homes?checkin=2026-07-29&checkout=2026-07-30&adults=3&price_max=250&currency=GBP",
        why: "Widest choice on the whole trip — apartments and B&Bs near the High Street and train station. Book early: Fort William is a busy Highland hub in summer.",
        price: "£110–£200/night"
      }
    ],

    // ---- Day 11: Glencoe (nights 11-12) -------------------------------------
    11: [
      {
        title: "Clachaig Inn",
        type: "bnb",
        url: "https://www.clachaig.com",
        why: "The legendary walkers' inn in the glen itself — ales, hearty food, mountain company. The classic Glencoe stay, and the whole reason to give Glencoe two nights. Sells out months ahead.",
        price: "£110–£150/night"
      },
      {
        title: "Ballachulish & Glencoe cottages (Airbnb)",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/s/Glencoe--United-Kingdom/homes?checkin=2026-07-30&checkout=2026-08-01&adults=3&price_max=250&currency=GBP",
        why: "Whole cottages in Glencoe village and lochside Ballachulish — filtered for your two-night window. The mountain-view stays go first.",
        price: "£100–£250/night"
      },
      {
        title: "Scorrybreac Guest House",
        type: "bnb",
        url: "https://www.scorrybreacglencoe.com/",
        why: "Independent 4-star family-run B&B in private grounds above Glencoe village with panoramic mountain views. Call ahead to confirm a room for 3.",
        price: "£120–£180/night"
      }
    ],

    // ---- Day 13: Glasgow (night 13 only) ------------------------------------
    13: [
      {
        title: "Merchant City apartments (Airbnb)",
        type: "airbnb-area",
        url: "https://www.airbnb.co.uk/merchant-city-glasgow-city-united-kingdom/stays/apartments?checkin=2026-08-01&checkout=2026-08-02&adults=3&price_max=250&currency=GBP",
        why: "One-night Glasgow handover before the long drive south. Merchant City keeps you central for dinner at Cail Bruich or Ubiquitous Chip.",
        price: "£90–£220/night"
      },
      {
        title: "No.15 Boutique B&B — Mackintosh Suite",
        type: "bnb",
        url: "https://www.15glasgow.com/",
        image: "https://www.15glasgow.com/wp-content/uploads/2019/05/Mackintosh-Room-1.jpg",
        why: "A-listed Victorian townhouse on Woodside Place with a genuine Charles Rennie Mackintosh-themed suite. Michelin and Good Hotel Guide recommended.",
        price: "£140–£200/night"
      },
      {
        title: "Boutique 50",
        type: "bnb",
        url: "https://www.boutique50.co.uk/",
        image: "https://www.boutique50.co.uk/wp-content/uploads/2021/03/boutique-50-glasgow-exterior.jpg",
        why: "Independent 10-room boutique on a quiet West End street near Kelvingrove and Finnieston. Family room from £133/night.",
        price: "£133–£210/night"
      }
    ]
  }
};
