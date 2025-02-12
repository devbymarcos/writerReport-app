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
      `UPDATE tickets SET init_time = $init_time,end_time = $end_time ,pause_time=$pause_time,justify_pause=$justify_pause WHERE id = $id`,
      {
        $id: id,
        $init_time: initHour,
        $end_time: endHour,
        $pause_time: pauseTime,
        $justify_pause: justifyPause,
      }
    );

    return result;
  } catch (err) {
    console.log("erro deleteTask", err);
  }
}
