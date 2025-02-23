import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { createTables } from "@/database/schema";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import MenuPrimary from "@/components/app/menuPrimary";
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
      <Stack>
        <Stack.Screen
          name="action/catraca"
          options={{ title: "Write report" }}
        />
        <Stack.Screen name="reports/index" options={{ title: "Relatórios" }} />
        <Stack.Screen name="action/index" options={{ title: "Write report" }} />
        <Stack.Screen
          name="action/corrective"
          options={{ title: "Write report" }}
        />
        <Stack.Screen name="action/doors" options={{ title: "Write report" }} />
        <Stack.Screen
          name="action/implantacao"
          options={{ title: "Write report" }}
        />
        <Stack.Screen name="action/ocr" options={{ title: "Write report" }} />
        <Stack.Screen name="action/rep" options={{ title: "Write report" }} />
        <Stack.Screen name="action/task" options={{ title: "Write report" }} />
        <Stack.Screen name="action/view" options={{ title: "Write report" }} />
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
      <StatusBar style="dark" />
      <MenuPrimary />
    </GestureHandlerRootView>
  );
}
