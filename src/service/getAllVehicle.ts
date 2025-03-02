import { getDB } from "@/database/connection";

export interface IResponse {
  id: number;
  plate: string;
  created_at: string;
}

export async function getAllVehicle() {
  const db = await getDB();
  try {
    const data = await db.getAllAsync("SELECT * FROM vehicles");
    if (typeof data !== "object" || !data) {
      return [];
    }
    //@ts-nocheck
    return data;
  } catch (err) {
    console.log("Erro getAllVehicle", err);
  } finally {
  }
}
