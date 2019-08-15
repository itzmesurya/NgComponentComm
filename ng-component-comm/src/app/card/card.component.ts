import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() message: string;
  @Output() response = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendResponse() {
    this.response.emit("this is response from Card");
  }
}
