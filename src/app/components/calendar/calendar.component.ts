import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  today = dayjs();
  monthDate = this.today;
  colors = {
    allDayColor: 'white',
    otherMonthDaysFontColor: '#b5b5b5',
    weekendDaysColor: '#f5f5f5',
    weekendDaysFontColor: '#7c7c7c',
    todayBackgroundColor: '#ff3b30',
  };

  events = [
    {
      color: '#d1ebfe',
      startDate: '2023-01-01T02:11:58.421Z',
      endDate: '2023-01-01T03:11:58.421Z',
      name: 'New Year',
      htmlDetails:
        '<h1>This is H1</h1><p>jdgeuwctreukynilewjufiocyfiouewofcyroinfeow;funcoqpef</p>',
    },

    {
      color: '#d1ebfe',
      startDate: '2023-01-26T18:30:00.000Z',
      endDate: '2023-01-26T18:30:00.000Z',
      name: 'Republic Day',
      details: 'Its my Birthday',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-18T12:11:58.421Z',
      endDate: '2023-01-18T14:11:58.421Z',
      name: 'Party',
      htmlDetails:
        '<h1>This is H1</h1><p>jdgeuwctreukynilewjufiocyfiouewofcyroinfeow;funcoqpef</p>',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-18T10:11:58.421Z',
      endDate: '2023-01-18T14:11:58.421Z',
      name: 'Birthday',
      details: 'Its my Birthday',
    },

    {
      color: '#d0eadc',
      startDate: '2023-01-23T10:11:58.421Z',
      endDate: '2023-01-23T10:11:58.421Z',
      name: 'Meeting',
      details: 'Its my Birthday',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-12T14:11:58.421Z',
      endDate: '2023-01-12T16:11:58.421Z',
      name: 'Party',
      htmlDetails: '<h1>This is H1</h1>',
    },
    {
      color: '#d0eadc',
      startDate: '2023-01-20T18:30:00.000Z',
      endDate: '2023-01-20T18:30:00.000Z',
      name: 'Party',
      details: 'Its my Birthday',
    },
  ];
  weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  month = [];

  setMonth() {
    this.month = [];
    let monthStartDay = this.monthDate.startOf('month');
    let monthEndDay = this.monthDate.endOf('month');
    for (let i = monthStartDay; i <= monthEndDay; i = i.add(1, 'day')) {
      this.month = this.month.concat([i]);
    }

    if (monthStartDay.day() !== 0) {
      for (
        let i = monthStartDay.subtract(1, 'day');
        i >= monthStartDay.subtract(monthStartDay.day(), 'day');
        i = i.subtract(1, 'day')
      ) {
        this.month = [i].concat(this.month);
      }
    }

    if (monthEndDay.day() !== 6) {
      for (
        let i = monthEndDay.add(1, 'day');
        i <= monthEndDay.add(6 - monthEndDay.day(), 'day');
        i = i.add(1, 'day')
      ) {
        this.month = this.month.concat([i]);
      }
    }
  }

  constructor() {
    this.setMonth();
  }

  toMonth() {
    let monthNames = [
      { id: 0, name: 'January' },
      { id: 1, name: 'February' },
      { id: 2, name: 'March' },
      { id: 3, name: 'April' },
      { id: 4, name: 'May' },
      { id: 5, name: 'June' },
      { id: 6, name: 'July' },
      { id: 7, name: 'August' },
      { id: 8, name: 'September' },
      { id: 9, name: 'October' },
      { id: 10, name: 'November' },
      { id: 11, name: 'December' },
    ];
    let name = monthNames.find((m) => m.id === this.monthDate.month());
    return name.name;
  }

  toYear() {
    return this.monthDate.year();
  }

  toToday() {
    this.monthDate = dayjs();
    this.setMonth();
  }

  onNext() {
    this.monthDate = this.monthDate.add(1, 'month');
    this.setMonth();
  }

  onPrev() {
    this.monthDate = this.monthDate.subtract(1, 'month');
    this.setMonth();
  }

  getBgColor(day: any) {
    if (day.day() === 0) {
      return this.colors.weekendDaysColor;
    } else {
      return this.colors.allDayColor;
    }
  }

  ngOnInit() {}
}
