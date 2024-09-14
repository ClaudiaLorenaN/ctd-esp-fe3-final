import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  //tema de claro a oscuro y visceversa
  const { theme, setTheme } = useCharStates();
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">
        <h4>Página principal</h4>
      </Link>
      <Link to="/favs">
        <h4>Favoritos</h4>
      </Link>
      <Link to="/contact">
        <h4>Contáctenos</h4>
      </Link>


      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {/*tema de claro a oscuro y visceversa*/}
      <button className="theme" onClick={toggleTheme} title="Theme">
        {theme === "light" ? "🌃" : "🌄"}
      </button>
    </nav>
  );
};

export default Navbar;
