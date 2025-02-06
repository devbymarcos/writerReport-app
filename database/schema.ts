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
        followed TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS rep (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_ticket INTEGER NOT NULL,
        stateOperation TEXT NOT NULL,
        brand TEXT NOT NULL,
        model TEXT NOT NULL,
        ip TEXT NOT NULL,
        ns TEXT NOT NULL,
        fiscalSeal TEXT NOT NULL,
        sealWork TEXT NOT NULL,
        cleaningExternal TEXT NOT NULL,
        cleaningPrinter TEXT NOT NULL,
        cleaningSpoolCompartment TEXT NOT NULL,
        installationConditionsEquipmentMounting TEXT NOT NULL,
        installationConditionsCableOrganization TEXT NOT NULL,
        installationConditionsConduitsAndRaceways TEXT NOT NULL,
        installationConditionsExposureToRainSun TEXT NOT NULL,
        inspectionDisplay TEXT NOT NULL,
        inspectionPrinter TEXT NOT NULL,
        inspectionKeyboard TEXT NOT NULL,
        inspectionReadersCardAndBiometrics TEXT NOT NULL,
        inspectionCutterOrPerforator TEXT NOT NULL,
        frontAndRear TEXT NOT NULL,
        hrInterviewEquipmentFunctioning TEXT NOT NULL,
        hrInterviewSoftwareQuestions TEXT NOT NULL,
        nonConformitiesDescription TEXT NOT NULL,
        improvementSuggestions TEXT NOT NULL,
        pendingOrNextActions TEXT NOT NULL
      );
      

    `);
    console.log("Tabela criada com sucesso!");
  } catch (error) {
    console.log("Erro ao criar tabela:", error);
  }
};
