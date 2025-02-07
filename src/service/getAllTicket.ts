import { getDB } from "@/database/connection";

export interface IResponse {
  date: string;
  followed: string;
  id: number;
  nameBusiness: string;
  numberTicket: string;
  titleTicket: string;
}

export async function getAllTicket() {
  const db = await getDB();
  try {
    const data = await db.getAllAsync("SELECT * FROM tickets");
    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getAllTicket", err);
  } finally {
  }
}
