export function catracaTemplate(item: any) {
  return `
TITULO CHECKLIST: ${item.titleCheck}

  1 - Descrição das ações realizadas:

*DADOS E STATUS*
Estado de Funcionamento: ${item.stateOperation}
Marca: ${item.brand}
Modelo:${item.model}
IP: ${item.ip}
Masc: ${item.masc}
Gateway: ${item.gateway}
Numero lacre Work: ${item.sealWork}

*AÇÕES DE LIMPEZA* 
Gabine Interno: ${item.cleaningInternal}
Placa principal: ${item.cleaningMainBoard}
leitores: ${item.cleaningReaders}
Switch: ${item.cleaningSwitch}

*VISTORIA DE RECURSOS ESSENCIAIS*
Display: ${item.inspectionDisplay}
Teclado: ${item.inspectionKeyboard}
Leitores: ${item.inspectionReaders}
Corpo (estrutural): ${item.inspectionBody}

*CONDIÇÕES DE INSTALAÇÃO*
Fixação do equipamento: ${item.equipmentFixation}
Organização cabos de rede/energia: ${item.cableOrganization}
Exposição a Chuva/Sol: ${item.exposureToRainOrSun}
Conexões (terminais componentes /placa): ${item.terminalConnections}

*LEITOR FACIAL*
Limpeza: ${item.cleaningFace}
Display: ${item.displayFace}
Possui admin padrão: ${item.adminDefault}
Cabos e conexões: ${item.cablesAndConectionFace}

*ENTREVISTA COM CLIENTE*
funcionamento do equipamento:${item.clientInterviewEquipmentFunctioning}

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
