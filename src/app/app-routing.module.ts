import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { AuthComponent } from './auth/auth.component';
import { CompanyListComponent } from './company/list/component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'company', component: CompanyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
