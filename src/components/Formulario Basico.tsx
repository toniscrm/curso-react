import { useRef, useState } from "react"

const Formulario = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [apellido, setApellido] = useState("")

  const handleSubmit = (evento: React.FormEvent) => {
    evento.preventDefault()

    const valorImput = inputRef.current?.value || ""
    console.log("Valor del nombre: ", valorImput)
    console.log("Valor del apellido: ", apellido)
  }

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setApellido(evento.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Tu nombre" />
      <br/>
      <input type="text" placeholder="Tu apellido" value={apellido} onChange={handleChange}/>
      <br/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
