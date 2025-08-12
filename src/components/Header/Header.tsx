import React from "react";
import styles from "./Header.module.css";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;