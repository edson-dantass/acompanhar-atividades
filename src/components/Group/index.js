import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./styles";
import Card from "../Card";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.groupName Nome do grupo que irá aparecer no header da Coluna
 * @param {String} props.options.buttonName (Opcional) Nome do botão que irá aparecer no footer da Coluna
 * @param {Array} props.options.groupCards Vetor de cards
 */

const Group = ({ data }) => {
  const { groupName, buttonName = "Novo", groupCards } = data || {};

  return (
    <Container>
      <div className="group-header">
        <h2>{groupName}</h2>
      </div>
      <div className="group-body">
        {groupCards.map((card, index) => (
          <Card key={card.id} data={card} index={index} />
        ))}
      </div>
      <div className="group-footer">
        <button>
          {buttonName} <IoAdd />
        </button>
      </div>
    </Container>
  );
};

export default Group;
