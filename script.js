// ===== SHARE FUNCTION =====
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: 'Khiva - Jewel of the Silk Road',
      text: 'Discover the ancient city of Khiva, Uzbekistan!',
      url: window.location.href
    }).catch(function() {});
  } else {
    navigator.clipboard.writeText(window.location.href).then(function() {
      alert('Link copied to clipboard!');
    }).catch(function() {
      alert('Share this page: ' + window.location.href);
    });
  }
}
// ===== SMOOTH SCROLL HELPER =====
function smoothScrollTo(targetY, duration) {
  var startY = window.scrollY;
  var startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animateScroll(currentTime) {
    if (!startTime) startTime = currentTime;
    var elapsed = currentTime - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + (targetY - startY) * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

// ===== BACK TO TOP =====
document.addEventListener('DOMContentLoaded', function() {
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  smoothScrollTo(0, 1800); // 1800ms = 1.8 seconds (slower)
});
  }
});

// ===== DARK MODE =====
document.addEventListener('DOMContentLoaded', function() {
  var darkToggle = document.getElementById('darkToggle');
  if (darkToggle) {
    var darkIcon = darkToggle.querySelector('.dark-icon');
    
    // Check saved preference
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkToggle.classList.add('active');
      if (darkIcon) darkIcon.textContent = '☀️';
    }
    
    darkToggle.addEventListener('click', function() {
      // Add rotation class
      darkToggle.classList.add('rotating');
      
      // Toggle dark mode
      document.body.classList.toggle('dark-mode');
      darkToggle.classList.toggle('active');
      
      // Update icon
      if (document.body.classList.contains('dark-mode')) {
        if (darkIcon) darkIcon.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
      } else {
        if (darkIcon) darkIcon.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
      }
      
      // Remove rotation class after animation completes
      setTimeout(function() {
        darkToggle.classList.remove('rotating');
      }, 1200);
    });
  }
});


// ===== TRANSLATIONS =====
var currentLang = 'en'; // Global language variable
var translations = {
  en: {
    home: 'Home', things: 'Things to Do', features: 'Features', places: 'Places', map: 'Map', tips: 'Tips',
    explore: 'Explore Now →', visit: 'Plan Your Visit',
    stat1: 'Major Landmarks', stat2: 'Years of Silk Road Trade', stat3: 'Days of Sunshine per Year', stat4: 'Years of History',
    thingsTitle: '🏛️ Top Places to Visit in Khiva',
    things1Title: 'Itchan Kala', things1Text: 'Explore the UNESCO-listed inner city with 50+ monuments, madrassahs, and ancient streets.', things1Loc: 'Old City, Khiva',
    things2Title: 'Arda Khiva', things2Text: '25-hectare entertainment complex with water park, amphitheater, gondola rides, and bazaar.', things2Loc: 'North of Khiva, 3km from Itchan Kala',
    things3Title: 'Lokomotiv Park', things3Text: 'Peaceful recreation park with artificial lake, musical fountains, amphitheater, and gardens.', things3Loc: 'Inside Khiva, near the Train Station',
    things4Title: 'WWII Memorial Statue', things4Text: 'Moving memorial dedicated to WWII heroes, located near Flora Restaurant in Khiva.', things4Loc: 'Near Flora Restaurant, Khiva',
    feature1Title: 'Itchan Kala', feature1Text: 'The historic inner city containing more than 50 historic monuments and hundreds of traditional dwellings.',
    feature2Title: 'Kalta Minor Minaret', feature2Text: 'A striking, turquoise-tiled minaret that remains unfinished but stands as one of the most iconic symbols of the city.',
    feature3Title: 'Islam Khodja Complex', feature3Text: 'Features the city\'s tallest minaret, offering panoramic views of the entire oasis for those who climb its narrow steps.',
    feature4Title: 'Juma Mosque', feature4Text: 'A unique 10th-century mosque known for its large prayer hall supported by over 200 beautifully carved wooden pillars.',
    place1Title: 'Tash Hauli Palace', place1Text: 'Known as the "Stone Palace," Tash Hauli is decorated with intricate stucco, frescoes, and spectacular carved ceilings.',
    place2Title: 'Mausoleum of Pahlavan Mahmud', place2Text: 'Dedicated to the patron saint and poet of Khiva, this peaceful mausoleum is a place of reverence and craftsmanship.',
    place3Title: 'Silk Road Heritage', place3Text: 'Khiva was a key trading hub. Its market streets still echo with the exchange of carpets, ceramics, spices, and stories.',
    place4Title: 'Local Cuisine', place4Text: 'Sample plov, manti, shurpa, and sweet halva at small family-run restaurants in the old city.',
    googleMaps: '🗺️ Open in Google Maps', yandexMaps: '🗺️ Open in Yandex Maps',
    tip1: 'Best time to visit: spring and autumn, when the weather is mild.',
    tip2: 'Carry cash for small shops and tea houses inside Itchan Kala.',
    tip3: 'Climb the minarets for sweeping views of the ancient city.',
    tip4: 'Leave time to explore at dusk, when the lights highlight the carved facades.',
    introTitle: 'Why Khiva is unforgettable',
    introText: 'Khiva is one of the best-preserved historic cities in Central Asia. Its old town, Itchan Kala, is a UNESCO World Heritage site, surrounded by red clay walls and filled with palace courtyards, grand mosques, and atmospheric bazaars.',
    storyTitle: 'Hidden stories and cultural charm',
    storyText: 'Every corner of Khiva carries a story. Caravanserais once welcomed traders from China, Persia, and Europe. Madrasahs taught poetry, astronomy, and religion. The city retains the rhythm of daily life, with craftsmen, cafes, and musicians keeping tradition alive.',
    featuresTitle: '✨ Landmarks of Itchan Kala',
    tipsTitle: '📍 Find Itchan Kala',
    tipsText: 'The West Gate (Ota Darvoza) is the main entrance to the historic inner city.',
    tipsSubtitle: 'Quick tips for visitors',
    footer: 'Khiva city website • Built to celebrate the historic heart of Uzbekistan.',
    footerText: 'Khiva city website • Built to celebrate the historic heart of Uzbekistan.',
    footertext: 'Made by a teenager from this awesome city, Sultanov Sulaymon',
    mapTitle: '📍 Find Khiva on the Map',
    heroEyebrow: '✨ Discover Khiva',
    heroTitle: 'Khiva: From Silk Road to UNESCO Heritage Site',
    heroSubtitle: 'Walk through centuries of history in the heart of Uzbekistan, where ornate madrassahs, graceful minarets, and caravanserais bring the Silk Road to life.',
    forecastTitle: '5-Day Forecast',
    mapRecommend: '* Recommended to open in any of these maps',
    learnMore: 'Learn More →',
    weatherFeelsLike: 'Feels like', weatherWind: 'Wind', weatherHumidity: 'Humidity', weatherUnit: 'km/h', weatherMin: '↓', weatherMax: '↑', weatherLoading: 'Loading...',
    clearSky: 'Clear sky', mainlyClear: 'Mainly clear', partlyCloudy: 'Partly cloudy', overcast: 'Overcast',
    foggy: 'Foggy', lightDrizzle: 'Light drizzle', drizzle: 'Drizzle', heavyDrizzle: 'Heavy drizzle',
    freezingDrizzle: 'Freezing drizzle', heavyFreezingDrizzle: 'Heavy freezing drizzle',
    lightRain: 'Light rain', rain: 'Rain', heavyRain: 'Heavy rain',
    freezingRain: 'Freezing rain', heavyFreezingRain: 'Heavy freezing rain',
    lightSnow: 'Light snow', snow: 'Snow', heavySnow: 'Heavy snow', snowGrains: 'Snow grains',
    rainShowers: 'Rain showers', lightSnowShowers: 'Light snow showers', heavySnowShowers: 'Heavy snow showers',
    thunderstorm: 'Thunderstorm', heavyThunderstorm: 'Heavy thunderstorm',
    whenWeatherProblem: 'If there will be any problems with the weather, please update the page.',
    footertext2: 'Contact: sultanov.sulaymon18@gmail.com. For feedback or improvements, feel free to reach out!',
  },
  uz: {
    home: 'Bosh sahifa', things: 'Qiladigan ishlar', features: 'Xususiyatlar', places: 'Joylar', map: 'Xarita', tips: 'Maslahatlar',
    explore: 'Ko\'rish →', visit: 'Sayohatni rejalashtirish',
    stat1: 'Taniqli yodgorliklar', stat2: 'Buyuk Ipak Yo\'li savdo yillari', stat3: 'Yil davomida quyoshli kunlar', stat4: 'Tarix yillari',
    thingsTitle: '🏛️ Xivada tashrif buyorish kerak bo\'lgan joylar',
    things1Title: 'Ichan Qal\'a', things1Text: '50+ yodgorlik, madrasa va qadimiy ko\'chalarga ega UNESCO ro\'yxatiga kiritilgan ichki shaharni kashf eting.', things1Loc: 'Eski shahar, Xiva',
    things2Title: 'Arda Xiva', things2Text: 'Suv parki, amfiteatr, gondola sayohatlari va sharqona bozor bilan 25 gektarlik ko\'ngilochar majmua.', things2Loc: 'Xivaning shimolida, Ichan Qal\'adan 3 km',
    things3Title: 'Lokomotiv bog\'i', things3Text: 'Sun\'iy ko\'l, musiqali favvoralar, amfiteatr va go\'zal bog\'lar bilan tinch dam olish parki.', things3Loc: 'Xiva ichida, poyezd stansiyasi yaqinida',
    things4Title: 'Ikkinchi jahon urushi yodgorligi', things4Text: 'Flora restorani yaqinida joylashgan Ikkinchi jahon urushi qahramonlariga bag\'ishlangan yodgorlik.', things4Loc: 'Flora restorani yonida, Xiva',
    feature1Title: 'Ichan Qal\'a', feature1Text: 'Tarixiy ichki shahar, 50 dan ortiq tarixiy yodgorliklar va yuzlab an\'anaviy uylarni o\'z ichiga oladi.',
    feature2Title: 'Kalta Minor', feature2Text: 'Hali tugallanmagan, ammo shaharning eng mashhur ramzlaridan biri bo\'lgan ajoyib firuza rangli minora.',
    feature3Title: 'Islom Xo\'ja majmuasi', feature3Text: 'Shaharning eng baland minorasiga ega bo\'lib, butun vohaning manzarali ko\'rinishini taqdim etadi.',
    feature4Title: 'Juma masjidi', feature4Text: '200 dan ortiq chiroyli o\'yilgan yog\'och ustunlari bilan mashhur bo\'lgan noyob X asr masjidi.',
    place1Title: 'Tosh-Hovli saroyi', place1Text: '"Tosh saroy" nomi bilan tanilgan Tosh-Hovli murakkab naqshlar, freskalar va ajoyib o\'yilgan shiftlar bilan bezatilgan.',
    place2Title: 'Pahlavon Mahmud maqbarasi', place2Text: 'Xivaning homiy avliyosi va shoiriga bag\'ishlangan bu tinch maqbara ehtirom va hunarmandchilik maskanidir.',
    place3Title: 'Ipak yo\'li merosi', place3Text: 'Xiva muhim savdo markazi edi. Uning bozor ko\'chalari gilamlar, sopol buyumlar, ziravorlar va hikoyalar almashinuvi bilan hali ham jaranglaydi.',
    place4Title: 'Mahalliy oshxona', place4Text: 'Eski shahardagi kichik oilaviy restoranlarda plov, manti, shurpa va shirin halva tatib ko\'ring.',
    googleMaps: '🗺️ Google Maps da ochish', yandexMaps: '🗺️ Yandex Maps da ochish',
    tip1: 'Sayohat qilish uchun eng yaxshi vaqt: bahor va kuz, ob-havo yumshoq bo\'lgan paytda.',
    tip2: 'Ichan Qal\'a ichidagi kichik do\'konlar va choyxonalar uchun naqd pul olib boring.',
    tip3: 'Qadimiy shaharning go\'zal manzaralarini ko\'rish uchun minoralarga chiqing.',
    tip4: 'Yoritilgan bezaklarni ko\'rish uchun kechqurun tashrif buyuring.',
    introTitle: 'Xiva nima uchun unutilmaydi',
    introText: 'Xiva Markaziy Osiyoning eng yaxshi saqlanib qolgan tarixiy shaharlaridan biridir. Uning eski shahri Ichan Qal\'a UNESCO Jahon Meros o\'rni sifatida tan olingan, qizil loy devorlar bilan o\'ralgan va saroy hovlilari, ulug\' masjidlar va atmosferik bozorlar bilan to\'ldirilgan.',
    storyTitle: 'Yashirin hikoyalar va madaniy joziba',
    storyText: 'Xivaning har bir burchagi o\'z hikoyasini olib yuradi. Karvonsaroylar Xitoy, Fors va Yevropadan kelgan savdogarlarni kutib olgan. Madrasalarda she\'riyat, astronomiya va din o\'rgatilgan. Shahar hunarmandlar, kafelar va musiqachilar bilan an\'analarni saqlab qolmoqda.',
    featuresTitle: '✨ Ichan Qal\'aning diqqatga sazovor joylari',
    tipsTitle: '📍 Ichan Qal\'ani toping',
    tipsText: 'G\'arbiy darvoza (Ota Darvoza) tarixiy ichki shaharning asosiy kirish joyi.',
    tipsSubtitle: 'Tashrif buyuruvchilar uchun maslahatlar',
    footer: 'Xiva shahri sayti • O\'zbekistonning tarixiy yuragi sharafiga yaratilgan.',
    footerText: 'Xiva shahar veb-sayti • O\'zbekistonning tarixiy yuragi sharafiga yaratilgan.',
    footertext: 'Ushbu ajoyib shahardagi o\'spirin tomonidan yaratilgan, Sultanov Sulaymon',
    mapTitle: '📍 Xivani xaritada toping',
    heroEyebrow: '✨ Xivani kashf eting',
    heroTitle: 'Xiva: Ipak yo\'lidan UNESCO merosigacha',
    heroSubtitle: 'O\'zbekistonning qoq markazida, ko\'hna madrasalar, nafis minoralar va karvonsaroylar bilan bezatilgan Xiva tarixiy ko\'chalari bo\'ylab asrlar davomida sayohat qiling.',
    forecastTitle: '5 kunlik ob-havo',
    mapRecommend: '* Ushbu xaritalardan birini ochish tavsiya etiladi',
    learnMore: 'Batafsil →',
    weatherFeelsLike: 'Hissiyot', weatherWind: 'Shamol', weatherHumidity: 'Namlik', weatherUnit: 'km/h', weatherMin: '↓', weatherMax: '↑', weatherLoading: 'Yuklanmoqda...',
    clearSky: 'Ochiq osmon', mainlyClear: 'Ko\'proq ochiq', partlyCloudy: 'Qisman bulutli', overcast: 'Bulutli',
    foggy: 'Tumanli', lightDrizzle: 'Yengil yomg\'ir', drizzle: 'Yomg\'ir', heavyDrizzle: 'Kuchli yomg\'ir',
    freezingDrizzle: 'Sovuq yomg\'ir', heavyFreezingDrizzle: 'Kuchli sovuq yomg\'ir',
    lightRain: 'Yengil yomg\'ir', rain: 'Yomg\'ir', heavyRain: 'Kuchli yomg\'ir',
    freezingRain: 'Sovuq yomg\'ir', heavyFreezingRain: 'Kuchli sovuq yomg\'ir',
    lightSnow: 'Yengil qor', snow: 'Qor', heavySnow: 'Kuchli qor', snowGrains: 'Qor butinlari',
    rainShowers: 'Yomg\'ir shamoli', lightSnowShowers: 'Yengil qor shamoli', heavySnowShowers: 'Kuchli qor shamol',
    thunderstorm: 'Chaqnama bilan yomg\'ir', heavyThunderstorm: 'Kuchli chaqnama bilan yomg\'ir',
    whenWeatherProblem: 'Agar ob-havoda muammolar bo\'lsa, iltimos, sahifani yangilang.',
    footertext2: 'Bog\'lanish: sultanov.sulaymon18@gmail.com. Agar fikr-mulohaza yoki takomillashtirish bo\'lsa, bemalol murojaat qiling!',
  },
  ru: {
    home: 'Главная', things: 'Чем заняться', features: 'Особенности', places: 'Места', map: 'Карта', tips: 'Советы',
    explore: 'Исследовать →', visit: 'Планировать поездку',
    stat1: 'Главные достопримечательности', stat2: 'Лет торговли на Шелковом пути', stat3: 'Дней солнечного света в год', stat4: 'Лет истории',
    thingsTitle: '🏛️ Лучшие места для посещения в Хиве',
    things1Title: 'Ичан-Кала', things1Text: 'Исследуйте внесённый в список ЮНЕСКО внутренний город с более чем 50 памятниками, медресе и древними улицами.', things1Loc: 'Старый город, Хива',
    things2Title: 'Арда Хива', things2Text: '25-гектарный развлекательный комплекс с аквапарком, амфитеатром, гондольными подъёмниками и восточным базаром.', things2Loc: 'К северу от Хивы, 3 км от Ичан-Калы',
    things3Title: 'Парк Локомотив', things3Text: 'Спокойный парк отдыха с искусственным озером, музыкальными фонтанами, амфитеатром и ландшафтными садами.', things3Loc: 'Внутри Хивы, рядом с железнодорожным вокзалом',
    things4Title: 'Мемориал Второй мировой войны', things4Text: 'Трогательный мемориал, посвящённый героям Второй мировой войны, расположенный рядом с рестораном Flora в центре Хивы.', things4Loc: 'Рядом с рестораном Flora, Хива',
    feature1Title: 'Ичан-Кала', feature1Text: 'Исторический внутренний город, содержащий более 50 исторических памятников и сотни традиционных жилищ.',
    feature2Title: 'Минарет Кальта-Минар', feature2Text: 'Впечатляющий минарет, облицованный бирюзовой плиткой, который остался недостроенным, но является одним из самых знаковых символов города.',
    feature3Title: 'Комплекс Ислам-Ходжа', feature3Text: 'Имеет самый высокий минарет города, с которого открывается панорамный вид на весь оазис.',
    feature4Title: 'Мечеть Джума', feature4Text: 'Уникальная мечеть X века, известная своим молитвенным залом, поддерживаемым более чем 200 красиво вырезанными деревянными колоннами.',
    place1Title: 'Дворец Таш-Хаули', place1Text: 'Известный как "Каменный дворец", Таш-Хаули украшен изысканным лепным декором, фресками и великолепными резными потолками.',
    place2Title: 'Мавзолей Пахлавана Махмуда', place2Text: 'Посвящённый святому покровителю и поэту Хивы, этот мирный мавзолей является местом почитания и мастерства.',
    place3Title: 'Наследие Шёлкового пути', place3Text: 'Хива была ключевым торговым центром. Её рыночные улицы до сих пор слышат обмен коврами, керамикой, специями и историями.',
    place4Title: 'Местная кухня', place4Text: 'Попробуйте плов, манты, шурпу и сладкую халву в небольших семейных ресторанах в старом городе.',
    googleMaps: '🗺️ Открыть в Google Картах', yandexMaps: '🗺️ Открыть в Яндекс Картах',
    tip1: 'Лучшее время для посещения: весна и осень, когда погода мягкая.',
    tip2: 'Носите с собой наличные для маленьких магазинов и чайных внутри Ичан-Калы.',
    tip3: 'Поднимитесь на минареты, чтобы увидеть панорамные виды древнего города.',
    tip4: 'Оставьте время для прогулок в сумерках, когда огни подсвечивают резные фасады.',
    introTitle: 'Почему Хива незабываема',
    introText: 'Хива — один из наиболее хорошо сохранившихся исторических городов Центральной Азии. Его старый город Ичан-Кала является объектом Всемирного наследия ЮНЕСКО, окружён красными глиняными стенами и наполнен дворцовыми дворами, величественными мечетями и атмосферными базарами.',
    storyTitle: 'Скрытые истории и культурное очарование',
    storyText: 'Каждый уголок Хивы несет в себе историю. Караван-сараи когда-то приветствовали торговцев из Китая, Персии и Европы. Медресе обучали поэзии, астрономии и религии. Город сохраняет ритм повседневной жизни с ремесленниками, кафе и музыкантами, поддерживающими традиции.',
    featuresTitle: '✨ Достопримечательности Ичан-Калы',
    tipsTitle: '📍 Найти Ичан-Калу',
    tipsText: 'Западные ворота (Ота Дарвоза) — главный вход в исторический внутренний город.',
    tipsSubtitle: 'Быстрые советы для посетителей',
    footer: 'Веб-сайт города Хивы • Создан в честь исторического сердца Узбекистана.',
    footerText: 'Веб-сайт города Хивы • Создан в честь исторического сердца Узбекистана.',
    mapTitle: '📍 Найти Хиву на карте',
    heroEyebrow: '✨ Откройте Хиву',
    heroTitle: 'Хива: От Шёлкового пути до наследия ЮНЕСКО',
    heroSubtitle: 'Пройдите сквозь века истории в сердце Узбекистана, где изысканные медресе, изящные минареты и караван-сараи оживляют Великий Шёлковый путь.',
    forecastTitle: 'Прогноз на 5 дней',
    mapRecommend: '* Рекомендуется открыть в любой из этих карт',
    learnMore: 'Подробнее →',
    footertext: 'Создан подростком из этого чудесного города, Султанов Сулаймон',
    weatherFeelsLike: 'Ощущается как', weatherWind: 'Ветер', weatherHumidity: 'Влажность', weatherUnit: 'км/ч', weatherMin: '↓', weatherMax: '↑', weatherLoading: 'Загрузка...',
    clearSky: 'Ясное небо', mainlyClear: 'Преимущественно ясно', partlyCloudy: 'Облачно с прояснениями', overcast: 'Пасмурно',
    foggy: 'Туман', lightDrizzle: 'Небольшая морось', drizzle: 'Морось', heavyDrizzle: 'Сильная морось',
    freezingDrizzle: 'Ледяная морось', heavyFreezingDrizzle: 'Сильная ледяная морось',
    lightRain: 'Небольшой дождь', rain: 'Дождь', heavyRain: 'Сильный дождь',
    freezingRain: 'Ледяной дождь', heavyFreezingRain: 'Сильный ледяной дождь',
    lightSnow: 'Небольшой снег', snow: 'Снег', heavySnow: 'Сильный снег', snowGrains: 'Снежная крупа',
    rainShowers: 'Ливневые дожди', lightSnowShowers: 'Небольшие снежные ливни', heavySnowShowers: 'Сильные снежные ливни',
    thunderstorm: 'Гроза', heavyThunderstorm: 'Сильная гроза',
    whenWeatherProblem: 'Если возникнут проблемы с погодой, пожалуйста, обновите страницу.',
    footertext2: 'Контакт: sultanov.sulaymon18@gmail.com. Для обратной связи или улучшений, пожалуйста, свяжитесь со мной!'
  }
};

// Function to update weather display when language changes
function updateWeatherTranslations() {
  var weatherDescKeys = {
    0: 'clearSky', 1: 'mainlyClear', 2: 'partlyCloudy', 3: 'overcast',
    45: 'foggy', 48: 'foggy',
    51: 'lightDrizzle', 53: 'drizzle', 55: 'heavyDrizzle',
    56: 'freezingDrizzle', 57: 'heavyFreezingDrizzle',
    61: 'lightRain', 63: 'rain', 65: 'heavyRain',
    66: 'freezingRain', 67: 'heavyFreezingRain',
    71: 'lightSnow', 73: 'snow', 75: 'heavySnow',
    77: 'snowGrains',
    80: 'rainShowers', 81: 'rainShowers', 82: 'heavyRain',
    85: 'lightSnowShowers', 86: 'heavySnowShowers',
    95: 'thunderstorm', 96: 'thunderstorm', 99: 'heavyThunderstorm'
  };

  var t = translations[currentLang] || translations.en;

  if (currentWeatherCode !== null) {
    var descKey = weatherDescKeys[currentWeatherCode] || 'clearSky';
    document.getElementById('weather-desc').textContent = t[descKey] || 'Unknown';
  }

  // Update weather widget labels
  var feelsLikeEl = document.getElementById('weather-feels-like');
  if (feelsLikeEl) {
    var translateSpan = feelsLikeEl.querySelector('[data-translate]');
    if (translateSpan) {
      translateSpan.textContent = t.weatherFeelsLike || 'Feels like';
    }
  }

  if (currentForecastData) {
    updateForecastDisplay(currentForecastData);
  }
}

function updateForecastDisplay(data) {
  var weatherDescKeys = {
    0: 'clearSky', 1: 'mainlyClear', 2: 'partlyCloudy', 3: 'overcast',
    45: 'foggy', 48: 'foggy',
    51: 'lightDrizzle', 53: 'drizzle', 55: 'heavyDrizzle',
    56: 'freezingDrizzle', 57: 'heavyFreezingDrizzle',
    61: 'lightRain', 63: 'rain', 65: 'heavyRain',
    66: 'freezingRain', 67: 'heavyFreezingRain',
    71: 'lightSnow', 73: 'snow', 75: 'heavySnow',
    77: 'snowGrains',
    80: 'rainShowers', 81: 'rainShowers', 82: 'heavyRain',
    85: 'lightSnowShowers', 86: 'heavySnowShowers',
    95: 'thunderstorm', 96: 'thunderstorm', 99: 'heavyThunderstorm'
  };

  var weatherIcons = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️',
    51: '🌧️', 53: '🌧️', 55: '🌧️',
    56: '🌧️', 57: '🌧️',
    61: '🌧️', 63: '🌧️', 65: '🌧️',
    66: '🌧️', 67: '🌧️',
    71: '❄️', 73: '❄️', 75: '❄️',
    77: '❄️',
    80: '🌧️', 81: '🌧️', 82: '🌧️',
    85: '❄️', 86: '❄️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };

  var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var today = new Date().getDay();
  var grid = document.getElementById('forecastGrid');

  if (!grid) return;

  grid.innerHTML = '';

  var t = translations[currentLang] || translations.en;
  for (var i = 0; i < 5; i++) {
    var dayIndex = (today + i) % 7;
    var maxTemp = Math.round(data.daily.temperature_2m_max[i]);
    var minTemp = Math.round(data.daily.temperature_2m_min[i]);
    var weatherCode = data.daily.weather_code[i];
    var descKey = weatherDescKeys[weatherCode] || 'clearSky';

    var dayDiv = document.createElement('div');
    dayDiv.className = 'forecast-day';
    dayDiv.innerHTML = `
      <div class="day-name">${dayNames[dayIndex]}</div>
      <span class="day-icon">${weatherIcons[weatherCode] || '🌤️'}</span>
      <div class="day-temp">${maxTemp}°</div>
      <div class="day-temp-min">${minTemp}°</div>
      <div class="day-desc">${t[descKey] || ''}</div>
    `;
    grid.appendChild(dayDiv);
  }
}

// ===== LANGUAGE SWITCHER =====
document.addEventListener('DOMContentLoaded', function() {
  var langBtns = document.querySelectorAll('.lang-btn');
  currentLang = localStorage.getItem('language') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    langBtns.forEach(function(btn) {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
      }
    });

    var t = translations[lang] || translations.en;

    // Update hero text
    var heroEyebrow = document.getElementById('hero-eyebrow');
    var heroTitle = document.getElementById('hero-title');
    var heroSubtitle = document.getElementById('hero-subtitle');

    if (heroEyebrow && t.heroEyebrow) heroEyebrow.textContent = t.heroEyebrow;
    if (heroTitle && t.heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroSubtitle && t.heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

    // Update all data-translate elements
    document.querySelectorAll('[data-translate]').forEach(function(el) {
      var key = el.getAttribute('data-translate');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update weather and forecast displays for new language
    updateWeatherTranslations();

    // Update elements by ID
var elementIds = [
  'intro-title', 'intro-text', 'story-title', 'story-text',
  'features-title', 'tips-title', 'tips-text', 'tips-subtitle',
  'footer-text', 'forecastTitle', 'mapRecommend'
];

var keyMap = {
  'intro-title': 'introTitle',
  'intro-text': 'introText',
  'story-title': 'storyTitle',
  'story-text': 'storyText',
  'features-title': 'featuresTitle',
  'tips-title': 'tipsTitle',
  'tips-text': 'tipsText',
  'tips-subtitle': 'tipsSubtitle',
  'footer-text': 'footer',
  'forecastTitle': 'forecastTitle',
  'mapRecommend': 'mapRecommend'
};


  }

  langBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });

  setLanguage(currentLang);
});

console.log('🏛️ Khiva website loaded!');

// ===== SCROLL REVEAL FOR ALL SECTIONS =====
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements that should animate (compatible version)
  var revealElements = [];
  
  // Add each type of element to the array
  document.querySelectorAll('.stat-card').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.things-card').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.feature-card').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.places article').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.story').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.intro').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.info-panel').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.weather-widget').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.map-container').forEach(function(el) { revealElements.push(el); });
  document.querySelectorAll('.forecast-section').forEach(function(el) { revealElements.push(el); }); // ← ADD THIS

  console.log('🎯 Scroll reveal elements found:', revealElements.length);

  if (revealElements.length === 0) {
    console.warn('⚠️ No elements found for scroll reveal');
    return;
  }

  // Add scroll-reveal class with delays
  revealElements.forEach(function(el, index) {
    el.classList.add('scroll-reveal');
    var delay = (index % 4) + 1;
    el.classList.add('delay-' + delay);
  });

  var revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        console.log('🎯 Element revealed!');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.scroll-reveal').forEach(function(el) {
    revealObserver.observe(el);
  });

  console.log('🚀 Scroll reveal initialized!');
});


// ===== REAL WEATHER + 5-DAY FORECAST =====
var currentWeatherCode = null;
var currentForecastData = null;

document.addEventListener('DOMContentLoaded', function() {
  var LAT = 41.3775;
  var LON = 60.3593;

  var weatherIcons = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
    45: '🌫️', 48: '🌫️',
    51: '🌧️', 53: '🌧️', 55: '🌧️',
    56: '🌧️', 57: '🌧️',
    61: '🌧️', 63: '🌧️', 65: '🌧️',
    66: '🌧️', 67: '🌧️',
    71: '❄️', 73: '❄️', 75: '❄️',
    77: '❄️',
    80: '🌧️', 81: '🌧️', 82: '🌧️',
    85: '❄️', 86: '❄️',
    95: '⛈️', 96: '⛈️', 99: '⛈️'
  };

  var weatherDescKeys = {
    0: 'clearSky', 1: 'mainlyClear', 2: 'partlyCloudy', 3: 'overcast',
    45: 'foggy', 48: 'foggy',
    51: 'lightDrizzle', 53: 'drizzle', 55: 'heavyDrizzle',
    56: 'freezingDrizzle', 57: 'heavyFreezingDrizzle',
    61: 'lightRain', 63: 'rain', 65: 'heavyRain',
    66: 'freezingRain', 67: 'heavyFreezingRain',
    71: 'lightSnow', 73: 'snow', 75: 'heavySnow',
    77: 'snowGrains',
    80: 'rainShowers', 81: 'rainShowers', 82: 'heavyRain',
    85: 'lightSnowShowers', 86: 'heavySnowShowers',
    95: 'thunderstorm', 96: 'thunderstorm', 99: 'heavyThunderstorm'
  };

  function getWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + LAT + '&longitude=' + LON + '&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=Asia/Samarkand')
      .then(function(response) { return response.json(); })
      .then(function(data) {
        var temp = Math.round(data.current.temperature_2m);
        var feelsLike = Math.round(data.current.apparent_temperature);
        var humidity = data.current.relative_humidity_2m;
        var windSpeed = Math.round(data.current.wind_speed_10m);
        var weatherCode = data.current.weather_code;
        var minTemp = Math.round(data.daily.temperature_2m_min[0]);
        var maxTemp = Math.round(data.daily.temperature_2m_max[0]);
        
        // Store current weather for language switching
        currentWeatherCode = weatherCode;
        
        var t = translations[currentLang] || translations.en;
        var descKey = weatherDescKeys[weatherCode] || 'clearSky';

        document.getElementById('weather-temp').textContent = temp + '°';
        var feelsLikeEl = document.getElementById('weather-feels-like');
        if (feelsLikeEl) {
          feelsLikeEl.querySelector('[data-translate]').textContent = t.weatherFeelsLike || 'Feels like';
          feelsLikeEl.querySelector('#weather-feels-temp').textContent = feelsLike + '°';
        }
        document.getElementById('weather-desc').textContent = t[descKey] || 'Unknown';
        document.getElementById('weather-icon').textContent = weatherIcons[weatherCode] || '🌤️';
        document.getElementById('weather-min').textContent = minTemp + '°';
        document.getElementById('weather-max').textContent = maxTemp + '°';
        document.getElementById('weather-wind-speed').textContent = windSpeed;
        document.getElementById('weather-humidity-value').textContent = humidity + '%';

        console.log('✅ Weather updated!');
      })
      .catch(function(error) {
        console.error('❌ Weather error:', error);
        var t = translations[currentLang] || translations.en;
        document.getElementById('weather-temp').textContent = '39°';
        var feelsLikeEl = document.getElementById('weather-feels-like');
        if (feelsLikeEl) {
          feelsLikeEl.querySelector('[data-translate]').textContent = t.weatherFeelsLike || 'Feels like';
          feelsLikeEl.querySelector('#weather-feels-temp').textContent = '36°';
        }
        document.getElementById('weather-desc').textContent = t.mainlyClear || 'Mainly clear';
        document.getElementById('weather-icon').textContent = '🌤️';
        document.getElementById('weather-min').textContent = '25°';
        document.getElementById('weather-max').textContent = '41°';
        document.getElementById('weather-wind-speed').textContent = '12';
        document.getElementById('weather-humidity-value').textContent = '45%';
      });
  }

  function getForecast() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=' + LAT + '&longitude=' + LON + '&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia/Samarkand&forecast_days=5')
      .then(function(response) { return response.json(); })
      .then(function(data) {
        // Store forecast data for language switching
        currentForecastData = data;
        
        updateForecastDisplay(data);
        console.log('✅ Forecast updated!');
      })
      .catch(function(error) {
        console.error('❌ Forecast error:', error);
        var grid = document.getElementById('forecastGrid');
        if (grid) {
          grid.innerHTML = '<p style="text-align:center;color:#4a4540;padding:1rem;">Forecast unavailable</p>';
        }
      });
  }

  getWeather();
  getForecast();
  setInterval(function() {
    getWeather();
    getForecast();
  }, 600000);
});

// ===== ALWAYS START AT TOP =====
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

// Scroll to top on page load
window.addEventListener('load', function() {
  window.scrollTo(0, 0);
});
