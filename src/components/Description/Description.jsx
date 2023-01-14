import styles from "./Description.module.css";
import "boxicons";

const Description = ({ photo, onClose, onPrevious, onNext }) => {
    return (
        <div className={styles.container}>
            <span className={styles.x} onClick={onClose}>
            <box-icon name="x" size="lg" color="white"></box-icon>
            </span>
            <span className={styles["arrow-left"]} onClick={onPrevious}>
                <box-icon
                    name="chevron-left"
                    size="lg"
                    color="white"
                ></box-icon>
            </span>
            <div className={styles.panel}>
                <div className={styles["image-container"]}>
                    <img
                        className={styles.image}
                        src={photo.src}
                        alt={photo.title}
                    />
                </div>
                <p className={styles.description}>{photo.description}</p>
            </div>
            <span className={styles["arrow-right"]} onClick={onNext}>
                <box-icon
                    name="chevron-right"
                    size="lg"
                    color="white"
                ></box-icon>
            </span>
        </div>
    );
};

export default Description;
