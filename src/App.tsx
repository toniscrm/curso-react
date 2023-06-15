import "./App.css"
import ContadorFuncional from "./components/ContadorFuncional"
import ContadorClase from "./components/ContadorClase"

function App() {
  return (
    <div>
      <ContadorFuncional valorInicial={5}/>
      <ContadorClase valorInicial={8}/>
    </div>
  )
}
export default App