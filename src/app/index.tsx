import { ButtonLink } from "@/components/ui/btnLink";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { dataMenu } from "@/shared/dataMenu";
import { Colors } from "@/constants/Colors";
import React, { useCallback } from "react";
import { Link } from "expo-router";

export default function Home() {
  const renderItem = useCallback(
    ({ item }: { item: { path: string; title: string } }) => (
      <Link style={styles.linkStyle} href={item.path as any}>
        <Text style={styles.linkText}>{item.title}</Text>
      </Link>
    ),
    []
  );

  const keyExtractor = useCallback((item: { path: string }) => item.path, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.titleApp}>Write Report</Text>
        <Text style={styles.subTitleApp}></Text>
      </View>
      <FlatList
        data={dataMenu}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
  },
  listContainer: {
    padding: 20,
    paddingTop: 100,
  },
  linkStyle: {
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 10,
    padding: 30,
    borderRadius: 5,
  },
  boxTitle: {
    marginBottom: 10,
    alignItems: "center",
    marginTop: 50,
    zIndex: 1,
  },
  titleApp: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitleApp: {
    fontSize: 11,
  },
  linkText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text,
  },
});
