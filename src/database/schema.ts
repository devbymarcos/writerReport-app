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
        nameBusiness TEXT,
        followed TEXT,
        operator TEXT,
        initHour TEXT,
        endHour TEXT,
        pauseTime TEXT,
        justifyPause TEXT
      );
      
      CREATE TABLE IF NOT EXISTS tasks (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          id_ticket INTEGER NOT NULL,
          content TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS vehicles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      vehicle TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
      
    `);
    console.log("Tabela criada com sucesso!");
  } catch (error) {
    console.log("Erro ao criar tabela:", error);
  }
};
