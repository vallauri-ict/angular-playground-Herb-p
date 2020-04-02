import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
  new Recipe('A Test Recipe','This is simply a test','https://aws.imagelinenetwork.com/agronotizie/materiali/ArticoliImg/agroalimentare-cibo-dieta-mediterranea-alimentazione-by-denio109-fotolia-750.jpeg'),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','',''),
  new Recipe('','','')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
