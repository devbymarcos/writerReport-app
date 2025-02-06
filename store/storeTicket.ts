import { create } from "zustand";

interface IStoreTicket {
  numberTicket: string;
  titleTicket: string;
  date: Date;
  nameBusiness: string;
  followed: string;
  setNumberTicket: (numberTicket: string) => void;
  setTitleTicket: (titleTicket: string) => void;
  setDate: (date: Date) => void;
  setNameBusiness: (nameBusiness: string) => void;
  setFollowed: (followed: string) => void;
}

export const storeTicket = create<IStoreTicket>((set) => ({
  numberTicket: "",
  titleTicket: "",
  date: new Date(),
  nameBusiness: "",
  followed: "",
  setNumberTicket: (numberTicket: string) => set({ numberTicket }),
  setTitleTicket: (titleTicket: string) => set({ titleTicket }),
  setDate: (date: Date) => set({ date }),
  setNameBusiness: (nameBusiness: string) => set({ nameBusiness }),
  setFollowed: (followed: string) => set({ followed }),
}));
