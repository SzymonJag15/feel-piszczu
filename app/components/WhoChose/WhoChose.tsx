import React from "react";

import styles from "./WhoChose.module.css";
import Image from "next/image";

const WhoChose = () => {
  return (
    <div className={styles.whoChose}>
      <div className="container">
        <h2 className={styles.header}>
          Czy to ja wybrałem boks, czy to on wybrał mnie?
        </h2>
        <div className={styles.contentWrapper}>
          <div />
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              <div className={styles.titleLine} />
              <h2 className={styles.title}>
                W Twoim narożniku! Trener Filip Macierzyński
              </h2>
            </div>

            <p className={styles.text}>
              Niewątpliwie boks stał się moją pasją, która odmieniła moje życie.{" "}
              <span className={styles.textColor}>
                To już siódmy rok, odkąd pracuję w ringu.
              </span>{" "}
              Podczas tej drogi toczyłem pojedynki na ringach amatorskich, aż
              nadszedł dzień, w którym postanowiłem zmienić rolę.
            </p>
            <p className={styles.text}>
              Chęć rozwoju, zaprowadziła mnie na Kubę, gdzie spędziłem 40 dni
              trenując i poznając fenomen kubańskiego boksu. Zdobytą tam wiedzą
              dzielę się dziś z moimi podopiecznymi.
            </p>
            <p className={styles.text}>
              Projekt <span className={styles.textColor}>Feel More Boxing</span>
              , powstał aby uświadomić wielu ludziom, jak ten sport jest w
              stanie odmienić czyjeś życie.
            </p>

            <div className={styles.officialTrainerWrapper}>
              <Image
                src={require("./assets/official-trainer.svg")}
                alt="Official trainer logotype"
              />
              <p>2023 Oficjalny Trener Polskiego Związku Bokserskiego</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoChose;
