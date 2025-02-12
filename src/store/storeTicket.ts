import { create } from "zustand";

interface IStoreTicket {
  numberTicket: string;
  titleTicket: string;
  date: Date;
  nameBusiness: string;
  followed: string;
  loadPage: boolean;
  modalEditVisible: boolean;
  modalTime: boolean;
  modalSubMenu: boolean;
  setNumberTicket: (value: string) => void;
  setTitleTicket: (value: string) => void;
  setDate: (value: Date) => void;
  setNameBusiness: (value: string) => void;
  setFollowed: (value: string) => void;
  setLoadPage: (value: boolean) => void;
  setModalEditVisible: (value: boolean) => void;
  setModalTime: (value: boolean) => void;
  setModalSubMenu: (value: boolean) => void;
}

export const storeTicket = create<IStoreTicket>((set) => ({
  numberTicket: "",
  titleTicket: "",
  date: new Date(),
  nameBusiness: "",
  followed: "",
  loadPage: true,
  modalEditVisible: false,
  modalTime: false,
  modalSubMenu: false,
  setNumberTicket: (numberTicket: string) => set({ numberTicket }),
  setTitleTicket: (titleTicket: string) => set({ titleTicket }),
  setDate: (date: Date) => set({ date }),
  setNameBusiness: (nameBusiness: string) => set({ nameBusiness }),
  setFollowed: (followed: string) => set({ followed }),
  setLoadPage: (loadPage: boolean) => set({ loadPage }),
  setModalEditVisible: (modalEditVisible: boolean) => set({ modalEditVisible }),
  setModalTime: (modalTime: boolean) => set({ modalTime }),
  setModalSubMenu: (modalSubMenu: boolean) => set({ modalSubMenu }),
}));
