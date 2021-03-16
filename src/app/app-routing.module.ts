import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
{ path: '' ,component: LoginComponent },
{ path: 'Login' ,component: LoginComponent},
{ path: 'Welcome' ,component: WelcomeComponent },
{ path: 'Registration' ,component: RegistrationComponent },
{ path: 'Logout' ,component: LogoutComponent },
{ path: 'Userprofile' ,component: UserprofileComponent },
{ path: 'Error' ,component: ErrorComponent },
{ path: '**' ,component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
