import { formatDate, formatTime } from "@/util/formatDateAndTime";
import { executeTemplates } from "./executeTemplates";

export function joinTemplate(text: any) {
  console.log(text);
  const body =
    text
      ?.map((item: any) => {
        try {
          const objData = JSON.parse(item.content);
          type TemplateKeys = keyof typeof executeTemplates;
          return executeTemplates[objData.type as TemplateKeys](objData);
        } catch (error) {
          console.error("Erro ao processar item:", item, error);
          return "[Erro ao processar este item]"; // Ou uma mensagem mais informativa
        }
      })
      .join(" ") || "Sem dados disponíveis";

  return `
Chamado/Cliente: ${text[0].numberTicket} - ${text[0].titleTicket}
Data: ${formatDate(text[0].date)}
Hora: ${formatTime(text[0].init_time)} até ${formatTime(text[0].end_time)}
Técnico:  ${text[0].operator}
Tipo: Preventiva
Acompanhou: ${text[0].followed}
Empresa contratante: ${text[0].nameBusiness}
${body}

*Tempo produtividade*
Produtivo: ${text[0].productiveTime}
Inprodutivo: ${formatTime(text[0].pause_time)}

Justificativa: 
${text[0].justify_pause}   `;
}
