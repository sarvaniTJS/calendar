import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DayComponent } from './components/calendar/day/day.component';
import { EventComponent } from './components/calendar/event/event.component';

@NgModule({
  declarations: [AppComponent, CalendarComponent, DayComponent, EventComponent],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
