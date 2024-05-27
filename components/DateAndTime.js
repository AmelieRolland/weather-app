import React, { useEffect, useState } from 'react';

import { getWeekDay, getTime, getAMPM, getTimeWithTimezone } from "../services/helpers";
import styles from "./DateAndTime.module.css";
export const DateAndTime = ({ data, unitSystem  }) => {


  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const intervalClock = setInterval(() => {
      setCurrentTime(getTimeWithTimezone(data.utc_offset_seconds));
    }, 1000);

    return () => clearInterval(intervalClock);
  }, [data.utc_offset_seconds]);

  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(data)}, ${currentTime} ${getAMPM(data.current.time, data.utc_offset_seconds)}`
        }
        
      </h2>
    </div>
  );
};
