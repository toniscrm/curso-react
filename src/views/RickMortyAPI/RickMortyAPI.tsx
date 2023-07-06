import { useState } from "react"
import axios from "axios"
import { RMPersonaje } from "../../models"
import { rickMortyInstance } from "../../assets/instances"

const RickMortyAPI = () => {
  const [id, setId] = useState("")
  const [personaje, setPersonaje] = useState<RMPersonaje | null>(null)

  const buscarPersonaje = async () => {
    /*const url = `https://rickandmortyapi.com/api/character/${id}`
    try {
      const res = await axios.get(url)
      setPersonaje(res.data)
    } catch (e) {
      console.error(e)
    }*/
    try {
      const { data } = await rickMortyInstance(id)
      setPersonaje(data)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Introduce el id"
      />
      <button onClick={buscarPersonaje}>Buscar</button>

      {personaje && (
        <div>
          <h2>
            {personaje.id}. {personaje.name}
          </h2>
          <img src={personaje.image} alt={personaje.name} />
        </div>
      )}
    </div>
  )
}

export default RickMortyAPI
