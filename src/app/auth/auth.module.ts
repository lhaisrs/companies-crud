import { NgModule } from '@angular/core';

//Firebase
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    AngularFireAuthModule
  ]
})
export class AuthModule {}
