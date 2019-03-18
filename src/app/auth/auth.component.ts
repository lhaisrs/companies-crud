import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//Service
import { AuthService } from '../auth/auth.service';

//Loading
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  //Message Error
  messageError: string = '';
  statusError: boolean = false;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {}

  signIn() {
    this.spinner.show();

    this.authService.signIn(this.authForm.value.email, this.authForm.value.password).then(() => {
      this.spinner.hide();
    }).catch((err) => {
      this.spinner.hide();

      this.statusError = true;

      switch(err.code){
        case 'auth/wrong-password':
          this.messageError = 'Senha inválida!';
        case 'auth/user-not-foun':
          this.messageError = 'Usuário incorreto';
        default:
          this.messageError = 'Um erro ocorreu. Tente novamente!';
      }
    })
  }

}
