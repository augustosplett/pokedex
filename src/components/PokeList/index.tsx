import { useEffect, useState } from 'react'
import Pokemon from '../../models/pokemon'
import Item from './Item'
import styles from './style.module.css'

interface PokePros{
    pokemons: Pokemon[]
}

export default function PokeList(props: PokePros){

    function loadList(): any{
        return props.pokemons.map( (el, index) =>              
        <Item 
            key={index}
            id= {el.id}
            name= {el.name}
            source={el.sprite}
            altName={el.name}
        />)
    }

    return(
        <div className={styles.container}>
            <ul className={styles.list}>
                {loadList()}
            </ul>
        </div>
    )
}