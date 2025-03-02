import { getDB } from "@/database/connection";

interface IregisterVehicle {
  vehicle: string;
}

export async function registerVehicle({ vehicle }: IregisterVehicle) {
  const db = await getDB();

  const statement = await db.prepareAsync(
    "INSERT INTO vehicles (vehicle) VALUES($vehicle);"
  );

  try {
    const result = await statement.executeAsync({
      $vehicle: vehicle,
    });

    return result;
  } catch (err) {
    console.log("erro registerVehicle ", err);
  } finally {
    await statement.finalizeAsync();
  }
}
