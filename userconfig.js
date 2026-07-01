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
  fastlink: "",
  openLastVisitedTab: true,
  tabs: [
    {
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
        name: "Media",
        links: [
          {
            name: "𝕩",
            url: "https://x.com",
            icon: "brand-x",
            icon_color: "#7aa2f7",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/feed/subscriptions",
            icon: "brand-youtube-filled",
            icon_color: "#f7768e",
          },
          {
            name: "bilibili",
            url: "https://bilibili.com",
            icon: "brand-bilibili",
            icon_color: "#7dcfff",
          },
          {
            name: "ns",
            url: "https://www.nodeseek.com/?sortBy=postTime",
            icon: "brand-debian",
            icon_color: "#bb9af7",
          },
        ],
      },
          {
            name: "Tools",
            links: [
          {
            name: "github",
            url: "https://github.com",
            icon: "brand-github",
            icon_color: "#7aa2f7",
          },
          {
            name: "gmail",
            url: "https://mail.google.com",
            icon: "brand-gmail",
            icon_color: "#f7768e",
          },
          {
            name: "goofish",
            url: "https://www.goofish.com",
            icon: "fish",
            icon_color: "#e0af68",
          },
          {
            name: "gemini",
            url: "https://gemini.google.com/app",
            icon: "brand-google",
            icon_color: "#bb9af7",
          },
        ],
      },
          {
            name: "$",
            links: [
          {
            name: "schwab",
            url: "https://trade.thinkorswim.com/charts",
            icon: "brand-cashapp",
            icon_color: "#7aa2f7",
          },
          {
            name: "hyperliquid",
            url: "https://app.hyperliquid.xyz/trade",
            icon: "droplet",
            icon_color: "#7dcfff",
          },
          {
            name: "backpack",
            url: "https://backpack.exchange/stocks",
            icon: "backpack",
            icon_color: "#f7768e",
          },
          {
            name: "binance",
            url: "https://www.binance.com/zh-CN/my/wallet/account/overview",
            icon: "brand-binance",
            icon_color: "#e0af68",
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
