import pagestyles from '../../styles/components.module.css';
import styles from '../../styles/index.module.css';
export const RotatingPage = () =>{
    return(
        <div id={styles.loading_container}>
            <div className={`${pagestyles.logoimg} ${styles.loading_image}`}>
                <span className={pagestyles.logo}>
                    SWAP-<b className={pagestyles.colored}>e</b>
                </span>
            </div>
            <p>Loading ...</p>
        </div>
    )
}