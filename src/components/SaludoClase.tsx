import { Component } from "react"

type TipoProps = {
  nombre: string
  edad: number
}

export default class SaludoClase extends Component<TipoProps> {
  render() {
    //const nombre = this.props.nombre
    //const edad = this.props.edad

    const { nombre, edad } = this.props

    return (
      <div>
        Hola {nombre}, tu edad es {edad}
      </div>
    )
  }
}
