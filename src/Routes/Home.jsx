import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useCharStates } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//La API a utilizar sera la siguiente: https://jsonplaceholder.typicode.com/users
//Y para cada dentista en especifico: https://jsonplaceholder.typicode.com/users/:id

const Home = () => {
  const { list } = useCharStates();
  

  return (
    <>
      <h1>Conozca excelentes profesionales</h1>
      <main className="">
        <div className="card-grid">
          { list.map( (char)=> <Card key={char.id} char = {char}/>)}
          {/* Aqui deberias renderizar las cards */}
        </div>
      </main>
    </>
  );
};

export default Home;
