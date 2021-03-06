import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books$: Observable<Book[]>;
}
