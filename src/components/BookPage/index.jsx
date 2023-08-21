import styles from "./style.module.css"

export default function BookPage(props){
    return(
        
        <div className={styles.page} style={{width: '69vw' }}>
            <div className={styles.page} style={{width: '68.7vw'}}>
                {props.children}
            </div>
        </div>
    )
}