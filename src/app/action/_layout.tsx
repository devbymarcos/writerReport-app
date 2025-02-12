import { Stack } from "expo-router";

export default function ActionLayout() {
  return (
    <Stack>
      <Stack.Screen name="catraca" options={{ title: "Voltar" }} />
      <Stack.Screen name="corrective" options={{ title: "Voltar" }} />
      <Stack.Screen name="doors" options={{ title: "Voltar" }} />
      <Stack.Screen name="implantacao" options={{ title: "Voltar" }} />
      <Stack.Screen name="ocr" options={{ title: "Voltar" }} />
      <Stack.Screen name="rep" options={{ title: "Voltar" }} />
      <Stack.Screen name="task" options={{ title: "Voltar" }} />
      <Stack.Screen name="view" options={{ title: "Enviar Relatorio" }} />
      <Stack.Screen
        name="index"
        options={{
          title: "Iniciar Atividade",
        }}
      />
    </Stack>
  );
}
