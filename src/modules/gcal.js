import axios from "axios";

const CALENDAR_ID = "9lt5o1quln7c4u5d4mhm223pa4@group.calendar.google.com";
const API_KEY = "YOUR-API-KEY-HERE";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  axios.get(url).then(
    response => {
      const events = [];
      response.data.items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          description: event.description,
        });
      });
      callback(events);
    },
    error => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  );
}
