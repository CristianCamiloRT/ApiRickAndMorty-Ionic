import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1) {
    const url = `${this.apiUrl}/character?page=${page}`;
    return this.http.get(url);
  }

  getCharacterById(id: number) {
    return this.http.get(`${this.apiUrl}/character/${id}`);
  }
}
