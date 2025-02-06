import { create } from "zustand";
import dayjs from "dayjs";

interface IStoreTicket {
  numberTicket: string;
  titleTicket: string;
  date: string;
  nameBusiness: string;
  followed: string;
  setNumberTicket: (numberTicket: string) => void;
  setTitleTicket: (titleTicket: string) => void;
  setDate: (date: string) => void;
  setNameBusiness: (nameBusiness: string) => void;
  setFollowed: (followed: string) => void;
}

export const storeTicket = create<IStoreTicket>((set) => ({
  numberTicket: "",
  titleTicket: "",
  date: new Date().toLocaleDateString(),
  nameBusiness: "",
  followed: "",
  setNumberTicket: (numberTicket: string) => set({ numberTicket }),
  setTitleTicket: (titleTicket: string) => set({ titleTicket }),
  setDate: (date: string) => set({ date }),
  setNameBusiness: (nameBusiness: string) => set({ nameBusiness }),
  setFollowed: (followed: string) => set({ followed }),
}));
