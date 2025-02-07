type CheckListType = {
  idTask: string;
  nameSector: string;
  electromagneticLock: string;
  electromagnetFixation: string;
  electromagnetCleaning: string;
  doorContactCleaning: string;
  doorSpring: string;
  doorSpringAdjustment: string;
  doorAlignment: string;
  cardReaders: string;
  cardReadersCleaning: string;
  pacriKey: string;
  pacriKeyLubrication: string;
  emergencyButton: string;
  emergencyButtonFixation: string;
  emergencyButtonCleaning: string;
  cableManagement: string;
  cableManagementFixation: string;
  powerSources: string;
  powerTimerSources: string;
  accessControlPanel: string;
  cleaningAccessControlPanel: string;
  statusControlPanel: string;
  cablesConnectionsControlPanel: string;
  nonConformitiesDescription: string;
  improvementSuggestions: string;
};

export interface ICapcPreventive {
  id: string;
  type: string;
  operator: string;
  numberTicket: string;
  titleTicket: string;
  date: string;
  followed: string;
  timeStart: string;
  timeStop: string;
  task: CheckListType[] | null;
}

export interface ICheckList {
  idTicket: string;
  idTask: string;
  nameSector: string;
  electromagneticLock: string;
  electromagnetFixation: string;
  electromagnetCleaning: string;
  doorContactCleaning: string;
  doorSpring: string;
  doorSpringAdjustment: string;
  doorAlignment: string;
  cardReaders: string;
  cardReadersCleaning: string;
  pacriKey: string;
  pacriKeyLubrication: string;
  emergencyButton: string;
  emergencyButtonFixation: string;
  emergencyButtonCleaning: string;
  cableManagement: string;
  cableManagementFixation: string;
  powerSources: string;
  powerTimerSources: string;
  accessControlPanel: string;
  cleaningAccessControlPanel: string;
  statusControlPanel: string;
  cablesConnectionsControlPanel: string;
  nonConformitiesDescription: string;
  improvementSuggestions: string;
}
