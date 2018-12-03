import {moduleMetadata, storiesOf} from '@storybook/angular';
import {MaterialModule} from '../../material.module';
import {BookNewComponent} from './book-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


storiesOf('Book New', module)
  .addDecorator(
    moduleMetadata({
      imports: [MaterialModule, FormsModule,
        ReactiveFormsModule, BrowserAnimationsModule],
      schemas: [],
      declarations: [BookNewComponent]
    })
  )
  .add('Empty', () => (
      {
        component: BookNewComponent
      }
    )
  );
