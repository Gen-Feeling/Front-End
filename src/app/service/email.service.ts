import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient){}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }


  sendEmail(){
    return this.http.get<any>('https://localhost:8080/send-email')
  }

  logado() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }


}
