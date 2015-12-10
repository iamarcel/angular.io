/* Second version */
// For Milestone #2
// Also includes digression on HashPathStrategy (not used in the final app)
// #docplaster
System.register(['angular2/platform/browser', 'angular2/router', './heroes/hero.service', 'angular2/core', './app.component.2'], function(exports_1) {
    var browser_1, router_1, hero_service_1, core_1, router_2, app_component_2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_component_2_1_1) {
                app_component_2_1 = app_component_2_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_2_1.AppComponent, [
                // #docregion hash-strategy
                core_1.provide(router_2.LocationStrategy, { useClass: router_2.HashLocationStrategy }),
                // #enddocregion hash-strategy
                // #docregion v2
                hero_service_1.HeroService,
                // #docregion hash-strategy
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
// #enddocregion hash-strategy
// #enddocregion v2
//# sourceMappingURL=boot.2.js.map