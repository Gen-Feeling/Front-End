import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/User';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {
  user: UserModel = new UserModel();
  password: string;
  type: string;

  constructor(
    private auth: AuthService,
    private route: Router,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.password = event.target.value;
  }

  typeUser(event: any) {
    this.type = event.target.value;
  }

  register() {
    this.user.type = this.type;

    if (this.user.password != this.password) {
      this.alertService.showAlertWarning('As senhas não coincidem');
    } else {
      this.auth.register(this.user).subscribe((resp: UserModel) => {
        this.user = resp;
        this.route.navigate(['/entrar']);
        this.alertService.showAlertSuccess('Usuário cadastrado com sucesso');
      });
    }
  }

  validEmail(){
    let txt = (<HTMLDivElement>document.querySelector('#txtUser'))
    let regex = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    if (this.user.email.match(regex)) {
      txt.innerHTML = 'Email válido'
      txt.style.color = 'green'
    } else {
      txt.innerHTML = 'Email inválido'
      txt.style.color = 'red'
    }
  }

  validPassword(){
    let txt = (<HTMLDivElement>document.querySelector('#txtPassword'))
    if (this.password.length >= 6) {
      txt.innerHTML = 'Senha válida'
      txt.style.color = 'green'
    } else {
      txt.innerHTML = 'Senha inválida, deve ter no mínimo 6 caracteres'
      txt.style.color = 'red'
    }
  }

  validPass(){
    let txt = (<HTMLDivElement>document.querySelector('#txtPass'))
    if (this.password == this.user.password) {
      txt.innerHTML = 'Senhas coincidem'
      txt.style.color = 'green'
    } else {
      txt.innerHTML = 'Senhas não coincidem'
      txt.style.color = 'red'
    }
  }
}
