import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './color/color.component';
import { AstridComponent } from './astrid/astrid.component';
import { TwoWayComponent } from './two-way/two-way.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ColorComponent, AstridComponent, TwoWayComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
