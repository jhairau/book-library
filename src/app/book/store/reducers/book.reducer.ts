import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {BookActions, BookActionTypes} from '../actions/book.actions';
import {Book} from '../../book';

export interface BookState extends EntityState<Book> {
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();
export const initialState: BookState = adapter.getInitialState({});

export function reducer(state: BookState = initialState, action: BookActions): BookState {
  switch (action.type) {

    case BookActionTypes.AddBook:
      return adapter.upsertOne(action.payload, state);

    case BookActionTypes.LoadBooks:
      return state;

    default:
      return state;
  }
}


export const getBookState = createFeatureSelector<BookState>('book');

export const {
  selectAll,
  selectTotal,
} = adapter.getSelectors(getBookState);

