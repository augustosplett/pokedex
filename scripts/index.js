async function buscarPokemons(){
    await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
    .then(retorno => retorno.json())
    .then(todosPokemon => todosPokemon.results.forEach(pokemon => {
        let pokeURL = pokemon.url;
        buscarPokeInfos(pokeURL);
    }))
}

async function buscarPokeInfos(url){
    await fetch(url)
    .then(pokeInfo => pokeInfo.json())
    .then(pokeinf => {
        const cardInfos = pokeinf.species.url
        buscarCardInfos(cardInfos)
    }) 
    //.then(pokeinf => {
    //    let poketipo1 = pokeinf.types[0].type.name;
    //    
    // })
}

async function buscarCardInfos(url){
    await fetch(url)
    .then(retorno => retorno.json())
    .then(infos => {
        const id = infos.id;
        const name = infos.name ;
        const cor = infos.color.name;
        const descricao = infos.flavor_text_entries[0].flavor_text;
        const lendario = infos.is_legendary;
        const mistico = infos.is_mythical;
        montaCard(id, name, cor, descricao, lendario, mistico);
    })
}
function montaCard(id, name, cor, descricao, lendario, mistico){
    const board = document.querySelector('.board');
    const carta = document.createElement('div');
    const desc = document.createElement('div');
    const imgContainer = document.createElement('div');
    if(lendario){
        carta.setAttribute("class", "card lendario");
    }else if(mistico){
        carta.setAttribute("class", "card mistico");
    }else{
        carta.setAttribute("class", "card");
    }
    carta.style.borderColor = cor;
    desc.setAttribute('class','textoDescritivo');
    imgContainer.setAttribute('class','figuras');
    desc.innerText = descricao;
    carta.innerText = `#${id}  Name: ${name}`;
    carta.appendChild(desc);
    board.appendChild(carta);
    
};