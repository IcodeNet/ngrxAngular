import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import reducer from './reducers';
import {StoreModule, provideStore, combineReducers, Store,} from '@ngrx/store';
import {useLogMonitor} from '@ngrx/store-log-monitor';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppComponent} from './app.component';



/*
StoreDevtoolsModule.instrumentStore({
  monitor: useLogMonitor({
    visible: true,
    position: 'right'
  })
})*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {
  }

}
