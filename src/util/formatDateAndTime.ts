export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Data inválida");
  }

  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export function formatTime(dataISO: string): string {
  const data = new Date(dataISO);

  const horas = data.getHours();
  const minutos = data.getMinutes();

  const horasFormatadas = horas.toString().padStart(1, "0");
  const minutosFormatados = minutos.toString().padStart(2, "0");

  return `${horasFormatadas}:${minutosFormatados}`;
}

export function convertFromUTCToGMT3(dataUTC: string): string {
  const data = new Date(dataUTC);
  const dataGMT3 = data.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  return dataGMT3;
}
