import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookListComponent} from './book-list.component';
import {MaterialModule} from '../../material.module';
import {CommonModule} from '@angular/common';

describe('BookListPageComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, CommonModule],
      declarations: [BookListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
