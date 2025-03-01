import { getDB } from "@/database/connection";

export async function getTasksById(id: number) {
  const db = await getDB();
  try {
    const data = await db.getAllAsync(`SELECT  * FROM tasks WHERE id = ${id};`);

    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getTasksByIdTicket", err);
  } finally {
  }
}
