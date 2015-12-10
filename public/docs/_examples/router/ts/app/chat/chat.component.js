System.register(['angular2/core', 'angular2/router', './chat-init.component', './chat-detail.component', './chat.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, chat_init_component_1, chat_detail_component_1, chat_service_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (chat_init_component_1_1) {
                chat_init_component_1 = chat_init_component_1_1;
            },
            function (chat_detail_component_1_1) {
                chat_detail_component_1 = chat_detail_component_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent() {
                }
                ChatComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"chat\">\n      <h2>Support Chat <span class=\"close\">X</span></h2>\n      <div class=\"chat-content\"><router-outlet></router-outlet></div>\n    </div>\n  ",
                        directives: [router_1.RouterOutlet],
                        providers: [chat_service_1.ChatService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Chat', component: chat_init_component_1.ChatInitComponent, useAsDefault: true },
                        { path: '/details', name: 'ChatDetail', component: chat_detail_component_1.ChatDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ChatComponent);
                return ChatComponent;
            })();
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
//# sourceMappingURL=chat.component.js.map