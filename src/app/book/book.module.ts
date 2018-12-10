import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromBook from './store/reducers/book.reducer';
import {BookNewPageComponent} from './book-new-page/book-new-page.component';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookListPageComponent} from './book-list-page/book-list-page.component';
import {BookNewComponent} from './book-new/book-new.component';
import {BookListComponent} from './book-list/book-list.component';

@NgModule({
  declarations: [BookNewPageComponent, BookListPageComponent, BookNewComponent, BookListComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature('book', fromBook.reducer)
  ]
})
export class BookModule {
}
