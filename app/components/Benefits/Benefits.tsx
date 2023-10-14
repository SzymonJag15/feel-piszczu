import React from "react";

import styles from "./Benefits.module.css";
import Image from "next/image";
import Benefit, { IBenefitProps } from "./Benefit/Benefit";

const BENEFITS: IBenefitProps[] = [
  {
    icon: require("./assets/health.svg"),
    alt: "health icon",
    text: "Trenując boks totalną transformację przechodzi również zdrowie psychiczne. Osobiście nie znamy lepszej metody na odstresowanie, dającej taką ilość endorfin.",
  },
  {
    icon: require("./assets/strength.svg"),
    alt: "strength icon",
    text: "Trenując boks metamorfozę przechodzi również Twoja Sylwetka (ustalimy priorytet, w którą stronę pokierować zmianę).",
  },
  {
    icon: require("./assets/selfDefence.svg"),
    alt: "self defence icon",
    text: "Poznasz skuteczne i praktyczne umiejętności samoobrony.",
  },
  {
    icon: require("./assets/selfConfidence.svg"),
    alt: "self confidence icon",
    text: "Twoja Pewność Siebie bezwątpienia wskoczy na wyższy poziom - co przełoży się na niemalże wszystkie aspekty Twojego życia.",
  },
];

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className="container">
        <h3 className={styles.header}>
          Benefity wynikające z trenowania boksu
        </h3>

        <div className={styles.benefitsWrapper}>
          {BENEFITS.map((singleBenefit: IBenefitProps, index) => (
            <Benefit key={index} {...singleBenefit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
