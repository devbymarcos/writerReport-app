export function preventivaDoorsTemplate(item: any) {
  return `
*TAREFA:* ${item.nameSector}

*Fechadura Eletroímã*
Funcionamento:${item.electromagneticLock}
Fixação: ${item.electromagnetFixation}
Limpeza eletroímã:${item.electromagnetCleaning}
Limpeza Contato da porta: ${item.doorContactCleaning}

*Mola da porta*
Funcionamento:${item.doorSpring}
Regulagem de pressão:${item.doorSpringAdjustment}

*Inspeção Física da Porta*
Porta alinhada:${item.doorAlignment}

*Leitores de Cartão (Entrada e Saída)*
Funcionamento dos leitores:${item.cardReaders}
Limpeza da superfície do leitor:${item.cardReadersCleaning}

*Chave Pacri (Entrada)*
Funcionamento: ${item.pacriKey}  
Lubrificar:${item.pacriKeyLubrication}

*Botoeira de Emergência (Saída)*
Funcionamento:  ${item.emergencyButton}
Fixação:${item.emergencyButtonFixation}
Limpeza do botão: ${item.emergencyButtonCleaning}

*Cabeamento Aparente*
Danos ou afrouxamento: ${item.cableManagement}  
Organizar e fixar:${item.cableManagementFixation}

*Fontes de Alimentação e Temporizadas*
Funcionamento:  ${item.powerSources}
Temporização :${item.powerTimerSources}

*Painel de Controle de Acesso*
Fixação:  ${item.accessControlPanel}
Conexão de cabos : ${item.cablesConnectionsControlPanel}
Status do controlador de acesso :${item.statusControlPanel}
Limpeza :${item.cleaningAccessControlPanel}

*Descreva as não conformidades:*
${item.nonConformitiesDescription}

*Sugestões de melhorias:*
${item.improvementSuggestions} 
*##############*
 `;
}
