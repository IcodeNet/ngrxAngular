import {Action} from '@ngrx/store';
import {ClockActions} from './../actions';


export type ClockState = Date;


const initialState: Date = new Date();

export default function clockReducer(state: Date = initialState, action: Action): Date {

  const date = new Date(state.getTime());

  switch (action.type) {
    case ClockActions.UPDATE_SECONDS:
      date.setSeconds(date.getSeconds() + action.payload);
      return date;
    case ClockActions.UPDATE_HOURS:
      date.setHours(date.getHours() + action.payload);
      return date;
    default:

  }

  return state;

}


