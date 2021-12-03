import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pop-up-card',
  templateUrl: './pop-up-card.component.html',
  styleUrls: ['./pop-up-card.component.scss'],
})
export class PopUpCardComponent implements OnInit {

  @Input() nombre: any;

  constructor() { }

  @Input() cardTitle: string;
  @Input() imageUrl: string;
  @Input() cardDescription: string;

  ngOnInit() {}

}
