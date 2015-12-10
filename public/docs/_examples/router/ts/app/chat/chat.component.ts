// #docregion
import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ChatInitComponent}   from './chat-init.component';
import {ChatDetailComponent} from './chat-detail.component';

import {ChatService} from './chat.service';

@Component({
  template:  `
    <div class="chat">
      <h2>Support Chat <span class="close">X</span></h2>
      <div class="chat-content"><router-outlet></router-outlet></div>
    </div>
  `,
  directives: [RouterOutlet],
  providers: [ChatService]
})
@RouteConfig([
  { path: '/',        name: 'Chat',       component: ChatInitComponent, useAsDefault: true },
  { path: '/details', name: 'ChatDetail', component: ChatDetailComponent }
])
export class ChatComponent { }
