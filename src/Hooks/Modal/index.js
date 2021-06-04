import React from "react";
import { Container } from "./styles";
import ContentModalCreateAtividade from "../../components/ModalCreateAtividade";

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
            {modal.typeModal === "CREATE" && <ContentModalCreateAtividade modal={modal} setModal={setModal} />}
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
