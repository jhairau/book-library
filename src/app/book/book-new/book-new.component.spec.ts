import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewComponent } from './book-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('BookNewComponent', () => {
  let component: BookNewComponent;
  let fixture: ComponentFixture<BookNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ BookNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
