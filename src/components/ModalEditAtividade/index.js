import React from "react";
import { IoClose, IoCheckmarkOutline, IoSquareOutline, IoTrashOutline, IoCheckbox } from "react-icons/io5";
import { create, index, destroy } from "../../services/api";
import PainelContext from "../Painel/context";

const ContentModalCreateAtividade = ({ modal, setModal }) => {
  const [load, setLoad] = React.useState(true);
  const [data, setData] = React.useState({});
  const [checked, setChecked] = React.useState(false);
  const { setGroups } = React.useContext(PainelContext);
  const [formData, setFormData] = React.useState({
    id: null,
    data_termino: null,
    finalizado: null,
    nome: null,
  });

  React.useEffect(() => {
    async function getOneAtividade() {
      const response = await index("/atividade/" + modal?.data?.id);
      if (response) {
        console.log(response);
        setData(response?.data);
        setChecked(response?.data.finalizado);
        setLoad(false);
      }
    }
    getOneAtividade();
  }, [modal]);

  function handleChangeInputs({ target }) {
    setFormData({ ...formData, [target.name]: target.value, id: data?.id });
  }

  async function handleSaveAtividade() {
    await create("/atividade/" + modal?.data?.groupId, {
      id: data.id === null ? modal.id : data.id,
      dataTermino: formData.data_termino === null ? data.dataTermino : formData.data_termino,
      finalizado: checked,
      nome: formData.nome === "" || (formData.nome === null ? data.nome : formData.nome),
    });
    const response = await index("/grupos");
    if (response) {
      setGroups(response.data);
    }
    setModal({ ...modal, active: false });
  }
  async function handleDestroyAtividade() {
    await destroy("/atividade/" + modal.data.id);
    const response = await index("/grupos");
    if (response) {
      setGroups(response.data);
    }
    setModal({ ...modal, active: false });
  }
  return (
    <>
      <div className="modal-header">
        <h3>Editar Atividade</h3>
        <div className="btn-close" onClick={() => setModal({ ...modal, active: false })}>
          <IoClose />
        </div>
      </div>
      <div className="modal-body">
        {!load ? (
          <>
            <div className="input-field">
              <label>Descrição da Atividade </label>
              <input name="nome" onChange={handleChangeInputs} type="text" defaultValue={data?.nome} />
            </div>
            <div className="input-field">
              <label>Data para entrega </label>
              <input name="data_termino" onChange={handleChangeInputs} type="date" defaultValue={data?.dataTermino} />
            </div>
            <div className="input-field checkbox" onClick={() => setChecked(!checked)}>
              <div className="checkbox-field">{checked ? <IoCheckbox className="checked" /> : <IoSquareOutline />}</div>
              <label>{checked ? "Finalizado!" : "Finalizar"} </label>
            </div>
          </>
        ) : (
          <h3>Aguarde...</h3>
        )}
      </div>
      <div className="modal-footer actions">
        {!load && (
          <>
            <button type="button" className="red" onClick={handleDestroyAtividade}>
              Excluir <IoTrashOutline />
            </button>
            <button type="button" onClick={handleSaveAtividade}>
              Salvar <IoCheckmarkOutline />
            </button>
          </>
        )}
      </div>
    </>
  );
};
export default ContentModalCreateAtividade;
