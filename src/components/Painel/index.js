import React from "react";
import Header from "../Header";
import { Container } from "./styles";
import Group from "../Group";
import Card from "../Card";

// Painel principal com colunas e cards

const Painel = () => {
  return (
    <>
      <Header />
      <Container>
        <Group options={{ groupName: "Em planejamento" }}>
          <Card
            options={{ cardDescription: "Fazer dashboard", date: "3 de junho" }}
          />
          <Card
            options={{
              cardDescription: "cadastro de clientes",
              date: "4 de junho",
            }}
          />
        </Group>
        <Group
          options={{ groupName: "Em desenvolvimento", date: "3 de julho" }}
        >
          <Card
            options={{ cardDescription: "Tela de login", date: "10 de julho" }}
          />
          <Card
            options={{
              cardDescription: "Blog",
              cardTagColor: "red",
              date: "3 de maio",
            }}
          />
          <Card
            options={{
              cardDescription: "Cadastro de usuários",
              cardTagColor: "red",
              date: "20 de maio",
            }}
          />
          <Card options={{ cardDescription: "Perfil", cardTagColor: "" }} />
          <Card options={{ cardDescription: "Carrinho", cardTagColor: "" }} />
        </Group>
        <div>
          <button>Novo Grupo</button>
        </div>
      </Container>
    </>
  );
};

export default Painel;
