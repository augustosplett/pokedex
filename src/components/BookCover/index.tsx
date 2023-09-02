import styles from "./style.module.css"
import Border from './BookCoverBorder'

export default function BookCover({ children }){
    return(
        <div className={styles.cover}>
            <Border />
            <Border rightTop/>
            {children}
        </div>
    )
}