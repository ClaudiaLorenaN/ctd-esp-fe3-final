import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../utils/global.context";

const Card = ({ char }) => {
  const {setFavs} = useCharStates();
  const addFav = () => {
    setFavs((favs) => [...favs, char]);
    
    // Aqui iria la logica para agregar la Card en el localStorage

  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={"/detail/" + char.id}>
        <img
          src="/images/doctor.jpg"
          alt="Doctor"
          style={{ width: "100px", height: "100px" }}
        />
        <h2>{char.id}</h2>
        <h2>{char.name}</h2>
        <h2>{char.username}</h2>        
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      <button onClick={addFav} className="favButton">
        Añadir favorito ❤️
      </button>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      
    </div>
  );
};

export default Card;
