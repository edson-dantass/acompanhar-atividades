import React from "react";
import Header from "../Header";
import Group from "../Group";
import { Container } from "./styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { index } from "../../services/api";
import PainelContext from "./context";
import immer from "immer";
import ButtonAddGroup from "../ButtonAddGroup";
import { ModalContext } from "../../Hooks/Modal";

// Painel principal com colunas e cards

const Painel = () => {
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    async function getGroups() {
      const response = await index("/grupos");
      if (response) {
        setGroups(response.data);
      }
    }
    getGroups();
  }, []);

  // Função global passada pelo o contexo para mover o Card de um Grupo para o outro.
  function moveCard(indexGroupCurrent, indexGroupLocalCardDragging, indexCardDragging) {
    setGroups(
      immer(groups, (draft) => {
        const currentCard = draft[indexGroupCurrent].atividade[indexCardDragging];

        draft[indexGroupCurrent].atividade.splice(indexCardDragging, 1);

        const localInsert = draft[indexGroupLocalCardDragging].atividade.length;

        draft[indexGroupLocalCardDragging].atividade.splice(localInsert, 0, currentCard);
      })
    );
  }

  // Função global passada pelo o contexo para mover o Card na própia lista.
  function moveCardCurrentGroupe(indexCardDragging, indexCardDownDragging, groupIndex) {
    setGroups(
      immer(groups, (draft) => {
        const currentCard = draft[groupIndex].atividade[indexCardDragging];

        draft[groupIndex].atividade.splice(indexCardDragging, 1);

        draft[groupIndex].atividade.splice(indexCardDownDragging, 0, currentCard);
      })
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <PainelContext.Provider value={{ moveCard, moveCardCurrentGroupe, groups, setGroups }}>
        <ModalContext>
          <Header />
          <Container>
            {groups?.map((group, i) => (
              <Group key={group.id} data={group} groupIndex={i} />
            ))}
            <ButtonAddGroup />
          </Container>
        </ModalContext>
      </PainelContext.Provider>
    </DndProvider>
  );
};

export default Painel;
