import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { createTables } from "@/database/schema";
import { StatusBar } from "expo-status-bar";
import { ClipboardPlus, Home, ListCollapse } from "lucide-react-native";
export default function RootLayout() {
  useEffect(() => {
    const initializeDatabase = async () => {
      console.log("executado create table");
      await createTables();
    };
    initializeDatabase();
  }, []);
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <Home color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="action"
          options={{
            title: "Início",
            tabBarIcon: ({ color }) => <ClipboardPlus color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="list/index"
          options={{
            title: "Relatórios",
            tabBarIcon: ({ color }) => <ListCollapse color={color} />,
          }}
        />
      </Tabs>
      <StatusBar style="dark" />
    </>
  );
}
