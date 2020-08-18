import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  showHeroe = false;
  showHeroeId = null;
  showHeroeName = null;
  selectedHero = null;

  heroes = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id, name){
    this.showHeroe = true;
    this.showHeroeId = id;
    this.showHeroeName = name;
    this.selectedHero = {
      newId: id,
      newName: name

    }


  }

}
