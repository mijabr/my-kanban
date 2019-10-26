import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
// import {DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { StateColumnComponent } from './components/state-column/state-column.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { TicketComponent } from './components/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    StateColumnComponent,
    KanbanBoardComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgDragDropModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
