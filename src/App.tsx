import "./App.css"
import CicloVidaClase from "./components/CicloVidaClase"
import CicloVidaFuncional from "./components/CicloVidaFuncional"
import { useState } from "react"

function App() {
  const [contador, setContador] = useState(0)

  const incrementarContador = () => {
    setContador(contador => contador +1) 
  }
  return (
    <div>
      {/*(contador < 10 || contador > 12) ? <CicloVidaClase contador={contador}/> : null*/}
      <button onClick={incrementarContador}>Incrementa</button>   

      {(contador < 10 || contador > 12) ? <CicloVidaFuncional contador={contador} /> : null}
    </div>
  )
}
export default App