import { getDB } from "@/database/connection";

interface IupdateTicket {
  id: number;
  numberTicket: string;
  titleTicket: string;
  nameBusiness: string;
  followed: string;
  date: string;
  operator: string;
}

export async function updateTicket({
  id,
  numberTicket,
  titleTicket,
  nameBusiness,
  followed,
  operator,
  date,
}: IupdateTicket) {
  const db = await getDB();

  try {
    const result = await db.runAsync(
      `UPDATE tickets SET numberTicket = $numberTicket,titleTicket = $titleTicket ,nameBusiness = $nameBusiness,followed=$followed, operator=$operator,date=$date WHERE id = $id`,
      {
        $id: id,
        $numberTicket: numberTicket,
        $titleTicket: titleTicket,
        $nameBusiness: nameBusiness,
        $followed: followed,
        $operator: operator,
        $date: date,
      }
    );

    return result;
  } catch (err) {
    console.log("erro deleteTask", err);
  }
}
