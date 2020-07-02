import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Dog } from './../../dogsModel';

@Injectable({
  providedIn: 'root'
})
export class RandomDogsService {

  constructor(private http: HttpClient) { }

  getRandomDogs(){
    return this.http.get<Dog>(environment.BASE_URL);
  }
}
