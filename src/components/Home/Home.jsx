import PhotoAlbum from "react-photo-album";
import styles from "./Home.module.css";
import photos from "../../photos";
import { useState } from "react";
import Description from "../Description/Description";

const Home = () => {
    const [index, setIndex] = useState(-1);
    const [white, setWhite] = useState(true);
    const [tomori, setTomori] = useState(true);

    const click = e => setIndex(e.index);
    const close = () => setIndex(-1);
    const next = () => setIndex(index < photos.length - 1 ? index + 1 : 0);
    const previous = () => setIndex(index > 0 ? index - 1 : photos.length - 1);

    setTimeout(() => {
        setWhite(false);
    }, 200);

    setTimeout(() => {
        setTomori(false);
    }, 3000);

    return (
        <main className={styles.container}>
            {white ? <div className={styles.white}></div> : <></>}
            {tomori ? <div className={styles.tomori}></div> : <></>}
            <div className={styles.background}></div>
            <h1 className={styles.title}>Who is Karlita?</h1>
            <h2 className={styles.subtitle}>Karlita is...</h2>
            {index >= 0 && (
                <Description
                    photo={photos[index]}
                    onClose={close}
                    onPrevious={previous}
                    onNext={next}
                />
            )}
            <PhotoAlbum
                layout="rows"
                photos={photos}
                onClick={click}
                renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
                    <div className={styles.pruebaa} style={{ ...wrapperStyle }}>
                        {renderDefaultPhoto({ wrapped: true })}
                        {photo.title && (
                            <div className={styles.prueba}>{photo.title}</div>
                        )}
                    </div>
                )}
            />
        </main>
    );
};

export default Home;
