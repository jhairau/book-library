import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {BookPageComponent} from "./book-page/book-page.component";

const routes: Routes = [
  {path: "new", component: BookPageComponent},
  {path: "", component: BookPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
