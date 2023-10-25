import PokemonCard from "./PokemonCard"

// eslint-disable-next-line 
const PokemonList = ({pokemons}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_260px)] justify-center max-w-[1000px] mx-auto gap-5 py-10">
      {
        pokemons.map((pokemon)=> <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url}/>)
      }
    </section>
  )
}

export default PokemonList
