import BookCover from '../components/BookCover'
import BookPage from '../components/BookPage'
import PageHeader from '../components/PageHeader'
import PokeList from '../components/PokeList'
import PokeSpecs from '../components/PokeSpecs'
import Pokemon from '../models/pokemon'



export default function Pokemons(){
    
    const myPokemon = new Pokemon( 10,"Charizard", 10, 100, '/charizard.png', ['Flying','Fire','Water'])
    const myPokemonList = [new Pokemon( 132,"ditto", 10, 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png', ['normal'])
                          ,new Pokemon( 44,"gloom", 10, 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png', ['grass'])
                          ,new Pokemon( 25,"pikachu", 10, 100, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', ['electric'])]
    return(
      <div style={{display:'flex'}}>      
        <BookCover> 
          <BookPage> 
            <PageHeader pokemon={myPokemon}/>
            <PokeSpecs pokemon={myPokemon} />
          </BookPage>
        </BookCover>
        <PokeList pokemons={myPokemonList}/>
      </div>
    )
}