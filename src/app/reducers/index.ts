import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
//import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';


import clockReducer, * as fromClock from './clock.reducer';

export interface AppState {
   clock: fromClock.ClockState;
};

export default compose(combineReducers)({
    Clock: clockReducer
});
