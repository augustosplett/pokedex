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
        const pokeImg = pokeinf.sprites.other.dream_world.front_default
        const pokeTipo = pokeinf.types
        //console.log(pokeTipo)
        buscarCardInfos(cardInfos, pokeImg,pokeTipo)
    }) 
}

async function buscarCardInfos(url, pokeImg,pokeTipo){
    await fetch(url)
    .then(retorno => retorno.json())
    .then(infos =>{
        let descricao ='';
        for(let i=0; i <=infos.flavor_text_entries.length; i++){
            if(infos.flavor_text_entries[i].language.name == 'en'){
                descricao = infos.flavor_text_entries[i].flavor_text;
                break;
            }
        }
        const id = infos.id;
        const name = infos.name ;
        const cor = infos.color.name;
        const lendario = infos.is_legendary;
        const mistico = infos.is_mythical;
        montaCard(id, name, cor, descricao, lendario, mistico, pokeImg, pokeTipo);
    })

}

function montaCard(id, name, cor, descricao, lendario, mistico, pokeImg, pokeTipo){
    const board = document.querySelector('.board');
    const carta = document.createElement('div');
    const desc = document.createElement('div');
    const imagem = document.createElement('img');
    const imgContainer = document.createElement('div');
    const ulTypes = document.createElement('ul');

    if(lendario){
        carta.setAttribute("class", "card lendario");
    }else if(mistico){
        carta.setAttribute("class", "card mistico");
    }else{
        carta.setAttribute("class", "card");
    }

    carta.setAttribute('id',id)
    carta.style.background = cor;
    desc.setAttribute('class','textoDescritivo');
    imagem.setAttribute('src', pokeImg);
    imagem.setAttribute('alt', name);
    imagem.setAttribute('class','figuras')
    imgContainer.setAttribute('class','imgContainer');
    imgContainer.appendChild(imagem);
    desc.innerText = descricao;
    carta.innerText = `#${id}  Name: ${name}`;
    
    pokeTipo.forEach(el =>{
        const liTypes = document.createElement('li');
        liTypes.innerText = el.type.name;
        ulTypes.appendChild(liTypes);
    })

    carta.appendChild(imgContainer);
    carta.appendChild(ulTypes);
    carta.appendChild(desc);
    board.appendChild(carta);
    
};