import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline";
    theme?: "light" | "dark";
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    theme = "light",
    children,
    ...rest
}) => {
    // Compose className from variant and theme
    const className = `${styles.button} ${styles[variant]} ${styles[theme]}`;

    return (
        <button className={className} {...rest}>
            {children}
        </button>
    );
};

export default Button;