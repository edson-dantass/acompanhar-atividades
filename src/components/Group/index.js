import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./styles";
import Card from "../Card";
import { useDrop } from "react-dnd";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.groupName Nome do grupo que irá aparecer no header da Coluna
 * @param {Array} props.options.groupCards Vetor de cards
 */

const Group = ({ data, groupIndex }) => {
  const { nome: groupName, atividade: groupCards } = data || {};

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => ({
      indexGroupCurrent: item.groupIndex,
      indexCardDragging: item.cardIndex,
      indexGroupLocalCardDragging: groupIndex,
    }),
  });

  return (
    <Container ref={dropRef}>
      <div className="group-header">
        <h2>{groupName}</h2>
      </div>
      <div className="group-body" ref={dropRef}>
        {groupCards.map((card, index) => (
          <Card key={card.id} data={card} groupIndex={groupIndex} cardIndex={index} />
        ))}
      </div>
      <div className="group-footer">
        <button>
          <IoAdd /> Nova Atividade
        </button>
      </div>
    </Container>
  );
};

export default Group;
