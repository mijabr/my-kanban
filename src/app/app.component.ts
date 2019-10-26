import { Component } from '@angular/core';
import { Kanban, Ticket } from './models/kanban';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-kanban';

  testTicket1: Ticket = { id: 'FR-129', description: 'Do something awesome', color: '#ff0000'};
  testTicket2: Ticket = { id: 'FR-234', description: 'Sleep', color: '#ff0000'};
  testTicket3: Ticket = { id: 'FR-765', description: 'Watch TV', color: '#00ff00'};

  kanban: Kanban = {
    states : [
      { name: 'To Do', color: '#ddddff', tickets: [this.testTicket1, this.testTicket2]},
      { name: 'Doing', color: '#ffffdd', tickets: [this.testTicket3]},
      { name: 'Done', color: '#ddffdd', tickets: []}
    ]
  };
}
