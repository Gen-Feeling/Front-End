import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/User';
import { AlertsService } from 'src/app/service/alerts.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserModel = new UserModel();
  idUser: number;

  confPassword: string;
  tyUser: string;

  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertsService
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    if (environment.token == '') {
      this.alertService.showAlertWarning('Sua sessão expirou, faça o login novamente');
      this.router.navigate(['/entrar']);
    }

    this.idUser = this.route.snapshot.params['id'];
    this.findByIdUser(this.idUser);
  }

  typeUser(event: any) {
    this.tyUser = event.target.value;
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: UserModel) => {
      this.user = resp;
      this.user.password = '';
    });
  }

  cancel(){
    environment.edit = true;
  }

  confirmPassword(event: any) {
    this.password = event.target.value;
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

  update() {
    this.user.type = this.tyUser;
    console.log(this.user);
    if (this.user.password != this.password) {
      this.alertService.showAlertDanger('As senhas não coincidem.');
    } else {
      this.authService.update(this.user).subscribe((resp: UserModel) => {
        this.user = resp;
        this.alertService.showAlertSuccess('Usuário Atualizado com sucesso!');

        environment.token = '';
        environment.name = '';
        environment.id = 0;
        environment.photo= '';
        environment.edit = true;

        this.router.navigate(['/entrar']);
      });
    }
  }
}
