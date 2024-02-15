import { useState } from "react";
import { livros } from "../../data/livros";
import './livros.css';
import Card from "../../components/card";

function Livros() {
    const [data, setData] = useState(livros);
    const [input, setInput] = useState("");
    const { Resultados } = data;


    const handleClick = () => {
        setData(livros);
        const newResultados = data.Resultados.filter((e) => e.Title === input);
        const newData = {
            Resultados: newResultados
        };

        setInput("");
        setData(newData);
    }

    return (
        <>
            <h2>Livros!</h2>

            <label htmlFor="">
                Procure um livro:
                <input type="text" value={input} onChange={({target}) => setInput(target.value)}/>
            </label>
            <button onClick={handleClick}>Procurar</button>


            <div className="div-cards">
                {data.Resultados.length === 0 ? <span>Tente outro valor!</span> : <Card propsData={Resultados}/>}
            </div>
        </>
    )
}

export default Livros;