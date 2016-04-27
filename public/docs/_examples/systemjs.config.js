/**
 * System configuration and launch for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

// Use global packagePath if defined
var pkgPath =  global.packagePath || 'node_modules/'; // path to packages
System.config({
  map: {
    'app':                        'app', // 'dist',
    'rxjs':                       pkgPath + 'rxjs',
    '@angular':                   pkgPath + '@angular',
    'angular2-in-memory-web-api': pkgPath + 'angular2-in-memory-web-api'
  },
  packages: {
    'app':                               { main: 'main.js',  defaultExtension: 'js' },

    '@angular/common':                   { main: 'index.js', defaultExtension: 'js' },
    '@angular/compiler':                 { main: 'index.js', defaultExtension: 'js' },
    '@angular/core':                     { main: 'index.js', defaultExtension: 'js' },
    '@angular/http':                     { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser':         { main: 'index.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
    '@angular/router':                   { main: 'index.js', defaultExtension: 'js' },
    '@angular/testing':                  { main: 'index.js', defaultExtension: 'js' },
    '@angular/upgrade':                  { main: 'index.js', defaultExtension: 'js' },
    'rxjs':                              { defaultExtension: 'js' },

    'angular2-in-memory-web-api':        { defaultExtension: 'js' },
  }
});


})(this);
