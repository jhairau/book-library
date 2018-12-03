import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import * as uuid from 'uuid/v4';
import {AddBook} from '../store/actions/book.actions';
import {Book} from '../book';

@Component({
  selector: 'app-book-new-page',
  templateUrl: './book-new-page.component.html',
  styleUrls: ['./book-new-page.component.scss']
})
export class BookNewPageComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store<any>) {
    this.buildForm();
  }

  buildForm() {
    // Note: we are using empty string as the defaults. This is handy in the template when we want to do length
    this.form = new FormGroup(
      {
        book: new FormControl()
      },
      {
        updateOn: 'change' // this is the default. This comment is to let other devs know you can change it
      }
    );
  }

  ngOnInit() {

  }

  addBook() {
    const bookValues = this.form.value.book;
    const book: Book = {
      id: uuid(),
      title: bookValues.title,
      category: bookValues.category,
      description: bookValues.description,
    };

    this.store.dispatch(new AddBook(book));
    /*
    optimistic UI
    we are going to clear the form and assume that the input went well. We could listen to effects to update the ui with an error
    Similar to Messenger and SMS on iPhone
     */
    this.form.reset({
      book: {
        title: '',
        category: '',
        description: ''
      }
    });
  }

}
