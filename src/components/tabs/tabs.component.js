class Links {
  static getIcon(link) {
    const defaultColor = "#1e1e2e";
    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon" style="color: ${link.icon_color || defaultColor}"></i>`
      : "";
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);
    return categories
      .map(({ name, links }) => `
        <li>
          <h1>${name}</h1>
          <div class="links-wrapper">
            ${links
              .map(
                (link, index) => `
                <div class="link-info" style="animation-delay: ${index * 0.1}s;">
                  <a href="${link.url}" target="_blank">
                    ${Links.getIcon(link)}
                    ${link.name ? `<p class="link-name">${link.name}</p>` : ""}
                  </a>
                </div>`
              )
              .join("")}
          </div>
        </li>`)
      .join("");
  }
}

class Category {
  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat; background-size: cover;"`;
  }

  static getAll(tabs) {
    return tabs
      .map(({ name, background_url }, index) => `
        <ul class="${name}" ${Category.getBackgroundStyle(background_url)} ${index === 0 ? "active" : ""}>
          <div class="banner"></div>
          <div class="links">${Links.getAll(name, tabs)}</div>
        </ul>`)
      .join("");
  }
}

class Tabs {
  constructor() {
    this.tabs = CONFIG.tabs;
  }

  style() {
    return `
      #panels {
        width: 90%;
        max-width: 1200px;
        height: 450px;
        margin: auto;
        background: #1e1e2e;
        border-radius: 5px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
        transition: all 0.3s ease;
      }

      #panels:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, .3);
      }

      .categories ul {
        width: 100%;
        height: 107%;
        background-size: cover;
        transition: all .6s;
        animation: zoomEffect 20s ease-in-out infinite, scroll 5s ease-in-out infinite;
      }

      @keyframes scroll {
        50% { background-position-x: -20px; }
      }

      @keyframes zoomEffect {
        0%, 100% { background-size: 100%; }
        50% { background-size: 120%; }
      }

      .categories ul[active] {
        right: 0;
        z-index: 1;
      }

      .categories .links {
        width: 70%;
        height: 100%;
        background: linear-gradient(135deg, rgba(29, 1, 59, 1) 0%, rgba(72, 69, 163, 1) 66%, rgba(29, 1, 59, 1) 100%);
        background-size: 400% 400%;
        animation: flowingGradient 15s ease infinite;
        padding: 5%;
        overflow-y: hidden;
        backdrop-filter: blur(50px);
        transition: background 0.3s ease;
      }

      @keyframes flowingGradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }

      .categories .links a {
        color: #cdd6f4;
        text-decoration: none;
        font: 700 18px JetBrainsMono Nerd Font;
        display: inline-flex;
        align-items: center;
        padding: 0.4em 0.7em;
        background: rgba(24, 24, 37, 0.8);
        box-shadow: 0 4px rgba(24, 24, 37, 0.5), 0 5px 10px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        margin-bottom: 0.7em;
        transition: all 0.2s;
      }

      .categories .links a:hover {
        transform: translateY(-4px);
        box-shadow: 0 0 10px var(--flavour), 0 0 20px var(--flavour);
        color: var(--flavour);
      }

      .categories .link-info {
        display: inline-flex;
        animation: fadeIn 0.5s ease-out forwards;
        opacity: 0;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .categories .links li h1 {
        color: #cdd6f4;
        opacity: 0.5;
        font-size: 13px;
        margin-bottom: 1em;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    `;
  }

  template() {
    return `
      <div id="links" class="-">
        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
          </div>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    this.render();
  }
}
