const languages = ["ru", "kz", "uz", "en"];

const icons = {
  "arrow-up-right":
    '<svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>',
  check:
    '<svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/><path d="M21 12a9 9 0 1 1-5.3-8.2"/></svg>',
  download:
    '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  gamepad:
    '<svg viewBox="0 0 24 24"><path d="M6 12h4"/><path d="M8 10v4"/><path d="M15 13h.01"/><path d="M18 11h.01"/><path d="M5 7h14a3 3 0 0 1 3 3v4.5a3.5 3.5 0 0 1-6.1 2.3L14.5 15h-5l-1.4 1.8A3.5 3.5 0 0 1 2 14.5V10a3 3 0 0 1 3-3Z"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z"/><path d="m9 12 2 2 4-4"/></svg>',
  sparkles:
    '<svg viewBox="0 0 24 24"><path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z"/><path d="M19 3v4"/><path d="M21 5h-4"/><path d="M5 17v4"/><path d="M7 19H3"/></svg>',
  swords:
    '<svg viewBox="0 0 24 24"><path d="m14.5 17.5 3 3 3-3-3-3"/><path d="m6.5 6.5 11 11"/><path d="m3 21 3-3"/><path d="m9.5 17.5-3 3-3-3 3-3"/><path d="m17.5 6.5-11 11"/><path d="m21 3-3 3"/></svg>',
  users:
    '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
};

const copy = {
  ru: {
    nav: {
      studio: "Компания",
      game: "Игра",
      download: "Скачать",
      aria: "Главная навигация",
    },
    hero: {
      eyebrow: "Мобильная карточная игра",
      lead: "Быстрый онлайн-Дурак для мобильных игроков: классические правила, честные столы и партии, которые запускаются за пару касаний.",
      modes: ["Подкидной", "Переводной", "2-6 игроков"],
      download: "Скачать игру",
      watch: "Смотреть игру",
      scene: "Скриншот игрового процесса Durak Go",
      screenshotAlt: "Скриншот партии в мобильной игре Durak Go",
      captionLabel: "Live gameplay",
    },
    facts: [
      {
        title: "Мобильная разработка",
        text: "DinqPlay Limited создает карточные игры с быстрым входом, понятной логикой и стабильным онлайн-столом.",
      },
      {
        title: "Классика в цифре",
        text: "Мы сохраняем узнаваемые правила Дурака и аккуратно переносим их в современный мобильный формат.",
      },
      {
        title: "Для живой игры",
        text: "Durak Go рассчитана на короткие партии, игру с друзьями и спокойное онлайн-соревнование.",
      },
    ],
    studio: {
      eyebrow: "О компании",
      title: "DinqPlay Limited создает мобильные карточные игры.",
      paragraphs: [
        "Наш основной проект - Durak Go, онлайн-игра в Дурака для iOS и Android. Мы развиваем ее как понятный, быстрый и аккуратный мобильный продукт.",
        "Команда фокусируется на чистом интерфейсе, стабильной игре за онлайн-столом и привычных правилах, которые легко узнать с первой партии.",
      ],
      principles: [
        "Проектируем Durak Go вокруг классической карточной механики без лишней аркады.",
        "Развиваем интерфейс и онлайн-столы так, чтобы партия удобно игралась с телефона.",
        "Поддерживаем игру на iOS и Android через официальные магазины приложений.",
      ],
    },
    release: {
      eyebrow: "Где скачать",
      title: "Durak Go уже доступна на iOS и Android",
      text: "Установите игру из официального магазина и заходите за стол: подкидной и переводной Дурак доступны на смартфонах через App Store и Google Play.",
      googleSmall: "Доступно в",
      appleSmall: "Загрузите в",
    },
    footer: "DinqPlay Limited",
  },
  kz: {
    nav: {
      studio: "Компания",
      game: "Ойын",
      download: "Жүктеу",
      aria: "Негізгі навигация",
    },
    hero: {
      eyebrow: "Мобильді карта ойыны",
      lead: "Мобильді ойыншыларға арналған жылдам онлайн Дурак: классикалық ережелер, әділ үстелдер және бірнеше түртумен басталатын партиялар.",
      modes: ["Подкидной", "Ауыспалы", "2-6 ойыншы"],
      download: "Ойынды жүктеу",
      watch: "Ойынды көру",
      scene: "Durak Go ойынының скриншоты",
      screenshotAlt: "Durak Go мобильді ойынындағы партия скриншоты",
      captionLabel: "Ойын барысы",
    },
    facts: [
      {
        title: "Мобильді әзірлеу",
        text: "DinqPlay Limited жылдам кіруі, түсінікті үстел логикасы және тұрақты онлайн ойыны бар карта ойындарын жасайды.",
      },
      {
        title: "Классика цифрда",
        text: "Біз Дурактың таныс ережелерін сақтап, оларды заманауи мобильді форматқа мұқият көшіреміз.",
      },
      {
        title: "Ойын үшін жасалған",
        text: "Durak Go қысқа партияларға, достармен ойнауға және тыныш онлайн бәсекеге арналған.",
      },
    ],
    studio: {
      eyebrow: "Компания туралы",
      title: "DinqPlay Limited мобильді карта ойындарын жасайды.",
      paragraphs: [
        "Негізгі жобамыз - iOS және Android жүйелеріне арналған онлайн Durak Go ойыны. Біз оны түсінікті, жылдам және мұқият жасалған мобильді өнім ретінде дамытамыз.",
        "Команда таза интерфейске, тұрақты онлайн үстелдерге және ойыншылар бірінші партиядан-ақ түсінетін таныс ережелерге назар аударады.",
      ],
      principles: [
        "Durak Go ойынын классикалық карта механикасына сүйеніп, артық аркадасыз жобалаймыз.",
        "Партия телефонда табиғи ойналуы үшін интерфейс пен онлайн үстелдерді дамытамыз.",
        "Ойынды ресми дүкендер арқылы iOS және Android жүйелерінде қолдаймыз.",
      ],
    },
    release: {
      eyebrow: "Қайдан жүктеуге болады",
      title: "Durak Go iOS және Android жүйелерінде қолжетімді",
      text: "Ойынды ресми дүкеннен орнатып, үстелге қосылыңыз: подкидной және ауыспалы Дурак App Store және Google Play арқылы смартфондарда қолжетімді.",
      googleSmall: "Қолжетімді",
      appleSmall: "Жүктеп алу",
    },
    footer: "DinqPlay Limited",
  },
  uz: {
    nav: {
      studio: "Kompaniya",
      game: "O'yin",
      download: "Yuklab olish",
      aria: "Asosiy navigatsiya",
    },
    hero: {
      eyebrow: "Mobil karta o'yini",
      lead: "Mobil o'yinchilar uchun tezkor onlayn Durak: klassik qoidalar, adolatli stollar va bir necha bosishda boshlanadigan partiyalar.",
      modes: ["Podkidnoy", "Perevodnoy", "2-6 o'yinchi"],
      download: "O'yinni yuklab olish",
      watch: "O'yinni ko'rish",
      scene: "Durak Go o'yin jarayoni skrinshoti",
      screenshotAlt: "Durak Go mobil o'yinidagi partiya skrinshoti",
      captionLabel: "O'yin jarayoni",
    },
    facts: [
      {
        title: "Mobil ishlab chiqish",
        text: "DinqPlay Limited tez kirish, tushunarli stol mantiqi va barqaror onlayn o'yinga ega karta o'yinlarini yaratadi.",
      },
      {
        title: "Klassika raqamli formatda",
        text: "Biz Durakning tanish qoidalarini saqlab, ularni zamonaviy mobil formatga ehtiyotkorlik bilan o'tkazamiz.",
      },
      {
        title: "Jonli o'yin uchun",
        text: "Durak Go qisqa partiyalar, do'stlar bilan o'ynash va sokin onlayn raqobat uchun yaratilgan.",
      },
    ],
    studio: {
      eyebrow: "Kompaniya haqida",
      title: "DinqPlay Limited mobil karta o'yinlarini yaratadi.",
      paragraphs: [
        "Asosiy loyihamiz - iOS va Android uchun onlayn Durak Go o'yini. Biz uni tushunarli, tezkor va puxta ishlangan mobil mahsulot sifatida rivojlantiramiz.",
        "Jamoa toza interfeys, barqaror onlayn stollar va o'yinchi birinchi partiyadanoq tushunadigan tanish qoidalarga e'tibor qaratadi.",
      ],
      principles: [
        "Durak Go klassik karta mexanikasi asosida, ortiqcha arkadasiz loyihalanadi.",
        "Partiya telefonda tabiiy o'ynalishi uchun interfeys va onlayn stollarni rivojlantiramiz.",
        "O'yinni rasmiy do'konlar orqali iOS va Android tizimlarida qo'llab-quvvatlaymiz.",
      ],
    },
    release: {
      eyebrow: "Qayerdan yuklab olish mumkin",
      title: "Durak Go iOS va Android uchun mavjud",
      text: "O'yinni rasmiy do'kondan o'rnating va stolga qo'shiling: podkidnoy va perevodnoy Durak App Store va Google Play orqali smartfonlarda mavjud.",
      googleSmall: "Mavjud",
      appleSmall: "Yuklab olish",
    },
    footer: "DinqPlay Limited",
  },
  en: {
    nav: {
      studio: "Company",
      game: "Game",
      download: "Download",
      aria: "Main navigation",
    },
    hero: {
      eyebrow: "Mobile card game",
      lead: "Fast online Durak for mobile players: classic rules, fair tables, and matches that start in just a few taps.",
      modes: ["Throw-in", "Transfer", "2-6 players"],
      download: "Download game",
      watch: "View gameplay",
      scene: "Durak Go gameplay screenshot",
      screenshotAlt: "Gameplay screenshot from the Durak Go mobile game",
      captionLabel: "Live gameplay",
    },
    facts: [
      {
        title: "Mobile development",
        text: "DinqPlay Limited builds card games with quick entry, clear table logic, and stable online play.",
      },
      {
        title: "Classic in digital",
        text: "We keep the recognizable rules of Durak and carefully bring them into a modern mobile format.",
      },
      {
        title: "Built for play",
        text: "Durak Go is made for short matches, games with friends, and calm online competition.",
      },
    ],
    studio: {
      eyebrow: "About company",
      title: "DinqPlay Limited creates mobile card games.",
      paragraphs: [
        "Our main project is Durak Go, an online Durak game for iOS and Android. We develop it as a clear, fast, and carefully designed mobile product.",
        "The team focuses on a clean interface, stable online tables, and familiar rules that players can understand from the first match.",
      ],
      principles: [
        "We design Durak Go around classic card mechanics without unnecessary arcade layers.",
        "We develop the interface and online tables so each match feels natural on a phone.",
        "We support the game on iOS and Android through the official app stores.",
      ],
    },
    release: {
      eyebrow: "Where to download",
      title: "Durak Go is available on iOS and Android",
      text: "Install the game from the official store and join a table: throw-in and transfer Durak are available on smartphones through App Store and Google Play.",
      googleSmall: "Available on",
      appleSmall: "Download on the",
    },
    footer: "DinqPlay Limited",
  },
};

function getValue(path, language) {
  return path.split(".").reduce((value, key) => value?.[key], copy[language]);
}

function renderList(element, path, language) {
  const value = getValue(path, language);

  if (path === "studio.paragraphs") {
    element.innerHTML = value.map((paragraph) => `<p>${paragraph}</p>`).join("");
    return;
  }

  if (path === "studio.principles") {
    element.innerHTML = value
      .map(
        (item) => `
          <div class="principle">
            <span class="icon" aria-hidden="true">${icons.check}</span>
            <span>${item}</span>
          </div>
        `,
      )
      .join("");
    return;
  }

  if (path === "hero.modes") {
    element.innerHTML = value.map((mode) => `<span>${mode}</span>`).join("");
    return;
  }

  if (path === "facts") {
    const factIcons = ["gamepad", "shield", "users"];
    element.innerHTML = value
      .map(
        (item, index) => `
          <article>
            <span class="icon" aria-hidden="true">${icons[factIcons[index]]}</span>
            <div>
              <h2>${item.title}</h2>
              <p>${item.text}</p>
            </div>
          </article>
        `,
      )
      .join("");
  }
}

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = getValue(element.dataset.i18n, language);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", getValue(element.dataset.i18nAria, language));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", getValue(element.dataset.i18nAlt, language));
  });

  document.querySelectorAll("[data-i18n-list]").forEach((element) => {
    renderList(element, element.dataset.i18nList, language);
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = icons[element.dataset.icon] ?? "";
});

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    if (languages.includes(language)) {
      setLanguage(language);
    }
  });
});

setLanguage("ru");
