import { Text } from "@rneui/base";
import { Button, Input } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { router } from "expo-router";
const Page = () => {
  return (
    <SafeAreaView>
      <Button title="返回" onPress={router.back} />
      <Text>This is walk request create page</Text>
    </SafeAreaView>
  );
};

export default Page;
