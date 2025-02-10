import { catracaTemplate } from "./catracaTemplate";
import { correctiveTemplate } from "./correctiveTemplate";
import { deploymentTemplate } from "./deploymentTemplate";
import { preventivaDoorsTemplate } from "./preventivaDoorsTemplate";
import { preventivaOcrTemplate } from "./preventivaOcrTemplate";
import { preventivaRepTemplate } from "./preventivaRepTemplate";

export const executeTemplates = {
  rep: (obj: any) => preventivaRepTemplate(obj),
  catraca: (obj: any) => catracaTemplate(obj),
  doors: (obj: any) => preventivaDoorsTemplate(obj),
  ocr: (obj: any) => preventivaOcrTemplate(obj),
  corrective: (obj: any) => correctiveTemplate(obj),
  deployment: (obj: any) => deploymentTemplate(obj),
};
