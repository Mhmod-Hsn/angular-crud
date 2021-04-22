import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styles: [
  ]
})
export class UserItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() user;

}
