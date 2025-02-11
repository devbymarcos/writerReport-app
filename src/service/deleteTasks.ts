import { getDB } from "@/database/connection";

interface IDeleteTask {
  id: number;
}

export async function deleteTask({ id }: IDeleteTask) {
  const db = await getDB();

  try {
    const result = await db.runAsync("DELETE FROM tasks WHERE id = $id", {
      $id: id,
    });

    return result;
  } catch (err) {
    console.log("erro deleteTask", err);
  }
}
