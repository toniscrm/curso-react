import "./App.css"
import Formulario from "./components/Formulario"

function App() {
  return (
    <>
    <Formulario></Formulario>
    <button onClick={() => alert("Has hecho click en react")}>Click</button>
    </>
  )
}
export default App