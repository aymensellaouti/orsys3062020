import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondComponent } from './introduction/second/second.component';
import { FirstComponent } from './introduction/first/first.component';
import { ColorComponent } from './component binding/color/color.component';
import { AstridComponent } from './component binding/astrid/astrid.component';
import { TwoWayComponent } from './component binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component binding/card/card.component';
import { FilsComponent } from './interactions entre composants/fils/fils.component';
import { PereComponent } from './interactions entre composants/pere/pere.component';
import { Debrief1Component } from './debrief1/debrief1.component';
import { DadComponent } from './interactions entre composants/dad/dad.component';
import { SonComponent } from './interactions entre composants/son/son.component';
import { PereOutputComponent } from './interactions entre composants/pere-output/pere-output.component';
import { FilsOutputComponent } from './interactions entre composants/fils-output/fils-output.component';
import { PereColorComponent } from './interactions entre composants/pere-color/pere-color.component';
import { FilsColorComponent } from './interactions entre composants/fils-color/fils-color.component';
import { CvComponent } from './cv/cv/cv.component';
import { ItemComponent } from './cv/item/item.component';
import { ListComponent } from './cv/list/list.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgsComponent } from './directives/ngs/ngs.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { Debrief2Component } from './debrief2/debrief2.component';
import { DebriefDDirective } from './directives/debrief-d.directive';
import { DirstructComponent } from './directives/dirstruct/dirstruct.component';
import { DirstructforComponent } from './directives/dirstructfor/dirstructfor.component';
import { PipeExempleComponent } from './pipe/pipe-exemple/pipe-exemple.component';
import { RandomPipe } from './pipe/random.pipe';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { TodoComponent } from './todo/todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AdminComponent } from './admin/admin.component';
import { NF404Component } from './nf404/nf404.component';
import { TestFormComponent } from './formulaires/test-form/test-form.component';
import { LoginComponent } from './login/login.component';
import { ObservaleComponent } from './observables/observale/observale.component';

import {HttpClientModule} from "@angular/common/http";
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    AstridComponent,
    TwoWayComponent,
    CardComponent,
    FilsComponent,
    PereComponent,
    Debrief1Component,
    DadComponent,
    SonComponent,
    PereOutputComponent,
    FilsOutputComponent,
    PereColorComponent,
    FilsColorComponent,
    CvComponent,
    ItemComponent,
    ListComponent,
    DetailComponent,
    NgsComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Debrief2Component,
    DebriefDDirective,
    DirstructComponent,
    DirstructforComponent,
    PipeExempleComponent,
    RandomPipe,
    DefaultImagePipe,
    TodoComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    ObservaleComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
