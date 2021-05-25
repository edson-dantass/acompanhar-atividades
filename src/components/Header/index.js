import React from "react";
import {
  IoSearch,
  IoExitOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <li className="search-container">
        <IoSearch />
        <input type="search" name="buscar" placeholder="Buscar" />
      </li>
      <li className="actions-container">
        <a href="#">
          <IoNotificationsOutline />
        </a>
        <a href="#">
          <IoExitOutline />
        </a>
      </li>
    </Container>
  );
};

export default Header;
