module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    }, // "@storybook/addon-interactions",
    "@storybook/addon-storysource",
    // "@storybook/addon-mdx-gfm",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  features: {
    storyStoreV7: true,
  },

  async viteFinal(config, { configType }) {
    if (configType === "PRODUCTION") {
      return { ...config, base: "./" };
    }
    return config;
  },

  docs: {
    autodocs: true,
  },
};
