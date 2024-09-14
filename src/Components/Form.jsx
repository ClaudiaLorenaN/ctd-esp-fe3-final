import React from "react";
import { useState } from "react";
import ExitMessage from "./ExitMessage";
import ErrorMessage from "./ErrorMessage";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    name: "",
    email: "",
  });
  console.log(usuario);

  const [show, setShow] = useState(false);

  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setUsuario({ ...usuario, name: event.target.value });
  };

  const handleChangeEmail = (event) => {
    setUsuario({ ...usuario, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("regex", emailRegex.test(usuario.email));
    // valid email: example.user+123@gmail.com

    if (
      usuario.name.trim().length >= 3 &&
      emailRegex.test(usuario.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {show ? (
        <ExitMessage usuario={usuario} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
              type="text"
              value={usuario.name}
              onChange={handleChangeName}
            />
            <label>Email:</label>
            <input
              type="text"
              value={usuario.email}
              onChange={handleChangeEmail}
            />
            <button>Enviar</button>
          </form>
        </>
      )}

      {error ? (
        <ErrorMessage />
      ) : null}
    </>
  );
};

export default Form;
