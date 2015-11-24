import {RouteDefinition} from 'angular2/router';

import {HeroJobBoard as AssignJob}          from './assign-job/hero-job-board';
import {HeroJobBoard as ComponentHierarchy} from './component-hierarchy/hero-job-board';
import {HeroJobBoard as InviteHeroes}       from './invite-heroes/hero-job-board';
import {HeroJobBoard as JobService}         from './job-service/hero-job-board';
import {HeroJobApp   as MessageBoard}       from './message-board/app';
import {HeroJobBoard as MessageBus}         from './message-bus/hero-job-board';
import {HeroJobBoard as PreventStealth}     from './prevent-stealth/hero-job-board';
import {HeroJobBoard as SendJob}            from './send-job-request/hero-job-board';
import {HeroJobBoard as StealJob}           from './steal-job/hero-job-board';
import {HeroJobBoard as TakeJobBad}         from './take-job-antipattern/hero-job-board';
import {HeroJobBoard as TakeJobEvent}       from './take-job-event/hero-job-board';

export const ROUTES:RouteDefinition[] = [
  {path: '/assign-job',          name: 'Assign Job',          component: AssignJob},
  {path: '/component-hierarchy', name: 'Component Hierarchy', component: ComponentHierarchy},
  {path: '/invite-heroes',       name: 'Invite Heroes',       component: InviteHeroes},
  {path: '/job-service',         name: 'Job Service',         component: JobService},
  {path: '/message-board',       name: 'Message Board',       component: MessageBoard},
  {path: '/message-bus',         name: 'Message Bus',         component: MessageBus},
  {path: '/prevent-stealth',     name: 'Prevent Stealth',     component: PreventStealth},
  {path: '/send-job',            name: 'Send Job',            component: SendJob},
  {path: '/steal-job',           name: 'Steal Job',           component: StealJob},
  {path: '/take-job-bad',        name: 'Take Job (Bad)',      component: TakeJobBad},
  {path: '/take-job-event',      name: 'Take Job Event',      component: TakeJobEvent},
  {path: '/',  redirectTo: '/assign-job'}
];

// Build router links array from route names
// Ex: <a [router-link]="['Assign Job']">Assign Job</a>
export const LINKS = ROUTES.map((r:RouteDefinition) =>
  r.name ? `<a [router-link]="['${r.name}']">${r.name}</a>` : '');