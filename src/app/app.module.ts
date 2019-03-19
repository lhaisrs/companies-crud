import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CompanyListComponent } from './company/list/component'; 

import { environment } from 'src/environments/environment';

//Firebase
import { AngularFireModule } from '@angular/fire';

//Internal Modules
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
