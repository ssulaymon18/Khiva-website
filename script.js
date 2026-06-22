// ============================================
// 1. SCROLL REVEAL ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => revealObserver.observe(el));
  }
});

/// ============================================
// 2. SMOOTH SCROLL FOR NAV
// ============================================
function smoothScrollTo(targetElement, duration = 800) {
  const start = window.scrollY;
  const targetPosition = targetElement.getBoundingClientRect().top + start;
  const distance = targetPosition - start;
  const startTime = performance.now();

  function ease(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = ease(progress);
    window.scrollTo(0, start + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      smoothScrollTo(target, 900); // slower than default
    }
  });
});


// ============================================
// 3. BACK TO TOP BUTTON
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          backToTop.classList.toggle('visible', window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    });
  }
});

// ============================================
// 4. DARK MODE TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const darkToggle = document.getElementById('darkToggle');
  
  if (darkToggle) {
    const darkIcon = darkToggle.querySelector('.dark-icon');
    
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      darkToggle.classList.add('active');
      if (darkIcon) darkIcon.textContent = '☀️';
    }
    
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkToggle.classList.toggle('active');
      
      if (document.body.classList.contains('dark-mode')) {
        if (darkIcon) darkIcon.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
      } else {
        if (darkIcon) darkIcon.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
});

// ============================================
// 5. TRANSLATIONS
// ============================================
const translations = {
  en: {
    home: 'Home',
    features: 'Features',
    places: 'Places',
    around: 'Around Khiva',
    tips: 'Tips',
    eyebrow: '✨ Discover Khiva',
    title: 'Khiva: The Walled City of Timeless Wonders',
    subtitle: 'Walk through centuries of history in the heart of Uzbekistan, where ornate madrassahs, graceful minarets, and caravanserais bring the Silk Road to life.',
    explore: 'Explore Now →',
    visit: 'Plan Your Visit',
    introTitle: 'Why Khiva is unforgettable',
    introText: 'Khiva is one of the best-preserved historic cities in Central Asia. Its old town, Itchan Kala, is a UNESCO World Heritage site, surrounded by red clay walls and filled with palace courtyards, grand mosques, and atmospheric bazaars.',
    stat1: 'Historic Monuments',
    stat2: 'Wooden Pillars',
    stat3: 'Monuments Inside Walls',
    stat4: 'Years of History',
    featuresTitle: '✨ Landmarks of Itchan Kala',
    feature1Title: 'Itchan Kala',
    feature1Text: 'The historic inner city containing more than 50 historic monuments and hundreds of traditional dwellings.',
    feature2Title: 'Kalta Minor Minaret',
    feature2Text: 'A striking, turquoise-tiled minaret that remains unfinished but stands as one of the most iconic symbols of the city.',
    feature3Title: 'Islam Khodja Complex',
    feature3Text: 'Features the city\'s tallest minaret, offering panoramic views of the entire oasis for those who climb its narrow steps.',
    feature4Title: 'Juma Mosque',
    feature4Text: 'A unique 10th-century mosque known for its large prayer hall supported by over 200 beautifully carved wooden pillars.',
    storyTitle: 'Hidden stories and cultural charm',
    storyText: 'Every corner of Khiva carries a story. Caravanserais once welcomed traders from China, Persia, and Europe. Madrasahs taught poetry, astronomy, and religion. The city retains the rhythm of daily life, with craftsmen, cafes, and musicians keeping tradition alive.',
    aroundTitle: '📍 Around Khiva',
    around1Title: 'Desert Safari',
    around1Text: 'Experience the vast Kyzylkum Desert with camel rides and stunning sunset views just outside Khiva.',
    around1Loc: 'Kyzylkum Desert, 30km from Khiva',
    around2Title: 'Ancient Fortresses',
    around2Text: 'Visit the ruins of Toprak-Kala and Ayaz-Kala, ancient fortresses that once guarded the Silk Road.',
    around2Loc: 'Toprak-Kala, 60km from Khiva',
    around3Title: 'Nuratau Mountains',
    around3Text: 'Discover the scenic mountain range with ancient petroglyphs, hiking trails, and traditional villages.',
    around3Loc: 'Nuratau Mountains, 200km from Khiva',
    around4Title: 'Silk Carpet Workshop',
    around4Text: 'Visit a traditional carpet workshop in the village of Bogot, where silk carpets are woven by hand.',
    around4Loc: 'Bogot Village, 20km from Khiva',
    mapTitle: '🗺️ Find Khiva on the Map',
    place1Title: 'Tash Hauli Palace',
    place1Text: 'Known as the "Stone Palace," Tash Hauli is decorated with intricate stucco, frescoes, and spectacular carved ceilings.',
    place2Title: 'Mausoleum of Pahlavan Mahmud',
    place2Text: 'Dedicated to the patron saint and poet of Khiva, this peaceful mausoleum is a place of reverence and craftsmanship.',
    place3Title: 'Silk Road Heritage',
    place3Text: 'Khiva was a key trading hub. Its market streets still echo with the exchange of carpets, ceramics, spices, and stories.',
    place4Title: 'Local Cuisine',
    place4Text: 'Sample plov, manti, shurpa, and sweet halva at small family-run restaurants in the old city.',
    tipsTitle: '📍 Find Itchan Kala',
    tipsText: 'The West Gate (Ota Darvoza) is the main entrance to the historic inner city.',
    yandexMaps: '🗺️ Yandex Maps',
    tipsSubtitle: 'Quick tips for visitors',
    tip1: 'Best time to visit: spring and autumn, when the weather is mild.',
    tip2: 'Carry cash for small shops and tea houses inside Itchan Kala.',
    tip3: 'Climb the minarets for sweeping views of the ancient city.',    tip4: 'Leave time to explore at dusk, when the lights highlight the carved facades.',
    footer: 'Khiva city website • Built to celebrate the historic heart of Uzbekistan.',
    city: 'Khiva',
    country: 'Uzbekistan'
  },
  uz: {
    home: 'Bosh sahifa',
    features: 'Xususiyatlar',
    places: 'Joylar',
    around: 'Xiva atrofi',
    tips: 'Maslahatlar',
    eyebrow: '✨ Xivani kashf eting',
    title: 'Xiva: Abadiy mo\'jizalar shahri',
    subtitle: 'O\'zbekistonning qoq markazida, ko\'hna madrasalar, nafis minoralar va karvonsaroylar bilan bezatilgan Xiva tarixiy ko\'chalari bo\'ylab asrlar davomida sayohat qiling.',
    explore: 'Ko\'rish →',
    visit: 'Sayohatni rejalashtirish',
    introTitle: 'Xiva nima uchun unutilmas',
    introText: 'Xiva - Markaziy Osiyodagi eng yaxshi saqlanib qolgan tarixiy shaharlardan biri. Uning eski shahri - Ichan Qal\'a YuNESKOning Jahon merosi ro\'yxatiga kiritilgan bo\'lib, qizil loy devorlari, saroy hovlilari, katta masjidlar va jozibali bozorlar bilan o\'ralgan.',
    stat1: 'Tarixiy yodgorliklar',
    stat2: 'Yog\'och ustunlar',
    stat3: 'Devor ichidagi yodgorliklar',
    stat4: 'Tarix yillari',
    featuresTitle: '✨ Ichan Qal\'a diqqatga sazovor joylari',
    feature1Title: 'Ichan Qal\'a',
    feature1Text: 'Tarixiy ichki shahar, 50 dan ortiq tarixiy yodgorliklar va yuzlab an\'anaviy uylarni o\'z ichiga oladi.',
    feature2Title: 'Kalta Minor',
    feature2Text: 'Hali tugallanmagan, ammo shaharning eng mashhur ramzlaridan biri bo\'lgan ajoyib firuza rangli minora.',
    feature3Title: 'Islom Xo\'ja majmuasi',
    feature3Text: 'Shaharning eng baland minorasiga ega bo\'lib, butun vohaning manzarali ko\'rinishini taqdim etadi.',
    feature4Title: 'Juma masjidi',
    feature4Text: '200 dan ortiq chiroyli o\'yilgan yog\'och ustunlari bilan mashhur bo\'lgan noyob X asr masjidi.',
    storyTitle: 'Yashirin hikoyalar va madaniy joziba',
    storyText: 'Xivaning har bir burchagi o\'z hikoyasini olib yuradi. Karvonsaroylar bir vaqtlar Xitoy, Fors va Yevropadan kelgan savdogarlarni kutib olgan. Madrasalarda she\'riyat, astronomiya va din o\'rgatilgan. Shahar hunarmandlar, kafelar va musiqachilar bilan an\'analarni saqlab qolmoqda.',
    aroundTitle: '📍 Xiva atrofi',
    around1Title: 'Cho\'l safar',
    around1Text: 'Keng Qizilqum cho\'lida tuya sayohati va Xiva yaqinidagi ajoyib quyosh botishi manzaralarini boshdan kechiring.',
    around1Loc: 'Qizilqum cho\'li, Xivadan 30 km',
    around2Title: 'Qadimiy qal\'alar',
    around2Text: 'Toprak-Qal\'a va Ayaz-Qal\'a xarobalariga tashrif buyuring, bir vaqtlar Ipak yo\'lini qo\'riqlagan qadimiy qal\'alar.',
    around2Loc: 'Toprak-Qal\'a, Xivadan 60 km',
    around3Title: 'Nurota tog\'lari',
    around3Text: 'Qadimiy petrogliflar, piyoda yurish yo\'llari va an\'anaviy qishloqlar bilan go\'zal tog\' tizmasini kashf eting.',
    around3Loc: 'Nurota tog\'lari, Xivadan 200 km',
    around4Title: 'Ipak gilam ustaxonasi',
    around4Text: 'Bog\'ot qishlog\'idagi an\'anaviy gilam ustaxonasiga tashrif buyuring, bu yerda ipak gilamlar qo\'lda to\'qiladi.',
    around4Loc: 'Bog\'ot qishlog\'i, Xivadan 20 km',
    mapTitle: '🗺️ Xivani xaritada toping',
    place1Title: 'Tosh-Hovli saroyi',
    place1Text: '"Tosh saroy" nomi bilan tanilgan Tosh-Hovli murakkab naqshlar, freskalar va ajoyib o\'yilgan shiftlar bilan bezatilgan.',
    place2Title: 'Pahlavon Mahmud maqbarasi',
    place2Text: 'Xivaning homiy avliyosi va shoiriga bag\'ishlangan bu tinch maqbara ehtirom va hunarmandchilik maskanidir.',
    place3Title: 'Ipak yo\'li merosi',
    place3Text: 'Xiva muhim savdo markazi edi. Uning bozor ko\'chalari gilamlar, sopol buyumlar, ziravorlar va hikoyalar almashinuvi bilan hali ham jaranglaydi.',
    place4Title: 'Mahalliy oshxona',
    place4Text: 'Eski shahardagi kichik oilaviy restoranlarda plov, manti, shurpa va shirin halva tatib ko\'ring.',
    tipsTitle: '📍 Ichan Qal\'ani toping',
    tipsText: 'G\'arbiy darvoza (Ota Darvoza) tarixiy ichki shaharning asosiy kirish qismidir.',
    googleMaps: '🗺️ Google Maps',
    yandexMaps: '🗺️ Yandex Maps',
    tipsSubtitle: 'Sayyohlar uchun maslahatlar',
    tip1: 'Sayohat qilish uchun eng yaxshi vaqt: bahor va kuz, ob-havo yumshoq bo\'lgan paytda.',
    tip2: 'Ichan Qal\'a ichidagi kichik do\'konlar va choyxonalar uchun naqd pul olib boring.',
    tip3: 'Qadimiy shaharning go\'zal manzaralarini ko\'rish uchun minoralarga chiqing.',
    tip4: 'Yoritilgan bezaklarni ko\'rish uchun kechqurun tashrif buyuring.',
    footer: 'Xiva shahar veb-sayti • O\'zbekistonning tarixiy qalbini nishonlash uchun yaratilgan.',
    city: 'Xiva',
    country: 'O\'zbekiston'
  },
  ru: {
    home: 'Главная',
    features: 'Особенности',
    places: 'Места',
    around: 'Вокруг Хивы',
    tips: 'Советы',
    eyebrow: '✨ Откройте Хиву',
    title: 'Хива: Город вечных чудес',
    subtitle: 'Прогуляйтесь по векам истории в сердце Узбекистана, где изысканные медресе, изящные минареты и караван-сараи оживляют Великий Шёлковый путь.',
    explore: 'Исследовать →',
    visit: 'Планировать поездку',
    introTitle: 'Почему Хива незабываема',
    introText: 'Хива - один из самых хорошо сохранившихся исторических городов Центральной Азии. Её старый город, Ичан-Кала, является объектом Всемирного наследия ЮНЕСКО, окружён красными глиняными стенами и наполнен дворцовыми дворами, величественными мечетями и атмосферными базарами.',
    stat1: 'Исторические памятники',
    stat2: 'Деревянные колонны',
    stat3: 'Памятники внутри стен',
    stat4: 'Лет истории',
    featuresTitle: '✨ Достопримечательности Ичан-Калы',
    feature1Title: 'Ичан-Кала',
    feature1Text: 'Исторический внутренний город, содержащий более 50 исторических памятников и сотни традиционных жилищ.',
    feature2Title: 'Минарет Кальта-Минар',
    feature2Text: 'Впечатляющий минарет, облицованный бирюзовой плиткой, который остался недостроенным, но является одним из самых знаковых символов города.',
    feature3Title: 'Комплекс Ислам-Ходжа',
    feature3Text: 'Имеет самый высокий минарет города, с которого открывается панорамный вид на весь оазис для тех, кто поднимется по его узким ступеням.',
    feature4Title: 'Мечеть Джума',
    feature4Text: 'Уникальная мечеть X века, известная своим молитвенным залом, поддерживаемым более чем 200 красиво вырезанными деревянными колоннами.',
    storyTitle: 'Скрытые истории и культурное очарование',
    storyText: 'Каждый уголок Хивы хранит свою историю. Караван-сараи когда-то принимали купцов из Китая, Персии и Европы. Медресе обучали поэзии, астрономии и религии. Город сохраняет ритм повседневной жизни с ремесленниками, кафе и музыкантами, поддерживающими традиции.',
    aroundTitle: '📍 Вокруг Хивы',
    around1Title: 'Сафари в пустыне',
    around1Text: 'Испытайте просторы пустыни Кызылкум с верблюжьими прогулками и потрясающими закатами прямо за пределами Хивы.',
    around1Loc: 'Пустыня Кызылкум, 30 км от Хивы',
    around2Title: 'Древние крепости',
    around2Text: 'Посетите руины Топрак-Калы и Аяз-Калы, древних крепостей, когда-то охранявших Великий Шёлковый путь.',
    around2Loc: 'Топрак-Кала, 60 км от Хивы',
    around3Title: 'Горы Нуратау',
    around3Text: 'Откройте для себя живописный горный хребет с древними петроглифами, пешеходными тропами и традиционными деревнями.',
    around3Loc: 'Горы Нуратау, 200 км от Хивы',
    around4Title: 'Мастерская шёлковых ковров',
    around4Text: 'Посетите традиционную мастерскую ковров в селе Богот, где вручную ткут шёлковые ковры.',
    around4Loc: 'Село Богот, 20 км от Хивы',
    mapTitle: '🗺️ Найдите Хиву на карте',
    place1Title: 'Дворец Таш-Хаули',
    place1Text: 'Известный как "Каменный дворец", Таш-Хаули украшен изысканным лепным декором, фресками и великолепными резными потолками.',
    place2Title: 'Мавзолей Пахлавана Махмуда',
    place2Text: 'Посвящённый святому покровителю и поэту Хивы, этот мирный мавзолей является местом почитания и мастерства.',
    place3Title: 'Наследие Шёлкового пути',
    place3Text: 'Хива была ключевым торговым центром. Её рыночные улицы до сих пор слышат обмен коврами, керамикой, специями и историями.',
    place4Title: 'Местная кухня',
    place4Text: 'Попробуйте плов, манты, шурпу и сладкую халву в небольших семейных ресторанах в старом городе.',
    tipsTitle: '📍 Найдите Ичан-Калу',
    tipsText: 'Западные ворота (Ота-Дарвоза) являются главным входом в исторический внутренний город.',
    googleMaps: '🗺️ Google Maps',
    yandexMaps: '🗺️ Яндекс Карты',
    tipsSubtitle: 'Быстрые советы для посетителей',
    tip1: 'Лучшее время для посещения: весна и осень, когда погода мягкая.',
    tip2: 'Носите с собой наличные для маленьких магазинов и чайных внутри Ичан-Калы.',
    tip3: 'Поднимитесь на минареты, чтобы увидеть панорамные виды древнего города.',
    tip4: 'Оставьте время для прогулок в сумерках, когда огни подсвечивают резные фасады.',
    footer: 'Веб-сайт города Хивы • Создан в честь исторического сердца Узбекистана.',
    city: 'Хива',
    country: 'Узбекистан'
  }
};

// ============================================
// 6. LANGUAGE SWITCHER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  const langBtns = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('language') || 'en';
  
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    langBtns.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === lang) {
        btn.classList.add('active');
        btn.style.background = 'rgba(255,255,255,0.2)';
        btn.style.borderColor = 'rgba(255,255,255,0.4)';
        btn.style.color = '#1d1b1a';
      } else {
        btn.style.background = 'none';
        btn.style.borderColor = 'rgba(255,255,255,0.2)';
        btn.style.color = '#4a4540';
      }
    });
    
    if (document.body.classList.contains('dark-mode')) {
      langBtns.forEach(btn => {
        btn.style.color = '#c4c0ba';
        if (btn.dataset.lang === lang) {
          btn.style.background = 'rgba(255,255,255,0.1)';
          btn.style.borderColor = 'rgba(255,255,255,0.3)';
        }
      });
    }
    
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    const idMap = {
      'hero-eyebrow': 'eyebrow',
      'hero-title': 'title',
      'hero-subtitle': 'subtitle',
      'intro-title': 'introTitle',
      'intro-text': 'introText',
      'features-title': 'featuresTitle',
      'story-title': 'storyTitle',
      'story-text': 'storyText',
      'tips-title': 'tipsTitle',
      'tips-text': 'tipsText',
      'tips-subtitle': 'tipsSubtitle',
      'footer-text': 'footer',
      'weather-city': 'city',
      'weather-country': 'country'
    };
    
    Object.keys(idMap).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const key = idMap[id];
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      }
    });
  }
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });
  
  setLanguage(currentLang);
});



