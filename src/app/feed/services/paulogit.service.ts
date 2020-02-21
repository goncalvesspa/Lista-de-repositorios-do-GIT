import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gitlist } from './model/gitlist';

@Injectable({
  providedIn: 'root'
})
export class PaulogitService {

  constructor(private http: HttpClient) { }

  getList(): Observable<Gitlist[]> {

    return this.http.get<Gitlist[]>('https://api.github.com/users/goncalvesspa/repos');
  }
}
