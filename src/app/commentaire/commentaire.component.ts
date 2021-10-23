import { Component, Input, OnInit } from '@angular/core';
import {Commentaire} from '../commentaire';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  @Input() comm=new Commentaire();

  constructor() { }

  ngOnInit(): void {
  }

}
