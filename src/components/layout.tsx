import {
  NativeBaseProvider,
  VStack,
  HStack,
  Container,
  Icon,
  Center,
  Box,
  Pressable,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard } from "react-native";

const Layout = ({ children }: PropsWithChildren) => {
  const fetchPets = () => {};
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Pressable onPress={Keyboard.dismiss}>
          <VStack>
            <Box
              height="95%"
              width="100%"
              alignItems="center"
              alignContent="center"
            >
              {children}
            </Box>
            <Center>
              <HStack width="70%" justifyContent="space-around">
                <Icon as={Ionicons} name="home" size="40px" />
                <Icon as={Ionicons} name="heart" size="40px" />
              </HStack>
            </Center>
          </VStack>
        </Pressable>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Layout;
