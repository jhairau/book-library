import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';


const routes: Routes = [
  {
    path: 'books',
    loadChildren: '../app/book/book.module#BookModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    StoreModule.forRoot({
      router: routerReducer,
    }),
    RouterModule.forRoot(routes, {useHash: true}),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
