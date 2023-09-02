import styles from "./style.module.css"

export default function BookPage(props){
    return(
        
        <div className={styles.page} style={{width: '59vw' }}>
            <div className={styles.page} style={{width: '58.7vw'}}>
                {props.children}
            </div>
        </div>
    )
}