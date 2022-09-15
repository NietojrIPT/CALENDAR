import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-chronogram',
  templateUrl: './chronogram.component.html',
  styleUrls: ['./chronogram.component.css']
})
export class ChronogramComponent implements OnInit {
  presentDays: number = 0;
  absentDays: number = 0;
  events: any = [
    {title: 'Clase A1.1', date: '2022-09-16', color: '#173d23'},
    {title: 'Clase B1', date: '2022-09-16', color: '#5b6011'},
    {title: 'Clase A1.2', date: '2022-09-16', color: '#601142'},
    {title: 'Clase A1.1', date: '2022-09-15', color: '#173d23'},
    {title: 'Clase B1', date: '2022-09-12', color: '#5b6011'},
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: this.events
  };



  constructor() { }

  ngOnInit(): void {
    this.events.forEach((e: { [x: string]: string; }) => {
      if (e["title"] == 'Clase A1.1') {
        this.presentDays++;
      }else if (e["title"] == 'Clase A1.2'){
        this.absentDays++;
      }
    });
    console.log('Clase A1.1: '+this.presentDays);
    console.log('Clase A1.2: '+this.absentDays);
    
  }

}
