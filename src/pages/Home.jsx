import { useDispatch } from "react-redux"
import { setTrainerName } from "../store/slice/trainerName.slice"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const dispatch = useDispatch()
  const navigate= useNavigate()
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(setTrainerName(e.target.trainerName.value))
        navigate("pokedex")
    }

    
    return (
      <main className="min-h-screen grid grid-rows-[1fr_auto]">
        <section className="grid place-content-center text-center px-3">
          <div>
            <div>
              <img src="/images/logo.png" alt="" />
            </div>
            <div className="grid gap-2 justify-center">
              <h1 className="font-semibold text-red-500 text-[50px]">Hi Coach!</h1>
              <p className="font-semibold">To start give me your name:</p>
            </div>
            <form className="pt-4" onSubmit={handleSubmit}>
              <input
                className="w-[80%] h-[40px] shadow-md p-2"
                name="trainerName"
                type="text"
                placeholder="Your Name"
              />
              <button className="w-[20%] h-[40px] bg-red-500 hover:bg-red-600 text-white">
                Start
              </button>
            </form>
          </div>
        </section>
        <footer>
          <div className="bg-red-600 h-12"></div>
          <div className="bg-black/95 h-12 relative">
            <div className="h-12 w-12 bg-white border-8 border-black rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center">
              <div className="w-6 h-6 rounded-full bg-slate-800 border-[3px] border-black"></div>
            </div>
          </div>
        </footer>
      </main>
    );
}

export default Home
