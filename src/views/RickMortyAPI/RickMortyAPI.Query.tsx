import { useState } from "react"
import axios, { AxiosResponse } from "axios"
import { useQuery } from "@tanstack/react-query"
import { RMPersonaje } from "../../models"

const RickMortyQuery = () => {
    const [id, setId] = useState("")
    const [personaje, setPersonaje] = useState<RMPersonaje | null>(null)

    const { data, isFetching, error } = useQuery<AxiosResponse<RMPersonaje>>({
        queryKey: ["rm-personaje"],
        queryFn: () =>
            axios.get(`https://rickandmortyapi.com/api/character/${id}`),
        enabled: id !== "",
        // onSuccess: ({ data }) => {
        //     console.log(data)
        //     setPersonaje(data)
        // },
    })

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Introduce el id"
            />

            {isFetching && <h2>Cargando...</h2>}

            {!error && personaje && (
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

export default RickMortyQuery
