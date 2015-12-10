System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Message, ChatService, replies, messages, chatPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Message = (function () {
                function Message(content, author) {
                    this.content = content;
                    this.author = author;
                }
                return Message;
            })();
            exports_1("Message", Message);
            ChatService = (function () {
                function ChatService() {
                }
                ChatService.prototype.getChat = function () { return chatPromise; };
                ChatService.prototype.addMessage = function (content, author) {
                    if (content) {
                        var message = new Message(content, author);
                        chatPromise.then(function (messages) { return messages.push(message); });
                    }
                };
                ChatService.prototype.agentReply = function () {
                    var index = Math.floor(Math.random() * replies.length);
                    this.addMessage(replies[index], 'Agent');
                };
                ChatService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ChatService);
                return ChatService;
            })();
            exports_1("ChatService", ChatService);
            replies = [
                'Interesting, can you tell me more?',
                'I\'m sorry to hear that, how can I help?',
                'We hear that a lot. What happened next?',
                'That does sound like a crisis, would you like to submit a new crisis?',
                'How would you like me to help?',
                'What can I do to best serve you?'
            ];
            messages = [
                new Message('Hello, how can I help you?', 'Agent')
            ];
            chatPromise = Promise.resolve(messages);
        }
    }
});
//# sourceMappingURL=chat.service.js.map