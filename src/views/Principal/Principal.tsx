import { useState } from "react"

const Principal = () => {
  const [toggle, setToggle] = useState(true)

  //if (toggle) return <div>El interruptor está encendido</div>
  //return <div>El interruptor está apagado</div>

  //return <div>
  //  {toggle ? <h3>Encendido</h3> : <h3>Apagado</h3>}
  //  <button onClick={() => setToggle((prev) => !prev)}>Switch</button>
  //</div>

  return (
    <>
      {toggle && (
        <div>
          {toggle ? <h3>Encendido</h3> : <h3>Apagado</h3>}
          {toggle && <p>El interruptor está encendido</p>}
        </div>
      )}
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? "On" : "Off"}
      </button>
    </>
  )
}

export default Principal
