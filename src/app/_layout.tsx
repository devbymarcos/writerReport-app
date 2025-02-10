import { Link, Slot, Stack } from "expo-router";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LayoutGrid, List } from "lucide-react-native";
import { createTables } from "@/database/schema";
import { StatusBar } from "expo-status-bar";
import MenuPrimary from "@/components/app/menuPrimary";

export default function Layout() {
  // inicia banco e tabelas
  useEffect(() => {
    const initializeDatabase = async () => {
      console.log("executado create table");
      await createTables();
    };
    initializeDatabase();
  }, []);
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="index" options={{ headerTitle: "Inicio" }} />
        <Stack.Screen
          name="action/implantacao/index"
          options={{ headerTitle: "Implantação" }}
        />
        <Stack.Screen
          name="action/index"
          options={{ headerTitle: "Preventiva" }}
        />
        <Stack.Screen
          name="list/index"
          options={{ headerTitle: "Relatórios" }}
        />
        <Stack.Screen
          name="action/task/index"
          options={{ headerTitle: "TAREFA" }}
        />
        <Stack.Screen
          name="action/rep/index"
          options={{ headerTitle: "REP preventiva" }}
        />
        <Stack.Screen
          name="action/catraca/index"
          options={{ headerTitle: "Catraca preventiva" }}
        />
        <Stack.Screen
          name="action/ocr/index"
          options={{ headerTitle: "OCR preventiva" }}
        />
        <Stack.Screen
          name="action/doors/index"
          options={{ headerTitle: "Portas preventiva" }}
        />
        <Stack.Screen
          name="action/corrective/index"
          options={{ headerTitle: "Corretiva" }}
        />
        <Stack.Screen
          name="view/index"
          options={{ headerTitle: "Relatório" }}
        />
      </Stack>
      <StatusBar style="dark" />
      <MenuPrimary />
    </>
  );
}
