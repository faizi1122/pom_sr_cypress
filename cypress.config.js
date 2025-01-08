const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440, // Set width
    viewportHeight: 900, // Set height
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://test-alpha.strikeready.app'
  },
});


