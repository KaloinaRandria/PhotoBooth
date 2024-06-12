import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../service/category/category.service";
import {Constants} from "../../../../class/util/constants";
<<<<<<< Updated upstream
=======
import {Display} from "../../../../class/util/display";
import {MatSnackBar} from "@angular/material/snack-bar";
>>>>>>> Stashed changes

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: any[] = [];

<<<<<<< Updated upstream
  constructor(private categoryService: CategoryService) {}
=======
  constructor(private categoryService: CategoryService,private snackbar:MatSnackBar) {}
>>>>>>> Stashed changes

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    const url = `/categ/all`;
<<<<<<< Updated upstream
    console.log('Fetching categories from:', url);
=======
>>>>>>> Stashed changes
    this.categoryService.getAll(url).subscribe(
      (response: any) => {
        if (response.success) {
          this.categories = response.data;
        } else {
          console.error('Failed to fetch categories');
        }
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }
<<<<<<< Updated upstream
=======
  delete(categorie:any):void{
    const url='/categ/delete/'+categorie.id_categorie_theme;
    this.categoryService.delete(url).subscribe(
      (response:any) =>{
        if(response.success){
          const index = this.categories.findIndex(cat => cat.id_categorie_theme === categorie.id_categorie_theme);
          Display.alert(this.snackbar,"Deleted succesfully","close",3000,"succes-snackbar");
          this.categories.splice(index,1);
        } else{
          console.error('Failed to delete category')
        }
      },
      (error)=>{
        console.error(error);
        Display.alert(this.snackbar,error,"close",6000);
      }
    );
  }
>>>>>>> Stashed changes
}
