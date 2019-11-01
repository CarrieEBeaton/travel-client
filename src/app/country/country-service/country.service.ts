import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public API = '//localhost:8081'
  public COUNTRY_API = this.API + '/country'
  constructor(private http: HttpClient) { }

  get(id: string) {
    return this.http.get(this.COUNTRY_API + '/' + id);
  }

  getAll(): Observable<Country> {
    return this.http.get('//localhost:8081/country') as Observable<Country>;
  }

  save(country: Country): Observable<Country> {
    let result: Observable<Object>;

    if(country.countryId) {
      result = this.http.put(this.COUNTRY_API, country);
    } else {
      result = this.http.post(this.COUNTRY_API, country);
    }
    return result as Observable<Country>;
  }

  remove(id: number) {
    return this.http.delete(this.COUNTRY_API + id);
  }
}



  