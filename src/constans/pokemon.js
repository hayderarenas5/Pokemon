const bgByType = {
    normal: "bg-gradient-to-t from-[#7C3F4C] to-[#735259]",
    fighting: "bg-gradient-to-t from-[#CB735D] to-[#96402A]",
    flying: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F]",
    poison: "bg-gradient-to-t from-[#CE9BFF] to-[#5B3184]",
    ground: "bg-gradient-to-t from-[#D69638] to-[#654008]",
    rock: "bg-gradient-to-t from-[#D3D3D3] to-[#7E7E7E]",
    bug: "bg-gradient-to-t from-[#3BB039] to-[#62DB60]",
    ghost: "bg-gradient-to-t from-[#787DDA] to-[#323569]",
    steel: "bg-gradient-to-t from-[#A8A8A8] to-[#5E736C]",
    fire: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F]",
    water: "bg-gradient-to-t from-[#82B2F1] to-[#1479FB]",
    grass: "bg-gradient-to-t from-[#CAE099] to-[#7EC6C5]",
    electric: "bg-gradient-to-t from-[#7075D9] to-[#0C1395]",
    psychic: "bg-gradient-to-t from-[#765DD4] to-[#3410BD]",
    ice: "bg-gradient-to-t from-[#6FBEDF] to-[##BDEBFE]",
    dragon: "bg-gradient-to-t from-[#478A93] to-[#478A93]",
    dark: "bg-gradient-to-t from-[#5A5E5D] to-[#030706]",
    fairy: "bg-gradient-to-t from-[#CD7D98] to-[#971B45]",
    unknown: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F]",
    shadow: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F]",
  };

const detailPokemon={
    normal: "bg-[#24CB85] text-white px-2",
    fighting: "bg-gradient-to-t from-[#CB735D] to-[#96402A] text-white px-2",
    flying: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F] text-white px-2",
    poison: "bg-gradient-to-t from-[#CE9BFF] to-[#5B3184] text-white px-2",
    ground: "bg-gradient-to-t from-[#D69638] to-[#654008] text-white px-2",
    rock: "bg-gradient-to-t from-[#D3D3D3] to-[#7E7E7E] text-white px-2",
    bug: "bg-gradient-to-t from-[#3BB039] to-[#62DB60] text-white px-2",
    ghost: "bg-gradient-to-t from-[#787DDA] to-[#323569] text-white px-2",
    steel: "bg-gradient-to-t from-[#A8A8A8] to-[#5E736C] text-white px-2",
    fire: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F] text-white px-2",
    water: "bg-gradient-to-t from-[#82B2F1] to-[#1479FB] text-white px-2",
    grass: "bg-gradient-to-t from-[#CAE099] to-[#7EC6C5] text-white px-2",
    electric: "bg-gradient-to-t from-[#7075D9] to-[#0C1395] text-white px-2",
    psychic: "bg-gradient-to-t from-[#765DD4] to-[#3410BD] text-white px-2",
    ice: "bg-gradient-to-t from-[#6FBEDF] to-[##BDEBFE] text-white px-2",
    dragon: "bg-gradient-to-t from-[#478A93] to-[#478A93] text-white px-2",
    dark: "bg-gradient-to-t from-[#5A5E5D] to-[#030706] text-white px-2",
    fairy: "bg-gradient-to-t from-[#CD7D98] to-[#971B45] text-white px-2",
    unknown: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F] text-white px-2",
    shadow: "bg-gradient-to-t from-[#E8AE1B] to-[#F96D6F] text-white px-2",
}

const borderByType={
    normal: "border-[#BA707F]",
    fighting: "border-[#96402A]",
    flying: "border-[#BA707F]",
    poison: "border-[#5B3184]",
    ground: "border-[#654008]",
    rock: "border-[#7E7E7E]",
    bug: "border-[#4AB648]",
    ghost: "border-[#323569]",
    steel: "border-[#5E736C]",
    fire: "border-orange-400",
    water: "border-[#83B9FF]",
    grass: "border-[#B1DBBC]",
    electric: "border-[#0C1395]",
    psychic: "border-[#3110AC]",
    ice: "border-[#6FBEDF]",
    dragon: "border-[#478A93]",
    dark: "border-[#0B0E0D]",
    fairy: "border-[#971B45]",
    unknown: "border-orange-400",
    shadow: "border-orange-400",
  };

  const keysN=Object.keys(detailPokemon)

  
  export { bgByType, borderByType, detailPokemon, keysN };