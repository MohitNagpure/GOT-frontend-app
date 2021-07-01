import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HouseComponent } from './components/house/house.component';
import { HouseViewComponent } from './components/house-view/house-view.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { CharInfoComponent } from './components/char-info/char-info.component';
import { CharViewComponent } from './components/char-view/char-view.component';
import { HeaderComponent } from './shared/template/header/header.component';
import { FooterComponent } from './shared/template/footer/footer.component';
import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { BookInfoComponent } from './components/book-info/book-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";


const appRouting: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'char', component: CharViewComponent },
  { path: 'book', component: BookViewComponent },
  { path: 'house', component: HouseComponent },
  { path: 'view-book/:id', component: BookInfoComponent },
  { path: 'characetr/:id', component: CharInfoComponent },
  { path: 'view-house/:id', component: HouseViewComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HouseComponent,
    HouseViewComponent,
    BookViewComponent,
    CharInfoComponent,
    CharViewComponent,
    HeaderComponent,
    FooterComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
