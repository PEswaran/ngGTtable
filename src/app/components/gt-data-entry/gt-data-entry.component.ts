import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GtServiceModelService } from '../../services/gt-service-model.service';
import { GtData } from '../../models/gt-data';

@Component({
  selector: 'app-gt-data-entry',
  templateUrl: './gt-data-entry.component.html',
  styleUrls: ['./gt-data-entry.component.scss']
})
export class GtDataEntryComponent implements OnInit {
  heroes: GtData[];
  @Input() hero: GtData;
  @Input() rowId;

  readOnly:boolean;
  constructor(private heroService: GtServiceModelService) { }

  ngOnInit() {
    this.readOnly = true;
    console.log(this.rowId);
  }
  
  checkStatus(){
    this.readOnly = this.readOnly == false?true:false;
    return this.readOnly;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(): void {
    let user = Object.assign({}, this.heroes[this.heroes.length-1]);
    let user2 = {     // an object
      name: user.name, 
      time: user.time + 1,
      compA: user.compA
    };
    //last.name = this.name.();
console.log(user2);

this.heroService.addHero(user2 as GtData)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  
  }

  delete(hero: GtData): void {
   // this.heroes = this.heroes(hero);
    this.heroService.deleteHero(hero).subscribe();
   
  }

  
}
