interface IBaseCheklistCatraca {
  id?: string;
  idTask: string;
  nameCheckList: string;
  taskType: string;
  stateOperation: string;
  brand: string;
  model: string;
  ip: string;
  masc: string;
  gateway: string;
  sealWork: string;
  cleaningInternal: string;
  cleaningMainBoard: string;
  cleaningReaders: string;
  cleaningSwitch: string;
  inspectionDisplay: string;
  inspectionKeyboard: string;
  inspectionReaders: string;
  inspectionBody: string;
  equipmentFixation: string;
  cableOrganization: string;
  exposureToRainOrSun: string;
  terminalConnections: string;
  cleaningFace: string;
  displayFace: string;
  adminDefault: string;
  cablesAndConectionFace: string;
  clientInterviewEquipmentFunctioning: string;
  nonConformitiesDescription: string;
  improvementSuggestions: string;
  pendingOrNextActions: string;
}

export type ITaskCatraca = IBaseCheklistCatraca;

export interface ICatraca {
  id?: string;
  type?: string;
  timeStart?: string;
  timeStop?: string;
  numberTicket?: string;
  titleTicket?: string;
  date?: string;
  nameBusiness?: string;
  followed?: string;
  operator?: string;
  productiveTime?: number;
  totalPause?: string;
  task: ITaskCatraca[] | null;
}
