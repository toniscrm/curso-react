import { useState } from "react"
interface IProps {
  valorInicial: number
}

const ContadorFuncional = ({valorInicial}: IProps) => {
  const [getValorContador, setValorContador] = useState(valorInicial)

  const incrementarContador = () => {
    //setValorContador(getValorContador + 1)    
    setValorContador(valorAnterior => valorAnterior +2)    
  }

  return (
    <>
      <div>
        <h1>Contador</h1>
        <span>Valor: {getValorContador}</span>
        <button onClick={incrementarContador}>Incrementa</button>
      </div>
    </>
  )
}

export default ContadorFuncional