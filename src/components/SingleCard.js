import React from "react";
import styles from "./SingleCard.module.css";

const SingleCard = ({ card, flipped, handleClick, disabled }) => {
  const clickHandler = () => {
    if(!disabled){
      handleClick(card);
    }
    
  };

  return (
    <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
      <img className={styles.front} src={card.src} alt="card" />
      <img src="/img/cover.png" className={styles.back} onClick={clickHandler} alt="cover" />
    </div>
  );
};

export default SingleCard;
