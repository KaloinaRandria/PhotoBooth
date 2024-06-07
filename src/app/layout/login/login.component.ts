import {Component, OnInit, signal, OnDestroy, Renderer2 } from '@angular/core';
import {User} from "../../class/model/user/user";
import {LoginService} from "../../service/user/login.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Display} from "../../class/util/display";
import {Router} from "@angular/router";
import {DataSecurity} from "../../class/util/data-security";
import {Constants} from "../../class/util/constants";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  title: string = Constants.APP_TITLE;
  form : FormGroup;
  ngOnInit() {
    this.renderer.addClass(document.body, 'login');
    if (User.verify()) {
      this.router.navigate(['/home/dashboard']).then(r => true);
    }
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'login');
  }

  constructor(private renderer: Renderer2, private fBuilder : FormBuilder , private loginService : LoginService , private router : Router , private alert : MatSnackBar) {
    this.form = this.fBuilder.group({
      username : [''],
      password : ['']
    });
  }

  login() {
    const data = {
      username : this.form.get('username')?.value,
      mot_de_passe : this.form.get('password')?.value
    }
    this.loginService.login(data,"/membre/connect").subscribe({
      next:(valiny)=> {
        console.log(valiny);
        User.setUserAuth(DataSecurity.encryptData(valiny.data, 'auth'));
        this.router.navigate(['/home/dashboard']).then(r => true);

      },
      error:(err) => {
        console.log(err);
        Display.alert(this.alert , err.error.message,"close",3000);
      }
    });
  }


}

