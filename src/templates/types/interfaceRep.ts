export interface ITaskRep {
  id?: string;
  idTask: string;
  taskType: string;
  nameCheckList: string;
  timeStart?: string;
  timeStop?: string;
  stateOperation?: string;
  brand?: string;
  ip?: string;
  ns?: string;
  fiscalSeal?: string;
  cleaningExternal?: string;
  cleaningPrinter?: string;
  cleaningSpoolCompartment?: string;
  inspectionDisplay?: string;
  inspectionPrinter?: string;
  inspectionKeyboard?: string;
  inspectionReadersCardAndBiometrics?: string;
  inspectionCutterOrPerforator?: string;
  installationConditionsEquipmentMounting?: string;
  installationConditionsCableOrganization?: string;
  installationConditionsConduitsAndRaceways?: string;
  installationConditionsExposureToRainOrSun?: string;
  hrInterviewEquipmentFunctioning?: string;
  hrInterviewSoftwareQuestions?: string;
  sealWork?: string;
  nonConformitiesDescription?: string;
  improvementSuggestions?: string;
  pendingOrNextActions?: string;
  frontAndRear?: string;
  model?: string;
}

export interface ItemTask {
  id: string;
  task: ITaskRep[] | null;
}
