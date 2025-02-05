import { getDB } from "@/database/connection";

interface IregisterTicket {
  numberTicket: string;
  titleTicket: string;
  nameBusiness: string;
  followed: string;
  date: string;
}

export async function registerTicket({
  numberTicket,
  titleTicket,
  nameBusiness,
  followed,
  date,
}: IregisterTicket) {
  const db = await getDB();

  const statement = await db.prepareAsync(
    "INSERT INTO tickets (numberTicket, titleTicket, date, nameBusiness, followed) VALUES($numberTicket,$titleTicket, $date, $nameBusiness, $followed);"
  );
  try {
    const result = await statement.executeAsync({
      $numberTicket: numberTicket,
      $titleTicket: titleTicket,
      $date: date,
      $nameBusiness: nameBusiness,
      $followed: followed,
    });

    return result;
  } catch (err) {
    console.log("erro no execute", err);
  } finally {
    await statement.finalizeAsync();
  }
}
