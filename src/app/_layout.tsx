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
      await createTables();
      console.log("executado create table");
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
          name="corretiva/index"
          options={{ headerTitle: "Corretiva" }}
        />
        <Stack.Screen
          name="implantacao/index"
          options={{ headerTitle: "Implantação" }}
        />
        <Stack.Screen
          name="preventiva/index"
          options={{ headerTitle: "Preventiva" }}
        />
        <Stack.Screen
          name="list/index"
          options={{ headerTitle: "Relatórios" }}
        />
        <Stack.Screen
          name="preventiva/task/index"
          options={{ headerTitle: "Adicionar checklist ao ticket" }}
        />
        <Stack.Screen
          name="preventiva/rep/index"
          options={{ headerTitle: "Preventiva REP" }}
        />
        <Stack.Screen
          name="view/index"
          options={{ headerTitle: "Relatório" }}
        />
      </Stack>
      <StatusBar style="dark" />
      <View style={styles.menu}>
        <Link style={styles.btn} href="/">
          <LayoutGrid color="#000" />
        </Link>
        <Link style={styles.btn} href="/list">
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
