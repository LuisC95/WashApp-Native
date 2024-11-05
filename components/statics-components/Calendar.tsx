
export class Calendar {
  dayDate: number;
  month: number; 
  year: number; 
  weekDay: number; 
  hour: number; 
  minute: number; 

  constructor(
      dayDate: number,
      month: number, 
      year: number, 
      weekDay: number, 
      hour: number, 
      minute: number
  ) {
      this.dayDate = dayDate;
      this.month = month;
      this.year = year; 
      this.weekDay = weekDay;
      this.hour = hour;
      this.minute = minute;
  }
}