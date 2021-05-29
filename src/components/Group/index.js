import React from "react";
import { IoAdd } from "react-icons/io5";
import { Container } from "./styles";
import Card from "../Card";
import { useDrop } from "react-dnd";
import PainelContext from "../Painel/context";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.groupName Nome do grupo que irá aparecer no header da Coluna
 * @param {String} props.options.buttonName (Opcional) Nome do botão que irá aparecer no footer da Coluna
 * @param {Array} props.options.groupCards Vetor de cards
 */

const Group = ({ data, groupIndex }) => {
  const { groupName, buttonName = "Novo", groupCards } = data || {};
  const { moveCard } = React.useContext(PainelContext);

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const indexGroupCurrent = item.groupIndex;
      const indexGroupLocalCardDragging = groupIndex;
      const indexCardDragging = item.cardIndex;

      if (indexGroupCurrent === indexGroupLocalCardDragging) {
        return;
      }

      moveCard(indexGroupCurrent, indexGroupLocalCardDragging, indexCardDragging);
      item.groupIndex = groupIndex;
    },
  });

  return (
    <Container>
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
          <IoAdd /> {buttonName}
        </button>
      </div>
    </Container>
  );
};

export default Group;
