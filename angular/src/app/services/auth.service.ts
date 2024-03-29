import {Injectable} from "@angular/core";
import {User} from "../interfaces";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable()
export class AuthService {
  private token: string = ''

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<User> {
    return this.http.post<User>('http://127.0.0.1:5000/register', user)
  }

  login(user: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://127.0.0.1:5000/login', user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('auth-token', token)
            this.setToken(token)
          }
        )
      )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }

  isAuthenticated (): boolean {
    return !!this.token
  }

  logout() {
    this.setToken('')
    localStorage.clear()
  }
}
