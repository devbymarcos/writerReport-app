export function preventivaOcrTemplate(item: any) {
  return `    
*TAREFA:* ${item.nameSector}

1 - Descrição das ações realizadas:

*LIMPEZA*
Cancelas: ${item.barriers}
Sensores antiesmagamento: ${item.antiCrushSensors}
Câmeras: ${item.cameras}
Postes e pedestais: ${item.postsAndPedestals}
Sensores de automação: ${item.automationSensors}

*INSPEÇÃO ( Verificação externa )*
Cancela: ${item.barrierCablesConnections}
Câmera: ${item.cameraCablesConnections}
Laços Indutivos: ${item.inductiveLoopsCablesConnections}
Sensores de automação: ${item.automationSensorsCablesConnections}
Pedestais: ${item.pedestalsTightening}
Braços e postes de fixação: ${item.armsAndFixingPosts}
Cabos aparentes: ${item.cableManagement}

*TESTE E REGISTRO DE FUNCIONAMENTO*
Módulo I/O status do led (foto): ${item.ioModuleLedStatus}
Cancela teste abertura e fechamento:${item.barrierOpenCloseTest}
 
*DESCREVA AS NÃO CONFORMIDADES*
${item.nonConformitiesDescription}

*SUGESTÃO DE MELHORIAS*
${item.improvementSuggestions}

*MATERIAIS UTILIZADOS*
${item.materialsUsed}

*2 - quais as pendencias ou próximas etapas:*
${item.pendingOrNextActions}

`;
}
