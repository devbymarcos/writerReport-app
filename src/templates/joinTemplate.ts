import { catracaTemplate } from "./catracaTemplate";
import { preventivaRepTemplate } from "./preventivaRepTemplate";

export function joinTemplate(text: any) {
  const body =
    text.task
      ?.map((item: any) => {
        if (item.taskType == "catraca-preventive") {
          return catracaTemplate(item);
        }
        if (item.taskType == "rep-preventive") {
          return preventivaRepTemplate(item);
        }
      })
      .join(" ") || "Sem dados disponíveis";

  return `
Chamado/Cliente: ${text.numberTicket} - ${text.titleTicket}
Data: ${text.date}
Técnico:  ${text.operator}
Tipo: Preventiva
Acompanhou: ${text.followed}
Empresa contratante: ${text.nameBusiness}
${body}

*Tempo*
Produtivo : ${new TimerTracker().formatTime(Number(text.productiveTime))}
Inprodutivo : ${text.totalPause}
  `;
}
