function Card({propsData}) {
    return (
        propsData.map((e, i) => (
            <div className="div-card" key={i}>
                <h4>{e.Title}</h4>
                <img src={e.Poster} />
                <p>{e.Genre}</p>
                <p>{e.Year}</p>
                <p>{e.Writer}</p>
            </div>
        ))
    )
}

export default Card;