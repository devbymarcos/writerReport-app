import { formatDate } from "@/helpers/formatDate";
import { IPreventiveOCR } from "@/core/preventiva/ocr-preventive/types/interfaceOcr";

export function preventivaOCRTemplate(text: IPreventiveOCR) {
  return `    
Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
Data: ${formatDate(String(text.date))}
Horário: ${text.timeStart} as ${text.timeStop}
Técnico:  ${text.operator}
Tipo: Preventiva OCR
Nome do cliente que recebeu o serviço: ${text.followed}

1 - Descrição das ações realizadas:

*LIMPEZA*
Cancelas: ${text.barriers}
Sensores antiesmagamento: ${text.antiCrushSensors}
Câmeras: ${text.cameras}
Postes e pedestais: ${text.postsAndPedestals}
Sensores de automação: ${text.automationSensors}

*INSPEÇÃO ( Verificação externa )*
Cancela: ${text.barrierCablesConnections}
Câmera: ${text.cameraCablesConnections}
Laços Indutivos: ${text.inductiveLoopsCablesConnections}
Sensores de automação: ${text.automationSensorsCablesConnections}
Pedestais: ${text.pedestalsTightening}
Braços e postes de fixação: ${text.armsAndFixingPosts}
Cabos aparentes: ${text.cableManagement}

*TESTE E REGISTRO DE FUNCIONAMENTO*
Módulo I/O status do led (foto): ${text.ioModuleLedStatus}
Cancela teste abertura e fechamento:${text.barrierOpenCloseTest}
 
*DESCREVA AS NÃO CONFORMIDADES*
${text.nonConformitiesDescription}

*SUGESTÃO DE MELHORIAS*
${text.improvementSuggestions}

*MATERIAIS UTILIZADOS*
${text.materialsUsed}

*2 - quais as pendencias ou próximas etapas:*
${text.pendingOrNextActions}

`;
}
