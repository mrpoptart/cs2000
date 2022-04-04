import {derived, writable} from "svelte/store";
import dayjs from "dayjs";

export const events = writable([]);
export const lastEventType = derived(events, ($events) => {
   let eventKeys = Object.keys($events);
   let eventId = eventKeys.pop();
   let $event = $events[eventId];
   return $event
});
export const lastEventSymbol = derived(events, ($events) => {
   let eventKeys = Object.keys($events);
   let eventId = eventKeys.pop();
   let time = '☀️'
   if(dayjs(parseInt(eventId)).format('H') > 12) {
      time = '🌙'
   }
   return time
});
export const lastEventTime = derived(events, ($events) => {
   let eventKeys = Object.keys($events);
   let eventId = eventKeys.pop();
   return dayjs(parseInt(eventId));
});
