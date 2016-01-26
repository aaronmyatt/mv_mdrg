exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "localhost:3000",

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': ['--disable-web-security']
      }
    },

    specs: ['./spec/e2e/**/*.js'],
    suites: {
      index: "./spec/e2e/index.spec.js"
    },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    },
    allScriptsTimeout: 20000,
    onPrepare: function(){
        browser.driver.manage().window().maximize();
        return browser.driver.get('http://localhost:3000');
    }

};
