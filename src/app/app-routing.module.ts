import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SingComponent } from './sing/sing.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'Login',component:LoginComponent},
  {path:'sing',component:SingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
