import "./App.css"
import CicloVidaClase from "./components/CicloVidaClase"
import { useState } from "react"

function App() {
  const [contador, setContador] = useState(0)
  return (
    <div>
      <CicloVidaClase contador={1} />
      <button onClick={() => setContador(v => v + 1)}>Incrementa</button>
    </div>
  )
}
export default App