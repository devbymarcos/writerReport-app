import { create } from "zustand";

interface IStoreRep {
  stateOperation: string;
  brand: string;
  model: string;
  ip: string;
  ns: string;
  fiscalSeal: string;
  sealWork: string;
  //cleanignActions--
  cleaningExternal: string;
  cleaningPrinter: string;
  cleaningSpoolCompartment: string;
  //InstallationConditions--
  installationConditionsEquipmentMounting: string;
  installationConditionsCableOrganization: string;
  installationConditionsConduitsAndRaceways: string;
  installationConditionsExposureToRainSun: string;
  //InspectionOfEssentialResources--
  inspectionDisplay: string;
  inspectionPrinter: string;
  inspectionKeyboard: string;
  inspectionReadersCardAndBiometrics: string;
  inspectionCutterOrPerforator: string;
  frontAndRear: string;
  //InterviewWithHR--
  hrInterviewEquipmentFunctioning: string;
  hrInterviewSoftwareQuestions: string;
  //Conclusion--
  nonConformitiesDescription: string;
  improvementSuggestions: string;
  pendingOrNextActions: string;

  setStateOperation: (value: string) => void;
  setBrand: (value: string) => void;
  setModel: (value: string) => void;
  setIp: (value: string) => void;
  setNs: (value: string) => void;
  setFiscalSeal: (value: string) => void;
  setSealWork: (value: string) => void;
  //cleanignActions--
  setCleaningExternal: (value: string) => void;
  setCleaningPrinter: (value: string) => void;
  setCleaningSpoolCompartment: (value: string) => void;
  //InstallationConditions--
  setInstallationConditionsEquipmentMounting: (value: string) => void;
  setInstallationConditionsCableOrganization: (value: string) => void;
  setInstallationConditionsConduitsAndRaceways: (value: string) => void;
  setInstallationConditionsExposureToRainSun: (value: string) => void;
  //InspectionOfEssentialResources--
  setInspectionDisplay: (value: string) => void;
  setInspectionPrinter: (value: string) => void;
  setInspectionKeyboard: (value: string) => void;
  setInspectionReadersCardAndBiometrics: (value: string) => void;
  setInspectionCutterOrPerforator: (value: string) => void;
  setFrontAndRear: (value: string) => void;
  //InterviewWithHR--
  setHrInterviewEquipmentFunctioning: (value: string) => void;
  setHrInterviewSoftwareQuestions: (value: string) => void;
  //Conclusion--
  setNonConformitiesDescription: (value: string) => void;
  setImprovementSuggestions: (value: string) => void;
  setPendingOrNextActions: (value: string) => void;
}

export const storeRep = create<IStoreRep>((set) => ({
  stateOperation: "",
  brand: "",
  model: "",
  ip: "",
  ns: "",
  fiscalSeal: "",
  sealWork: "",
  //cleanignActions--
  cleaningExternal: "",
  cleaningPrinter: "",
  cleaningSpoolCompartment: "",
  //InstallationConditions--
  installationConditionsEquipmentMounting: "",
  installationConditionsCableOrganization: "",
  installationConditionsConduitsAndRaceways: "",
  installationConditionsExposureToRainSun: "",
  //InspectionOfEssentialResources--
  inspectionDisplay: "",
  inspectionPrinter: "",
  inspectionKeyboard: "",
  inspectionReadersCardAndBiometrics: "",
  inspectionCutterOrPerforator: "",
  frontAndRear: "",
  //InterviewWithHR--
  hrInterviewEquipmentFunctioning: "",
  hrInterviewSoftwareQuestions: "",
  //Conclusion--
  nonConformitiesDescription: "",
  improvementSuggestions: "",
  pendingOrNextActions: "",

  setStateOperation: (value: string) => set({ stateOperation: value }),
  setBrand: (value: string) => set({ brand: value }),
  setModel: (value: string) => set({ model: value }),
  setIp: (value: string) => set({ ip: value }),
  setNs: (value: string) => set({ ns: value }),
  setFiscalSeal: (value: string) => set({ fiscalSeal: value }),
  setSealWork: (value: string) => set({ sealWork: value }),
  //cleanignActions--
  setCleaningExternal: (value: string) => set({ cleaningExternal: value }),
  setCleaningPrinter: (value: string) => set({ cleaningPrinter: value }),
  setCleaningSpoolCompartment: (value: string) =>
    set({ cleaningSpoolCompartment: value }),
  //InstallationConditions--
  setInstallationConditionsEquipmentMounting: (value: string) =>
    set({ installationConditionsEquipmentMounting: value }),
  setInstallationConditionsCableOrganization: (value: string) =>
    set({ installationConditionsCableOrganization: value }),
  setInstallationConditionsConduitsAndRaceways: (value: string) =>
    set({ installationConditionsConduitsAndRaceways: value }),
  setInstallationConditionsExposureToRainSun: (value: string) =>
    set({ installationConditionsExposureToRainSun: value }),
  //InspectionOfEssentialResources--
  setInspectionDisplay: (value: string) => set({ inspectionDisplay: value }),
  setInspectionPrinter: (value: string) => set({ inspectionPrinter: value }),
  setInspectionKeyboard: (value: string) => set({ inspectionKeyboard: value }),
  setInspectionReadersCardAndBiometrics: (value: string) =>
    set({ inspectionReadersCardAndBiometrics: value }),
  setInspectionCutterOrPerforator: (value: string) =>
    set({ inspectionCutterOrPerforator: value }),
  setFrontAndRear: (value: string) => set({ frontAndRear: value }),
  //InterviewWithHR--
  setHrInterviewEquipmentFunctioning: (value: string) =>
    set({ hrInterviewEquipmentFunctioning: value }),
  setHrInterviewSoftwareQuestions: (value: string) =>
    set({ hrInterviewSoftwareQuestions: value }),
  //Conclusion--
  setNonConformitiesDescription: (value: string) =>
    set({ nonConformitiesDescription: value }),
  setImprovementSuggestions: (value: string) =>
    set({ improvementSuggestions: value }),
  setPendingOrNextActions: (value: string) =>
    set({ pendingOrNextActions: value }),
}));
