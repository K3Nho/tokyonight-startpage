/* Changes the ulafter part and put margin top to make it to the center and also increaet the backgroun size to  */

class Links extends Component {
  constructor() {
    super();
  }

  static getIcon(link) {
    const defaultColor = "#1e1e2e";

    return link.icon
      ? `<i class="ti ti-${link.icon} link-icon"
            style="color: ${link.icon_color ?? defaultColor}"></i>`
      : "";
  }

  static getAll(tabName, tabs) {
    const { categories } = tabs.find((f) => f.name === tabName);

    return `
      ${categories
        .map(({ name, links }) => {
          return `
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
          </li>`;
        })
        .join("")}
    `;
  }
}

class Category extends Component {
  constructor() {
    super();
  }

  static getBackgroundStyle(url) {
    return `style="background-image: url(${url}); background-repeat: no-repeat;background-size: contain;"`;
  }

  static getAll(tabs) {
    return `
      ${tabs
        .map(({ name, background_url }, index) => {
          return `<ul class="${name}" ${Category.getBackgroundStyle(background_url)} ${index == 0 ? "active" : ""}>
            <div class="banner"></div>
            <div class="links">${Links.getAll(name, tabs)}</div>
          </ul>`;
        })
        .join("")}
    `;
  }
}

class Tabs extends Component {
  refs = {};

  constructor() {
    super();
    this.tabs = CONFIG.tabs;
  }

  imports() {
    return [
      this.resources.icons.material,
      this.resources.icons.tabler,
      this.resources.fonts.raleway,
      this.resources.libs.awoo,
    ];
  }

  style() {
    return `
      status-bar {
          bottom: -70px;
          height: 32px;
          background: #1e1e2e;
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, .25);
      }

      #panels, #panels ul,
      #panels .links {
          position: absolute;
      }

      .nav {
          color: #fff;
      }

      #panels {
          border-radius: 5px 0 0 5px;
          width: 90%;
          max-width: 1200px;
          height: 450px;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
          background: #1e1e2e;
          transition: all 0.3s ease;
      }

      #panels:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, .3);
      }

      .categories {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
          border-radius: 10px 0 0 10px;
      }

      .categories ul {
          --panelbg: transparent;
          --flavour: var(--accent);
          width: 100%;
          height: 107%;
          right: 100%;
          background: #1e1e2e url("../img/bg-1.gif") no-repeat left;
          background-size: cover;
          transition: all .6s;
          animation: zoomEffect 20s ease-in-out infinite;
          animation: scroll 5s ease-in-out infinite;
      }
      
      @keyframes scroll {
          50% {
              background-position-x: -20px;
          }
      }

      @keyframes zoomEffect {
          0%, 100% {
              background-size: 100% auto;
          }
          50% {
              background-size: 120% auto;
          }
      }

      .categories ul:nth-child(2) {
          --flavour: #fab387;
      }

      .categories ul:nth-child(3) {
          --flavour: #f38ba8;
      }

      .categories ul:nth-child(4) {
          --flavour: #94e2d5;
      }
      .categories ul:nth-child(5) {
          --flavour: #f5c2e7;
      }

      .categories ul .links {
          box-shadow: inset -1px 0 var(--flavour);
      }

      .categories ul[active] {
          right: 0;
          z-index: 1;
      }

.categories .links {
    right: 0;
    width: 70%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(29, 1, 59, 1) 0%,
        rgba(42, 38, 75, 1) 33%,
        rgba(72, 69, 163, 1) 66%,
        rgba(29, 1, 59, 1) 100%
    );
    background-size: 400% 400%;
    animation: flowingGradient 15s ease infinite;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(10px); /* For Safari support */
    padding: 5%;
    flex-wrap: wrap;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--flavour) #1e1e2e;
    transition: background 0.3s ease;
}

@keyframes flowingGradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

      .categories .links::-webkit-scrollbar {
          width: 6px;
      }

      .categories .links::-webkit-scrollbar-thumb {
          background-color: var(--flavour);
          border-radius: 3px;
      }

      .categories .links li {
          list-style: none;
      }

.categories ul .links a {
  color: #cdd6f4;
  text-decoration: none;
  font: 700 18px JetBrainsMono Nerd Font;
  src: url(../fonts/jetbrains-mono.ttf);
  transition: all .2s;
  display: inline-flex;
  align-items: center;
  padding: .4em .7em;
  background: rgba(24, 24, 37, 0.8);
  box-shadow: 0 4px rgba(24, 24, 37, 0.5), 0 5px 10px rgb(0 0 0 / 20%);
  border-radius: 2px;
  margin-bottom: .7em;
  backdrop-filter: blur(3px);
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

      .categories .link-info:not(:last-child) { margin-right: .5em; }

      .categories ul .links a:hover {
        transform: translate(0, 4px);
        box-shadow: 
          0 0 5px var(--flavour),
          0 0 10px var(--flavour),
          0 0 15px var(--flavour),
          0 0 20px var(--flavour);
        color: var(--flavour);
        text-shadow: 0 0 5px var(--flavour);
      }

      .categories ul::after {
          content: attr(class);
          position: absolute;
          display: flex;
          text-transform: uppercase;
          overflow-wrap: break-word;
          width: 25px;
          height: 250px;
          padding: 1em;
          margin: auto;
          margin-top: 40px;
          margin-bottom: 20px;
          border-radius: 10px;
          box-shadow: inset 0 0 0 2px var(--flavour);
          left: calc(15% - 42.5px);
          bottom: 0;
          top: 0;
          background: linear-gradient(to top, rgba(50, 48, 47, 0.9), transparent);
          color: var(--flavour);
          letter-spacing: 1px;
          font: 700 24px JetBrainsMono Nerd Font;
          src: url(../fonts/jetbrains-mono.ttf);
          text-align: center;
          flex-wrap: wrap;
          word-break: break-all;
          align-items: center;
          backdrop-filter: blur(3px);
          transition: all 0.3s ease;
      }

      .categories ul:hover::after {
          transform: scale(1.05);
          box-shadow: inset 0 0 0 2px var(--flavour), 0 0 10px var(--flavour);
      }

      .categories .links li:not(:last-child) {
          box-shadow: 0 1px 0 rgba(205, 214, 244, .25);
          padding: 0 0 .5em 0;
          margin-bottom: 1.5em;
      }

      .categories .links li h1 {
          color: #cdd6f4;
          opacity: 0.5;
          font-size: 13px;
          margin-bottom: 1em;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          font: 700 14px JetBrainsMono Nerd Font;
          src: url(../fonts/jetbrains-mono.ttf);
          transition: all 0.3s ease;
      }

      .categories .links li:hover h1 {
          opacity: 0.8;
          transform: translateX(5px);
      }

      .categories .link-icon {
          font-size: 27px;
          color: #cdd6f4;
          transition: all 0.3s ease;
      }

      .categories .link-icon + .link-name {
          margin-left: 10px;
      }

      .categories .links-wrapper {
          display: flex;
          flex-wrap: wrap;
      }

      .ti {
          animation: fadeInAnimation ease .5s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
          height: 27px;
          width: 27px;
      }

      @keyframes fadeInAnimation {
          0% {
              opacity: 0;
              transform: scale(0.8);
          }
          100% {
              opacity: 1;
              transform: scale(1);
          }
      }

.categories ul .links a:hover .link-icon {
  transform: rotate(5deg) scale(1.1);
  filter: drop-shadow(0 0 5px var(--flavour));
}
    `;
  }

  template() {
    return `
      <div id="links" class="-">
        <div id="panels">
          <div class="categories">
            ${Category.getAll(this.tabs)}
              <search-bar></search-bar>
              <config-tab></config-tab>
          </div>
          <status-bar class="!-"></status-bar>
        </div>
      </div>
    `;
  }
  
  connectedCallback() {
    this.render();
  }
}
