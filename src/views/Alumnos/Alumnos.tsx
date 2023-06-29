import { alumnos } from "../../assets"

const Alumnos = () => {
    console.table(alumnos)
    return <div>
        <h2>Alumnos React</h2>
        {alumnos.map((alumno, indice, arrayCompleto) => {
            return <p>{alumno.nombre} - {alumno.email}</p>
        })}
    </div>
}

export default Alumnos
