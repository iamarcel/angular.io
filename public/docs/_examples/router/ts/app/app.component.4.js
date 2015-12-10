System.register(['angular2/core', 'angular2/router', './chat/chat.component', './crisis-center/crisis-center.component', './heroes/hero-list.component', './heroes/hero-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, chat_component_1, crisis_center_component_1, hero_list_component_1, hero_detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_component_1_1) {
                chat_component_1 = chat_component_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            }],
        execute: function() {
            // #enddocregion chat-import
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        // #docregion chat-outlet
                        template: "\n    <h1>Component Router</h1>\n    <a [router-link]=\"['CrisisCenter']\">Crisis Center</a>\n    <a [router-link]=\"['Heroes']\">Heroes</a>\n    <a [router-link]=\"['/', ['chat'] ]\">Chat</a>\n    <router-outlet></router-outlet>\n    <router-outlet name=\"chat\"></router-outlet>\n  ",
                        // #enddocregion chat-outlet
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/chat/...', name: 'Chat', component: chat_component_1.ChatComponent },
                        { path: '/crisis-center/...', name: 'CrisisCenter', component: crisis_center_component_1.CrisisCenterComponent, useAsDefault: true },
                        { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
                        { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.4.js.map