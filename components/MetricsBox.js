import { degToCompass } from "../services/converters";
import {
  getTime,
  getAMPM,
  getVisibility,
  getWindSpeed,
  getFixedTime
} from "../services/helpers";
import { MetricsCard } from "./MetricsCard";
import styles from "./MetricsBox.module.css";


export const MetricsBox = ({ data, unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <MetricsCard
        title={"Humidity"}
        iconSrc={"/icons/humidity.png"}
        metric={data.current.relative_humidity_2m}
        unit={"%"}
      />
      <MetricsCard
        title={"Wind speed"}
        iconSrc={"/icons/wind.png"}
        metric={getWindSpeed(unitSystem, data.current.wind_speed_10m)}
        unit={"m/s"}
      />
      {<MetricsCard
        title={"Wind direction"}
        iconSrc={"/icons/compass.png"}
        metric={degToCompass(data.current.wind_speed_10m)}
      /> }
      {<MetricsCard
        title={"Visibility"}
        iconSrc={"/icons/binocular.png"}
        metric={getVisibility(unitSystem, data.current.visibility)}
        unit={"km"}
      /> }
      <MetricsCard
        title={"Sunrise"}
        iconSrc={"/icons/sunrise.png"}
        metric={getFixedTime(
          unitSystem,
          data.daily.sunrise[0],
          data.utc_offset_seconds
        )}
        unit={"AM"}

      />
      <MetricsCard
        title={"Sunset"}
        iconSrc={"/icons/sunset.png"}
        metric={getFixedTime(
          unitSystem,
          data.daily.sunset[0],
          data.utc_offset_seconds
        )}
        unit={"PM"}
      />
    </div>
  );
};
