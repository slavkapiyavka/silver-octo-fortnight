import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: unknown;

  constructor(private _http: HttpClient) { }

  public getData() { // обязательно ли указывать public?
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }
}
