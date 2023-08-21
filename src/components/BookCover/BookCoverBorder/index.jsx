import styles from './style.module.css'

export default function Border(props){

    return(
        <div className={`${styles.pai} ${ props.rightTop ? styles.rightTop : styles.rightBottom }`}>
            <div className={styles.BorderBotton}></div>
            <div className={styles.BorderRight}></div>
            <div className={styles.BorderCurve}></div>
            <div className={styles.InnerCurve}></div>
        </div>
    )
}