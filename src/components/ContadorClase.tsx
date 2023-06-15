import { Component } from "react"

export default class ContadorClase extends Component<{valorInicial: number}> {
  state = {
    contador: this.props.valorInicial,
  }

  incrementarContador = () => {
    this.setState({
      contador: this.state.contador + 1,
    })
  }

  render() {
    const { contador } = this.state
    return (
      <>
        <div>
          <h1>Contador</h1>
          <span>Valor: {contador}</span>
          <button onClick={this.incrementarContador}>Incrementa</button>
        </div>
      </>
    )
  }
}
