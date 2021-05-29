import React from "react";
import { Container } from "./styles";
import { IoTimeOutline } from "react-icons/io5";
import { useDrag, useDrop } from "react-dnd";
import PainelContext from "../Painel/context";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.cardDescription Descrição do card
 * @param {"red" | "green"} props.options.cardTagColor Cor da etiqueta de data
 * @param {String} props.options.date Data para conclusão da atividade
 * @param {Number} props.options.index índice do array
 */

const Card = ({ data, groupIndex, cardIndex }) => {
  const { cardDescription, cardTagColor, date } = data || {};
  const ref = React.useRef(null);
  const { moveCardCurrentGroupe } = React.useContext(PainelContext);
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { type: "CARD", groupIndex, cardIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const indexCardDragging = item.cardIndex;
      const indexCardDownDragging = cardIndex;

      if (indexCardDragging === indexCardDownDragging) {
        return;
      }

      const hoverBoundingRect = ref?.current.getBoundingClientRect();

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (indexCardDragging < indexCardDownDragging && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (indexCardDragging > indexCardDownDragging && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCardCurrentGroupe(indexCardDragging, indexCardDownDragging, groupIndex);
      item.cardIndex = indexCardDownDragging;
      item.groupIndex = indexCardDragging;
    },
  });
  dragRef(dropRef(ref));
  return (
    <>
      <Container ref={ref} isDragging={isDragging}>
        <div className="card-body">{cardDescription}</div>
        {date && (
          <div className="card-footer">
            <div className={`tag-time ${cardTagColor}`}>
              <IoTimeOutline /> {date}
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Card;
