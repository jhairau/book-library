import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { BookActionTypes } from '../actions/book.actions';

@Injectable()
export class BookEffects {

  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(BookActionTypes.LoadBooks));

  constructor(private actions$: Actions) {}
}
