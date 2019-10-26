import { Component, OnInit, Input } from '@angular/core';
import { Kanban, State, Ticket } from 'src/app/models/kanban';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.less']
})
export class KanbanBoardComponent implements OnInit {

  constructor() { }

  @Input() kanban: Kanban;

  ngOnInit() {
  }

  onDrop(newState: State, e: any) {
    const ticket = e.dragData;
    console.log(ticket);

    this.kanban.states.forEach(state => {
      const index = state.tickets.indexOf(ticket);
      if (index !== -1) {
        state.tickets.splice(index, 1);
      }
    });

    newState.tickets.push(ticket);
  }
}
