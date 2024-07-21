import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)

    
    return (
        <>
            <div className="container mt-4">

                <button onClick={() => setContador(contador + 1)}className="btn btn-primary">+</button>
                <h1>{contador}</h1>
                <button
                    onClick={() => setContador(contador - 1)}className="btn btn-danger">-</button>
            </div>
        </>
    )
}

export default Contador