QUnit.config.autostart = false;

require.config({
  baseUrl: "../src",
  paths: {
    "lib": "../lib",
    "base": "../lib/base",
    "common": "../lib/common",
    "test": "../tests"
  }
});

require( ["tests/unit-tests"], function( testNames ) {
  require( testNames, function() {
    QUnit.start();
    var testModules = Array.prototype.slice.call( arguments );

    test( "tests modules are valid", function() {
      expect( testModules.length );
      testModules.forEach( function( testModule ) {
        ok( typeof testModule === "function", "test module is a function" );
      });
    });
    
    testModules.forEach( function( testModule ) {
      testModule();
    });
  });
});
