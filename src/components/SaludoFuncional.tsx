interface IProps {
    nombre: string
}

const SaludoFuncional = ({nombre}: IProps) => {
    return <div>Hola {nombre}</div>
}

export default SaludoFuncional