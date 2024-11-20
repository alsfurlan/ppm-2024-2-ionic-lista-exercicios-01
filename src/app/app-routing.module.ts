import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';

const routes: Routes = [
  { path: '', redirectTo: 'exercicio1', pathMatch: 'full' },
  { path: 'exercicio1', component: Exercicio1Component },
  { path: 'exercicio2', component: Exercicio2Component },
  { path: 'exercicio3', component: Exercicio3Component },
  { path: 'exercicio4', component: Exercicio4Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
