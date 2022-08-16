import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { ShoppingListUpdateComponent } from './shopping-list-update/shopping-list-update.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';
// import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'category-view', component:CategoryViewComponent},
  {path:'shopping-list-update/:id', component:ShoppingListUpdateComponent},
  {path:'category_update/:id', component:CategoryUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
