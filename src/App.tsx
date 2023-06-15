import "./App.css"
import SaludoClase from "./components/SaludoClase"
import SaludoFuncional from "./components/SaludoFuncional"

function App() {
  return (
    <div>
      <SaludoClase nombre="Natalia" edad={25}></SaludoClase>
      <SaludoFuncional nombre="Natalia"></SaludoFuncional>
    </div>
  )
}
export default App