import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  @Input() event;
  constructor() {}

  getEventColor(e) {
    return e?.color;
  }

  isAllDayEvent(event) {
    let sHour = dayjs(event.startDate).hour();
    if (sHour === 0) {
      return 'All-day event: ';
    } else {
      return '';
    }
  }

  getTime(startDate, endDate) {
    let sHour = dayjs(startDate).hour();
    if (sHour === 0) {
      return 'All Day Event';
    }
    let sUnit = '';
    let sMin = dayjs(startDate).minute();
    let startTime = '';
    if (sHour < 13) {
      sUnit = ' AM';
    } else {
      sUnit = ' PM';
      sHour = sHour - 12;
    }
    startTime = sHour + ':' + sMin + sUnit;

    let eHour = dayjs(endDate).hour();
    let eMin = dayjs(endDate).minute();
    let endTime = '';
    let eUnit = '';
    if (eHour < 13) {
      eUnit = ' AM';
    } else {
      eUnit = ' PM';
      eHour = eHour - 12;
    }
    endTime = eHour + ':' + eMin + eUnit;
    return startTime + ' to ' + endTime;
  }

  ngOnInit(): void {}
}
