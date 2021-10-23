import { Component, OnInit, Input } from '@angular/core';
import {Pizza} from '../pizza';
import {Commentaire} from '../commentaire';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-pizza-exmp',
  templateUrl: './pizza-exmp.component.html',
  styleUrls: ['./pizza-exmp.component.css']
})
export class PizzaExmpComponent implements OnInit {

  @Input() pizz=new Pizza();

  aff:boolean=true;


  n:string="";
  c:string="";

  ajout(){
    
    let cmnt=new Commentaire(this.n,new Date() , this.c);
    this.pizz.comments?.push(cmnt);
    this.c="";
    this.n="";
  }

  afficher(){
    this.aff=!this.aff;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
