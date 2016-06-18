// #docregion
import { bootstrap }                            from '@angular/platform-browser-dynamic';
import { provideForms, disableDeprecatedForms } from '@angular/forms';

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
])
.catch((err: any) => console.error(err));
