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
  const statement = await db.prepareAsync("SELECT * FROM tickets");

  try {
    const result = await statement.executeAsync();
    const data = await result.getAllAsync();
    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getAllTicket", err);
  } finally {
    await statement.finalizeAsync();
  }
}
