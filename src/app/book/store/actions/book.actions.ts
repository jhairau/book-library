import { Action } from '@ngrx/store';
import {Book} from '../../book';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  AddBook = '[Book] Add'
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class AddBook implements Action {
  readonly type = BookActionTypes.AddBook;

  constructor(public payload: Book) {}
}

export type BookActions = LoadBooks | AddBook;
