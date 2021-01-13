async function buscarPokemons(){
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(retorno => retorno.json())
    .then(todosPokemon => todosPokemon.results.forEach(pokemon => {
       let pokeURL = pokemon.url;
       fetch(pokeURL)
       .then(pokeInfo => pokeInfo.json())
       //.then(pokeinf => console.log(pokeinf)) //todas as informações 
       .then(pokeinf => {
            let pokeImg = pokeinf.sprites.other.dream_world.front_default;
            let pokeName = pokeinf.name;
            let pokeId = pokeinf.id;
            let poketipo1 = pokeinf.types[0].type.name;
     
            montaCards(pokeImg, pokeName, pokeId, poketipo1);
   

        })
    }))
}

function montaCards(imagem, nome, id, tipo){
    const board = document.querySelector('.board');
    let carta = document.createElement('DIV');
    let img = document.createElement("img");
    let list = document.createElement("ul");
    let dados = [id, nome, tipo];

    carta.setAttribute("class", "card");
    
    img.setAttribute("src",imagem );
    img.setAttribute("alt", nome );
    img.setAttribute("class", "figuras" );
    
    dados.forEach(dado =>{
        let item = document.createElement("li");
        item.innerText = dado;
        list.appendChild(item);
    })

    carta.appendChild(img);
    carta.appendChild(list);
    board.appendChild(carta);

}
