import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";
import { Flex, HStack, Icon, NativeBaseProvider, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Layout from "../src/components/layout";

export default function App() {
  return (
    <Layout>
      <Link href="/dogs/create" asChild>
        <Pressable>
          <Text>添加狗狗</Text>
        </Pressable>
      </Link>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
