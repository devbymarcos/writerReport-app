import { Stack } from "expo-router";

export default function ActionLayout() {
  return (
    <Stack>
      <Stack.Screen name="catraca" />
      <Stack.Screen name="corrective" />
      <Stack.Screen name="doors" />
      <Stack.Screen name="implantacao" />
      <Stack.Screen name="ocr" />
      <Stack.Screen name="rep" />
      <Stack.Screen name="task" />
      <Stack.Screen
        name="index"
        options={{
          title: "Iniciar Atividade",
        }}
      />
    </Stack>
  );
}
