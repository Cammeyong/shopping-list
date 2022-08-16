import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryModel } from '../model/categories';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  @Input()selectedItem!: any;

  constructor(
              private router: ActivatedRoute,
              private location: Location,
              private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.getItemByParam()
  }


  getItemByParam():void{
    const id =  this.router.snapshot.paramMap.get('id');
    this.service.geCatById(id).subscribe( item => this.selectedItem = item)
  }

  goBack():void {
    this.location.back();
  }

  updateItem():void {
    this.service.updateCategoryById(this.selectedItem).subscribe (
      ()=> {
        alert(this.selectedItem.categories + " has been updated to the shopping List")
        this.goBack()})
  }
}
