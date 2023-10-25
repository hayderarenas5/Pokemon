import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import PokemonList from "../components/pokedex/PokemonList"
import HeaderPokeball from "../components/layauts/HeaderPokeball"
import { paginateData } from "../utils/pagination"

const Pokedex = () => {
  //? Aqui estan todos los pokemos
  const [pokemons, setPokemons] = useState([])

  const [pokemonName, setPokemonName] = useState("")

  const [types, setTypes] = useState([])

  const [currentType, setCurrentType] = useState("")

  const [currentPage, setCurrentPage] = useState(1)

  const trainerName= useSelector((store) => store.trainerName)

  const pokemonsByName =pokemons.filter((pokemon)=> pokemon.name.includes(pokemonName))

  const {itemsInCurrentPage, lastPage, pagesInCurrentBlock} =paginateData(pokemonsByName, currentPage)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setPokemonName(e.target.pokemonName.value.toLowerCase().trim())
  }

  const handleChangeType=(e)=>{
     setCurrentType(e.target.value)
  }

  const handlePreviusPage =()=>{
    const newCurrentPage = currentPage - 1
    if(newCurrentPage>=1){
      setCurrentPage(newCurrentPage)
    }

  }

  const handleNextPage =()=>{
    const newCurrentPage = currentPage + 1
    if(newCurrentPage <= lastPage) setCurrentPage(newCurrentPage)
  }

//?trae todos los pokemos
  useEffect(()=>{
    if (currentType==="") {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=1292")
      .then(({data})=> setPokemons(data.results))
      .catch((err)=> console.log(err))
    }
    
  },[currentType])

//?trae todos los types disponibles para los pokemosn

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/type/")
    .then(({data})=> setTypes(data.results))
    .catch((err)=> console.log(err))
  }, [])

//?trae todos los pokemons con base a un tipo
  useEffect(()=>{
    if (currentType !== "") {
        axios.get(`https://pokeapi.co/api/v2/type/${currentType}/`)
        .then(({data})=> {
          setPokemons(data.pokemon.map((pokemon)=> pokemon.pokemon))
        })
        .catch((err)=> console.log(err))
    }
  }, [currentType])

  //? solucion bug el cual no muestra paginas al cambiar de tipo de pokemon
  //Todo resetea la pagina al cambiar de tipo de pokemon
  useEffect(()=>{
    setCurrentPage(1)
  },[currentType])

  return (
    <main>
      <HeaderPokeball />
      <section className="grid justify-center mx-auto gap-5 py-10">
        <p>
          <span className="text-red-500 font-bold">Welcome {trainerName}, </span>
          here can find your favorite pokemon
        </p>
        <form className="flex gap-4"  onSubmit={handleSubmit} action="">
          <div className="flex">
            <input placeholder="Search for a Pokemon" className="bg-white shadow-lg pl-2 pt-1" name="pokemonName" type="text" />
            <button className="bg-[#D93F3F] text-white p-2">Search</button>
          </div>

          <select onChange={handleChangeType} className="capitalize shadow-lg w-[100px]">
            <option value="">All pokemon</option>
            {
              types.map((type)=>(<option value={type.name} key={type.url}>{type.name}</option>))
            }
          </select>
        </form>
      </section>

      <ul className="flex justify-center gap-4 flex-wrap">
        {
          currentPage !==1 &&(
            <li>
              <button onClick={handlePreviusPage}>{"<"}</button>
            </li>
          )
        }
        {pagesInCurrentBlock.map((page)=> (
          <li key={page}>
          <button onClick={()=>setCurrentPage(page)} className={`p-2 text-white font-bold rounded-md ${currentPage===page ? "bg-red-500" : "bg-red-200"}`}>{page}</button>
        </li>))}
        {
          currentPage !==lastPage &&(
            <li>
              <button onClick={handleNextPage}>{">"}</button>
            </li>
          )
        }
      </ul>

      <PokemonList pokemons={itemsInCurrentPage}/>-
    </main>
  )
}

export default Pokedex
