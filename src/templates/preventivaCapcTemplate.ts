import { formatDate } from "@/helpers/formatDate";
import { ICapcPreventive } from "@/core/preventiva/capc-preventive/types/interfaceDoors";

export function preventivaCapcTemplate(text: ICapcPreventive) {
  const body =
    text.task
      ?.map((item) => {
        return `
*TAREFA:* ${item.nameSector}
*Fechadura Eletroímã*
Funcionamento:${item.electromagneticLock ?? "Não informado"}
Fixação: ${item.electromagnetFixation ?? "Não informado" ?? "Não informado"}
Limpeza eletroímã:${
          item.electromagnetCleaning ?? "Não informado" ?? "Não informado"
        }
Limpeza Contato da porta: ${
          item.doorContactCleaning ?? "Não informado" ?? "Não informado"
        }

*Mola da porta*
Funcionamento:${item.doorSpring ?? "Não informado" ?? "Não informado"}
Regulagem de pressão:${
          item.doorSpringAdjustment ?? "Não informado" ?? "Não informado"
        }

*Inspeção Física da Porta*
Porta alinhada:${item.doorAlignment ?? "Não informado" ?? "Não informado"}

*Leitores de Cartão (Entrada e Saída)*
Funcionamento dos leitores:${
          item.cardReaders ?? "Não informado" ?? "Não informado"
        }
Limpeza da superfície do leitor:${item.cardReadersCleaning ?? "Não informado"}

*Chave Pacri (Entrada)*
Funcionamento: ${item.pacriKey ?? "Não informado"}  
Lubrificar:${item.pacriKeyLubrication ?? "Não informado"}

*Botoeira de Emergência (Saída)*
Funcionamento:  ${item.emergencyButton ?? "Não informado"}
Fixação:${item.emergencyButtonFixation ?? "Não informado"}
Limpeza do botão: ${item.emergencyButtonCleaning ?? "Não informado"}

*Cabeamento Aparente*
Danos ou afrouxamento: ${item.cableManagement ?? "Não informado"}  
Organizar e fixar:${item.cableManagementFixation ?? "Não informado"}

*Fontes de Alimentação e Temporizadas*
Funcionamento:  ${item.powerSources ?? "Não informado"}
Temporização :${item.powerTimerSources ?? "Não informado"}

*Painel de Controle de Acesso*
Fixação:  ${item.accessControlPanel ?? "Não informado"}
Conexão de cabos : ${item.cablesConnectionsControlPanel ?? "Não informado"}
Status do controlador de acesso :${item.statusControlPanel ?? "Não informado"}
Limpeza :${item.cleaningAccessControlPanel ?? "Não informado"}

*Descreva as não conformidades:*
${item.nonConformitiesDescription ?? "Não informado"}

*Sugestões de melhorias:*
${item.improvementSuggestions ?? "Não informado"} 
*##############*
 `;
      })
      .join(" ") || "Sem dados disponíveis";

  return `    
Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
Data: ${formatDate(String(text.date))}
Horário: ${text.timeStart} as ${text.timeStop}
Técnico:  ${text.operator}
Tipo: Preventiva Portas 
Acompanhou: ${text.followed}

1 - Descrição das ações realizadas:

${body}

`;
}
