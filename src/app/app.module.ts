// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProteinComponent } from './Protein/protein.component';
// @ts-ignore
import {HttpClientModule} from '@angular/common/http';
import {MacrosComponent} from "./Macros/macros.component";
import {cheatsheetComponent} from "./cheatsheet/cheatsheet.component";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProteinComponent,
    MacrosComponent,
    cheatsheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
