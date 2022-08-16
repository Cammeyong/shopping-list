import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { Location } from '@angular/common';
import { shoppingItemModel } from '../model/shopping_item';


@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent implements OnInit {

  itemsList: any[] = [];

  constructor(private service: ShoppingListService, private location: Location) { }

  ngOnInit(): void {
    // this.getItems();
  }

  // getItems():void {
  //   this.service.getShoppingList().subscribe(
  //     (res) => {
  //       this.itemsList = res;
  //       console.log(`this.itemsList is ${JSON.stringify(this.itemsList)}`)
  //     })
  // }


  // goBack():void {
  //   this.location.back();
  // }

  // remove(item: any) {
  //   this.service.deleteItem(item._id).subscribe ( () => this.goBack())
  // }


}




