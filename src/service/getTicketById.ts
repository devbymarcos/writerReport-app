import { getDB } from "@/database/connection";

export async function getTicketById(id: number) {
  const db = await getDB();
  try {
    const data = await db.getAllAsync(
      `SELECT  * FROM tickets WHERE id = ${id};`
    );

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
