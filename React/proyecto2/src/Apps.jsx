import React, { useState } from 'react';
import Hijo2 from './Hijo2';
import Hijo3 from './Hijo3';


const Apps = () => {
        //para los tipos number en el useState es 0 
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    //para los tipos string en el useState es entre comillas 
    const [nombre, setNombre] = useState("");
    const [nombre2, setNombre2] = useState("");



    return (
        <div>
            <h3>Notas De clase</h3>
            {/* <Hijo2>Nota de {nombre}:{nota1}</Hijo2>
            <Hijo3>Nota de {nombre2}:{nota2}</Hijo3> */}

            {/* De esta manera debe ser ya que esperan props como atributos, por lo que deberías pasarlos así: */}
            <Hijo2 nombre={nombre} nota1={nota1} />
            <Hijo3 nombre2={nombre2} nota2={nota2} />

            <button onClick={() => setNota2(Math.floor(Math.random() * 10) + 1)}>Nota para Sid</button>
            <input type="text"value={nombre} onChange={(e) => setNombre(e.target.value)}/>

            <button onClick={() => setNota1(Math.floor(Math.random() * 10) + 1)}>Nota para Carlos</button>
            <input type="text"value={nombre2} onChange={(e) => setNombre2(e.target.value)}/>


            <br/>
            {/* <input 
                type="number" 
                value={contador} 
                onChange={(e) => setContador(Number(e.target.value))} 
            /> */}
        </div>
    );
};

export default Apps;