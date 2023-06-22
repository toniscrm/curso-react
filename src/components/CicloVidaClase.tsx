import {Component} from 'react'

export default class CicloVidaClase extends Component <{contador: number}>{
    render(){
        const {contador} = this.props
        return (
            <div>Contador {contador}</div>
        )

    }
}