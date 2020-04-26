import axios from "axios";
import Moment from "moment";

const CALENDAR_ID = "9lt5o1quln7c4u5d4mhm223pa4@group.calendar.google.com";
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  axios.get(url).then(
    response => {
      const events = [];
      response.data.items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          dateLabel: Moment(event.start.date || event.start.dateTime).format("MMMM Do, YYYY"),
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
