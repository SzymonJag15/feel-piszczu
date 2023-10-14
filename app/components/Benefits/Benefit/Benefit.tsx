import React from "react";

import styles from "../Benefits.module.css";
import Image from "next/image";

export interface IBenefitProps {
  icon: string;
  alt: string;
  text: string;
}

const Benefit = ({ icon, alt, text }: IBenefitProps) => {
  return (
    <div className={styles.singleBenefit}>
      <Image src={icon} alt={alt} />
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Benefit;
