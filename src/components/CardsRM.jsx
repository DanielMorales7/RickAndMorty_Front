export const CardsRM = ({character}) => {
  return (
    <div className="col-md-4 col-sm-12 mb-5">
        <div key={character.id} className="card">
            <div className="imgBx">
                <img src={character.image} alt="images"/>
            </div>
            <div className="details">
                <h2>{character.name}<br/><span>Estatus: {character.status}</span><br/> </h2>
            </div>
        </div>
    </div>
  )
}
