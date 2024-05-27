import React, { useEffect, useState } from 'react';

import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";
export const DateAndTime = ({ data, unitSystem  }) => {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const intervalClock = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(intervalClock);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(data)}, ${getTime(
          unitSystem,
          data.current.time,
          data.utc_offset_seconds
        )} ${getAMPM(data.current.time, data.utc_offset_seconds)}`
        }
        
      </h2>
    </div>
  );
};
