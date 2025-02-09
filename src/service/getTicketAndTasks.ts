import { getDB } from "@/database/connection";

export async function getTicketAndTasks(id: number) {
  const db = await getDB();
  try {
    const data = await db.getAllAsync(
      `SELECT DISTINCT t.*, ta.* FROM tickets AS t 
       LEFT JOIN tasks AS ta ON t.id = ta.id_ticket WHERE t.id = ${id};`
    );

    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getTicketAndTasks", err);
  } finally {
  }
}
