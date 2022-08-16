import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../category.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit {

  categoryList: any;
  categoriesItemList: any[] = [];

  constructor(private service: CategoryService,
    private formBuilder: FormBuilder,
    private routes: Router,
    private location: Location) {

    this.categoryList = formBuilder.group ({
    category: ['', Validators.required],

    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

  add() {
    // console.log(this.categoryList.value)

    this.service.addCategory(this.categoryList.value).subscribe((data: any)=> {
      // console.log(data.categories)
      this.categoriesItemList.push(data);
      this.routes.navigate(['categories'])
    })
  }


  getCategories():void {
    this.service.getCategoryList().subscribe(
      (res) => {
        this.categoriesItemList = res;
      })
  }


  goBack():void {
    this.location.back();
  }

  remove(category: any) {
    this.service.deleteCategory(category._id).subscribe (
      (res) => {
        alert(res.category + " has been removed from Category List")
        this.categoriesItemList = this.categoriesItemList.filter((u:any) => u!== category);

        this.routes.navigate(['categories'])
      })
  }

}

