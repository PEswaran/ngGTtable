import { Component, OnInit } from '@angular/core';

import { GtServiceModelService } from '../../services/gt-service-model.service';
import { GtData } from '../../models/gt-data';

@Component({
  selector: 'app-gt-rows',
  templateUrl: './gt-rows.component.html',
  styleUrls: ['./gt-rows.component.scss']
})
export class GtRowsComponent implements OnInit {
  
  heroes: GtData[];

  selectedHero: GtData;
  row_no;
  rowNumber;
  

  constructor(private heroService: GtServiceModelService) { }

  ngOnInit() {
    this.getHeroes();
  }
 getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: GtData, row_no): void {
    this.selectedHero = hero;
    this.rowNumber = row_no;
  }
  
  add(): void {
    let lastRow = Object.assign({}, this.heroes[this.heroes.length-1]);
    let newRow = {     // a new row 
      name: lastRow.name, 
      time: lastRow.time + 1,
      flow: lastRow.flow,
      compA: lastRow.compA,
      compB: lastRow.compB,
      compC: lastRow.compC,
      compD: lastRow.compD,
      curve: lastRow.curve
    };
   
this.heroService.addHero(newRow as GtData)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
 
  }

  delete(hero: GtData): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }



}
