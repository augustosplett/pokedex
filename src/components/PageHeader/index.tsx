import styles from './style.module.css'
import Pokemon from '../../models/pokemon'

interface PokeSpecs{
    pokemon: Pokemon
}

export default function PageHeader(props: PokeSpecs){
    return(
        <nav className={styles.navBar}>
            <div className={styles.container}>
                <div className={styles.number}>No.{props.pokemon.id}</div>
                <h1 className={styles.title}>{props.pokemon.name}</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.category}>{props.pokemon.types}</div>
                {props.pokemon.types.map((el, index) => <div className={styles.type} key={index}> {el} </div>)}
            </div>
        </nav>
    )
}