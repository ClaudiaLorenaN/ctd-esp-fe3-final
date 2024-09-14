import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useCharStates();

  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((char) => (
          <Card key={char.id} char={char} />
          
        ))}
      </div>
    </>
  );
};

export default Favs;
