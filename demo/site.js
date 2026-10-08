const languageSelect = document.querySelector("#demo-language");

const translations = {
  de: {
    Home: "Startseite",
    Catalog: "Katalog",
    About: "Über uns",
    Contact: "Kontakt",
    Theme: "Design",
    "Main navigation": "Hauptnavigation",
    "On this page": "Auf dieser Seite",
    Language: "Sprache",
    "User menu": "Benutzermenü",
    "More navigation": "Weitere Seiten",
    "Dark Purple & Gold": "Dunkles Lila und Gold",
    "Dark Blue & White": "Dunkelblau und Weiß",
    "Dark Violet & Gold": "Dunkles Violett und Gold",
    "Light White & Red": "Helles Weiß und Rot",
    "Universal Design System with Tokens, Themes, Components & Utilities":
      "Universelles Designsystem mit Tokens, Designs, Komponenten und Hilfsklassen",
    "Browse the component guide ↓": "Komponentenübersicht ansehen ↓",
    "Color system": "Farbsystem",
    Flexbox: "Flexbox",
    Navigation: "Navigation",
    Typography: "Typografie",
    Grid: "Raster",
    Buttons: "Schaltflächen",
    Cards: "Karten",
    Forms: "Formulare",
    Pagination: "Seitennummerierung",
    "Color utilities": "Farbklassen",
    Tables: "Tabellen",
    "Color System": "Farbsystem",
    "Current theme colors and their usage in the design system. Updates automatically when you switch themes.":
      "Die Farben des aktuellen Designs und ihre Verwendung im Designsystem. Sie werden beim Designwechsel automatisch aktualisiert.",
    "A sticky navigation bar with brand, menu items, and action buttons. Resize the page: links move one at a time into the three-dot menu when they no longer fit.":
      "Eine fixierte Navigationsleiste mit Marke, Menüpunkten und Aktionen. Wenn der Platz nicht reicht, wandern die Links einzeln in das Drei-Punkte-Menü.",
    "Flexbox Layout": "Flexbox-Layout",
    "Grid Layout": "Rasterlayout",
    "Form Elements": "Formularelemente",
    Colors: "Farben",
    "About the demo": "Über die Demo",
    "A design system for everyday interfaces.":
      "Ein Designsystem für alltägliche Oberflächen.",
    "Tertium CSS provides theme tokens, layout utilities, and familiar components. These demo pages put them together in a small site so you can judge real layouts on mobile and desktop.":
      "Tertium CSS bietet Design-Tokens, Layout-Hilfsklassen und vertraute Komponenten. Diese Demoseiten zeigen sie als kleine Website auf Mobilgeräten und Desktoprechnern.",
    "Browse components": "Komponenten ansehen",
    "Explore the catalog": "Katalog entdecken",
    "Reusable foundations": "Wiederverwendbare Grundlagen",
    "Spacing, typography, colors, and responsive layout classes provide a steady base for new pages.":
      "Abstände, Typografie, Farben und responsive Layoutklassen bilden eine solide Grundlage für neue Seiten.",
    "Common components": "Gängige Komponenten",
    "Buttons, forms, cards, navigation, badges, and tables are ready to combine without a framework dependency.":
      "Schaltflächen, Formulare, Karten, Navigation, Labels und Tabellen lassen sich ohne Framework kombinieren.",
    "Themes in context": "Designs im Einsatz",
    "The catalog lets you switch themes while keeping the same content and component structure.":
      "Im Katalog können Sie das Design wechseln, während Inhalt und Komponentenstruktur gleich bleiben.",
    "Responsive by default": "Standardmäßig responsiv",
    "Open these pages at different widths to see the navigation overflow, forms, and card grid adapt.":
      "Öffnen Sie diese Seiten in verschiedenen Breiten und sehen Sie, wie sich Navigation, Formulare und Kartenraster anpassen.",
    "Contact demo": "Kontakt-Demo",
    "Let's start a conversation.": "Lassen Sie uns ins Gespräch kommen.",
    "This page shows a familiar contact layout and the form styles in context. The form is a demo and does not send messages.":
      "Diese Seite zeigt ein übliches Kontaktlayout und die Formularstile im Einsatz. Das Formular dient nur zur Demo und versendet keine Nachrichten.",
    "Send a message": "Nachricht schreiben",
    Name: "Name",
    Email: "E-Mail",
    Topic: "Thema",
    Message: "Nachricht",
    "General question": "Allgemeine Frage",
    "Design feedback": "Feedback zum Design",
    "Component idea": "Komponentenvorschlag",
    "Send demo message": "Demo-Nachricht senden",
    "Demo only: no message was sent.":
      "Nur eine Demo: Es wurde keine Nachricht gesendet.",
    "Explore the site": "Website entdecken",
    "Use these pages to inspect common patterns: navigation, content cards, forms, and responsive layouts.":
      "Auf diesen Seiten sehen Sie gängige Muster: Navigation, Karten, Formulare und responsive Layouts.",
    "Component guide": "Komponentenübersicht",
    "Movie catalog": "Filmkatalog",
    "The Screenroom · Curated film library":
      "The Screenroom · Ausgewählte Filme",
    "A good story starts here.": "Eine gute Geschichte beginnt hier.",
    "Browse a small collection of films made for this CSS demo. Search by title, narrow by genre, and save the ones you want to revisit.":
      "Entdecken Sie eine kleine Filmsammlung für diese CSS-Demo. Suchen Sie nach Titel, filtern Sie nach Genre und speichern Sie Filme für später.",
    "Explore films": "Filme entdecken",
    "YOUR NEXT FILM IS WAITING": "IHR NÄCHSTER FILM WARTET",
    "Search films": "Filme suchen",
    "Title, genre, or story...": "Titel, Genre oder Handlung...",
    Genre: "Genre",
    "All genres": "Alle Genres",
    Adventure: "Abenteuer",
    Drama: "Drama",
    Mystery: "Mystery",
    "Sci-fi": "Science-Fiction",
    "Sort by": "Sortieren nach",
    Featured: "Empfohlen",
    "Top rated": "Bestbewertet",
    Newest: "Neueste",
    "Title A–Z": "Titel A–Z",
    "Dark blue": "Dunkelblau",
    "Dark purple": "Dunkles Lila",
    "Dark violet": "Dunkles Violett",
    Light: "Hell",
    "The collection": "Die Sammlung",
    "Saved only": "Nur gespeicherte",
    "A lone cartographer follows a signal beyond the last mapped star.":
      "Ein einsamer Kartograf folgt einem Signal jenseits des letzten kartierten Sterns.",
    "Two sisters return to the coast where their story first changed.":
      "Zwei Schwestern kehren an die Küste zurück, wo ihre Geschichte einst eine Wendung nahm.",
    "A late-night radio host hears a voice that knows tomorrow.":
      "Ein Radiomoderator hört nachts eine Stimme, die den morgigen Tag kennt.",
    "A botanist finds a hidden city beneath an impossible forest.":
      "Eine Botanikerin entdeckt eine verborgene Stadt unter einem unmöglichen Wald.",
    "A quiet expedition becomes a search for a place left off every map.":
      "Eine ruhige Expedition wird zur Suche nach einem Ort, der auf keiner Karte steht.",
    "On closing night, a theater crew makes one last performance count.":
      "Am letzten Abend gibt eine Theatergruppe alles für ihre letzte Aufführung.",
    "An engineer discovers that her city's lights have a memory.":
      "Eine Ingenieurin entdeckt, dass die Lichter ihrer Stadt ein Gedächtnis haben.",
    "Strangers at a desert motel all remember a different yesterday.":
      "Fremde in einem Wüstenmotel erinnern sich alle an ein anderes Gestern.",
    "No films found": "Keine Filme gefunden",
    "Try another title or genre, or clear your filters.":
      "Versuchen Sie einen anderen Titel oder ein anderes Genre oder löschen Sie die Filter.",
    "Clear filters": "Filter löschen",
  },
  fr: {
    Home: "Accueil",
    Catalog: "Catalogue",
    About: "À propos",
    Contact: "Contact",
    Theme: "Thème",
    "Main navigation": "Navigation principale",
    "On this page": "Sur cette page",
    Language: "Langue",
    "User menu": "Menu utilisateur",
    "More navigation": "Autres pages",
    "Dark Purple & Gold": "Violet foncé et or",
    "Dark Blue & White": "Bleu foncé et blanc",
    "Dark Violet & Gold": "Mauve foncé et or",
    "Light White & Red": "Clair, blanc et rouge",
    "Universal Design System with Tokens, Themes, Components & Utilities":
      "Système de design universel avec jetons, thèmes, composants et utilitaires",
    "Browse the component guide ↓": "Voir le guide des composants ↓",
    "Color system": "Système de couleurs",
    Flexbox: "Flexbox",
    Navigation: "Navigation",
    Typography: "Typographie",
    Grid: "Grille",
    Buttons: "Boutons",
    Cards: "Cartes",
    Forms: "Formulaires",
    Pagination: "Pagination",
    "Color utilities": "Utilitaires de couleur",
    Tables: "Tableaux",
    "Color System": "Système de couleurs",
    "Current theme colors and their usage in the design system. Updates automatically when you switch themes.":
      "Les couleurs du thème actuel et leur utilisation dans le système de design. Elles changent automatiquement avec le thème.",
    "A sticky navigation bar with brand, menu items, and action buttons. Resize the page: links move one at a time into the three-dot menu when they no longer fit.":
      "Une barre de navigation fixe avec marque, liens et actions. Réduisez la fenêtre : les liens passent un par un dans le menu à trois points quand la place manque.",
    "Flexbox Layout": "Disposition Flexbox",
    "Grid Layout": "Disposition en grille",
    "Form Elements": "Éléments de formulaire",
    Colors: "Couleurs",
    "About the demo": "À propos de la démo",
    "A design system for everyday interfaces.":
      "Un système de design pour les interfaces du quotidien.",
    "Tertium CSS provides theme tokens, layout utilities, and familiar components. These demo pages put them together in a small site so you can judge real layouts on mobile and desktop.":
      "Tertium CSS propose des jetons de thème, des utilitaires de mise en page et des composants courants. Ces pages les réunissent dans un petit site pour évaluer les interfaces sur mobile et ordinateur.",
    "Browse components": "Voir les composants",
    "Explore the catalog": "Explorer le catalogue",
    "Reusable foundations": "Bases réutilisables",
    "Spacing, typography, colors, and responsive layout classes provide a steady base for new pages.":
      "Les espacements, la typographie, les couleurs et les classes de mise en page adaptative offrent une base solide pour de nouvelles pages.",
    "Common components": "Composants courants",
    "Buttons, forms, cards, navigation, badges, and tables are ready to combine without a framework dependency.":
      "Boutons, formulaires, cartes, navigation, badges et tableaux se combinent sans dépendance à un framework.",
    "Themes in context": "Thèmes en situation",
    "The catalog lets you switch themes while keeping the same content and component structure.":
      "Le catalogue permet de changer de thème tout en gardant le même contenu et la même structure.",
    "Responsive by default": "Adaptatif par défaut",
    "Open these pages at different widths to see the navigation overflow, forms, and card grid adapt.":
      "Ouvrez ces pages à différentes largeurs pour voir la navigation, les formulaires et la grille de cartes s'adapter.",
    "Contact demo": "Démo de contact",
    "Let's start a conversation.": "Entamons la conversation.",
    "This page shows a familiar contact layout and the form styles in context. The form is a demo and does not send messages.":
      "Cette page présente une mise en page de contact classique et les styles du formulaire. Ce formulaire est une démo et n'envoie aucun message.",
    "Send a message": "Envoyer un message",
    Name: "Nom",
    Email: "E-mail",
    Topic: "Sujet",
    Message: "Message",
    "General question": "Question générale",
    "Design feedback": "Avis sur le design",
    "Component idea": "Idée de composant",
    "Send demo message": "Envoyer le message de démo",
    "Demo only: no message was sent.":
      "Démo uniquement : aucun message n'a été envoyé.",
    "Explore the site": "Explorer le site",
    "Use these pages to inspect common patterns: navigation, content cards, forms, and responsive layouts.":
      "Ces pages montrent des éléments courants : navigation, cartes de contenu, formulaires et mises en page adaptatives.",
    "Component guide": "Guide des composants",
    "Movie catalog": "Catalogue de films",
    "The Screenroom · Curated film library":
      "The Screenroom · Sélection de films",
    "A good story starts here.": "Une belle histoire commence ici.",
    "Browse a small collection of films made for this CSS demo. Search by title, narrow by genre, and save the ones you want to revisit.":
      "Parcourez une petite sélection de films créée pour cette démo CSS. Recherchez par titre, filtrez par genre et enregistrez vos favoris.",
    "Explore films": "Explorer les films",
    "YOUR NEXT FILM IS WAITING": "VOTRE PROCHAIN FILM VOUS ATTEND",
    "Search films": "Rechercher des films",
    "Title, genre, or story...": "Titre, genre ou histoire...",
    Genre: "Genre",
    "All genres": "Tous les genres",
    Adventure: "Aventure",
    Drama: "Drame",
    Mystery: "Mystère",
    "Sci-fi": "Science-fiction",
    "Sort by": "Trier par",
    Featured: "À la une",
    "Top rated": "Les mieux notés",
    Newest: "Les plus récents",
    "Title A–Z": "Titre A–Z",
    "Dark blue": "Bleu foncé",
    "Dark purple": "Violet foncé",
    "Dark violet": "Mauve foncé",
    Light: "Clair",
    "The collection": "La collection",
    "Saved only": "Enregistrés seulement",
    "A lone cartographer follows a signal beyond the last mapped star.":
      "Un cartographe solitaire suit un signal au-delà de la dernière étoile répertoriée.",
    "Two sisters return to the coast where their story first changed.":
      "Deux sœurs retournent sur la côte où leur histoire a basculé.",
    "A late-night radio host hears a voice that knows tomorrow.":
      "Un animateur radio nocturne entend une voix qui connaît le lendemain.",
    "A botanist finds a hidden city beneath an impossible forest.":
      "Une botaniste découvre une ville cachée sous une forêt impossible.",
    "A quiet expedition becomes a search for a place left off every map.":
      "Une expédition tranquille se transforme en quête d'un lieu absent de toutes les cartes.",
    "On closing night, a theater crew makes one last performance count.":
      "Le soir de la fermeture, une troupe donne tout pour une dernière représentation.",
    "An engineer discovers that her city's lights have a memory.":
      "Une ingénieure découvre que les lumières de sa ville ont une mémoire.",
    "Strangers at a desert motel all remember a different yesterday.":
      "Dans un motel du désert, des inconnus se souviennent chacun d'un hier différent.",
    "No films found": "Aucun film trouvé",
    "Try another title or genre, or clear your filters.":
      "Essayez un autre titre ou genre, ou effacez les filtres.",
    "Clear filters": "Effacer les filtres",
  },
  ru: {
    Home: "Главная",
    Catalog: "Каталог",
    About: "О нас",
    Contact: "Контакты",
    Theme: "Тема",
    "Main navigation": "Основная навигация",
    "On this page": "На этой странице",
    Language: "Язык",
    "User menu": "Меню пользователя",
    "More navigation": "Другие страницы",
    "Dark Purple & Gold": "Тёмно-пурпурная и золотая",
    "Dark Blue & White": "Тёмно-синяя и белая",
    "Dark Violet & Gold": "Тёмно-фиолетовая и золотая",
    "Light White & Red": "Светлая белая и красная",
    "Universal Design System with Tokens, Themes, Components & Utilities":
      "Универсальная дизайн-система с токенами, темами, компонентами и утилитами",
    "Browse the component guide ↓": "Посмотреть каталог компонентов ↓",
    "Color system": "Система цветов",
    Flexbox: "Флексбокс",
    Navigation: "Навигация",
    Typography: "Типографика",
    Grid: "Сетка",
    Buttons: "Кнопки",
    Cards: "Карточки",
    Forms: "Формы",
    Pagination: "Пагинация",
    "Color utilities": "Цветовые утилиты",
    Tables: "Таблицы",
    "Color System": "Система цветов",
    "Current theme colors and their usage in the design system. Updates automatically when you switch themes.":
      "Цвета текущей темы и их применение в дизайн-системе. Они обновляются при смене темы.",
    "A sticky navigation bar with brand, menu items, and action buttons. Resize the page: links move one at a time into the three-dot menu when they no longer fit.":
      "Закреплённая панель с логотипом, пунктами меню и кнопками. При сужении окна ссылки по одной переходят в меню с тремя точками.",
    "Flexbox Layout": "Макет Flexbox",
    "Grid Layout": "Сеточный макет",
    "Form Elements": "Элементы формы",
    Colors: "Цвета",
    "About the demo": "О демо-сайте",
    "A design system for everyday interfaces.":
      "Дизайн-система для повседневных интерфейсов.",
    "Tertium CSS provides theme tokens, layout utilities, and familiar components. These demo pages put them together in a small site so you can judge real layouts on mobile and desktop.":
      "Tertium CSS предлагает токены тем, утилиты вёрстки и привычные компоненты. Эти страницы объединяют их в небольшой сайт, чтобы оценить макеты на телефоне и компьютере.",
    "Browse components": "Смотреть компоненты",
    "Explore the catalog": "Открыть каталог",
    "Reusable foundations": "Повторно используемые основы",
    "Spacing, typography, colors, and responsive layout classes provide a steady base for new pages.":
      "Отступы, типографика, цвета и адаптивные классы создают надёжную основу для новых страниц.",
    "Common components": "Типовые компоненты",
    "Buttons, forms, cards, navigation, badges, and tables are ready to combine without a framework dependency.":
      "Кнопки, формы, карточки, навигацию, метки и таблицы можно сочетать без зависимости от фреймворка.",
    "Themes in context": "Темы в действии",
    "The catalog lets you switch themes while keeping the same content and component structure.":
      "В каталоге можно менять тему, сохраняя содержимое и структуру компонентов.",
    "Responsive by default": "Адаптивность по умолчанию",
    "Open these pages at different widths to see the navigation overflow, forms, and card grid adapt.":
      "Откройте страницы на экранах разной ширины, чтобы увидеть, как меняются навигация, формы и сетка карточек.",
    "Contact demo": "Контактная форма",
    "Let's start a conversation.": "Давайте поговорим.",
    "This page shows a familiar contact layout and the form styles in context. The form is a demo and does not send messages.":
      "Здесь показаны обычная контактная страница и стили формы. Форма демонстрационная и не отправляет сообщения.",
    "Send a message": "Написать сообщение",
    Name: "Имя",
    Email: "Эл. почта",
    Topic: "Тема",
    Message: "Сообщение",
    "General question": "Общий вопрос",
    "Design feedback": "Отзыв о дизайне",
    "Component idea": "Идея компонента",
    "Send demo message": "Отправить демо-сообщение",
    "Demo only: no message was sent.":
      "Это демонстрация: сообщение не отправлено.",
    "Explore the site": "Изучить сайт",
    "Use these pages to inspect common patterns: navigation, content cards, forms, and responsive layouts.":
      "На этих страницах можно изучить обычные элементы: навигацию, карточки, формы и адаптивные макеты.",
    "Component guide": "Каталог компонентов",
    "Movie catalog": "Каталог фильмов",
    "The Screenroom · Curated film library":
      "The Screenroom · Подборка фильмов",
    "A good story starts here.": "Хорошая история начинается здесь.",
    "Browse a small collection of films made for this CSS demo. Search by title, narrow by genre, and save the ones you want to revisit.":
      "Посмотрите небольшую подборку фильмов для этой CSS-демонстрации. Ищите по названию, выбирайте жанр и сохраняйте понравившееся.",
    "Explore films": "Смотреть фильмы",
    "YOUR NEXT FILM IS WAITING": "ВАШ СЛЕДУЮЩИЙ ФИЛЬМ УЖЕ ЖДЁТ",
    "Search films": "Поиск фильмов",
    "Title, genre, or story...": "Название, жанр или сюжет...",
    Genre: "Жанр",
    "All genres": "Все жанры",
    Adventure: "Приключения",
    Drama: "Драма",
    Mystery: "Детектив",
    "Sci-fi": "Фантастика",
    "Sort by": "Сортировать",
    Featured: "Избранное",
    "Top rated": "По рейтингу",
    Newest: "Сначала новые",
    "Title A–Z": "Название А–Я",
    "Dark blue": "Тёмно-синяя",
    "Dark purple": "Тёмно-пурпурная",
    "Dark violet": "Тёмно-фиолетовая",
    Light: "Светлая",
    "The collection": "Коллекция",
    "Saved only": "Только сохранённые",
    "A lone cartographer follows a signal beyond the last mapped star.":
      "Одинокий картограф следует за сигналом за пределы последней нанесённой на карту звезды.",
    "Two sisters return to the coast where their story first changed.":
      "Две сестры возвращаются на побережье, где их история однажды изменилась.",
    "A late-night radio host hears a voice that knows tomorrow.":
      "Ночной радиоведущий слышит голос, который знает, что будет завтра.",
    "A botanist finds a hidden city beneath an impossible forest.":
      "Ботаник находит скрытый город под невероятным лесом.",
    "A quiet expedition becomes a search for a place left off every map.":
      "Тихая экспедиция превращается в поиски места, которого нет ни на одной карте.",
    "On closing night, a theater crew makes one last performance count.":
      "В последний вечер театральная труппа выкладывается ради финального спектакля.",
    "An engineer discovers that her city's lights have a memory.":
      "Инженер обнаруживает, что огни её города хранят воспоминания.",
    "Strangers at a desert motel all remember a different yesterday.":
      "Постояльцы мотеля в пустыне помнят разные версии вчерашнего дня.",
    "No films found": "Фильмы не найдены",
    "Try another title or genre, or clear your filters.":
      "Попробуйте другое название или жанр либо сбросьте фильтры.",
    "Clear filters": "Сбросить фильтры",
  },
};

const translate = (text, language) => translations[language]?.[text] ?? text;

try {
  const savedTheme = localStorage.getItem("tertium-demo-theme");
  if (
    [
      "dark--blue--white",
      "dark--purple--gold",
      "dark--violet--gold",
      "light--white--red",
    ].includes(savedTheme)
  ) {
    document.documentElement.dataset.theme = savedTheme;
  }
} catch {}
const themeSelect = document.querySelector("#movie-theme");
const syncTheme = () => {
  const theme = document.documentElement.dataset.theme;
  if (themeSelect) themeSelect.value = theme;
  document.querySelectorAll("button[data-theme-choice]").forEach((button) => {
    const selected = button.dataset.themeChoice === theme;
    button.setAttribute("aria-pressed", String(selected));
    button.lastElementChild.hidden = !selected;
  });
};
const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  syncTheme();
  try {
    localStorage.setItem("tertium-demo-theme", theme);
  } catch {}
  document.dispatchEvent(new Event("demo-theme-change"));
};
syncTheme();
themeSelect?.addEventListener("change", () => setTheme(themeSelect.value));

const setLanguage = (language) => {
  document.documentElement.lang = language;
  document.querySelectorAll(".navbar[aria-label]").forEach((nav) => {
    nav.setAttribute("aria-label", translate("Main navigation", language));
  });
  const toc = document.querySelector("#menu");
  if (toc) toc.setAttribute("aria-label", translate("On this page", language));
  languageSelect.setAttribute("aria-label", translate("Language", language));
  document.querySelectorAll(".profile-menu--trigger").forEach((button) => {
    button.setAttribute("aria-label", translate("User menu", language));
  });
  document.querySelectorAll(".navbar-toggle").forEach((button) => {
    button.setAttribute("aria-label", translate("More navigation", language));
  });
  document.querySelectorAll("[data-en]").forEach((element) => {
    element.textContent = translate(element.dataset.en, language);
  });
  document.querySelectorAll("[data-placeholder-en]").forEach((element) => {
    element.placeholder = translate(element.dataset.placeholderEn, language);
  });
  document.dispatchEvent(new Event("demo-language-change"));
};

if (languageSelect) {
  let savedLanguage = "en";
  try {
    savedLanguage = localStorage.getItem("tertium-demo-language") || "en";
  } catch {}
  languageSelect.value = ["en", "de", "fr", "ru"].includes(savedLanguage)
    ? savedLanguage
    : "en";
  setLanguage(languageSelect.value);
  languageSelect.addEventListener("change", () => {
    setLanguage(languageSelect.value);
    try {
      localStorage.setItem("tertium-demo-language", languageSelect.value);
    } catch {}
  });
}

const navbar = document.querySelector(".navbar--responsive");
if (navbar) {
  const inner = navbar.querySelector(".navbar-inner");
  const menu = navbar.querySelector(".navbar-menu");
  const overflow = navbar.querySelector(".navbar-overflow");
  const overflowMenu = navbar.querySelector(".navbar-overflow-menu");
  const toggle = navbar.querySelector(".navbar-toggle");
  const profileTrigger = navbar.querySelector(".profile-menu--trigger");
  const profileDropdown = navbar.querySelector(".profile-menu--dropdown");
  const submenuTrigger = navbar.querySelector("[data-theme-menu-trigger]");
  const submenu = navbar.querySelector(".profile-menu--submenu");

  const closeNavigation = () => {
    overflow.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const closeProfile = () => {
    if (!profileDropdown) return;
    profileDropdown.hidden = true;
    profileTrigger.setAttribute("aria-expanded", "false");
    if (submenu) submenu.hidden = true;
    submenuTrigger?.setAttribute("aria-expanded", "false");
  };
  navbar.querySelectorAll("button[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.themeChoice);
      closeProfile();
    });
  });
  const updateNavigation = () => {
    const previousHidden = [...overflowMenu.children];
    while (overflowMenu.firstElementChild) {
      menu.insertBefore(overflowMenu.firstElementChild, overflow);
    }
    overflow.hidden = true;
    if (inner.scrollWidth > inner.clientWidth + 1) {
      overflow.hidden = false;
      while (
        inner.scrollWidth > inner.clientWidth + 1 &&
        overflow.previousElementSibling
      ) {
        overflowMenu.prepend(overflow.previousElementSibling);
      }
    }
    if (
      previousHidden.length !== overflowMenu.children.length ||
      previousHidden.some(
        (item, index) => item !== overflowMenu.children[index],
      )
    )
      closeNavigation();
  };

  toggle.addEventListener("click", () => {
    const isOpen = overflow.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    closeProfile();
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  if (profileDropdown) {
    closeProfile();
    profileTrigger.addEventListener("click", () => {
      closeNavigation();
      const isOpen = profileDropdown.hidden;
      profileDropdown.hidden = !isOpen;
      profileTrigger.setAttribute("aria-expanded", String(isOpen));
      if (!isOpen && submenu) {
        submenu.hidden = true;
        submenuTrigger?.setAttribute("aria-expanded", "false");
      }
    });
    submenuTrigger?.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = submenu.hidden;
      submenu.hidden = !isOpen;
      submenuTrigger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const closeOutsideMenus = (event) => {
    if (!event.target.closest(".profile-menu")) closeProfile();
    if (!event.target.closest(".navbar-menu")) closeNavigation();
  };
  document.addEventListener("pointerdown", closeOutsideMenus, true);
  document.addEventListener("focusin", closeOutsideMenus);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (overflow.classList.contains("is-open")) {
      closeNavigation();
      toggle.focus();
    } else if (profileDropdown && !profileDropdown.hidden) {
      closeProfile();
      profileTrigger.focus();
    }
  });
  new ResizeObserver(updateNavigation).observe(inner);
  document.fonts?.ready.then(updateNavigation);
  updateNavigation();
  document.addEventListener("demo-language-change", updateNavigation);
}
