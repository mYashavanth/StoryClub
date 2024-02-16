import React, { useContext } from "react";
import styles from "./FlipCard.module.css";
import { AuthContext } from "../../Context/AuthContext";

const FlipCard = ({ data }) => {
  const { position, setPosition } = useContext(AuthContext);
  // console.log(data.image);
  console.log(position);
  return (
    <div className={styles["flip-card"]}>
      <div className={styles["flip-card-inner"]}>
        <div className={styles["flip-card-front"]}>
          <h3 className={styles.title}>{data.position}</h3>
          <p>{data.jd}</p>
          <img src={`${data.image}`} alt={data.position} />
        </div>
        <div className={styles["flip-card-back"]}>
          <h3 className={styles.title}>{data.position}</h3>
          <button onClick={() => setPosition(data.position)} className={styles.btn}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
