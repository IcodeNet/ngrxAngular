import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import Clock = jasmine.Clock;

@Injectable()
export class ClockActions {
  static UPDATE_SECONDS = '[Clock] Update Seconds';

  updateSeconds(): Action {
    return {
      type: ClockActions.UPDATE_SECONDS
    };
  }

  static UPDATE_HOURS = '[Clock] Update Hours';

  updateHours(): Action {
    return {
      type : ClockActions.UPDATE_HOURS
    };
  }
}
