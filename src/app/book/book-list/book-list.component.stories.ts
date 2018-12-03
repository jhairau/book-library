import {moduleMetadata, storiesOf} from '@storybook/angular';
import {MaterialModule} from '../../material.module';
import {from, Observable} from 'rxjs';
import {Book} from '../book';
import {BookListComponent} from './book-list.component';

const book: Book = {
  id: 'random-string',
  title: 'Book 1',
  category: 'comedy',
  description: 'HERE is my description'
};

const bookMultiline: Book = {
  id: 'random-string2',
  title: 'Book 2',
  category: 'drama',
  description: `Description
with
line
break`
};

storiesOf('Book List', module)
  .addDecorator(
    moduleMetadata({
      imports: [MaterialModule],
      schemas: [],
      declarations: [BookListComponent]
    })
  )
  .add('With 1 Book', () => (
      {
        component: BookListComponent,
        props: {
          books$: from([[book]])
        },
      }
    )
  )
  .add('With 1 Multiline Book', () => (
      {
        component: BookListComponent,
        props: {
          books$: from([[bookMultiline]])
        },
      }
    )
  )
  .add('With 2 Books', () => (
      {
        component: BookListComponent,
        props: {
          books$: from([[book, bookMultiline]])
        },
      }
    )
  );
