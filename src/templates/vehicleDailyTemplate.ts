export function vehicleDailyTemplate(item: any) {
  return `
*VEÍCULO*: ${item.vehicle}

*LIMPEZA:* 
Lixo: ${item.trash}
Lavagem: ${item.washing}

*NÍVEL:*
Nível de Água: ${item.waterLevel}
Nível de Óleo: ${item.oilLevel}

*LUZES:*
Pisca dianteiro: ${item.frontBlinker}
Pisca Traseiro: ${item.rearBlinker}
Luz de freio: ${item.brakeLight}
Luz de ré: ${item.reverseLight}
Farol: ${item.headLight}
Meia Luz dianteira: ${item.frontHalfLight}
Meia Luz traseira: ${item.rearHalfLight}

Descrição das não conformidades e correções:
${item.noConformities}
    `;
}
