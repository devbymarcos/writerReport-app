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
    title: "Vistoria Diária",
    path: "/vistoria-diaria",
  },
  {
    title: "Vistoria Mensal",
    path: "/vistoria-mensal",
  },
];
