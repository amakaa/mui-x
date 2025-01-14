import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function AddWeekNumber() {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber, week) => `${weekNumber}.`,
      }}
    >
      <DateCalendar displayWeekNumber />
    </LocalizationProvider>
  );
}
