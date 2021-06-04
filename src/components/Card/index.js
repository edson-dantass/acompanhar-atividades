import React from "react";
import { Container } from "./styles";
import { IoTimeOutline } from "react-icons/io5";
import { useDrag, useDrop } from "react-dnd";
import PainelContext from "../Painel/context";
import { useModal } from "../../Hooks/Modal/";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.cardDescription Descrição do card
 * @param {Number} props.options.index índice do array
 */

const Card = ({ data, groupIndex, cardIndex, groupId }) => {
  const { nome: cardDescription, dataTermino } = data || {};
  const { moveCard, moveCardCurrentGroupe } = React.useContext(PainelContext);
  const { setModal } = useModal();
  const ref = React.useRef(null);

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { type: "CARD", groupIndex, cardIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),

    // Responsável por monitorar se o usuário soltou o Card ou não
    end: (item, monitor) => {
      const propsResult = monitor.getDropResult();

      // Verifica se o usuário soltou o Card em uma área de drop
      if (propsResult) {
        const { indexGroupCurrent, indexGroupLocalCardDragging, indexCardDragging } = propsResult;
        /* Evita disparar a função MoveCard() quando se arrasta por cima de outro card, pois esta função é apenas
        responsável por soltar Cards dentro de grupos e não cards por cima de cards. */
        if (indexGroupCurrent === indexGroupLocalCardDragging) {
          return;
        }
        moveCard(indexGroupCurrent, indexGroupLocalCardDragging, indexCardDragging);
      }
    },
  });

  const [, dropRef] = useDrop({
    accept: "CARD",

    hover(item, monitor) {
      const indexCardDragging = item.cardIndex;
      const indexCardDownDragging = cardIndex;
      if (indexCardDragging === indexCardDownDragging) {
        return;
      }
      if (groupIndex !== item.groupIndex) {
        return;
      }
      const hoverBoundingRect = ref?.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (indexCardDragging < indexCardDownDragging && hoverClientY < hoverMiddleY) {
        return;
      }

      if (indexCardDragging > indexCardDownDragging && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCardCurrentGroupe(indexCardDragging, indexCardDownDragging, groupIndex);
      item.cardIndex = indexCardDownDragging;
    },
  });

  const formatedDate = () => {
    if (dataTermino) {
      const date = dataTermino?.split("-").reverse().join("/");
      return date;
    }
  };

  const colorTagDate = () => {
    if (!data?.finalizado) {
      const date = new Date(dataTermino?.split("/").reverse().join("/"));
      const novaData = new Date();
      return date < novaData ? "red" : "";
    } else {
      return "green";
    }
  };

  dragRef(dropRef(ref));
  return (
    <>
      <Container
        ref={ref}
        isDragging={isDragging}
        onClick={() =>
          setModal({
            active: true,
            typeModal: "EDIT ATIVIDADE",
            data: {
              id: data?.id,
              groupId,
            },
          })
        }
      >
        <div className="card-body">{cardDescription}</div>
        {dataTermino && (
          <div className="card-footer">
            <div className={`tag-time ${colorTagDate()}`}>
              <IoTimeOutline /> {formatedDate()}
            </div>
            <h6>
              {colorTagDate() === "green" && "Finalizado"}
              {colorTagDate() === "red" && "Em atraso"}
              {colorTagDate() === "" && "Pendente"}
            </h6>
          </div>
        )}
      </Container>
    </>
  );
};

export default Card;
