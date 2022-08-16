import { Observable, of, catchError, map, tap} from 'rxjs';
import { Injectable } from '@angular/core';
import { categoryModel } from './model/categories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http: HttpClient) { }

  private rest_api = "http://localhost:3000/categories";
  private httpHeader = {headers: ({
    'Content-type': 'application/json'
  })}

   //category crud
   getCategoryList(): Observable<categoryModel[]> {
    return this.http.get<categoryModel[]>(`${this.rest_api}/getCategory`).pipe (
      tap(retrievedcategories => console.log(`retrievedcategories = ${JSON.stringify(retrievedcategories)}`)),
      catchError(error => of([]))
    )
  }

  geCatById(id: any): Observable<categoryModel> {
    return this.http.get<categoryModel>(`${this.rest_api}/findSelectedCategory/${id}`).pipe (
      tap(selectedCategory => console.log(`selectedCategory = ${JSON.stringify(selectedCategory)}`)),
      catchError(error => of(new categoryModel()))
    )
  }


  addCategory(category: categoryModel): Observable<categoryModel> {
    console.log(category)

    return this.http.post<categoryModel>(`${this.rest_api}/addCategory`, category, this.httpHeader).pipe (
      tap(addedcategory => {
        alert(addedcategory.category + " has been removed from Category List")
        console.log(`addedcategory.category = ${JSON.stringify(addedcategory)}`)}),
      catchError(error => of(new categoryModel()))
    )
  }

  updateCategoryById(category: any): Observable<categoryModel> {
    return this.http.put<categoryModel>(`${this.rest_api}/updateCatById/${category._id}`, category, this.httpHeader).pipe (
      tap(editedcategory => {
        console.log(`editedcategory = ${JSON.stringify(editedcategory)}`)}),
      catchError(error => of(new categoryModel()))
    )
  }
  deleteCategory(id: any): Observable<categoryModel> {
    return this.http.delete<categoryModel>(`${this.rest_api}/remove/${id}`, this.httpHeader).pipe(
      tap( deletedCategory => {
        // alert(deletedCategory.categories + " has been removed from Category List")
        console.log(`deletedCategory = ${JSON.stringify(deletedCategory)}`)
      }),

    ) ;
  }

}
