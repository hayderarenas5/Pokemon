import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import HeaderPokeball from "../components/layauts/HeaderPokeball"
import { detailPokemon, keysN } from "../constans/pokemon"

const PokemonDetail = () => {

  const [pokemon, setPokemon] = useState(null)

  const {pokemonId} =useParams()

  const movements =pokemon?.moves.slice(0, 24) 
  
  const getPercentStat =(statValue)=>{
    const MAX_STAT_VALUE=255
    const percentStat =(statValue*100)/ MAX_STAT_VALUE.toFixed(1)
    return `${percentStat}%`
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(({data})=> setPokemon(data))
        .catch((err)=> console.log(err))
  }, [])  

  const pokemoncolor=pokemon?.types[0].type.name

  const colorAssignment=()=>{
    if (pokemoncolor &&detailPokemon[pokemoncolor]) {
      const color = detailPokemon[pokemoncolor];
      return color
    } else {
        console.log(`No se encontró un color de ${pokemoncolor}`);
    }
  }

  const pokemoncolor2=pokemon?.types[1]?.type?.name

  const colorAssignment2=()=>{
    if (pokemoncolor2&& detailPokemon[pokemoncolor2]) {
      const color = detailPokemon[pokemoncolor2];
      return color
    } else {
        console.log(`No se encontró un color de ${pokemoncolor2}`);
    }
  }
  
  return (
    <main className="text-center capitalize bg-[#F8F5F5]">
      <HeaderPokeball />
      <article className="max-w-[800px] mx-auto py-10 px-2 pb-5 shadow-lg bg-white">
        <header className={`flex justify-center bg-gradient-to-t ${detailPokemon[pokemon?.types[0].type.name]}`}>
          <img className="h-[200px]" src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </header>
        <section className="max-w-[650px] mx-auto">
          <div className="pb-3 pt-3">
            <h3 className="p-2 border inline-block text-lg text-[#416460] font-semibold"># {pokemon?.id}</h3>
          </div>
          <div className="text-center">
            <hr className="w-1/3 h-2 inline-block"/>
            <h2 className="inline-block px-2 text-[25px] text-[#416460] font-semibold">{pokemon?.name}</h2>
            <hr className="w-1/3 h-2 inline-block"/>
          </div>
          <h2 className=""></h2>
          <div className="flex justify-center gap-5 pt-4">
              <h6>Weight</h6>
              <h6>Height</h6>
          </div>
          <div className="flex justify-center gap-12">
              <h3>{pokemon?.height}</h3>
              <h3>{pokemon?.weight}</h3>
          </div>
          <div className="flex w-auto justify-around pt-3">
            <h2>Type</h2>
            <h2>Abilities</h2>
          </div>
          <div className="flex w-auto justify-around pb-[70px]  pt-3">
            <p className={`${pokemon?.types[0].type.name === keysN ? "" : colorAssignment()}`}>{pokemon?.types[0].type.name}</p>
            {pokemon?.types[1]?.type?.name ? (
            <p className={`${pokemon.types[1].type.name === keysN ? "" : colorAssignment2()}`}>
              {pokemon.types[1].type.name}
            </p>
            ) : "N/A"}
            <p className="w-[100px] border">{pokemon?.abilities[0].ability.name}</p>
            {pokemon?.abilities[1]?.ability?.name ? (
            <p className="w-[100px] border">{pokemon?.abilities[1].ability.name}</p>
            ) : "N/A"}
            
          </div>
          <section>
          <h1 className="flex text-3xl pt-8 pb-6 relative font-semibold">Stats <hr className="absolute bg-[#E5E5E5] flex right-7 top-[60%] w-[83%]"/></h1>
            <ul className="grid gap-4">
              {
                pokemon?.stats.map((stat)=>(
                <li key={stat.stat.name}>
                  <div className="flex justify-between items-center">
                    <h5>{stat.stat.name}</h5>
                    <span>{stat.base_stat} /255</span>
                  </div>
                  {/* //?barra total */}
                  <div className="bg-slate-100 rounded-md h-4">
                    {/* //?barra con valor */}
                    <div style={{width: getPercentStat(stat.base_stat)}} className={"bg-yellow-400 h-full rounded-sm"}></div>
                  </div>
                </li>))
              }
            </ul>
          </section>
        </section>
      </article>
      <div className="pt-10">
        <div className="h-[400px] max-w-[800px] mx-auto text-black bg-white shadow-lg">
          <h1 className="flex pl-[40px] text-3xl pt-8 pb-6 relative font-semibold">Movements <hr className="absolute bg-[#E5E5E5] flex right-7 top-[60%] w-[70%]"/></h1>
          {movements?.map((nam)=> (
            <li className="inline-block bg-[#E5E5E5] p-2 px-3 rounded-3xl m-3 " key={nam.move.url}>
              {nam.move.name}
            </li>
          ))} 
        </div>
      </div>
    </main>
  )
}

export default PokemonDetail
