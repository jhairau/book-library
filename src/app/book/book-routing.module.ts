import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookNewPageComponent} from './book-new-page/book-new-page.component';
import {BookListPageComponent} from './book-list-page/book-list-page.component';

const routes: Routes = [
  {path: 'new', component: BookNewPageComponent},
  {path: 'list', component: BookListPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
