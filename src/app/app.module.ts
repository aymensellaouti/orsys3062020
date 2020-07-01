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
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { Debrief1Component } from './debrief1/debrief1.component';
import { DadComponent } from './dad/dad.component';
import { SonComponent } from './son/son.component';
import { PereOutputComponent } from './pere-output/pere-output.component';
import { FilsOutputComponent } from './fils-output/fils-output.component';
import { PereColorComponent } from './pere-color/pere-color.component';
import { FilsColorComponent } from './fils-color/fils-color.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgsComponent } from './directives/ngs/ngs.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ColorComponent, AstridComponent, TwoWayComponent, CardComponent, FilsComponent, PereComponent, Debrief1Component, DadComponent, SonComponent, PereOutputComponent, FilsOutputComponent, PereColorComponent, FilsColorComponent, CvComponent, ItemComponent, ListComponent, DetailComponent, NgsComponent, MiniWordComponent, NgclassComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
