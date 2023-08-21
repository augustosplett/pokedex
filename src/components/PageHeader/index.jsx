import styles from './style.module.css'

export default function PageHeader(props){
    return(
        <nav className={styles.navBar}>
            <div className={styles.container}>
                <div className={styles.number}>No.{props.number}</div>
                <h1 className={styles.title}>{props.name}</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.category}>{props.category}</div>
                {props.types.map((el) => <div className={styles.type}> {el} </div>)}
            </div>
        </nav>
    )
}