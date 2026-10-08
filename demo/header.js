const currentPage = location.pathname.split("/").pop() || "index.html";
const navLinks = [
  ["index.html", "Home"],
  ["movies.html", "Catalog"],
  ["about.html", "About"],
  ["contact.html", "Contact"],
];
document.querySelector("#site-header").innerHTML = `
    <div class="container-xl">
      <div class="navbar-inner navbar-inner--flush">
        <a class="navbar-brand" href="index.html">🎨 Tertium CSS</a>
        <ul class="navbar-menu" id="site-navigation">
          ${navLinks.map(([href, label]) => `<li class="nav-item"><a class="nav-link${href === currentPage ? " active" : ""}" href="${href}" data-en="${label}"${href === currentPage ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
          <li class="nav-item navbar-overflow" hidden>
            <button class="btn btn--sm navbar-toggle" type="button" aria-label="More navigation" aria-controls="site-navigation-overflow" aria-expanded="false">···</button>
            <ul class="navbar-overflow-menu" id="site-navigation-overflow"></ul>
          </li>
        </ul>
        <div class="navbar-actions">
          <select class="form-select--link" id="demo-language" aria-label="Language">
            <option value="en">EN</option><option value="de">DE</option><option value="fr">FR</option><option value="ru">RU</option>
          </select>
          <div class="profile-menu">
            <button class="profile-menu--trigger" type="button" aria-label="User menu" aria-controls="site-profile-menu" aria-expanded="false">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <div class="profile-menu--dropdown" id="site-profile-menu" hidden>
              <a class="profile-menu--option" href="about.html" data-en="About">About</a>
              <a class="profile-menu--option" href="contact.html" data-en="Contact">Contact</a>
              <button class="profile-menu--option" data-theme-menu-trigger type="button" aria-controls="theme-options" aria-expanded="false">
                <span class="profile-menu--option-label" data-en="Theme">Theme</span><span>›</span>
              </button>
              <div class="profile-menu--submenu" id="theme-options" hidden>
                <button class="profile-menu--option" type="button" data-theme-choice="dark--purple--gold" aria-pressed="false"><span class="profile-menu--option-label" data-en="Dark Purple & Gold">Dark Purple & Gold</span><span aria-hidden="true" hidden>✓</span></button>
                <button class="profile-menu--option" type="button" data-theme-choice="dark--blue--white" aria-pressed="false"><span class="profile-menu--option-label" data-en="Dark Blue & White">Dark Blue & White</span><span aria-hidden="true" hidden>✓</span></button>
                <button class="profile-menu--option" type="button" data-theme-choice="dark--violet--gold" aria-pressed="false"><span class="profile-menu--option-label" data-en="Dark Violet & Gold">Dark Violet & Gold</span><span aria-hidden="true" hidden>✓</span></button>
                <button class="profile-menu--option" type="button" data-theme-choice="light--white--red" aria-pressed="false"><span class="profile-menu--option-label" data-en="Light White & Red">Light White & Red</span><span aria-hidden="true" hidden>✓</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
