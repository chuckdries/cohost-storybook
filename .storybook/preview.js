export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  // options: {
  //   showPanel: false,
  // },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    // Set the initial theme
    current: 'dark'
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
