import React from "react";
import { IoClose, IoCheckmarkOutline } from "react-icons/io5";
import { create, index } from "../../services/api";
import PainelContext from "../Painel/context";

const ContentModalCreateAtividade = ({ modal, setModal }) => {
  const inputRef = React.useRef();
  const { setGroups } = React.useContext(PainelContext);

  async function saveCard() {
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
  return (
    <>
      <div className="modal-header">
        <h3>Nova atividade</h3>
        <div className="btn-close" onClick={() => setModal({ ...modal, active: false })}>
          <IoClose />
        </div>
      </div>
      <div className="modal-body">
        <input ref={inputRef} type="text" placeholder="Nome da atividade" />
      </div>
      <div className="modal-footer">
        <button type="button" onClick={saveCard}>
          Salvar <IoCheckmarkOutline />
        </button>
      </div>
    </>
  );
};
export default ContentModalCreateAtividade;
