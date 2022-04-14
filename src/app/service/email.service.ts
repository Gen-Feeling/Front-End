import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment.prod";
import { Email } from "../model/Email";
import { Observable } from "rxjs";

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


  sendEmail(email:Email):Observable<string>{
    return this.http.post<string>('http://localhost:8080/send-email', email)
  }

  logado() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }


  
}
