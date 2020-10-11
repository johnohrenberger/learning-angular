import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Blueberry Pie",
      "Its so delicious!",
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Banjo_Shark_recipe.jpg",
      [
        new Ingredient('Dough', 1),
        new Ingredient('Blueberries', 10)
      ]),
    new Recipe(
      "Blueberry Pie",
      "Its so delicious!",
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Banjo_Shark_recipe.jpg",
      [
        new Ingredient('Dough', 1),
        new Ingredient('Blueberries', 12)
      ]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}
