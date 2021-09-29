import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersApi = 'https://jsonplaceholder.typicode.com/users';
  private albumsApi = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.usersApi);
  }

  public getMenuOptions(): Observable<Componente[]> {
    return this.http.get<Componente[]>('/assets/data/menu-options.json');
  }

  public getAlbums(): Observable<any[]> {
    return this.http.get<Componente[]>(this.albumsApi);
  }
}
