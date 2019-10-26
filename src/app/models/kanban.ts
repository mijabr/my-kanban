
export class Ticket {
  id: string;
  description: string;
  color: string;
}

export class State {
  name: string;
  color: string;
  tickets: Ticket[];
}

export class Kanban {
  states: State[];
}
