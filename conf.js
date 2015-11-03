exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['./spec/e2e/**/*.js'],

    jasmineNodeOpts: {
        showColors: true
    }
};
