import {
  unixToLocalTime,
  kmToMiles,
  mpsToMph,
  timeTo12HourFormat,
} from "./converters";

export const getWindSpeed = (unitSystem, windInMps) =>
  unitSystem == "metric" ? windInMps : mpsToMph(windInMps);

export const getVisibility = (unitSystem, visibilityInMeters) =>
  unitSystem == "metric"
    ? (visibilityInMeters / 1000).toFixed(1)
    : kmToMiles(visibilityInMeters / 1000);

    // fonction qui me permet de récupérer l'heure actuelle, pour y appliquer un set interval par la suite (voir dans DateAndTime)

export const getTime = (unitSystem) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const formattedHours = hours % 12;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
};

   //fonction qui me permet d'y ajouter la timezone en paramètre

export const getTimeWithTimezone = (utcOffsetSeconds) => {
  const now = new Date();
  const offsetMilliseconds = utcOffsetSeconds * 1000;
  const localTimeWithOffset = new Date(now.getTime() + offsetMilliseconds);
  return localTimeWithOffset.toLocaleTimeString();
}

export const getAMPM = (unitSystem, currentTime, timezone) =>
  unitSystem === "imperial"
    ? unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
      ? "PM"
      : "AM"
    : "";

export const getFixedTime = (unitSystem, currentTime, timezone) =>
unitSystem == "metric"
  ? unixToLocalTime(currentTime, timezone)
  : timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getWeekDay = (data) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((data.current.time + data.utc_offset_seconds) * 1000).getUTCDay()
  ];

  
};
