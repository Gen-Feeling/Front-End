import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { EntrarComponent } from './entrar/entrar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThemeComponent } from './theme/theme.component';
import { ThemeEditComponent } from './edit/theme-edit/theme-edit.component';
import { PostEditComponent } from './edit/post-edit/post-edit.component';
import { ThemeDeleteComponent } from './delete/theme-delete/theme-delete.component';
import { PostDeleteComponent } from './delete/post-delete/post-delete.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserEditComponent } from './edit/user-edit/user-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EntrarComponent,
    RodapeComponent,
    CadastrarComponent,
    AboutComponent,
    HomeComponent,
    ThemeComponent,
    ThemeEditComponent,
    PostEditComponent,
    ThemeDeleteComponent,
    PostDeleteComponent,
    AlertsComponent,
    UserEditComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
