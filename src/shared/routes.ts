export const TASK_ROUTES = {
  rep: "/action/rep",
  deployment: "/action/deployment",
  catraca: "/action/catraca",
  ocr: "/action/ocr",
  doors: "/action/doors",
  corrective: "/action/corrective",
} as const;

export type TaskType = keyof typeof TASK_ROUTES;
export type TaskRoute = (typeof TASK_ROUTES)[TaskType];

export const getTaskRoute = (
  type: TaskType,
  idTask: string,
  ticketId: string
): TaskRoute => {
  const baseRoute = TASK_ROUTES[type];
  return `${baseRoute}?idTask=${idTask}&id=${ticketId}` as TaskRoute;
};
