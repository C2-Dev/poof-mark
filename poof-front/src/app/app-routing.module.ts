import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FartComponent} from './fart/fart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'fart', component: FartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
