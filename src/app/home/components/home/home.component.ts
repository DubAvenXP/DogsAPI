import { Component, OnInit } from '@angular/core';
import { RandomDogsService } from './../../../core/service/random-dogs.service';
import { Dog } from 'src/app/dogsModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dogs: Dog;

  constructor(private randomDogsService: RandomDogsService) { }

  ngOnInit(): void {
    this.fetchDogs();
  }

  fetchDogs(){
    this.randomDogsService.getRandomDogs()
    .subscribe(dogs => {
      this.dogs = dogs;
    });
  }






}
