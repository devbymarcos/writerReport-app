import { getDB } from "@/database/connection";

export async function getTicketById(id: number) {
  const db = await getDB();
  try {
    const data = await db.getAllAsync(
      `SELECT  * FROM tickets WHERE id = ${id};`
    );
    console.log("getTicketById:", data);
    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getTicketById", err);
  } finally {
  }
}
