export function loadGroups() {
  return [
    {
      id: 0,
      groupName: "Em planejamento",
      buttonName: "Novo planejamento ",
      groupCards: [
        { id: 0, cardDescription: "Fazer dashboard", date: "3 de junho" },
        { id: 1, cardDescription: "Fazer Menu", date: "23 de junho" },
      ],
    },
    // {
    //   id: 1,
    //   groupName: "Em desenvolvimento",
    //   buttonName: "Novo desenvolvimento",
    //   groupCards: [
    //     { id: 2, cardDescription: "Footer", date: "30 de maio" },
    //     { id: 3, cardDescription: "Header", date: "30 de junho" },
    //     { id: 4, cardDescription: "Section de produto", date: "29 de junho", cardTagColor: "red" },
    //   ],
    // },
    // {
    //   id: 2,
    //   groupName: "Finalizado",
    //   buttonName: "Novo intem finalizado",
    //   groupCards: [
    //     { id: 5, cardDescription: "Footer", date: "30 de maio", cardTagColor: "green" },
    //     { id: 6, cardDescription: "Header", date: "30 de junho", cardTagColor: "green" },
    //     { id: 7, cardDescription: "Section de produto", date: "29 de junho", cardTagColor: "green" },
    //   ],
    // },
  ];
}
