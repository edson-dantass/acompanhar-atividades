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

const Card = ({ data, index, groupIndex }) => {
  const { cardDescription, cardTagColor, date } = data || {};
  const ref = React.useRef();
  const { moveCard } = React.useContext(PainelContext);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { type: "CARD", index, groupIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const cardDragging = item.index;
      const cardDown = index;

      if (cardDragging === cardDown) {
        return;
      }
      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const offset = monitor.getClientOffset();
      const dragPosition = offset.y - targetSize.top;

      if (cardDragging < cardDown && dragPosition < targetCenter) {
        return;
      }
      if (cardDragging > cardDown && dragPosition > targetCenter) {
        return;
      }

      moveCard(groupIndex, cardDragging, cardDown);
      item.index = cardDown;
    },
  });

  dropRef(dragRef(ref));
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
