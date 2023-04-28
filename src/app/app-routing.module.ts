import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisComponent } from './crisis/crisis.component';
import { DataComponent } from './crisis/data/data.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {path: 'crisis', component:CrisisComponent,children:[
      {path: 'data/:id', component:DataComponent}
  ]},
  {path: 'heroes', component:HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
