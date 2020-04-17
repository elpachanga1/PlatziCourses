import React from "react";

import { GlobalStyle } from "./Styles/GlobalStyles";
import { ListCategories } from "./Components/ListCategories";
import { ListPhotoCards } from "./Components/ListPhotoCards";
import Logo from "./Components/Logo";

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <ListCategories />
    <ListPhotoCards />
  </>
);
