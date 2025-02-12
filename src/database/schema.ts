import { getDB } from "./connection";

export const createTables = async () => {
  try {
    const db = await getDB();
    await db.execAsync(`
    

      CREATE TABLE IF NOT EXISTS tickets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        numberTicket TEXT NOT NULL,
        titleTicket TEXT NOT NULL,
        date DATE NOT NULL,
        nameBusiness TEXT NOT NULL,
        followed TEXT NOT NULL,
        operator TEXT NOT NULL,
        init_time TEXT,
        end_time TEXT,
        pause_time TEXT,
        justify_pause TEXT
      );
      
      CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          id_ticket INTEGER NOT NULL,
          content TEXT NOT NULL
      );
      
    `);
    console.log("Tabela criada com sucesso!");
  } catch (error) {
    console.log("Erro ao criar tabela:", error);
  }
};
