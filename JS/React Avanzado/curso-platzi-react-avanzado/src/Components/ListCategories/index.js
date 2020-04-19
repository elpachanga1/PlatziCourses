import React, { Fragment, useState, useEffect } from "react";
import { Category } from "../Categories";
import { List, Item } from "./styles";
import Spinner from "../../Styles/Spinner/Spinner";

//custom hook
function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  //con el array vacio el useEffect solo se ejecutara en el montaje inicial
  //asi como componentDidMount
  useEffect(function () {
    setLoading(true);
    fetch("https://petgram-server.mimudev.now.sh/cateegories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
}

export const ListCategories = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  //aqui useEffect funciona como un componentDidUpdate
  //acordarse que el componentDidUpdate se ejecuta siempre, por eso debe de ser condicionado para no refrescar infinitamente el state
  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      //se quita el evento para que no se ejecute infinitamente si se sale de la pantalla o algo asi
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed] //se agrega dependencia showFixed para que el useEffect solo se ejecute si dicha variable cambia
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading ? (
        <Item key="loading">
          <Spinner />
        </Item>
      ) : (
        categories.map((category) => (
          <Item key={category.id}>
            <Category {...category} />
          </Item>
        ))
      )}
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
