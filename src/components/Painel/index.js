import React from "react";
import Header from "../Header";
import Group from "../Group";
import { Container } from "./styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { loadGroups } from "../../services/api";
import PainelContext from "./context";
import immer from "immer";

// Painel principal com colunas e cards

const Painel = () => {
  const data = loadGroups();
  const [groups, setGroups] = React.useState(data);

  function moveCard(groupIndex, from, to) {
    setGroups(
      immer(groups, (draft) => {
        const currentCardDragged = draft[groupIndex].groupCards[from];

        draft[groupIndex].groupCards.splice(from, 1);
        draft[groupIndex].groupCards.splice(to, 0, currentCardDragged);
      })
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <PainelContext.Provider value={{ moveCard, groups }}>
        <Container>
          {groups?.map((group, i) => (
            <Group key={i} data={group} groupIndex={i} />
          ))}
        </Container>
      </PainelContext.Provider>
    </DndProvider>
  );
};

export default Painel;
