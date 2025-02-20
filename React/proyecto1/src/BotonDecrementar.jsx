import React, { useState } from 'react';

const BotonDecrementar = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <h3>Botón Decrementar</h3>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
            <br />
            <input 
                type="number" 
                value={contador} 
                onChange={(e) => setContador(Number(e.target.value))} 
            />
        </div>
    );
};

export default BotonDecrementar;