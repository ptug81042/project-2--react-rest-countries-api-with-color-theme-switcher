import React from "react";
import styles from "./Loader.module.css";

/**
 * Loader component shows a centered spinning loader animation.
 * Used to indicate loading states in the UI.
 */
const Loader: React.FC = () => {
    return (
        <div className={styles.loader} role="status" aria-label="Loading">
            <span className={styles.spinner}></span>
        </div>
    );
};

export default Loader;