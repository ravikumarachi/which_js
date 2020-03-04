exports.config = {
    runner: 'local',
    path: '/',
    specs: ['./features/*.feature', ],
    exclude: [
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost:8080',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: [ 'spec'],
    reporterOptions: {
        
    },
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./features/stepdefinitions/**/*.js'], 
        format: ['pretty'], 
        colors: true, 
        tagExpression: '', 
        timeout: 60000, 
    },
   
    afterFeature: function (uri, feature, scenarios) {
        // browser.end().call(done);
    },
    // before: function() {
        /**
         * Setup the Chai assertion framework
         */
     
    // }
   
}