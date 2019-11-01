import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = '//localhost:8081/'
  public USER_API = this.API + 'user'

  constructor(private http: HttpClient) { }

  get(userId: number) {
    return this.http.get(this.USER_API + '/' + userId);
  }

  getAll(): Observable<any> {
    return this.http.get(this.USER_API);
  }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if(user.userId) {
      result = this.http.put(this.USER_API, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }

  remove(userId: number) {
    return this.http.delete(this.USER_API + '/' +  userId);
  }
}
