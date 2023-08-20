import styles from './style.module.css'

export default function Border(){
    return(
        <div className={`${styles.pai} ${styles.rightTop}`}>
            <div className={styles.BorderBotton}></div>
            <div className={styles.BorderRight}></div>
            <div className={styles.BorderCurve}></div>
            <div className={styles.InnerCurve}></div>
        </div>
    )
}