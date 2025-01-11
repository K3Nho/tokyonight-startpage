let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  // tabsBackground: {
  //   type: "image", // Can be "color" or "image"
  //   value: "url(src/img/test.jpg)", // Default background image
  //   size: "cover", // Optional: control background-size
  //   repeat: "no-repeat", // Optional: control background-repeat
  //   position: "center", // Optional: control background-position
  // },
  
    tabsBackground: {
    type: "color", // Can be "color" or "image"
    value: "#181825", // Default background image
  },

  temperature: {
    location: "Guangzhou",
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: "#bb9af7", // Updated to a soft purple
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "http://192.168.1.1:8080",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Hello",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
        name: "Media",
        links: [
          {
            name: "bilibili",
            url: "https://www.bilibili.com",
            icon: "brand-bilibili",
            icon_color: "#7dcfff",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#f7768e",
          },
          {
            name: "ns",
            url: "https://www.nodeseek.com/?sortBy=postTime",
            icon: "server-2",
            icon_color: "#73daca",
          },
          {
            name: "linuxdo",
            url: "https://linux.do/new",
            icon: "brand-debian",
            icon_color: "#ff9e64",
          },
          {
            name: "v2ex",
            url: "https://v2ex.com/?tab=hot",
            icon: "code",
            icon_color: "#7aa2f7",
          },
          {
            name: "x",
            url: "https://x.com",
            icon: "brand-x",
            icon_color: "#bb9af7",
          },
        ],
      },
          {
            name: "Workspace",
            links: [
          {
            name: "github",
            url: "https://github.com/",
            icon: "brand-github",
            icon_color: "#7dcfff",
          },
          {
            name: "gmail",
            url: "https://mail.google.com/",
            icon: "brand-gmail",
            icon_color: "#f7768e",
          },
          {
            name: "qmail",
            url: "https://mail.qq.com",
            icon: "mail",
            icon_color: "#73daca",
          },
          {
            name: "gpt",
            url: "https://chat.lmsys.org/?leaderboard",
            icon: "brand-twitch",
            icon_color: "#7aa2f7",
          },
        ],
      },
          {
            name: "Crypto",
            links: [
          {
            name: "coinmarketcap",
            url: "https://coinmarketcap.com/zh",
            icon: "brand-coinbase",
            icon_color: "#7dcfff",
          },
          {
            name: "binance",
            url: "https://www.binance.com/zh-CN/my/wallet/account/overview",
            icon: "brand-binance",
            icon_color: "#ff9e64",
          },
          {
            name: "okx",
            url: "https://www.okx.com/zh-hans/balance/funding",
            icon: "currency-ethereum",
            icon_color: "#bb9af7",
          },
          ],
        },
      ],
    },        
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();

CONFIG.setBackground(CONFIG.config.tabsBackground);


// // Merge saved config with default config, preferring saved values
// const CONFIG = new Config(Object.assign({}, default_config, saved_config));

// // Load Tabler icons CSS
// (function() {
//   if (!CONFIG.config.localIcons) {
//     const css = document.createElement('link');
//     css.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css';
//     css.rel = 'stylesheet';
//     css.type = 'text/css';
//     document.head.appendChild(css);
//   }
// })();

// // Save config to localStorage whenever it changes
// CONFIG.onChange = function(newConfig) {
//   localStorage.setItem("CONFIG", JSON.stringify(newConfig));
// };
