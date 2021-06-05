import React from "react";
import { IoClose, IoCheckmarkOutline } from "react-icons/io5";
import { create, index } from "../../services/api";
import PainelContext from "../Painel/context";

const ModalCreateAtividade = ({ modal, setModal }) => {
  const inputRef = React.useRef();
  const { setGroups } = React.useContext(PainelContext);

  async function handleCreateNameCard() {
    if (inputRef.current.value !== "") {
      await create("/atividade/" + modal?.data?.id, {
        nome: inputRef.current.value,
      });
      const response = await index("/grupos");
      if (response) {
        setGroups(response.data);
      }
      inputRef.current.value = "";
      setModal({ ...modal, active: false });
    }
  }
  function handlePressCreateName(event) {
    if (event.which === 13) {
      handleCreateNameCard();
    }
  }
  return (
    <>
      <div className="modal-header">
        <h3>Nova atividade</h3>
        <div className="btn-close" onClick={() => setModal({ ...modal, active: false })}>
          <IoClose />
        </div>
      </div>
      <div className="modal-body">
        <div className="input-field">
          <label>Descrição da Atividade </label>
          <input ref={inputRef} type="text" placeholder="Descrição" onKeyPress={handlePressCreateName} />
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" onClick={handleCreateNameCard}>
          Salvar <IoCheckmarkOutline />
        </button>
      </div>
    </>
  );
};
export default ModalCreateAtividade;
