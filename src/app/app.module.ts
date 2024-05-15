import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RecipeListComponent } from "./components/recipe-list/recipe-list.component";
import { RecipeSearchComponent } from "./components/recipe-search/recipe-search.component";

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule //
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
