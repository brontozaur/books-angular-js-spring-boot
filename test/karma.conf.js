module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'node_modules/angular-ui-grid/ui-grid.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/*.js',
      'app/components/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};