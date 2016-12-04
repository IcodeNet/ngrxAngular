import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
import {Store, Action} from "@ngrx/store";
import {AppState} from './reducers';

import {ClockActions} from './actions';

@Component({
  selector: 'myapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp works!';

  // this is the object that is used as state
  clock;

  // change producer
  click$ = new Subject();


  constructor(private store: Store<AppState>) {

    this.clock = this.store.select('Clock');

    Observable.merge(
      this.click$.mapTo({type: ClockActions.UPDATE_HOURS, payload: 4}),
      Observable.interval(1000).mapTo({type: ClockActions.UPDATE_SECONDS, payload: 1})
    )
      .subscribe((action: Action) => {
        store.dispatch(action)
      });

  }

  ngOnInit() {

  }

}
