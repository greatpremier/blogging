import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDisplayComponent } from './components/blog-display/blog-display.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';

const routes: Routes = [
  {path: 'display', component: BlogDisplayComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'account-settings', component: AccountSettingsComponent},
  {path: 'user-dash', component: UserDashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
