import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  name = environment.name;
  photo = environment.photo;
  idUser = environment.id;
  constructor(private route: Router,private alertService: AlertsService, private authService: AuthService) {}

  ngOnInit(): void {}

  logout() {
    environment.token = '';
    environment.name = '';
    environment.id = 0;
    environment.photo = '';
    this.route.navigate(['/entrar']);
    this.alertService.showAlertWarning('Sessão encerrada');
  }

  edit(){
    environment.edit = false;
  }
}
