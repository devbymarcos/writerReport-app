import { getDB } from "@/database/connection";

interface IregisterTicket {
  numberTicket: string;
  titleTicket: string;
  nameBusiness: string;
  followed: string;
  date: string;
  operator: string;
}

export async function registerTicket({
  numberTicket,
  titleTicket,
  nameBusiness,
  followed,
  operator,
  date,
}: IregisterTicket) {
  const db = await getDB();

  const statement = await db.prepareAsync(
    "INSERT INTO tickets (numberTicket, titleTicket, date, nameBusiness,followed,operator) VALUES($numberTicket,$titleTicket, $date, $nameBusiness,$followed, $operator);"
  );

  try {
    const result = await statement.executeAsync({
      $numberTicket: numberTicket,
      $titleTicket: titleTicket,
      $date: date,
      $nameBusiness: nameBusiness,
      $operator: operator,
      $followed: followed,
    });

    return result;
  } catch (err) {
    console.log("erro registerTicket ", err);
  } finally {
    await statement.finalizeAsync();
  }
}
