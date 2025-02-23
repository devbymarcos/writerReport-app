import { getDB } from "@/database/connection";

interface IregisterTicket {
  numberTicket: string;
  titleTicket: string;
  date: string;
}

export async function registerTicket({
  numberTicket,
  titleTicket,
  date,
}: IregisterTicket) {
  const db = await getDB();

  const statement = await db.prepareAsync(
    "INSERT INTO tickets (numberTicket, titleTicket, date) VALUES($numberTicket,$titleTicket, $date);"
  );

  try {
    const result = await statement.executeAsync({
      $numberTicket: numberTicket,
      $titleTicket: titleTicket,
      $date: date,
    });

    return result;
  } catch (err) {
    console.log("erro registerTicket ", err);
  } finally {
    await statement.finalizeAsync();
  }
}
