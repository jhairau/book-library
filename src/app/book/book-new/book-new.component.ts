import {Component, ChangeDetectionStrategy, forwardRef} from '@angular/core';
import {FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {BaseFormControl} from '../../base-form-control';
import {Book} from '../book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BookNewComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: BookNewComponent,
    multi: true
  }]
})
export class BookNewComponent extends BaseFormControl<Book> {

  form: FormGroup;

  constructor() {
    super();
  }

  buildForm() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

}
