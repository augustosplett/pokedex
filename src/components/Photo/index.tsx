import React from 'react'
import styles from './style.module.css'

interface PhotoProps{
    src: string,
    alt: string
}

export default function Photo(props: PhotoProps){
    return(
        <div className={styles.pokeSpecs}>
            <div className={styles.photoHolder}>
                <img src={props.src} alt={props.alt} className={styles.mainPhoto} />
                <h1 className={styles.pokeName}>Charizard</h1>
            </div>
            
        </div>
        
    )
}