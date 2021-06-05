import React from "react";
import { IoAdd, IoTrashOutline, IoCreateOutline, IoCheckmarkOutline } from "react-icons/io5";
import { Container } from "./styles";
import Card from "../Card";
import { useDrop } from "react-dnd";
import { update, index, destroy } from "../../services/api";
import PainelContext from "../Painel/context";
import { useModal } from "../../Hooks/Modal";

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
  const { setModal } = useModal();
  const { setGroups } = React.useContext(PainelContext);

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => ({
      groupId: data?.id,
      indexGroupCurrent: item.groupIndex,
      indexCardDragging: item.cardIndex,
      indexGroupLocalCardDragging: groupIndex,
    }),
  });

  async function handleEditNameGroup() {
    if (inputRef.current.value !== "") {
      await update("/grupo", {
        id: data.id,
        nome: inputRef.current.value,
      });
      const response = await index("/grupos");
      if (response) {
        setGroups(response.data);
      }
      inputRef.current.value = "";
      handleEditNameGroup();
    } else {
      inputRef.current.focus();
      setInputName(!inputName);
    }
  }

  function handlePressEditName(event) {
    if (event.which === 13) {
      handleEditNameGroup();
    }
  }

  async function handleDeleteGroup() {
    const result = window.confirm("Tem certeza que deseja fazer esta operação ? Isso apagará todas as atividades.");
    if (result) {
      await destroy("/grupo/" + data?.id);
      const response = await index("/grupos");
      if (response) {
        setGroups(response.data);
      }
    }
  }
  return (
    <>
      <Container inputName={inputName} ref={dropRef}>
        <div className="group-header">
          <div className="group-header-name">
            <input ref={inputRef} type="text" placeholder={data?.nome} onKeyPress={handlePressEditName} />
            <h2>{groupName}</h2>
          </div>
          <div className="group-header-actions">
            <div className="action" title="Editar" onClick={handleEditNameGroup}>
              {!inputName && <IoCreateOutline />}
              {inputName && <IoCheckmarkOutline />}
            </div>
            <div className="action" title="Excluir" onClick={handleDeleteGroup}>
              <IoTrashOutline className="red" />
            </div>
          </div>
        </div>
        <div className="group-body" ref={dropRef}>
          {groupCards.map((card, index) => (
            <Card key={card.id} data={card} groupIndex={groupIndex} cardIndex={index} groupId={data.id} />
          ))}
        </div>
        <div className="group-footer">
          <button
            type="button"
            onClick={() =>
              setModal({
                active: true,
                typeModal: "CREATE ATIVIDADE",
                data: {
                  id: data?.id,
                },
              })
            }
          >
            <IoAdd /> Nova Atividade
          </button>
        </div>
      </Container>
    </>
  );
};

export default Group;
