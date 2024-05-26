import Image from "next/image";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  description,
  iconName,
  data,
}) => {


  return (
    
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
      
        width="300px"
        height="300px"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
      { data.current.temperature_2m} C°
      </h1>
      <p>
        Feels like { data.current.temperature_2m} C°
 
      </p>
    </div>
  );
};
