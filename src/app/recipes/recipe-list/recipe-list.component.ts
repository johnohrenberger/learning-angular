import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Blueberry Pie", "Its so delicious!", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Banjo_Shark_recipe.jpg"),
    new Recipe("Blueberry Pie", "Its so delicious!", "https://upload.wikimedia.org/wikipedia/commons/a/ac/Banjo_Shark_recipe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
