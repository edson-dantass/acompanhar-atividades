import React from "react";
import { Container } from "./styles";
import { IoTimeOutline } from "react-icons/io5";

/**
 *
 * @param {Object} props
 * @param {Object} props.options
 * @param {String} props.options.cardDescription Descrição do card
 * @param {"red" | "green"} props.options.cardTagColor Cor da etiqueta de data
 * @param {String} props.options.date Data para conclusão da atividade
 */

const Card = ({ options }) => {
  const { cardDescription, cardTagColor, date } = options || {};

  return (
    <Container>
      <div className="card-body">{cardDescription}</div>
      {date && (
        <div className="card-footer">
          <div className={`tag-time ${cardTagColor}`}>
            <IoTimeOutline /> {date}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Card;
