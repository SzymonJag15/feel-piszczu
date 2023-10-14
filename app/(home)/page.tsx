"use client";

import Hero from "../components/Hero/Hero";
import WhoChose from "../components/WhoChose/WhoChose";
import Benefits from "../components/Benefits/Benefits";
import OfferBox, { IOfferBoxProps } from "../components/OfferBox/OfferBox";

import styles from "./page.module.css";
import cx from "classnames";

const TRAINING_CAMP_OFFER = [
  {
    title: "Fundamentals",
    texts: [
      "Trening różniący się od tradycyjnych zajęć bokserskich. Podczas tych zajęć zbudujesz silne podstawy (nie musisz być osobą początkującą).",
      "Duży nacisk kładziemy na:pracę nóg, zrozumienie koncepcji bokserskich.",
      "Żeby się rozwijać trzeba czasem zrobić krok w tył.",
    ],
    price: "30 pln/h",
    priceInfo: "max. 12 os. w grupie",
  },
  {
    title: "The drills",
    texts: [
      "Skorzystaj z tego czego nauczyłeś się na poprzednim treningu i wykorzystaj to w realistycznychscenariuszach. Będziesz mieć możliwość przećwiczenia wszystkich sekwencji na partnerze.",
      "Uderzenia w tarcze i worki mają swoje miejsce w treningu, ale aby wskoczyć na wyższy poziommusisz nauczyć się odwzorowywać rzeczywisty ruch.",
    ],
    price: "30 pln/h",
    priceInfo: "max. 12 os. w grupie",
  },
  {
    title: "The workshop",
    texts: [
      "Złóżmy wszystko w całość!",
      "Ten trening zawiera w sobie podstawy zgodne z holistycznym podejściem do treningu: pracę w parach, sparingi, ćwiczenia wytrzymałościowe i siłowe.",
      "Podczas tych zajęć rozwiniesz wszystko co potrzebne by stać się lepszym bokserem.",
    ],
    price: "35 pln/h",
    priceInfo: "max. 12 os. w grupie",
  },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <Hero />
      <WhoChose />
      <Benefits />
      <div className={cx("container", styles.trainingCampOffer)}>
        {TRAINING_CAMP_OFFER.map((offer: IOfferBoxProps) => (
          <OfferBox key={offer.title} {...offer} />
        ))}
      </div>
    </main>
  );
}
