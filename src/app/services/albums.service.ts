import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AlbumModel } from '../models/album.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class AlbumsService {
  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums'
  
  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.albumsUrl)
  }

}