export function vehicleDailyTemplate(item: any) {
  return `
*VEÍCULO*: ${item.vehicle}
Está no loca para vistoria: ${item.isOnSiteForInspection};

*LIMPEZA:* 
Lixo: ${item.trash}
Lavagem: ${item.washing}

*NIVEL:*
Nível de Água: ${item.waterLevel}
Nível De Óleo: ${item.oilLevel}

*LUZES:*
Pisca dianteiro: ${item.frontBlinker}
Pisca Traseiro: ${item.rearBlinker}
Luz de freio: ${item.brakeLight}
Luz de ré: ${item.reverseLight}
Farol: ${item.headLight}
Meia Luz dianteira: ${item.frontHalfLight}
Meia Luz Traseira: ${item.rearHalfLight}

Descrição das não conformidades e correções:
${item.noConformities}
    `;
}
