import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);

  return (
    <>
      <h1>Nombre: {detail.name}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <img
        src="/images/doctor.jpg"
        alt="doctor"
        style={{ width: "100px", height: "100px" }}
      />
      <h3>Email: {detail.email}</h3>
      <h3>Teléfono: {detail.phone}</h3>
      <h3>Sitio web: {detail.website}</h3>

      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
