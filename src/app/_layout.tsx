import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { createTables } from "@/database/schema";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Toaster } from "sonner-native";

import MenuPrimary from "@/components/app/menuPrimary";
import { PaperProvider } from "react-native-paper";
export default function RootLayout() {
  useEffect(() => {
    const initializeDatabase = async () => {
      console.log("executado create table");
      await createTables();
    };
    initializeDatabase();
  }, []);
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <Stack>
          <Stack.Screen
            name="action/catraca"
            options={{ title: "Write report" }}
          />
          <Stack.Screen
            name="reports/index"
            options={{ title: "Relatórios" }}
          />
          <Stack.Screen
            name="action/index"
            options={{ title: "Write report" }}
          />
          <Stack.Screen
            name="action/corrective"
            options={{ title: "Write report" }}
          />
          <Stack.Screen
            name="action/doors"
            options={{ title: "Write report" }}
          />
          <Stack.Screen
            name="action/deployment"
            options={{ title: "Write report" }}
          />
          <Stack.Screen name="action/ocr" options={{ title: "Write report" }} />
          <Stack.Screen name="action/rep" options={{ title: "Write report" }} />
          <Stack.Screen
            name="action/task"
            options={{ title: "Write report" }}
          />
          <Stack.Screen
            name="action/view-report/index"
            options={{ title: "Enviar relatório" }}
          />
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="action/modal-edit-ticket/modal"
            options={{
              presentation: "modal",
              title: "Editar atividade",
            }}
          />
          <Stack.Screen
            name="action/modal-timetask/modal"
            options={{
              presentation: "modal",
              title: "Tempo de atividade",
            }}
          />
          <Stack.Screen
            name="action/modal-submenu-task/modal"
            options={{
              presentation: "modal",
              title: "Submenu de tarefas",
            }}
          />
        </Stack>
        <StatusBar style="dark" />
        <MenuPrimary />
        <Toaster offset={100} />
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
