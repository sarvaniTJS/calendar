import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
})
export class DayComponent implements OnInit {
  @Input() day: object;
  @Input() monthDate;
  @Input() today;
  @Input() colors;
  @Input() events;

  constructor() {}

  isBefore(day: any) {
    console.log('isBefore------>', this.monthDate);
    return day.isBefore(this.monthDate.startOf('month'));
  }

  isAfter(day: any) {
    return day.isAfter(this.monthDate.endOf('month'));
  }

  isToday(day: any) {
    return day.isSame(this.today, 'day');
  }

  toDay(day: any) {
    return day.date();
  }

  getDateFontColor(day) {
    if (this.isBefore(day) || this.isAfter(day)) {
      return this.colors.otherMonthDaysFontColor;
    } else if (day.day() === 0) {
      return this.colors.weekendDaysFontColor;
    } else if (this.isToday(day)) {
      return 'white';
    } else {
      return 'black';
    }
  }

  getDateBgColor(day) {
    if (this.isToday(day)) {
      return this.colors.todayBackgroundColor;
    }
  }

  showEvent(day) {
    let allEvents = this.events.filter((e) => {
      return dayjs(e.startDate).isSame(day, 'day');
    });

    if (allEvents.length === 0) {
      return null;
    } else {
      allEvents.sort(function (a, b) {
        return a.startDate < b.startDate
          ? -1
          : a.startDate > b.startDate
          ? 1
          : 0;
      });
      return allEvents;
    }
  }

  ngOnInit(): void {}
}
