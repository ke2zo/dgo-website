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

type Language = "ru" | "en" | "kz";

const languages: Array<{ code: Language; label: string }> = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "kz", label: "KZ" },
];

const storeLinks = {
  googlePlay: "https://play.google.com/store/apps/details?id=com.durakgo.game",
  appStore: "https://apps.apple.com/kz/app/durak-go/id6762427053",
};

const companyIcons = [Gamepad2, ShieldCheck, UsersRound];

const copy = {
  ru: {
    nav: {
      game: "Игра",
      studio: "Студия",
      download: "Скачать",
      aria: "Главная навигация",
    },
    hero: {
      eyebrow: "mobile card game studio",
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
        title: "Durak Go Studio",
        text: "Разрабатываем мобильные карточные игры с быстрым входом и понятным онлайн-столом.",
      },
      {
        title: "Честные партии",
        text: "Сохраняем классические правила Дурака и аккуратно переносим их в цифровой формат.",
      },
      {
        title: "Для игроков",
        text: "Делаем продукт для коротких сессий, игры с друзьями и спокойного соревнования.",
      },
    ],
    studio: {
      eyebrow: "О компании",
      title: "Durak Go - студия вокруг современной карточной игры.",
      paragraphs: [
        "Мы переносим привычную культуру игры в Дурака в мобильный формат: быстрые онлайн-партии, чистый интерфейс и понятную логику стола.",
        "Наша задача - сделать игру, в которую легко вернуться в любой момент: дома, в дороге или между делами.",
      ],
      principles: [
        "Развиваем знакомую карточную механику без лишней аркады.",
        "Проектируем интерфейс так, чтобы партия удобно игралась с телефона.",
        "Собираем вокруг игры онлайн-столы, рейтинги и регулярные события.",
      ],
    },
    release: {
      eyebrow: "Где скачать",
      title: "Durak Go уже доступна на iOS и Android",
      text: "Установите игру из официального магазина и заходите за стол: подкидной и переводной Дурак доступны на смартфонах через App Store и Google Play.",
      googleSmall: "Доступно в",
      appleSmall: "Загрузите в",
    },
    footer: "Mobile card game company",
  },
  en: {
    nav: {
      game: "Game",
      studio: "Studio",
      download: "Download",
      aria: "Main navigation",
    },
    hero: {
      eyebrow: "mobile card game studio",
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
        title: "Durak Go Studio",
        text: "We build mobile card games with quick entry, clear rules, and live online tables.",
      },
      {
        title: "Fair matches",
        text: "We keep the classic rules of Durak and carefully bring them into a digital format.",
      },
      {
        title: "Made for players",
        text: "Durak Go is built for short sessions, friendly games, and calm competition.",
      },
    ],
    studio: {
      eyebrow: "About company",
      title: "Durak Go is a studio built around a modern card game.",
      paragraphs: [
        "We bring the familiar culture of Durak to mobile: fast online matches, a clean interface, and clear table logic.",
        "Our goal is to make a game players can return to at any moment: at home, on the go, or between daily tasks.",
      ],
      principles: [
        "We develop familiar card mechanics without unnecessary arcade layers.",
        "We design the interface so each match feels natural on a phone.",
        "We build online tables, rankings, and regular events around the game.",
      ],
    },
    release: {
      eyebrow: "Where to download",
      title: "Durak Go is available on iOS and Android",
      text: "Install the game from the official store and join a table: throw-in and transfer Durak are available on smartphones through App Store and Google Play.",
      googleSmall: "Available on",
      appleSmall: "Download on the",
    },
    footer: "Mobile card game company",
  },
  kz: {
    nav: {
      game: "Ойын",
      studio: "Студия",
      download: "Жүктеу",
      aria: "Негізгі навигация",
    },
    hero: {
      eyebrow: "mobile card game studio",
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
        title: "Durak Go Studio",
        text: "Біз жылдам кіруі, түсінікті ережелері және онлайн үстелі бар мобильді карта ойындарын жасаймыз.",
      },
      {
        title: "Әділ партиялар",
        text: "Дурактың классикалық ережелерін сақтап, оларды цифрлық форматқа мұқият көшіреміз.",
      },
      {
        title: "Ойыншылар үшін",
        text: "Durak Go қысқа сессияларға, достармен ойнауға және тыныш бәсекеге арналған.",
      },
    ],
    studio: {
      eyebrow: "Компания туралы",
      title: "Durak Go - заманауи карта ойынына негізделген студия.",
      paragraphs: [
        "Біз Дурак ойынының таныс мәдениетін мобильді форматқа көшіреміз: жылдам онлайн партиялар, таза интерфейс және түсінікті үстел логикасы.",
        "Мақсатымыз - ойыншылар кез келген сәтте қайта орала алатын ойын жасау: үйде, жолда немесе күнделікті істер арасында.",
      ],
      principles: [
        "Таныс карта механикасын артық аркадасыз дамытамыз.",
        "Партия телефонда ыңғайлы ойналуы үшін интерфейсті мұқият жобалаймыз.",
        "Ойын айналасында онлайн үстелдер, рейтингтер және тұрақты оқиғалар құрамыз.",
      ],
    },
    release: {
      eyebrow: "Қайдан жүктеуге болады",
      title: "Durak Go iOS және Android жүйелерінде қолжетімді",
      text: "Ойынды ресми дүкеннен орнатып, үстелге қосылыңыз: подкидной және ауыспалы Дурак App Store және Google Play арқылы смартфондарда қолжетімді.",
      googleSmall: "Қолжетімді",
      appleSmall: "Жүктеп алу",
    },
    footer: "Мобильді карта ойындары компаниясы",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = copy[language];

  return (
    <main>
      <section className="hero" id="top">
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
            <a href="#game">{t.nav.game}</a>
            <a href="#studio">{t.nav.studio}</a>
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

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              {t.hero.eyebrow}
            </p>
            <h1>Durak Go</h1>
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

      <section className="highlight-strip" id="game">
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

      <section className="studio-section" id="studio">
        <div className="studio-copy">
          <p className="eyebrow">{t.studio.eyebrow}</p>
          <h2>{t.studio.title}</h2>
          {t.studio.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="principles">
          {t.studio.principles.map((item) => (
            <div className="principle" key={item}>
              <BadgeCheck size={21} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
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
