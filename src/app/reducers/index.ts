import { isDevMode } from '@angular/core';
import { counterReducer, CounterState } from './counter';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';


export interface State {
counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
