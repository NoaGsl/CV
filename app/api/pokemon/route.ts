import { NextResponse } from "next/server";

export async function GET(){

    const fetchPokemon = await fetch("https://pokeapi.co/api/v2/pokemon-species/bulbasaur")
    const json = await fetchPokemon.json()
    const response = NextResponse.json([json.color.name,json.generation.name]);
    return response;
}   