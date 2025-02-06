import { getDB } from "@/database/connection";

interface IDeleteTask {
  id: number;
}

export async function deleteTicketAndTask({ id }: IDeleteTask) {
  const db = await getDB();

  try {
    const result = await db.execAsync(`
      DELETE FROM tasks WHERE id_ticket =${id};
      DELETE FROM tickets WHERE id = ${id};`);
    console.log("query executada", result);
    return result;
  } catch (err) {
    console.log("erro no deleteTicketAndTask", err);
  }
}
