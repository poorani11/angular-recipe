import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Wiener-Schnitzel',
      'This is a traditional recipe from Austria. This breaded veal cutlet was browned to perfection: tender, crispy and yummy. In Germany, you can find mostly Schnitzel Wiener Art, which is using pork cutlets instead of veal. This dish usually served simply with lemon, cranberry sauce, and maybe a simple salad, Potato Salad or french fries.',
      'http://lovethatbite.com/wp-content/uploads/2018/10/wiener-schnitzel-kalb-veal-meat-cranberry-lemon-chives-potato-salad-salad-wiener-austrian-food-dish-original-recipe.jpeg',
      [
        new Ingredient('veal', 2),
        new Ingredient('Lemon', 2),
        new Ingredient('Egg', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'All-American Cheeseburger',
      'The All-American Cheeseburger has certain non-negotiable elements: American cheese is one of them. Rather than unwrap individual singles, get sliced cheese from your nearest deli counter — it tastes better and melts slower and more evenly. Dill pickle chips, sliced red onion and tomato, crisp lettuce leaves, ketchup and mayo are also involved.',
      'https://www.foodrepublic.com/wp-content/uploads/2012/03/033_FR11785.jpg',
      [
        new Ingredient('freshly ground chuck', 2),
        new Ingredient('Buns', 1),
        new Ingredient('Tomato', 1),
      ]),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

}