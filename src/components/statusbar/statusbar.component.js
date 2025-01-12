class Statusbar extends Component {
  externalRefs = {};

  refs = {
    fastlink: ".fastlink",
  };

  constructor() {
    super();
    this.setDependencies();
  }

  setDependencies() {
    this.externalRefs = {}; // 此处可以清空，因为其他引用已移除
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
      }

      .widgets {
          right: 0;
          margin: auto;
          height: 32px;
          color: #fff;
          font-size: 12px;
      }

      .widgets:hover .edit {
          margin: 0;
      }

      .widget {
          position: relative;
          height: 100%;
          padding: 0 1em;
      }

      .widget:first-child {
          padding-left: 2em;
      }

      .widget:last-child {
          padding-right: 2em;
      }

      .widget:hover {
          cursor: pointer;
          background: rgba(255, 255, 255, .05);
      }

      .fastlink {
          border: 0;
          background: #181825;
          color: #a6e3a1;
          cursor: pointer;
          border-radius: 5px 15px 15px 5px;
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
            <cols>
                <button class="+ fastlink">
                  <img class="fastlink-icon" src="src/img/anime.svg"/>
                </button>
                <div class="+ widgets col-end">
                    <current-time class="+ widget"></current-time>
                    <weather-forecast class="+ widget weather"></weather-forecast>
                </div>
            </cols>
        </div>`;
  }

  setEvents() {
    // 保留 fastlink 的点击事件
    this.refs.fastlink.onclick = () => {
      console.log(CONFIG.fastlink);
      if (CONFIG.config.fastlink) {
        window.location.href = CONFIG.config.fastlink;
      }
    };
  }

  connectedCallback() {
    this.render().then(() => {
      this.setEvents(); // 仅绑定 fastlink 的事件
    });
  }
}
