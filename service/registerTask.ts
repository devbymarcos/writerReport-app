import { getDB } from "@/database/connection";

interface IregisterTask {
  id_ticket: number;
  content: string;
}

export async function registerTask({ id_ticket, content }: IregisterTask) {
  const db = await getDB();
  console.log(id_ticket);
  console.log(content);
  try {
    const result = await db.runAsync(
      "INSERT INTO tasks (id_ticket,content) VALUES(?,?)",
      id_ticket,
      content
    );
    console.log("query executada", result);
    return result;
  } catch (err) {
    console.log("erro no execute", err);
  }
}
