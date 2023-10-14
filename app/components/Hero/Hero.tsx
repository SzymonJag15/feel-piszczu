import React from "react";
import Image from "next/image";

import Button from "../Button/Button";

import styles from "./Hero.module.css";

const HERO_SPECS: string[] = [
  "Spersonalizowane treningi bokserskie",
  "2 pakiety specjalne",
  "wyspecjalizowana kadra",
];

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <Image
          className={styles.heroImage}
          src={require("./assets/hero.jpg")}
          alt="Filip boxing"
        />
        <div className="container">
          <div className={styles.heroContentWrapper}>
            <h1 className={styles.heroLabel}>
              Podnieś rękawice i odkryj{" "}
              <span className={styles.heroLabelColor}>
                potencjał swojego ciała.
              </span>
            </h1>
            <Button href="#">Zapisz się na zajęcia</Button>
            <div className={styles.specsWrapper}>
              {HERO_SPECS.map((spec: string) => (
                <div key={spec} className={styles.singleSpec}>
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
