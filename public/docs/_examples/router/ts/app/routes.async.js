System.register(['./crisis-center/crisis-center.component', './heroes/hero-list.component', './heroes/hero-detail.component'], function(exports_1) {
    var crisis_center_component_1, hero_list_component_1, hero_detail_component_1;
    var ROUTE_NAMES, ROUTES;
    function insertChatAsyncRoute() {
        var aroute = {
            path: '/chat/...',
            name: 'Chat',
            loader: function () { return LoadComponentAsync('Chat', 'app/chat/chat.component'); }
        };
        ROUTES.push(aroute);
        function LoadComponentAsync(name, path) {
            return window['System'].import(path).then(function (c) { return c[name]; });
        }
    }
    return {
        setters:[
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
            exports_1("ROUTE_NAMES", ROUTE_NAMES = {
                chat: 'Chat',
                crisisCenter: 'CrisisCenter',
                heroes: 'Heroes',
                heroDetail: 'HeroDetail'
            });
            exports_1("ROUTES", ROUTES = [
                //{path: '/chat/...',          name: 'Chat',         component: ChatComponent},
                { path: '/crisis-center/...', name: 'CrisisCenter', component: crisis_center_component_1.CrisisCenterComponent, useAsDefault: true },
                { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
                { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent }
            ]);
            insertChatAsyncRoute();
        }
    }
});
//# sourceMappingURL=routes.async.js.map