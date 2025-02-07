interface MenuItem {
  title: string;
  path: string;
}

export const dataMenu: MenuItem[] = [
  {
    title: "Relatar atividade",
    path: "/action",
  },
  {
    title: "Vistoria veiculos diária",
    path: "/vistoria-diaria",
  },
  {
    title: "Vistoria veiculos mensal",
    path: "/vistoria-mensal",
  },
];
