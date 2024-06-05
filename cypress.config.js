
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  projectId: "c68uvt",
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  
  reporterOptions: {
    charts: true,
    ignoreVideos:false,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite:false,
    json: false,
    html:true,
    code:false,
    timestamp:"mmddyyyy_HHMMss",
   
  },
  
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 100000,
  timestamp:"mmddyyyy_HHMMss",
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0
  },
  "env": {
    "baseurl":"https://mcstaging.avenederm.com/"
 },
  //"pageLoadTimeout" ; 70000,
  /*env: {
    faker: "cypress/support/e2e.js",
  },*/
  e2e: {
    
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    
    /*setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },*/
    
    //specPattern: 'cypress/integration/examples/BDD/*.feature'
    //specPattern: "cypress/b2b/**/*.{js,jsx,ts,tsx,feature}"
    //specPattern: 'cypress/Integration/examples/*.js'
      //"chromeWebSecurity": false,
      //"defaultCommandTimeout": 10000
    
   
  },
  
});
