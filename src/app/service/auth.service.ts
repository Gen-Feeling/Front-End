import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLoginDTO } from "../model/UserLoginDTO";
import { UserModel } from "../model/User";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient){}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token),
    };
  }


  enter(userLogin: UserLoginDTO): Observable<UserLoginDTO>{
    return this.http.post<UserLoginDTO>('https://genfeeling.herokuapp.com/user/login', userLogin)
  }

  register(user: UserModel): Observable<UserModel>{
    return this.http.post<UserModel>('https://genfeeling.herokuapp.com/user/register', user)
  }

  logado() {
    let ok: boolean = false;
    if (environment.token != '') {
      ok = true;
    }
    return ok;
  }

  getByIdUser(id: number): Observable<UserModel>{
    return this.http.get<UserModel>(`https://genfeeling.herokuapp.com/user/id/${id}`, this.token )
  }

  update(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>('https://genfeeling.herokuapp.com/user/update', user, this.token);
  }

  edit(){
    let ok: boolean = environment.edit
    return ok
  }

}
