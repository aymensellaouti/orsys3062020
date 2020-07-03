import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './component binding/color/color.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AdminComponent } from './admin/admin.component';
import { FirstComponent } from './introduction/first/first.component';
import { SecondComponent } from './introduction/second/second.component';
import { NF404Component } from './nf404/nf404.component';

const routes: Routes = [
  { path: '', redirectTo: 'cv', pathMatch: 'full' },
  // aymen.tn/color
  { path: 'color', component: ColorComponent },
  // aymen.tn/todo
  { path: 'todo', component: TodoComponent },
  // aymen.tn
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      //cv/1 ou cv/aymen ou cv/blabla
      { path: ':id', component: DetailPersonneComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: ':qlqchose', component: FirstComponent }],
  },
  //Route joker qui accepte n'importe quel uri que vous lui passez
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
