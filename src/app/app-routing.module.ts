import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ListUsersComponent } from './componentes/list-users/list-users.component';


const routes: Routes = [
  { path: '', component: ListUsersComponent },
  { path: ':id', component: ListUsersComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
