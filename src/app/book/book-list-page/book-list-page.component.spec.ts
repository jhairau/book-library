import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BookListPageComponent} from './book-list-page.component';
import {Store, StoreModule} from '@ngrx/store';
import {MaterialModule} from '../../material.module';
import {BookListComponent} from '../book-list/book-list.component';
import {CommonModule} from '@angular/common';

describe('BookListPageComponent', () => {
  let component: BookListPageComponent;
  let fixture: ComponentFixture<BookListPageComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), MaterialModule, CommonModule],
      declarations: [BookListPageComponent, BookListComponent],
      providers: [{
        provide: Store,
        useValue: {
          dispatch: () => {},
          pipe: () => {}
        }
      }]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
