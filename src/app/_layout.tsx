import { Link, Slot, Stack } from "expo-router";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { LayoutGrid, List } from "lucide-react-native";
import { createTables } from "@/database/schema";
import { StatusBar } from "expo-status-bar";

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
          options={{ headerTitle: "Tarefas" }}
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
      <View style={styles.menu}>
        <Link style={styles.btn} href="/" replace>
          <LayoutGrid color="#000" />
        </Link>
        <Link style={styles.btn} href="/list" replace>
          <List color="#000" />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    flex: 1,
    padding: 20,
    textAlign: "center",
    backgroundColor: "#fff",
  },
});
