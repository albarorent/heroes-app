export type Heroe = {
    id:string,
    name:string,
    powerstats:{
        combat:string,
        durability:string,
        intelligence:string,
        power:string,
        speed:string,
        strength:string
    }
    work:{
        base:string,
        occupation:string
    }
    image:{
        url:string
    }
}