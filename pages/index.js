import { useState, useEffect } from "react";
import { setIconName } from "../services/getIconName";



import { MainCard } from "../components/MainCard";
import { ContentBox } from "../components/ContentBox";
import { Header } from "../components/Header";
import { DateAndTime } from "../components/DateAndTime";
import { MetricsBox } from "../components/MetricsBox";
import { LoadingScreen } from "../components/LoadingScreen";
import { ErrorScreen } from "../components/ErrorScreen";

import styles from "../styles/Home.module.css";
import config from "./api/config";


export const App = () => {
  const [triggerFetch, setTriggerFetch] = useState();
  const [data, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");
  const {city} = config
  

      useEffect(() => {
        const getData = async () => {
        const res = await fetch("api/data");
        const data = await res.json();
        setWeatherData({ ...data });
        console.log(data);
        console.log(data.current.weather_code);

      };
      getData();
    }, [triggerFetch]);


  const [iconName, setIconNameState] = useState();
  const [desc, setDescNameState] = useState();

  useEffect(() => {
    if (data) {
      const iconName = setIconName(data);
      setIconNameState(iconName[0]);
      setDescNameState(iconName[1]);
    }
  }, [data]);




 


  return data && !data.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={city}
        country={data.timezone}
        description={desc}
        iconName={iconName}
        data={data}
      />
      <ContentBox>
        <Header>
          
          <DateAndTime data={data}  />
          
        </Header>
        {<MetricsBox data={data} />}
      </ContentBox>
    </div>
  ) : data && data.message ? (
    <ErrorScreen errorMessage="City not found, try again!">
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
