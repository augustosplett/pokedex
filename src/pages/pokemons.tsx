import BookCover from '../components/BookCover'
import BookPage from '../components/BookPage'
import PageHeader from '../components/PageHeader'
import PokeSpecs from '../components/PokeSpecs'
import Pokemon from '../models/pokemon'



export default function Pokemons(){
    
    const myPokemon = new Pokemon( 10,"Charizard", 10, 100, '/charizard.png', ['Flying','Fire','Water'])

    return(
        <BookCover> 
          <BookPage> 
            <PageHeader pokemon={myPokemon}/>
            <PokeSpecs pokemon={myPokemon} />
          </BookPage>
        </BookCover>
    )
}