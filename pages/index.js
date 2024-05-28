import { useState, useEffect } from "react";
import { setIconAndDesc } from "../services/getIconAndDesc";

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
  
  //chargement des données api en json

      useEffect(() => {
        const getData = async () => {
        const res = await fetch("api/data");
        const data = await res.json();
        setWeatherData({ ...data });
      };
      const interval = setInterval(getData, 3600000);
      
      getData();
      return () => clearInterval(interval);
    }, [triggerFetch]);





  // récupération des icones et descriptions selon le weather code

  const [iconName, setIconNameState] = useState();
  const [desc, setDescState] = useState();

  useEffect(() => {
    if (data) {
      const iconName = setIconAndDesc(data);
      setIconNameState(iconName[0]);
      setDescState(iconName[1]);
    }
  }, [data]);

  //affichage 

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
    <ErrorScreen errorMessage="Erreur lors du chargement">
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
