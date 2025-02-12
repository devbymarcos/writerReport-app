import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getTicketAndTasks } from "@/service/getTicketAndTasks";
import { joinTemplate } from "@/templates/joinTemplate";
import * as Clipboard from "expo-clipboard";
import Card from "@/components/ui/card";
import { Copy } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function ViewSend() {
  const { id } = useLocalSearchParams();
  const [textView, setTextView] = useState("Não foi possivel carregar...");

  async function getAlltickets() {
    const data = await getTicketAndTasks(Number(id));
    // console.log(data);
    console.log("Text");
    const text = joinTemplate(data);
    console.log("template aqui");
    setTextView(text);
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(textView);
  };

  useEffect(() => {
    getAlltickets();
  }, []);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Text>{textView}</Text>
          </Card>
        </View>
      </ScrollView>
      <Pressable style={styles.btnCopy} onPress={copyToClipboard}>
        <Copy color="#fff" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 100,
    paddingVertical: 20,
  },
  btnCopy: {
    position: "absolute",
    bottom: 140,
    right: 30,
    padding: 20,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 9999,
  },
});
