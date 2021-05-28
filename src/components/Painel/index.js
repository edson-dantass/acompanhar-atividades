import React from "react";
import Header from "../Header";
import Group from "../Group";
import { Container } from "./styles";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { loadGroups } from "../../services/api";
import PainelContext from "./context";

// Painel principal com colunas e cards

const Painel = () => {
  const data = loadGroups();
  const [groups, setGroups] = React.useState(data);

  function moveCard(from, to) {
    console.log(from, to);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <PainelContext.Provider value={{ moveCard, groups }}>
        <Container>
          {groups?.map((group, i) => (
            <Group key={i} data={group} />
          ))}
        </Container>
      </PainelContext.Provider>
    </DndProvider>
  );
};

export default Painel;
