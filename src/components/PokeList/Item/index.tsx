import styles from './style.module.css'

interface Props{
    id: number
    name: string,
    source: string,
    altName: string
}

export default function Item(props: Props){
    return(
        <li className={styles.item} key={props.id} id={props.id.toString()}>
            <img className={styles.profileImage} src={props.source} alt={props.altName}/> 
            <span className={styles.name}>{props.name}</span>
        </li>
    )
}