// #docregion
import {Injectable} from 'angular2/angular2';

export class Message {
  constructor(public content: string, public author: string) { }
}

@Injectable()
export class ChatService {
  getChat() { return chatPromise; }

  addMessage(content:string, author: string) {
    if (content) {
      let message = new Message(content, author);
      chatPromise.then(messages => messages.push(message));
    }
  }

  agentReply() {
    let index = Math.floor(Math.random() * replies.length);
    this.addMessage(replies[index], 'Agent');
  }
}

var replies = [
  'Interesting, can you tell me more?',
  'I\'m sorry to hear that, how can I help?',
  'We hear that a lot. What happened next?',
  'That does sound like a crisis, would you like to submit a new crisis?',
  'How would you like me to help?',
  'What can I do to best serve you?'
];

var messages = [
  new Message('Hello, how can I help you?', 'Agent')
];

var chatPromise = Promise.resolve(messages);
