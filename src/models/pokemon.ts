export default class Pokemon{
    #id: number
    #name: string
    #height: number
    #weight: number
    #sprite: string
    #types: string[]

    constructor(id: number, name: string, heigth: number, weight: number, sprite: string, types:string[]){
        this.#id = id;
        this.#name = name;
        this.#height = heigth;
        this.#weight = weight;
        this.#sprite = sprite;
        this.#types = types;
    }

    get id(){ return this.#id }

    get name(){ return this.#name }

    get height(){ return this.#height }

    get weight(){ return this.#weight }

    get sprite(){ return this.#sprite }

    get types(){ return this.#types }
}