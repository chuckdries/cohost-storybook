module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    // "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-storysource",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
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
};
