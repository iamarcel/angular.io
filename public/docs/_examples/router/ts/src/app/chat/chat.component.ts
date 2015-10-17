// #docregion
import {Component} from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ROUTES} from './routes';

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
@RouteConfig(ROUTES)
export class ChatComponent { }
