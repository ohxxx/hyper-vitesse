const dark = {
  black: '#393a34',
  red: '#cb7676',
  green: '#4d9375',
  yellow: '#e6cc77',
  blue: '#6394bf',
  magenta: '#d9739f',
  cyan: '#5eaab5',
  white: '#cfcbbf',
  lightBlack: '#777777',
  lightRed: '#cb7676',
  lightGreen: '#4d9375',
  lightYellow: '#e6cc77',
  lightBlue: '#6394bf',
  lightMagenta: '#d9739f',
  lightCyan: '#5eaab5',
  lightWhite: '#ffffff',

  backgroundColor: '#121212',
  foregroundColor: '#cfcbbf',
  cursorColor: 'rgba(255,255,255,0.5)',
  selectionColor: '#eeeeee15',
  tabTextActiveColor: '#181818'
}

const light = {
  black: '#121212',
  red: '#ab5959',
  green: '#1e754f',
  yellow: '#bda437',
  blue: '#296aa3',
  magenta: '#a13865',
  cyan: '#2993a3',
  white: '#cfcbbf',
  lightBlack: '#aaaaaa',
  lightRed: '#ab5959',
  lightGreen: '#1e754f',
  lightYellow: '#bda437',
  lightBlue: '#296aa3',
  lightMagenta: '#a13865',
  lightCyan: '#2993a3',
  lightWhite: '#dddddd',

  backgroundColor: '#ffffff',
  foregroundColor: '#393a34',
  cursorColor: 'rgba(0,0,0,0.5)',
  selectionColor: '#22222215',
  tabTextActiveColor: '#f7f7f7'
}

const variants = {
  "vitesse-dark": dark,
  'vitesse-dark-soft': {
    ...dark,
    backgroundColor: '#222222',
    tabTextActiveColor: '#292929'
  },
  "vitesse-light": light,
  'vitesse-light-soft': {
    ...light,
    backgroundColor: '#f1f0e9',
    tabTextActiveColor: '#e7e5db'
  }
}

exports.decorateConfig = (config) => {
  const variant =
    (config.theme &&
      variants.hasOwnProperty(config.theme.variant) &&
      config.theme.variant) ||
    "vitesse-dark";
  const palette = { ...variants[variant] };

  if (
    config.theme &&
    config.theme.hasOwnProperty(variant) &&
    typeof config.theme[variant] === "object"
  ) {
    Object.assign(palette, config.theme[variant]);
  }
  const colors = { ...palette };

  return Object.assign({}, config, {
    fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 12,
    backgroundColor: palette.backgroundColor,
    foregroundColor: palette.foregroundColor,
    cursorColor: palette.cursorColor,
    selectionColor: palette.selectionColor,
    borderColor: palette.backgroundColor,
    minimal: false,
    colors,
    css: `
      .hyper_main {
        border: none !important;
      }
      .tabs_borderShim {
        border-color: transparent !important;
      }
      .tab_tab {
        border: 0;
      }
      .tabs_title {
        color: ${palette.foregroundColor} !important;
      }
      .tab_textActive {
        background: ${palette.tabTextActiveColor} !important;
        color: ${palette.foregroundColor} !important;
        font-size: 12px;
        border-radius: 6px;
      }
      .tab_icon {
        color: ${palette.foregroundColor};
      }
      .search-box,.search-button {
        background-color: ${palette.tabTextActiveColor} !important;
        color: ${palette.foregroundColor} !important;
        font-size: 12px;
      }
      .search-box {
        padding: 7px !important;
      }
      .search-button {
        height: 28px !important;
      }
      ${config.css}
    `
  });
};