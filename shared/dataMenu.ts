interface MenuItem {
  title: string;
  path: string;
}

export const dataMenu: MenuItem[] = [
  {
    title: "Preventiva",
    path: "/preventiva",
  },
  {
    title: "Corretiva",
    path: "/corretiva",
  },
  {
    title: "Implantacao",
    path: "/implantacao",
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
