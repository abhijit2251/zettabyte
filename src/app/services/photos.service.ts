import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PhotoModel } from '../models/photo.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class PhotosService {
    
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(this.photosUrl)
  }

}