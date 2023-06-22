import { Component } from "react"

export default class CicloVidaClase extends Component<{ contador: number }> {
  state = {
    nombre: "",
    apellidos: "",
    email: "",
  }
  componentDidMount(): void {
    console.log("El componente se ha montado")
  }

  shouldComponentUpdate(nextProps: Readonly<{ contador: number }>): boolean {
    console.log(nextProps.contador)
    return nextProps.contador % 2 === 0
  }

  componentDidUpdate(): void {
    console.log("El componente se ha montado")
  }

  componentWillUnmount(): void {
    console.log("El componente se ha desmontado")
  }

  render() {
    const { contador } = this.props
    return <div>Contador {contador}</div>
  }
}