import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/models/kanban';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  constructor() { }

  @Input() ticket: Ticket;

  ngOnInit() {
  }

}
