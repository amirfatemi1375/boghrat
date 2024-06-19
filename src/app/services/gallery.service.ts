import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(private http: HttpClient) {}
  getGallery() {
    return this.http.get<Gallery[]>(
      'https://cdn2.boghrat.com/api/codeChallenge/angular'
    );
  }
}
