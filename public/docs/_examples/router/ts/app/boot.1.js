/* First version */
// #docplaster
System.register(['angular2/platform/browser', 'angular2/router', './app.component.1'], function(exports_1) {
    var browser_1, router_1, app_component_1_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1_1) {
                app_component_1_1 = app_component_1_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1_1.AppComponent, [
                // #docregion all
                router_1.ROUTER_PROVIDERS,
            ]);
        }
    }
});
// #enddocregion all 
//# sourceMappingURL=boot.1.js.map