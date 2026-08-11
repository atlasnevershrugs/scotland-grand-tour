/* ============================================================
   SOUTH OF ENGLAND — Oxford → Bath → London · 15–24 Aug 2026
   Second itinerary, same engine/design as the Scotland site.
   Public info only (names, places, times). No refs/prices/PII.
   Photos load from Wikipedia via each attraction's `wiki` slug.
   ============================================================ */
window.TRIP = {
  title: "South of England",
  subtitle: "Oxford to London — Bath, Stonehenge, the Cotswolds & the capital",
  dates: "15–24 Aug 2026",
  travellers: "2 adults + 1 (age 15)",
  pickup: "Start: Oxford · Sat 15 Aug",
  dropoff: "Fly out: Gatwick → Dubai · Mon 24 Aug",

  stats: [
    { label: "Days", value: "10" },
    { label: "Bases", value: "Bath · London" },
    { label: "Nights", value: "4 + 5" },
    { label: "Travellers", value: "2 + 1" }
  ],

  // Overnight bases (numbered pins + line on the overview map).
  // Oxford and Bath both carry day:1 so Day 1 reads as an Oxford→Bath transfer.
  route: [
    { lat: 51.7520, lng: -1.2577, label: "Oxford",  nights: "start",    day: 1 },
    { lat: 51.3811, lng: -2.3590, label: "Bath",    nights: "4",        day: 1 },
    { lat: 51.4952, lng: -0.1441, label: "London",  nights: "5",        day: 5 },
    { lat: 51.1537, lng: -0.1821, label: "Gatwick", nights: "drop-off", day: 10 }
  ],

  // Day-trip waypoints (small dots on the overview map).
  detours: [
    { lat: 51.4915, lng: -2.2270, label: "Castle Combe",  day: 2 },
    { lat: 51.4155, lng: -2.1225, label: "Lacock",        day: 2 },
    { lat: 51.4286, lng: -1.8541, label: "Avebury",       day: 3 },
    { lat: 51.1789, lng: -1.8262, label: "Stonehenge",    day: 3 },
    { lat: 51.0649, lng: -1.7976, label: "Salisbury",     day: 3 },
    { lat: 51.7595, lng: -1.8330, label: "Bibury",        day: 4 },
    { lat: 51.8875, lng: -1.7594, label: "Bourton",       day: 4 },
    { lat: 51.8414, lng: -1.3610, label: "Blenheim",      day: 4 }
  ],

  practical: [
    { title: "🎟 Pre-book these — they sell out", body: "Several stops need <strong>timed tickets booked online in advance</strong> in peak-summer August: <strong>Stonehenge</strong>, the <strong>Roman Baths</strong>, <strong>Blenheim Palace</strong>, the <strong>Tower of London</strong>, <strong>Westminster Abbey</strong>, the <strong>Churchill War Rooms</strong>, <strong>Sky Garden</strong> (free but ticketed), the <strong>London Eye</strong>, and your <strong>West End show</strong>. Look for the red 🎟 tag on those cards." },
    { title: "The car is a Bath thing only", body: "Oxford→Bath and Bath→London are by <strong>train</strong>; London is all Tube and on foot. Hire a car <strong>in Bath</strong> for the three West-Country day-trips and <strong>return it in Bath</strong> — same pickup and drop-off, no one-way fee, and no car to park in London." },
    { title: "Parking in Bath", body: "Bath’s centre is tight and largely permit/pay. Use a <strong>Park &amp; Ride</strong> (Lansdown, Newbridge or Odd Down) on the car days, or a hotel with parking. You won’t need the car for Bath itself — it’s a walking city." },
    { title: "London travel — just tap", body: "No need for paper tickets or an Oyster: <strong>tap a contactless card or phone</strong> on the yellow readers (Tube, bus, DLR, most rail). Daily fares are capped. A 15-year-old travels at child rate — ask at a station about a <strong>child Zip photocard</strong> if you’ll ride a lot." },
    { title: "Changing the Guard & market days", body: "<strong>Changing the Guard</strong> at Buckingham Palace runs on set mornings (~11:00) — check the exact days for your week and arrive early. Weekend markets: <strong>Portobello Road</strong> is biggest on Saturday; <strong>Columbia Road flower market</strong> is Sunday only; <strong>Borough Market</strong> is quietest/limited on Sundays." },
    { title: "Getting to Gatwick", body: "From central London the <strong>Gatwick Express</strong> runs Victoria → Gatwick in ~30 min (every ~15 min); Thameslink from London Bridge/Blackfriars/St Pancras also serves Gatwick. Allow <strong>~3 hours</strong> before an international flight to Dubai. (Confirm your flight time so we can size the last morning.)" }
  ],

  restaurantsToBook: [
    { name: "A West End show", when: "Fri 21 Aug eve — book weeks ahead", url: "https://officiallondontheatre.com/" },
    { name: "Afternoon tea (London)", when: "Any afternoon — popular ones book out", url: "https://www.google.com/search?q=best+afternoon+tea+london+booking" },
    { name: "Sunday roast (London)", when: "Sun 23 Aug — good gastropubs fill up", url: "https://www.google.com/search?q=best+sunday+roast+london+booking" },
    { name: "Sally Lunn's / dinner in Bath", when: "One Bath evening", url: "https://www.sallylunns.co.uk/" }
  ],

  days: [
    /* ---------------- DAY 1 — Arrive Bath (~3pm) + Georgian evening ---------------- */
    {
      num: 1, date: "Sat 15 Aug", weekday: "Saturday",
      title: "Arrive Bath — a Georgian evening",
      stay: { name: "Bath — central base (nights 1–4)", lat: 51.3811, lng: -2.3590, mapUrl: "https://www.google.com/maps/search/?api=1&query=Bath%20city%20centre%20Somerset" },
      transport: "train",
      depart: "Oxford’s already done — you reach Bath around 3pm and check in. Use the golden-hour evening for Bath’s free, ticket-free Georgian highlights on foot, then dinner. (Save the Roman Baths for a proper morning slot tomorrow.)",
      leg: "Arrive Bath ~15:00 · evening on foot",
      route: "Arrive ~15:00", miles: "—", drive: "—",
      overnight: "Bath",
      blurb: "Straight into Bath. Drop the bags around 3pm and take the honey-stone city on foot while the light is low: the Abbey and its busker-filled churchyard, Pulteney Bridge over its weir, and the great Georgian sweep of the Royal Crescent and The Circus — all free and only a few minutes apart. A relaxed first evening and dinner before three fuller days from this base.",
      attractions: [
        { name: "Bath Abbey & Abbey Churchyard", seq: 1, lat: 51.3814, lng: -2.3590, wiki: "Bath_Abbey", desc: "The soaring fan-vaulted abbey and its lively square — admire the carved West Front and step inside if it’s still open (the tower climb and interior are best earlier in the day).", url: "https://www.bathabbey.org/", locale: "Bath" },
        { name: "Pulteney Bridge & Parade Gardens", seq: 2, lat: 51.3846, lng: -2.3573, wiki: "Pulteney_Bridge", desc: "One of the world’s few bridges lined with shops on both sides, curving above the Pulteney Weir — best seen from Parade Gardens on the riverbank below.", locale: "Bath" },
        { name: "Royal Crescent & The Circus", seq: 3, lat: 51.3873, lng: -2.3665, wiki: "Royal_Crescent", desc: "The great Georgian showpieces — a 30-house curved terrace and the ring of The Circus, glorious in evening light. Walk the lawn; No.1 Royal Crescent is a museum you can tour by day.", url: "https://no1royalcrescent.org.uk/", locale: "Bath" }
      ],
      restaurants: [
        { name: "Sally Lunn’s / dinner in Bath", note: "One of Bath’s oldest houses (the famous Sally Lunn bun), or any of the centre’s restaurants a short walk from the Abbey.", url: "https://www.sallylunns.co.uk/" }
      ]
    },

    /* ---------------- DAY 2 — Bath city + nearest villages ---------------- */
    {
      num: 2, date: "Sun 16 Aug", weekday: "Sunday",
      title: "Roman Baths + Castle Combe & Lacock",
      transport: "car",
      depart: "Roman Baths open ~09:00 — book a slot and go first thing, then pick up the hire car around midday for two of England’s prettiest villages, both under 40 minutes away.",
      leg: "Roman Baths (AM) · Castle Combe & Lacock (PM, by car)",
      route: "By car (PM)", miles: "40", drive: "—",
      overnight: "Bath",
      blurb: "The one big Bath ticket, then the countryside. Start at the Roman Baths — Britain’s best-preserved Roman spa, still fed by the hot spring. Collect the car around midday and slip out to Castle Combe, often called England’s prettiest village, and Lacock, a National-Trust-owned time capsule that stands in for period dramas and Harry Potter. Back in Bath for dinner. (You’ll already have walked the Abbey, Pulteney Bridge and the Royal Crescent last evening.)",
      attractions: [
        { name: "Roman Baths", seq: 1, lat: 51.3811, lng: -2.3597, wiki: "Roman_Baths_(Bath)", desc: "Britain’s best-preserved Roman spa, still fed by the hot spring — the green Great Bath is unmissable. Pre-book a timed ticket; allow 1.5–2 hrs.", url: "https://www.romanbaths.co.uk/", locale: "Bath", mustDo: true, bookAhead: true, bookNote: "Book a timed entry online — August mornings sell out. A combined ticket with the Fashion Museum can be better value." },
        { name: "Castle Combe", seq: 2, lat: 51.4915, lng: -2.2270, wiki: "Castle_Combe", desc: "A honey-stone Cotswold village with no visible modern buildings — a film favourite (War Horse, Downton). ~30 min from Bath; park at the top and walk down.", locale: "Wiltshire" },
        { name: "Lacock", seq: 3, lat: 51.4155, lng: -2.1225, wiki: "Lacock", desc: "A whole National-Trust-owned village of medieval streets, plus Lacock Abbey — filming location for Harry Potter and Cranford. ~40 min from Bath.", url: "https://www.nationaltrust.org.uk/visit/wiltshire/lacock", locale: "Wiltshire" }
      ],
      restaurants: [
        { name: "Dinner in Bath (book on weekends)", note: "The centre has plenty a short walk from the Abbey — e.g. The Scallop Shell (seafood) or a Walcot Street gastropub. Weekends fill up.", url: "https://www.google.com/maps/search/?api=1&query=restaurants%20central%20Bath" }
      ]
    },

    /* ---------------- DAY 3 — Stones & cathedral (car) ---------------- */
    {
      num: 3, date: "Mon 17 Aug", weekday: "Monday",
      title: "Avebury, Stonehenge & Salisbury",
      transport: "car",
      depart: "The big day south — book your Stonehenge timed entry and aim to leave Bath by ~09:00. It runs as a line south: Avebury first, then Stonehenge, then Salisbury.",
      leg: "Bath → Avebury → Stonehenge → Salisbury → Bath",
      route: "By car", miles: "120", drive: "—",
      overnight: "Bath",
      blurb: "Two very different stone circles and a soaring cathedral. Start at Avebury — the largest stone circle in the world, and one you can walk right up to and among, for free, with a village and pub in the middle. Then the icon: Stonehenge, on Salisbury Plain. Finish in Salisbury, whose cathedral has Britain’s tallest spire and an original 1215 Magna Carta.",
      attractions: [
        { name: "Avebury Stone Circle", seq: 1, lat: 51.4286, lng: -1.8541, wiki: "Avebury", desc: "The world’s largest prehistoric stone circle — huge, uncrowded, and free to walk among (unlike Stonehenge). ~45 min from Bath; park in the NT car park.", url: "https://www.nationaltrust.org.uk/visit/wiltshire/avebury", locale: "Wiltshire", mustDo: true },
        { name: "Stonehenge", seq: 2, lat: 51.1789, lng: -1.8262, wiki: "Stonehenge", desc: "The 5,000-year-old ring of standing stones — walk the path around the circle; the visitor centre and shuttle are included. ~40 min south of Avebury.", url: "https://www.english-heritage.org.uk/visit/places/stonehenge/", locale: "Wiltshire", mustDo: true, bookAhead: true, bookNote: "Book a timed-entry ticket online in advance — it’s much cheaper than the gate and August slots fill up. Members of English Heritage / National Trust still need to reserve a slot." },
        { name: "Salisbury Cathedral", seq: 3, lat: 51.0649, lng: -1.7976, wiki: "Salisbury_Cathedral", desc: "Britain’s tallest spire (123 m) and the best-preserved 1215 Magna Carta, in the Chapter House. ~15 min from Stonehenge; lovely close and city to end the day.", url: "https://www.salisburycathedral.org.uk/", locale: "Salisbury" }
      ],
      restaurants: [
        { name: "The Boston Tea Party / Salisbury cafés", note: "Grab a late lunch in Salisbury near the cathedral close before driving back to Bath.", url: "https://www.google.com/maps/search/?api=1&query=cafes%20near%20Salisbury%20Cathedral" }
      ]
    },

    /* ---------------- DAY 4 — Cotswolds + Blenheim (car) ---------------- */
    {
      num: 4, date: "Tue 18 Aug", weekday: "Tuesday",
      title: "Cotswolds villages & Blenheim Palace",
      transport: "car",
      depart: "The longest driving day — a Cotswolds loop northeast. Leave by ~08:30 to enjoy the villages before the crowds; return the hire car in Bath by evening. (If you’d rather a shorter, gentler day, swap this for Wells Cathedral + Cheddar Gorge — just say.)",
      leg: "Bath → Bibury → Bourton-on-the-Water → Blenheim → Bath",
      route: "By car", miles: "150", drive: "—",
      overnight: "Bath",
      blurb: "Storybook England. Bibury’s Arlington Row is one of the most photographed streets in the country; Bourton-on-the-Water is the ‘Venice of the Cotswolds’, with low bridges over the little River Windrush. Cap it at Blenheim Palace — Churchill’s birthplace and a vast baroque palace with Capability Brown parkland. It’s a full day of driving, so trim a village if you’d rather linger.",
      attractions: [
        { name: "Bibury (Arlington Row)", seq: 1, lat: 51.7595, lng: -1.8330, wiki: "Bibury", desc: "Weavers’ cottages of golden stone along a water-meadow — the classic Cotswold postcard. ~1h15 from Bath; small, so park considerately and walk.", locale: "Cotswolds" },
        { name: "Bourton-on-the-Water", seq: 2, lat: 51.8875, lng: -1.7594, wiki: "Bourton-on-the-Water", desc: "Low stone footbridges over the shallow Windrush running right through the green — tea rooms, a model village and easy strolling. ~25 min from Bibury.", locale: "Cotswolds" },
        { name: "Blenheim Palace", seq: 3, lat: 51.8414, lng: -1.3610, wiki: "Blenheim_Palace", desc: "A monumental baroque palace and UNESCO site — Winston Churchill’s birthplace — with formal gardens and Capability Brown grounds. ~40 min from Bourton; allow 2–3 hrs.", url: "https://www.blenheimpalace.com/", locale: "Woodstock", bookAhead: true, bookNote: "Book online for the cheaper advance price; a Palace + Park + Gardens ticket can be used as an annual pass. Last admission is well before closing." }
      ],
      restaurants: [
        { name: "A Cotswold pub lunch", note: "Bourton or a nearby village (Stow-on-the-Wold, Lower Slaughter) has plenty of classic pubs for lunch mid-loop.", url: "https://www.google.com/maps/search/?api=1&query=cotswolds%20pub%20lunch%20Bourton-on-the-Water" }
      ]
    },

    /* ---------------- DAY 5 — Bath → London (train) ---------------- */
    {
      num: 5, date: "Wed 19 Aug", weekday: "Wednesday",
      title: "Bath → London, and first steps",
      stay: { name: "London — central base (nights 5–9)", lat: 51.4952, lng: -0.1441, mapUrl: "https://www.google.com/maps/search/?api=1&query=Victoria%20Westminster%20London" },
      transport: "train",
      depart: "A late-morning ~1h25 train from Bath Spa to London Paddington (GWR, frequent). Drop bags, then ease into the city with a riverside Westminster walk.",
      leg: "Bath Spa → London Paddington by train",
      route: "Train · GWR", miles: "—", drive: "~1h25",
      overnight: "London",
      blurb: "Swap the West Country for the capital. A fast direct train into Paddington, then check in to your London base for five nights. Take the afternoon gently: walk the classic Westminster stretch — Big Ben and the Houses of Parliament, over Westminster Bridge for the view, up Whitehall past Downing Street to Trafalgar Square, with St James’s Park to finish. An optional evening Thames cruise is a lovely first look.",
      attractions: [
        { name: "Big Ben & Houses of Parliament", seq: 1, lat: 51.5007, lng: -0.1246, wiki: "Big_Ben", desc: "The Elizabeth Tower (‘Big Ben’) and the Palace of Westminster on the river — the definitive London view. Free to admire from Parliament Square and the bridge.", locale: "Westminster", enroute: true },
        { name: "Westminster Bridge & the South Bank", seq: 2, lat: 51.5008, lng: -0.1216, wiki: "Westminster_Bridge", desc: "Cross for the postcard shot of Parliament, then stroll the South Bank riverside — street performers, the London Eye ahead, easy first-evening wandering.", locale: "South Bank", enroute: true },
        { name: "Trafalgar Square & National Gallery", seq: 3, lat: 51.5080, lng: -0.1281, wiki: "Trafalgar_Square", desc: "Nelson’s Column, the lions and fountains — and the free National Gallery on the north side if you fancy a first culture hit. Up Whitehall from Westminster.", locale: "Westminster" }
      ],
      restaurants: [
        { name: "Dinner in Soho / Covent Garden", note: "A short walk or Tube hop from Trafalgar Square — endless options for a first London dinner.", url: "https://www.google.com/maps/search/?api=1&query=Covent%20Garden%20restaurants%20London" }
      ]
    },

    /* ---------------- DAY 6 — Royal & historic ---------------- */
    {
      num: 6, date: "Thu 20 Aug", weekday: "Thursday",
      title: "Royal & historic London",
      transport: "tube",
      depart: "Start at the Tower at opening (~09:00) to beat the queues for the Crown Jewels, then work west along the river to Westminster.",
      leg: "Tower of London · Tower Bridge · Westminster",
      route: "Tube & on foot", miles: "—", drive: "—",
      overnight: "London",
      blurb: "A thousand years of history in a day. The Tower of London holds the Crown Jewels, the ravens and the Yeoman Warders’ tales; next door, Tower Bridge lifts over the Thames with a glass-floor walkway. Hop a riverboat west to Westminster for the Churchill War Rooms — the underground WWII bunker — and Westminster Abbey, where monarchs are crowned.",
      attractions: [
        { name: "Tower of London", seq: 1, lat: 51.5081, lng: -0.0759, wiki: "Tower_of_London", desc: "The Crown Jewels, the White Tower, the ravens and a Yeoman Warder tour — allow ~3 hrs. Go at opening to get ahead of the crowds.", url: "https://www.hrp.org.uk/tower-of-london/", locale: "City of London", mustDo: true, bookAhead: true, bookNote: "Book a timed ticket online (cheaper than the gate). Arrive for opening and head straight to the Crown Jewels first." },
        { name: "Tower Bridge", seq: 2, lat: 51.5055, lng: -0.0754, wiki: "Tower_Bridge", desc: "The Victorian bascule bridge — walk the high-level glass-floor walkways and see the engine rooms, or just cross it for free. Right beside the Tower.", url: "https://www.towerbridge.org.uk/", locale: "City of London" },
        { name: "Churchill War Rooms", seq: 3, lat: 51.5024, lng: -0.1290, wiki: "Churchill_War_Rooms", desc: "The preserved underground bunker where Churchill ran WWII, plus the Churchill Museum. Gripping; pre-book a slot. A river cruise from the Tower drops you nearby.", url: "https://www.iwm.org.uk/visits/churchill-war-rooms", locale: "Westminster", bookAhead: true, bookNote: "Timed tickets — book online in advance; this one regularly sells out in summer." },
        { name: "Westminster Abbey", seq: 4, lat: 51.4994, lng: -0.1273, wiki: "Westminster_Abbey", desc: "The coronation church — Poets’ Corner, royal tombs and 1,000 years of history. Closed to tourists on Sundays; pre-book a timed ticket.", url: "https://www.westminster-abbey.org/", locale: "Westminster", bookAhead: true, bookNote: "Book a timed ticket online. Note it’s closed to sightseers on Sundays (services only)." }
      ],
      restaurants: [
        { name: "Lunch by the river (Tower/South Bank)", note: "Plenty around St Katharine Docks by the Tower, or the South Bank once you cross the river.", url: "https://www.google.com/maps/search/?api=1&query=St%20Katharine%20Docks%20restaurants" }
      ]
    },

    /* ---------------- DAY 7 — Museums + West End ---------------- */
    {
      num: 7, date: "Fri 21 Aug", weekday: "Friday",
      title: "Great museums + a West End show",
      transport: "tube",
      depart: "Museums are free and busiest midday — arrive at the British Museum near opening (~10:00). Book your West End show for the evening well ahead.",
      leg: "British Museum · South Kensington museums · Theatreland",
      route: "Tube & on foot", miles: "—", drive: "—",
      overnight: "London",
      blurb: "London’s world-class museums, almost all free. The British Museum holds the Rosetta Stone, the Parthenon sculptures and the Egyptian mummies. In the afternoon, choose South Kensington’s giants — the Natural History Museum (dinosaurs, the whale) and the V&A next door — or the National Gallery. Cap the day with a West End musical in Theatreland.",
      attractions: [
        { name: "British Museum", seq: 1, lat: 51.5194, lng: -0.1270, wiki: "British_Museum", desc: "Rosetta Stone, Egyptian mummies, the Parthenon (Elgin) Marbles — 2 million years of history, free to enter. Vast; pick a few galleries. Donations welcome.", url: "https://www.britishmuseum.org/", locale: "Bloomsbury", mustDo: true },
        { name: "Natural History Museum", seq: 2, lat: 51.4967, lng: -0.1764, wiki: "Natural_History_Museum,_London", desc: "The cathedral-like Hintze Hall with its blue-whale skeleton, dinosaurs and gems — a hit with all ages, free. South Kensington.", url: "https://www.nhm.ac.uk/", locale: "South Kensington" },
        { name: "Victoria & Albert Museum", seq: 3, lat: 51.4966, lng: -0.1722, wiki: "Victoria_and_Albert_Museum", desc: "Optional next-door alternative — the world’s greatest museum of art and design, free. Beautiful courtyard café. Right beside the NHM.", url: "https://www.vam.ac.uk/", locale: "South Kensington" },
        { name: "A West End show", seq: 4, lat: 51.5127, lng: -0.1281, wiki: null, desc: "Cap the day in Theatreland — a long-running musical (Lion King, Les Mis, Hamilton) or a play. Curtain is usually ~19:30. Book ahead for the best seats/prices.", url: "https://officiallondontheatre.com/", locale: "West End", bookAhead: true, bookNote: "Book online in advance via the official theatre or TodayTix; day-of TKTS in Leicester Square has discounts if you’re flexible." }
      ],
      restaurants: [
        { name: "Pre-theatre dinner in Soho", note: "Soho, Chinatown and Covent Garden are packed with pre-theatre menus a short walk from the theatres.", url: "https://www.google.com/maps/search/?api=1&query=pre-theatre%20dinner%20Soho%20London" }
      ]
    },

    /* ---------------- DAY 8 — Views & landmarks ---------------- */
    {
      num: 8, date: "Sat 22 Aug", weekday: "Saturday",
      title: "Rooftops, St Paul’s & the South Bank",
      transport: "tube",
      depart: "It’s a Saturday — catch the Changing of the Guard at Buckingham Palace (~11:00, on set days) early, then work east to the City and finish along the South Bank at dusk. Book Sky Garden, St Paul’s and the London Eye ahead.",
      leg: "Buckingham Palace · the City · Bankside · South Bank",
      route: "Tube & on foot", miles: "—", drive: "—",
      overnight: "London",
      blurb: "London from every angle. Start at Buckingham Palace for the Changing of the Guard, then head into the City: the free Sky Garden gives a rooftop panorama, and St Paul’s dome rewards the climb. Cross the Millennium Bridge to Tate Modern on Bankside, then walk the South Bank to end on the London Eye as the lights come on.",
      attractions: [
        { name: "Buckingham Palace & Changing the Guard", seq: 1, lat: 51.5014, lng: -0.1419, wiki: "Buckingham_Palace", desc: "The Queen’s… now the King’s London home — the guard-change ceremony (~11:00 on set days) draws crowds; arrive early for a spot by the railings or the Victoria Memorial.", url: "https://www.rct.uk/visit/buckingham-palace", locale: "Westminster" },
        { name: "Sky Garden", seq: 2, lat: 51.5111, lng: -0.0837, wiki: "20_Fenchurch_Street", desc: "A free three-storey garden atop the ‘Walkie-Talkie’ with wraparound City views — a great free alternative to the Shard. Book a timed slot online.", url: "https://skygarden.london/", locale: "City of London", bookAhead: true, bookNote: "Free, but you must book a timed entry online (released a few weeks ahead). The Shard nearby is the paid, higher alternative." },
        { name: "St Paul’s Cathedral", seq: 3, lat: 51.5138, lng: -0.0984, wiki: "St_Paul's_Cathedral", desc: "Wren’s masterpiece — climb to the Whispering Gallery and up to the dome galleries for a City panorama. Closed Sundays for services; pre-book.", url: "https://www.stpauls.co.uk/", locale: "City of London", bookAhead: true, bookNote: "Book online for the cheaper advance price; closed to sightseeing on Sundays." },
        { name: "Tate Modern & Millennium Bridge", seq: 4, lat: 51.5076, lng: -0.0994, wiki: "Tate_Modern", desc: "Cross the sleek Millennium Bridge from St Paul’s to the free Tate Modern in the old Bankside power station — modern art and a top-floor viewpoint.", url: "https://www.tate.org.uk/visit/tate-modern", locale: "Bankside" },
        { name: "London Eye", seq: 5, lat: 51.5033, lng: -0.1195, wiki: "London_Eye", desc: "The giant riverside wheel — a 30-min rotation with the best central views, especially at dusk. Pre-book a timed ticket to skip the line.", url: "https://www.londoneye.com/", locale: "South Bank", bookAhead: true, bookNote: "Book a timed ticket online (fast-track saves a lot of queuing in August). Sunset slots are the most popular." }
      ],
      restaurants: [
        { name: "Dinner on the South Bank", note: "Gabriel’s Wharf, the OXO Tower and Borough (a short hop) all have riverside options to end the day.", url: "https://www.google.com/maps/search/?api=1&query=South%20Bank%20restaurants%20London" }
      ]
    },

    /* ---------------- DAY 9 — Markets & neighbourhoods ---------------- */
    {
      num: 9, date: "Sun 23 Aug", weekday: "Sunday",
      title: "Markets, villages-in-the-city & parks",
      transport: "tube",
      depart: "A Sunday for markets and neighbourhoods. Columbia Road flower market is Sunday-only and best early (~09:00–14:00); build the rest of the day around it.",
      leg: "Columbia Road · Camden · Notting Hill · (or Greenwich)",
      route: "Tube & on foot", miles: "—", drive: "—",
      overnight: "London",
      blurb: "See London’s neighbourhoods at their most alive. The Sunday-only Columbia Road flower market bursts with colour and barrow-boy banter; Camden Market is a warren of food stalls and music by the canal; Notting Hill and Portobello Road bring pastel houses and antiques. Prefer a single anchor? Swap in Greenwich — the Cutty Sark, the Royal Observatory and the Prime Meridian, with a weekend market.",
      attractions: [
        { name: "Columbia Road Flower Market", seq: 1, lat: 51.5292, lng: -0.0686, wiki: "Columbia_Road", desc: "A Sunday-only explosion of flowers and plants down a Victorian street, with indie shops and coffee. Go early; it’s liveliest before lunch. East London.", locale: "Bethnal Green" },
        { name: "Camden Market", seq: 2, lat: 51.5416, lng: -0.1465, wiki: "Camden_Market", desc: "Sprawling stalls, street food and the Regent’s Canal at Camden Lock — quirky and great for a teen. Walk the canal towards Regent’s Park / Primrose Hill for views.", url: "https://www.camdenmarket.com/", locale: "Camden" },
        { name: "Notting Hill & Portobello Road", seq: 3, lat: 51.5170, lng: -0.2050, wiki: "Portobello_Road", desc: "Pastel townhouses and the famous antiques street (busiest Saturday, but shops and cafés open Sunday). Pretty for a wander; Hyde Park & Kensington are close.", locale: "Notting Hill" },
        { name: "Greenwich (optional full-day swap)", seq: 4, lat: 51.4826, lng: -0.0077, wiki: "Cutty_Sark", desc: "Optional alternative — the tea-clipper Cutty Sark, the Royal Observatory and the Prime Meridian line, the Maritime Museum and a weekend market. Reach it by river or DLR.", url: "https://www.rmg.co.uk/", locale: "Greenwich" }
      ],
      restaurants: [
        { name: "Sunday roast (a London gastropub)", note: "A proper Sunday roast is the move — book a well-reviewed gastropub near wherever you end up.", url: "https://www.google.com/search?q=best%20sunday%20roast%20london%20booking" }
      ]
    },

    /* ---------------- DAY 10 — London → Gatwick → Dubai ---------------- */
    {
      num: 10, date: "Mon 24 Aug", weekday: "Monday",
      title: "Last morning, then Gatwick → Dubai",
      transport: "train",
      depart: "Sized to your flight (please confirm the time): allow ~3 hrs before departure. Gatwick Express from Victoria is ~30 min, every ~15 min. For an afternoon flight you have a relaxed morning; for a morning flight, head straight to Gatwick.",
      leg: "London → Gatwick by train, fly to Dubai",
      route: "Gatwick Express", miles: "—", drive: "~30 min",
      overnight: "Gatwick ✈ Dubai",
      blurb: "Home time. Depending on your flight, squeeze in one last London moment — a final breakfast, a riverside walk, or a quick market — then make your way to Victoria for the Gatwick Express. Give yourself a comfortable buffer for bag-drop and security on a busy August Monday.",
      attractions: [
        { name: "A last London stroll or breakfast", seq: 1, lat: 51.5055, lng: -0.0910, wiki: "Borough_Market", desc: "Optional, flight permitting — Borough Market (food stalls, open Monday) or simply a last walk near your hotel before heading to Victoria for the train.", url: "https://www.boroughmarket.org.uk/", locale: "London" }
      ],
      restaurants: []
    }
  ]
};
