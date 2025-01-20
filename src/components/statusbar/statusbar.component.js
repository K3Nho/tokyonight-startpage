class Statusbar extends Component {
  constructor() {
    super();
  }

  imports() {
    return [this.resources.icons.material, this.resources.libs.awoo];
  }

  style() {
    return `
      *:not(:defined) { display: none; }

      #tabs {
          width: 100%;
          height: 100%;
          position: absolute;
      }

      .widgets {
          position: absolute;
          right: 0;
          margin: auto;
          height: 32px;
          color: #fff;
          font-size: 12px;
      }

      .widget {
          height: 100%;
          padding: 0 1em;
          position: relative;
          cursor: pointer;
      }

      .widget:first-child { padding-left: 2em; }
      .widget:last-child { padding-right: 2em; }

      .widget:hover {
          background: rgba(255, 255, 255, .05);
      }

      .widget:not(:first-child)::before {
          content: '';
          position: absolute;
          left: 0;
          height: calc(100% - 15px);
          width: 1px;
          background: rgba(255, 255, 255, 0.1);
      }

      .fastlink {
          border: 0;
          background: #181825;
          color: #a6e3a1;
          cursor: pointer;
          border-radius: 5px 15px 15px 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5em;
      }

      .fastlink:hover {
          filter: brightness(1.2);
      }

      .fastlink-icon {
          width: 70%;
      }
    `;
  }

  template() {
    return `
      <div id="tabs">
        <button class="fastlink">
          <img class="fastlink-icon" src="src/img/logo.png" />
        </button>
        <div class="widgets">
          <current-time class="widget"></current-time>
          <weather-forecast class="widget"></weather-forecast>
        </div>
      </div>`;
  }

  setEvents() {
    document.querySelector(".fastlink").onclick = () => {
      if (CONFIG?.config?.fastlink) {
        window.location.href = CONFIG.config.fastlink;
      }
    };
  }

  connectedCallback() {
    this.render().then(() => this.setEvents());
  }
}
