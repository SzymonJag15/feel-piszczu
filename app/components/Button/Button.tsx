import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import cx from "classnames";

export interface IButtonProps {
  children: React.ReactNode;
  isPrimary?: boolean;
  className?: string;
  target?: string;
  href?: string;
  onClick?: () => void;
}

const Button = (
  {
    children,
    isPrimary = true,
    className,
    href,
    target,
    onClick,
  }: IButtonProps,
  ref: any
) => {
  const newHref = href?.replace("localhost:3000/", "/");

  return (
    <a
      className={cx(styles.button, className, {
        [styles.primary]: isPrimary,
      })}
      href={newHref}
      onClick={onClick}
      ref={ref}
      target={target}
    >
      {children}
    </a>
  );
};

export default forwardRef(Button);
