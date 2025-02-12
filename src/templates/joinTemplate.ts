import { formatDate, formatTime } from "@/util/formatDate";
import { executeTemplates } from "./executeTemplates";

export function joinTemplate(text: any) {
  console.log(text[0].initHour);
  const body =
    text
      ?.map((item: any) => {
        const objData = JSON.parse(item.content);
        type TemplateKeys = keyof typeof executeTemplates;
        return executeTemplates[objData.type as TemplateKeys](objData);
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



  `;
}
