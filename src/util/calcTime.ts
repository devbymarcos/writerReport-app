export function calculateTimeBetweenDates(
  startTime: string,
  endTime: string
): string {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
  const totalMinutes = Math.floor(differenceInMilliseconds / (1000 * 60));

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours} h : ${minutes} m`;
}
