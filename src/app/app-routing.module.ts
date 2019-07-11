import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users', loadChildren: './users/users.module#UsersModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
