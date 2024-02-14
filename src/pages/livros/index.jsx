import { useState } from "react";
import { livros } from "../../data/livros";
import './livros.css';

function Livros() {
    const [data, setData] = useState(livros);
    const { Resultados } = data;

    return (
        <>
            <h2>Livros!</h2>

            <div className="div-cards">
                {
                    Resultados.map((e, i) => (
                        <div className="div-card" key={i}>
                            <h4>{e.Title}</h4>
                            <img src={e.Poster} />
                            <p>{e.Genre}</p>
                            <p>{e.Year}</p>
                            <p>{e.Writer}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Livros;