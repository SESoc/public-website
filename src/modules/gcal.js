import Axios from "axios";
import Moment from "moment";

const CALENDAR_ID = process.env.REACT_APP_GOOGLE_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY;
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  Axios.get(url).then(
    response => {
      const events = [];
      response.data.items.forEach(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          dateLabel: Moment(event.start.date || event.start.dateTime).format("MMMM Do, YYYY"),
          title: event.summary,
          description: event.description,
          link: event.htmlLink,
        });
      });
      callback(events.sort((e1, e2) => {
        var d1 = new Date(e1.start),
          d2 = new Date(e2.start);
        return d1 - d2;
      }));
    },
    error => {
      // eslint-disable-next-line no-console
      console.log(error);
    },
  );
}

export function upcomingEvents(events) {
  let curDateTime = Moment();
  return events.filter(e => Moment(e.end).isAfter(curDateTime));
}
