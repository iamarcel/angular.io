// #docregion
import {ChatInitComponent}   from './chat-init.component';
import {ChatDetailComponent} from './chat-detail.component';

export const ROUTE_NAMES = {
  chat: 'Chat',
  chatDetail: 'ChatDetail'
}
export const ROUTES = [
  { path: '/',        name: ROUTE_NAMES.chat,       component: ChatInitComponent },
  { path: '/details', name: ROUTE_NAMES.chatDetail, component: ChatDetailComponent }
];
