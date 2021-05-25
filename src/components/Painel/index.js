import React from "react";
import Header from "../Header";
import { Container, Column } from "./styles";
import { IoAdd } from "react-icons/io5";

const Painel = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <div className="column-header">
            <h2>Planejamento</h2>
          </div>
          <div className="colum-body"></div>
          <div className="colum-footer">
            <button>
              Nova atividade <IoAdd />
            </button>
          </div>
        </Column>
      </Container>
    </>
  );
};

export default Painel;
