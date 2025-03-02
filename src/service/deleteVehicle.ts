import { getDB } from "@/database/connection";

interface IDeleteVehicle {
  id: number;
}

export async function deleteVehicle({ id }: IDeleteVehicle) {
  const db = await getDB();

  try {
    const result = await db.runAsync("DELETE FROM vehicles WHERE id = $id", {
      $id: id,
    });
    return result;
  } catch (err) {
    console.log("erro deleteVehicle", err);
  }
}
