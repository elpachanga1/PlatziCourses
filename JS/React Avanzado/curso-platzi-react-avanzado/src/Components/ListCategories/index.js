import React, { useState, useEffect } from "react";
import { Category } from "../Categories";
import { List, Item } from "./styles";

export const ListCategories = () => {
  const [categories, setCategories] = useState([]);

  //con el array vacio el useEffect solo se ejecutara en el montaje inicial
  //asi como componentDidMount
  useEffect(function () {
    fetch("https://petgram-server.mimudev.now.sh/cateegories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <List>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
