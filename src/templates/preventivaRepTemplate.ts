export function preventivaRepTemplate(item: any) {
  return `   

*TAREFA: ${item.titleCheck}:* 
*Tipo: Preventiva*

1 - Descrição das ações realizadas:

*DADOS E STATUS*
Estado de Funcionamento: ${item.stateOperation}
Marca do Relógio: ${item.brand}
IP: ${item.ip}
Número de série: ${item.ns}
Lacre Fiscal: ${item.fiscalSeal}
Numero lacre Work: ${item.sealWork}

*AÇÕES DE LIMPEZA* 
Estética e Externa (Silicone): ${item.cleaningExternal}
Compartimento de bobina: ${item.cleaningPrinter}
Cabeça de impressão: ${item.cleaningSpoolCompartment}

*VISTORIA DE RECURSOS ESSENCIAIS*
Display: ${item.inspectionDisplay}
Impressor: ${item.inspectionPrinter}
Teclado: ${item.inspectionKeyboard}
Leitores (carão e biometria): ${item.inspectionReadersCardAndBiometrics}
Guilhotina ou serrilha: ${item.inspectionCutterOrPerforator}
Caixa Frontal e turaseira: ${item.frontAndRear}

*CONDIÇÕES DE INSTALAÇÃO*
Fixação do equipamento: ${item.installationConditionsEquipmentMounting}
Organização cabos de rede/energia: ${item.installationConditionsCableOrganization}
Canaletas e Eletrodutos: ${item.installationConditionsConduitsAndRaceways}
Exposição a Chuva/Sol: ${item.installationConditionsExposureToRainSun}

*ENTREVISTA COM RH*
Funcionamento do equipamento: ${item.hrInterviewEquipmentFunctioning}
Dúvidas no software: ${item.hrInterviewSoftwareQuestions}

*CONCLUSÃO*

Descreva as não conformidades
${item.nonConformitiesDescription}

Sugestões de melhorias
${item.improvementSuggestions}

2 - quais as pendencias ou próximas etapas:
${item.pendingOrNextActions}

########################
`;
}
