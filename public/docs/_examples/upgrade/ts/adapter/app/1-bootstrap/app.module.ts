declare var angular:any;

angular.module('heroApp', [])
  .controller('MainCtrl', function() {
    this.message = 'Hello world'
  });

// #docregion bootstrap
angular.bootstrap(document.body, ['heroApp'], {strictDi: true});
// #enddocregion bootstrap
