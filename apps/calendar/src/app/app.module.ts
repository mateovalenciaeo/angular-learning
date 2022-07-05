import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReminderFormModule } from './components/reminder-form/reminder-form/reminder-form.module';
import { CalendarModule } from './components/calendar/calendar/calendar.module';
import { ReminderFormComponent } from './components/reminder-form/reminder-form/reminder-form.component';

@NgModule({
  declarations: [AppComponent, ReminderFormComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ReminderFormModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
