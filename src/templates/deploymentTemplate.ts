export function deploymentTemplate(item: any) {
  return `
*TAREFA: ${item.titleCheck}:* 
 
*1 - Quais etapas da instalação foram realizadas?*
${item.installationSteps}

*2 - Qual será a próxima atividade?*
${item.nextActivity}

*3 - Relação de material utilizado?*
${item.materialUsed}

*4 - Justificativas de horas improdutivas (se houver)?*
${item.unproductiveTime}

*4 - Nome da pessoa que recebeu o feedback?*
${item.followed}

########################
`;
}
