export function vehicleMonthTemplate(item: any) {
  return `
*VEÍCULO*: ${item.vehicle}

FLUIDOS: 
Freios: ${item.brakes}
Direção Hidráulica: ${item.powerSteering}
Transmissão: ${item.transmission}
Arrefecimento: ${item.cooling}

PNEUS:
Pressão: ${item.pressure}
Desgaste: ${item.wear}

FREIOS:
Pastilhas: ${item.pads}
Discos: ${item.discs}
Tambores de freio: ${item.brakeDrums}

BATERIA:
Status: ${item.battery}

SUSPENSÃO:
Amortecedor: ${item.shockAbsorber}
Molas: ${item.springs}
Componentes de direção: ${item.steeringComponents}

CORREIAS E MANGUEIRAS:
Status: ${item.beltsAndHoses}

INSPEÇÃO GERAL
Carroceria: ${item.bodywork}
Sinais de corrosão: ${item.signsOfCorrosion}

Descrição das não conformidades e correções:
${item.noConformities}

#####################################
    `;
}
