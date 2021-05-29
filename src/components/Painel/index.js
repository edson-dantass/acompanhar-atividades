import React from "react";
import Header from "../Header";
import Group from "../Group";
import { Container } from "./styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { loadGroups } from "../../services/api";
import PainelContext from "./context";
import immer from "immer";
import ButtonAddGroup from "../buttonAddGroup";

// Painel principal com colunas e cards

const Painel = () => {
  const data = loadGroups();
  const [groups, setGroups] = React.useState(data);

  // Função global passada pelo o contexo para mover o Card de um Grupo para o outro.
  function moveCard(indexGroupCurrent, indexGroupLocalCardDragging, indexCardDragging) {
    setGroups(
      immer(groups, (draft) => {
        const currentCard = draft[indexGroupCurrent].groupCards[indexCardDragging];

        draft[indexGroupCurrent].groupCards.splice(indexCardDragging, 1);

        const localInsert = draft[indexGroupLocalCardDragging].groupCards.length;

        draft[indexGroupLocalCardDragging].groupCards.splice(localInsert, 0, currentCard);
      })
    );
  }

  // Função global passada pelo o contexo para mover o Card na própia lista.
  function moveCardCurrentGroupe(indexCardDragging, indexCardDownDragging, groupIndex) {
    setGroups(
      immer(groups, (draft) => {
        const currentCard = draft[groupIndex].groupCards[indexCardDragging];

        draft[groupIndex].groupCards.splice(indexCardDragging, 1);

        draft[groupIndex].groupCards.splice(indexCardDownDragging, 0, currentCard);
      })
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <PainelContext.Provider value={{ moveCard, moveCardCurrentGroupe, groups }}>
        <Container>
          {groups?.map((group, i) => (
            <Group key={group.id} data={group} groupIndex={i} />
          ))}
          <ButtonAddGroup />
        </Container>
      </PainelContext.Provider>
    </DndProvider>
  );
};

export default Painel;
