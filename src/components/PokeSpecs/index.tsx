import React from 'react'
import styles from './style.module.css'
import Pokemon from '../../models/pokemon'

interface PokeSpecs{
    pokemon: Pokemon
}
export default function Photo(props: PokeSpecs){
    return(
        <div className={styles.pokeSpecs}>
            <div className={styles.photoHolder}>
                <img src={props.pokemon.sprite} alt={props.pokemon.name} className={styles.mainPhoto} />
                <h1 className={styles.pokeName}>Charizard</h1>
            </div>
            <div className={styles.sideInfo}>

            </div>
        </div>
        
    )
}