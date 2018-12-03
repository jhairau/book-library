import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewPageComponent } from './book-new-page.component';
import { Store, StoreModule } from '@ngrx/store';
import {MaterialModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('BookNewPageComponent', () => {
  let component: BookNewPageComponent;
  let fixture: ComponentFixture<BookNewPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ BookNewPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
