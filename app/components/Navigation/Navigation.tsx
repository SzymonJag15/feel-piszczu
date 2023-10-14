import React from "react";
import Image from "next/image";

import styles from "./Navigation.module.css";

interface IMenuElementsProps {
  label: string;
  link: string;
}

const MENU_ELEMENTS: IMenuElementsProps[] = [
  {
    label: "Rekomendacje",
    link: "#",
  },
  {
    label: "O mnie",
    link: "#",
  },
  {
    label: "Pakiety",
    link: "#",
  },
  {
    label: "Kontakt",
    link: "#",
  },
];

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container">
        <Image src={require("./assets/logotype.svg")} alt="logotype" />
        <div className={styles.navLine} />
        <div className={styles.navigationElements}>
          {MENU_ELEMENTS.map(({ label, link }: IMenuElementsProps) => (
            <a
              key={label}
              className={styles.menuElement}
              href={link}
              dangerouslySetInnerHTML={{ __html: label }}
            />
          ))}
          <a />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
