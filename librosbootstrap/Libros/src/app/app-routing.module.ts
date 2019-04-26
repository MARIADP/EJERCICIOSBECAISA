import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
    
import {HomeComponent} from './pages/home/home.component';
import {InfantilesComponent} from './pages/infantiles/infantiles.component';
import {TerrorComponent} from './pages/terror/terror.component';
import {NuevoComponent} from './pages/nuevo/nuevo.component';
import { CONTACTARComponent } from './pages/contactar/contactar.component'



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'infantiles',component: InfantilesComponent},
  {path: 'terror',component: TerrorComponent},
  {path: 'nuevo',component: NuevoComponent},
  {path: 'contactar',component: CONTACTARComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }