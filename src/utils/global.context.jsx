import { createContext, useContext } from "react";
import { useState } from "react";
import React, { useEffect } from "react";
import axios from "axios";

//tema de claro a oscuro y visceversa
export const initialState = { theme: "", data: [] };

export const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

//tema de claro a oscuro y visceversa
const lsTheme = localStorage.getItem("theme") || "light";

const Context = ({ children }) => {
  //tema de claro a oscuro y visceversa
  const [theme, setTheme] = useState(lsTheme);

  const [favs, setFavs] = useState(lsFavs);
  const [list, setList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setList(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  //tema de claro a oscuro y visceversa
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <CharStates.Provider value={{ theme, setTheme, favs, setFavs, list }}>

    {/*}tema de claro a oscuro y visceversa*/}
      <div className={theme}> {/* Aplica la clase del tema */}
        {children}
      </div>
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => {
  return useContext(CharStates);
};
