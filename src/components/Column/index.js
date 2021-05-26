import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./styles";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.groupName Nome do grupo que irá aparecer no header da Coluna
 * @param {String} props.options.buttonName (Opcional) Nome do botão que irá aparecer no footer da Coluna
 */

const Column = ({ children, options }) => {
  const { groupName, buttonName } = options || {};

  return (
    <Container>
      <div className="column-header">
        <h2>{groupName}</h2>
      </div>
      <div className="column-body">{children}</div>
      <div className="column-footer">
        <button>
          {buttonName !== "" && "Nova atividade"} <IoAdd />
        </button>
      </div>
    </Container>
  );
};

export default Column;
