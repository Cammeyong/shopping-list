import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { shoppingItemModel } from '../model/shopping_item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list-update',
  templateUrl: './shopping-list-update.component.html',
  styleUrls: ['./shopping-list-update.component.css']
})
export class ShoppingListUpdateComponent implements OnInit {

  @Input()selectedItem!: shoppingItemModel;
  constructor(private router: ActivatedRoute,
              private location: Location,
              private service: ShoppingListService) { }

  ngOnInit(): void {
    this.getItemByParam();
  }

  getItemByParam():void{
    const id =  this.router.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe( item => this.selectedItem = item)
  }

  goBack():void {
    this.location.back();
  }

  updateItem():void {
    this.service.updateById(this.selectedItem).subscribe (()=>this.goBack())
  }

}
