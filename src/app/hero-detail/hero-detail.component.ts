import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 
  @Input() getHeroeId: string;
  @Input() getHeroeName: string;

  constructor() { }

  ngOnInit(): void {
  }

  

}
