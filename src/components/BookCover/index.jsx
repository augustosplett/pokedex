import styles from "./style.module.css"

export default function BookCover({ children }){
    return(
        <div className={styles.cover}>
            {children}
        </div>
    )
}