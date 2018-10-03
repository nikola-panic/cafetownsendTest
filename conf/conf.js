exports.config = {

    seleniumServerJar: './driver/selenium-server-standalone-3.12.0.jar',
    FirefoxDriver: './driver/geckodriver.exe',
    framework: 'jasmine2',

    // Time out for all scripts
    allScriptsTimeout: 999999999,
    getPageTimeout: 999999999,

    // e2e tests location
    specs: ['../test/cafetown_spec02.js'],

    capabilities: {
        browserName: 'firefox',
        marionette: true
    },
    directConnect: false,

    localSeleniumStandaloneOpts: {
        // For firefox geckodriver full path need to be provided
        jvmArgs: ['-Dwebdriver.gecko.driver=D:/projects/protractorTraining/cafetownsendTest/conf/driver/geckodriver.exe']
    },

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        require('protractor-uisref-locator')(protractor);
        var request = require('request');
        protractor.request = request;
        protractor.vpEnableDebug = false;
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
                showConfiguration: true,
                // change the destionation of storing screenshots
                dest: './reports/',
                filename: 'testReport.html'
            })
        );
    },
    
    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: false,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 999999999
    },

    // Variables used in tests
    params: {

        url: 'http://cafetownsend-angular-rails.herokuapp.com/login',

        falseusername: 'falseusername',
        falsepassword: 'falsepassword',
        errorMsgText: 'Invalid username or password!',

        username: 'Luke',
        password: 'Skywalker',

        firstname: 'Nick',
        lastname: 'Pan',
        email: 'demo@demo',

        firstnameEdited: 'Nicko',
        lastnameEdited: 'Pana',
        emailEdited: 'demo2@demo2',

        employee: 'Nick Pan',
        employeeEdited: 'Nicko Pana'

    },

}