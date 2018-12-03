import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from '../../environments/environment';
import {BookState} from '../book/store/reducers/book.reducer';

// Stores the state in the user local storage
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: ['book'], // which features to store, we may not want to store all slices of stare
    rehydrate: true // on reload enrich the redux state
  })(reducer);
}

export interface State {
  book: BookState;
}

export const reducers: ActionReducerMap<State> = {
book: null
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
