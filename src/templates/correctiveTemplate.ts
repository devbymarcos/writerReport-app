export function correctiveTemplate(item: any) {
  return `    
*TAREFA: ${item.titleCheck}:* 

*1 - O defeito reclamado foi confirmado ou outro problema foi identificado?*

${item.reportedProblemOrIdentifiedProblem}

*2 - Quais ações técnicas foram feitas p/ resovler o problema?*
${item.solutionTechiniques}



*3 - O que pode ser feito para o problema não se repetir?*
${item.nonRepetitionSuggestion}

*4 - O problema foi 100% resolvido ou existe pendência?*
${item.fullyResolved}

########################
`;
}
