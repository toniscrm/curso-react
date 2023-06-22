import { useEffect } from "react"

const CicloVidaFuncional = ({contador}: {contador: number}) => {
    useEffect(() => {
        console.log("El componente se ha montado")
    }, [])

    useEffect(() => {
        console.log("El contador ha cambiado", contador)
    }, [contador])

    useEffect(() => {
        return () => {
            console.log("El componente va a desmontarse")
        }
    }, [])

    return <div>CicloVidaFuncional: {contador}</div>
}

export default CicloVidaFuncional