import "./App.css"
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional from "./components/ComponenteFuncional"
import SaludoClase from "./components/SaludoClase"

const saludo = <h1>Hola mundo</h1>

const Boton = () => {
  return <button>Soy un boton</button>
}

function App() {
  return (
    <div>
      {saludo}
      <Boton></Boton>
      <ComponenteClase></ComponenteClase>
      <ComponenteFuncional></ComponenteFuncional>
      <SaludoClase nombre="Natalia" edad={25}></SaludoClase>
    </div>
  )
}
export default App
