import React from "react";
import styles from './DetailInfo.module.css';

interface DetailInfoProps {
    label: string;
    value: string;
}

/**
 * DetailInfo component displays a label and its corresponding value in a styled container.
 */
const DetailInfo: React.FC<DetailInfoProps> = ({ label, value }) => {
    return (
        <p className={styles.DetailInfo}>
            <strong>{label}:</strong> {value}
        </p>
    );
};

export default DetailInfo;