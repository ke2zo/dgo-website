"use client";

import {
  ArrowUpRight,
  BadgeCheck,
  Download,
  Gamepad2,
  ShieldCheck,
  Sparkles,
  Swords,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Language = "ru" | "kz" | "uz" | "en";

const languages: Array<{ code: Language; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
];

const storeLinks = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.durakgo.game",
  appStore: "https://apps.apple.com/kz/app/durak-go/id6762427053",
};

const companyIcons = [Gamepad2, ShieldCheck, UsersRound];

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
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = copy[language];

  return (
    <main>
      <section className="company-hero" id="top">
        <nav className="nav" aria-label={t.nav.aria}>
          <a className="brand" href="#top" aria-label="Durak Go">
            <span className="brand-mark">
              <Image
                src="/durak-go-icon.jpg"
                alt=""
                width={46}
                height={46}
                priority
              />
            </span>
            <span>Durak Go</span>
          </a>
          <div className="nav-links">
            <a href="#studio">{t.nav.studio}</a>
            <a href="#game">{t.nav.game}</a>
            <a href="#release">{t.nav.download}</a>
          </div>
          <div className="language-switch" aria-label="Language switcher">
            {languages.map((item) => (
              <button
                aria-pressed={language === item.code}
                className={language === item.code ? "active" : undefined}
                key={item.code}
                onClick={() => setLanguage(item.code)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="studio-section studio-section-first" id="studio">
          <div className="studio-copy">
            <p className="eyebrow">{t.studio.eyebrow}</p>
            <h2>{t.studio.title}</h2>
            {t.studio.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="company-panel">
            <div className="company-panel-head">
              <span>{t.nav.studio}</span>
              <strong>DinqPlay Limited</strong>
            </div>
            {t.studio.principles.map((item) => (
              <div className="principle" key={item}>
                <BadgeCheck size={21} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="hero game-hero" id="game">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              {t.hero.eyebrow}
            </p>
            <h1 className="game-title">Durak Go</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="mode-row" aria-label={t.nav.game}>
              {t.hero.modes.map((mode) => (
                <span key={mode}>{mode}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="primary-button" href="#release">
                <Download size={18} aria-hidden="true" />
                {t.hero.download}
              </a>
              <a className="ghost-button" href="#game">
                {t.hero.watch}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="game-scene" aria-label={t.hero.scene}>
            <div className="game-phone">
              <Image
                src="/durak-go-gameplay.png"
                alt={t.hero.screenshotAlt}
                width={945}
                height={2048}
                priority
              />
            </div>
            <div className="screen-caption">
              <span>{t.hero.captionLabel}</span>
              <strong>Durak Go</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="highlight-strip" id="features">
        {t.facts.map((item, index) => {
          const Icon = companyIcons[index];

          return (
            <article key={item.title}>
              <Icon size={22} aria-hidden="true" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="release-section" id="release">
        <div className="release-copy">
          <p className="eyebrow">{t.release.eyebrow}</p>
          <h2>{t.release.title}</h2>
          <p>{t.release.text}</p>
        </div>
        <div className="release-actions">
          <a
            className="store-badge"
            href={storeLinks.googlePlay}
            target="_blank"
            rel="noreferrer"
          >
            <span className="store-icon">
              <Image
                src="/google-play-icon.png"
                alt=""
                width={28}
                height={28}
              />
            </span>
            <span>
              <small>{t.release.googleSmall}</small>
              Google Play
            </span>
          </a>
          <a
            className="store-badge accent"
            href={storeLinks.appStore}
            target="_blank"
            rel="noreferrer"
          >
            <span className="store-icon">
              <Image src="/app-store-icon.png" alt="" width={28} height={28} />
            </span>
            <span>
              <small>{t.release.appleSmall}</small>
              App Store
            </span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#top" aria-label="Durak Go">
          <span className="brand-mark">
            <Image src="/durak-go-icon.jpg" alt="" width={46} height={46} />
          </span>
          <span>Durak Go</span>
        </a>
        <span>
          <Swords size={17} aria-hidden="true" />
          {t.footer}
        </span>
      </footer>
    </main>
  );
}
