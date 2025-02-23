import { getDB } from "@/database/connection";

interface IupdateTimeTicket {
  id: number;
  initHour: string;
  endHour: string;
  pauseTime: string;
  justifyPause: string;
}

export async function updateTimeTicket({
  id,
  initHour,
  endHour,
  pauseTime,
  justifyPause,
}: IupdateTimeTicket) {
  const db = await getDB();

  try {
    const result = await db.runAsync(
      `UPDATE tickets SET initHour = $initHour,endHour = $endHour ,pauseTime=$pauseTime,justifyPause=$justifyPause WHERE id = $id`,
      {
        $id: id,
        $initHour: initHour,
        $endHour: endHour,
        $pauseTime: pauseTime,
        $justifyPause: justifyPause,
      }
    );

    return result;
  } catch (err) {
    console.log("erro deleteTask", err);
  }
}
