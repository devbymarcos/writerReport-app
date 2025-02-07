import { create } from "zustand";

interface IStoreTicket {
  numberTicket: string;
  titleTicket: string;
  date: Date;
  nameBusiness: string;
  followed: string;
  loadPage: boolean;
  modalEditVisible: boolean;
  setNumberTicket: (numberTicket: string) => void;
  setTitleTicket: (titleTicket: string) => void;
  setDate: (date: Date) => void;
  setNameBusiness: (nameBusiness: string) => void;
  setFollowed: (followed: string) => void;
  setLoadPage: (loadPage: boolean) => void;
  setModalEditVisible: (modalEditVisible: boolean) => void;
}

export const storeTicket = create<IStoreTicket>((set) => ({
  numberTicket: "",
  titleTicket: "",
  date: new Date(),
  nameBusiness: "",
  followed: "",
  loadPage: true,
  modalEditVisible: false,
  setNumberTicket: (numberTicket: string) => set({ numberTicket }),
  setTitleTicket: (titleTicket: string) => set({ titleTicket }),
  setDate: (date: Date) => set({ date }),
  setNameBusiness: (nameBusiness: string) => set({ nameBusiness }),
  setFollowed: (followed: string) => set({ followed }),
  setLoadPage: (loadPage: boolean) => set({ loadPage }),
  setModalEditVisible: (modalEditVisible: boolean) => set({ modalEditVisible }),
}));
