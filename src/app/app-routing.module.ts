import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GnotesComponent } from './gnotes/gnotes.component';


const routes: Routes = 
[{ path: 'login', component: LoginComponent },
{ path: 'gnotes', component: GnotesComponent },
{ path: '**', component: LoginComponent },
{ path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
