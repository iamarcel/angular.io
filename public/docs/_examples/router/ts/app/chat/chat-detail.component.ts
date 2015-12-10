// #docregion
import {Component, OnInit} from 'angular2/core';
import {ChatService, Message} from './chat.service';

@Component({
  template: `
    <div class="chat-messages">
      <p *ng-for="#message of messages">
        <b>{{message.author}}</b>: {{message.content}}
      </p>
    </div>
    <div class="chat-input">
      <input [(ng-model)]="message"
             (keyup.enter)="send()"
             placeholder="send a message"/>
    </div>
  `
})
export class ChatDetailComponent implements OnInit {

  messages: Message[]
  message: string

  constructor(private _service: ChatService) { }

  ngOnInit() {
    this._service.getChat()
        .then(messages => this.messages = messages);
  };

  send() {
    if (this.message) {
      this._service.addMessage(this.message, 'You');
      this.message = '';
      this.scrollToBottom();
      this.reply();
    }
  }

  reply() {
    setTimeout(() => {
      this._service.agentReply();
      this.scrollToBottom();
    }, Math.random() * 2000);
  }

  scrollToBottom() {
    setTimeout(() => {
      // TODO: Refactor! We never touch DOM in a production component.
      // Needs to be a directive, and timeout is required right now
      var objDiv = document.getElementsByClassName('chat-messages')[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 10);
  }
}
