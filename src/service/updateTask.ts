import { getDB } from "@/database/connection";

interface IupdateTask {
  idTask: number;
  content: string;
}

export async function updateTask({ idTask, content }: IupdateTask) {
  const db = await getDB();

  try {
    const result = await db.runAsync(
      `UPDATE tasks SET content = $content WHERE id = $id`,
      {
        $id: idTask,
        $content: content,
      }
    );

    return result;
  } catch (err) {
    console.log("erro deleteTask", err);
  }
}
