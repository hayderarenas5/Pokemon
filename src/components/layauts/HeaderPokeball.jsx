
const HeaderPokeball = () => {
  return (
    <header>
          <div className="bg-red-600 h-12">
            <div className="h-full pl-4">
                <img className="h-[35px] xxs:h-full w-auto translate-y-4 relative z-10"  src="/images/logo.png" alt="" />
            </div>
          </div>
          <div className="bg-black/95 h-12 relative">
            <div className="h-16 w-16 bg-white border-8 border-black rounded-full absolute right-0 -translate-x-1/2 -translate-y-[15%] grid place-content-center">
              <div className="w-7 h-7 rounded-full bg-slate-800 border-[4px] border-black"></div>
            </div>
          </div>
    </header>
  )
}

export default HeaderPokeball
