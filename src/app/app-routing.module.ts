import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingListUpdateComponent } from './shopping-list-update/shopping-list-update.component';
// import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'shopping-list-update/:id', component:ShoppingListUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
