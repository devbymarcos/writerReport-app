import { getDB } from "@/database/connection";

export async function getAllTicket() {
  const db = await getDB();
  const statement = await db.prepareAsync("SELECT * FROM tickets");

  try {
    const result = await statement.executeAsync();
    console.log(result);
  } finally {
    await statement.finalizeAsync();
  }
}
