import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListUpdateComponent } from './shopping-list-update/shopping-list-update.component';
import { ShoppingListViewComponent } from './shopping-list-view/shopping-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShoppingListUpdateComponent,
    ShoppingListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
