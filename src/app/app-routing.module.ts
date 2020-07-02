import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './component binding/color/color.component';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';

const routes: Routes = [
  // aymen.tn/color
  { path: 'color', component: ColorComponent },
  // aymen.tn/todo
  { path: 'todo', component: TodoComponent },
  // aymen.tn
  { path: '', component: CvComponent },
  //cv/1 ou cv/aymen ou cv/blabla
  { path: 'cv/:id', component: DetailPersonneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
