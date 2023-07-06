import axios from "axios"

const token = "uf29j23fj2jffo298fj2f-2ffj2o3f2-f28fj2jf-d92fj"

export const rickMortyInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/character",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
    },
    method: "GET"
})