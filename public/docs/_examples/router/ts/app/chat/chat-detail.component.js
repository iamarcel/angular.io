System.register(['angular2/core', './chat.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, chat_service_1;
    var ChatDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chat_service_1_1) {
                chat_service_1 = chat_service_1_1;
            }],
        execute: function() {
            ChatDetailComponent = (function () {
                function ChatDetailComponent(_service) {
                    this._service = _service;
                }
                ChatDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getChat()
                        .then(function (messages) { return _this.messages = messages; });
                };
                ;
                ChatDetailComponent.prototype.send = function () {
                    if (this.message) {
                        this._service.addMessage(this.message, 'You');
                        this.message = '';
                        this.scrollToBottom();
                        this.reply();
                    }
                };
                ChatDetailComponent.prototype.reply = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this._service.agentReply();
                        _this.scrollToBottom();
                    }, Math.random() * 2000);
                };
                ChatDetailComponent.prototype.scrollToBottom = function () {
                    setTimeout(function () {
                        // TODO: Refactor! We never touch DOM in a production component.
                        // Needs to be a directive, and timeout is required right now
                        var objDiv = document.getElementsByClassName('chat-messages')[0];
                        objDiv.scrollTop = objDiv.scrollHeight;
                    }, 10);
                };
                ChatDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div class=\"chat-messages\">\n      <p *ng-for=\"#message of messages\">\n        <b>{{message.author}}</b>: {{message.content}}\n      </p>\n    </div>\n    <div class=\"chat-input\">\n      <input [(ng-model)]=\"message\"\n             (keyup.enter)=\"send()\"\n             placeholder=\"send a message\"/>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [chat_service_1.ChatService])
                ], ChatDetailComponent);
                return ChatDetailComponent;
            })();
            exports_1("ChatDetailComponent", ChatDetailComponent);
        }
    }
});
//# sourceMappingURL=chat-detail.component.js.map