import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/models/kanban';

@Component({
  selector: 'app-state-column',
  templateUrl: './state-column.component.html',
  styleUrls: ['./state-column.component.less']
})
export class StateColumnComponent implements OnInit {

  constructor() { }

  @Input() state: State;

  ngOnInit() {
  }

}
