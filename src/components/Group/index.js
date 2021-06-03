import React from "react";
import { IoAdd, IoTrashOutline, IoCreateOutline, IoCheckmarkOutline } from "react-icons/io5";
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
  const [inputName, setInputName] = React.useState(false);
  const inputRef = React.useRef();

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => ({
      indexGroupCurrent: item.groupIndex,
      indexCardDragging: item.cardIndex,
      indexGroupLocalCardDragging: groupIndex,
    }),
  });

  function handleEditNameGroup() {
    inputRef.current.focus();
    inputRef.current.value = "";
    setInputName(!inputName);
  }
  return (
    <Container inputName={inputName} ref={dropRef}>
      <div className="group-header">
        <div className="group-header-name">
          <input ref={inputRef} type="text" placeholder="Editar nome do grupo" />
          <h2>{groupName}</h2>
        </div>
        <div className="group-header-actions">
          <div className="action" title="Editar" onClick={handleEditNameGroup}>
            {!inputName && <IoCreateOutline />}
            {inputName && <IoCheckmarkOutline />}
          </div>
          <div className="action" title="Excluir">
            <IoTrashOutline className="red" />
          </div>
        </div>
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
