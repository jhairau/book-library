import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectAll, selectTotal} from '../store/reducers/book.reducer';
import {Observable} from 'rxjs';
import {Book} from '../book';

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent {

  total$: Observable<number>;
  books$: Observable<Book[]>;

  constructor(private store: Store<any>) {
    this.books$ = this.store.pipe(select(selectAll));
    this.total$ = this.store.pipe(select(selectTotal));
  }
}
