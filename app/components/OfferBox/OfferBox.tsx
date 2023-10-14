import React from "react";

import Button from "../Button/Button";

import styles from "./OfferBox.module.css";
import cx from "classnames";

export interface IOfferBoxProps {
  isPrimary?: boolean;
  isSecondary?: boolean;

  title: string;
  texts: string[];
  price: string;
  priceInfo: string;
}

const OfferBox = ({
  isPrimary = true,
  isSecondary,
  title,
  texts,
  price,
  priceInfo,
}: IOfferBoxProps) => {
  return (
    <div
      className={cx(styles.offerBox, {
        [styles.primary]: isPrimary,
        [styles.secondary]: isSecondary,
      })}
    >
      <h3 className={styles.title}>{title}</h3>

      <p className={styles.smallLabel}>Opis zajęć</p>
      {texts &&
        texts.map((text: string) => (
          <p key={text} className={styles.text}>
            {text}
          </p>
        ))}

      <div className={styles.dottedLine} />

      <div className={styles.priceWrapper}>
        <h2 className={styles.price}>{price}</h2>
        {!isSecondary && <p className={styles.priceInfo}>{priceInfo}</p>}
      </div>

      <Button href="#">Dołącz</Button>
    </div>
  );
};

export default OfferBox;
