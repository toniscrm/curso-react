import { Component } from "react"

export default class CicloVidaClase extends Component<{ contador: number }> {
  componentDidMount(): void {
    console.log("El componente se ha montado")
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