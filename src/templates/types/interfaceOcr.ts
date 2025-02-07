export interface IPreventiveOCR {
  //header
  id: string;
  type: string;
  numberTicket: string;
  titleTicket: string;
  date: string;
  timeStart: string;
  timeStop: string;
  operator: string;
  followed: string;
  // Cleaning
  barriers: string;
  antiCrushSensors: string;
  cameras: string;
  postsAndPedestals: string;
  automationSensors: string;
  // Inspection (External Verification)
  barrierCablesConnections: string;
  cameraCablesConnections: string;
  inductiveLoopsCablesConnections: string;
  automationSensorsCablesConnections: string;
  pedestalsTightening: string;
  armsAndFixingPosts: string;
  // Functionality Testing and Recording
  ioModuleLedStatus: string;
  barrierOpenCloseTest: string;
  // material
  materialsUsed: string;
  // não conformidades
  nonConformitiesDescription: string;
  pendingOrNextActions: string;
  improvementSuggestions: string;
  cableManagement?: string;
}
