import React from "react";
import { Container } from "./styles";
import ModalCreateAtividade from "../../components/ModalCreateAtividade";
import ModalEditAtividade from "../../components/ModalEditAtividade";

const ContextModal = React.createContext();

export const ModalContext = ({ children }) => {
  const [modal, setModal] = React.useState({
    active: false,
    data: {},
    typeModal: "",
  });

  return (
    <ContextModal.Provider value={{ modal, setModal }}>
      {children}
      {modal.active && (
        <Container>
          <div className="modal">
            {modal.typeModal === "CREATE ATIVIDADE" && <ModalCreateAtividade modal={modal} setModal={setModal} />}
            {modal.typeModal === "EDIT ATIVIDADE" && <ModalEditAtividade modal={modal} setModal={setModal} />}
          </div>
        </Container>
      )}
    </ContextModal.Provider>
  );
};

export const useModal = () => {
  const { modal, setModal } = React.useContext(ContextModal);
  return { modal, setModal };
};
