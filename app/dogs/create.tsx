import { SafeAreaView } from "react-native-safe-area-context";
import {
  FormControl,
  Input,
  Select,
  Center,
  VStack,
  Flex,
  Spacer,
  Radio,
  HStack,
  Button,
} from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import Layout from "../../src/components/layout";
import { useState } from "react";
import { Dog } from "../../src/models/dog";
import SearchableSelect from "../../src/components/searchable-select";

const Page = () => {
  const [dog, setDog] = useState<Dog>(new Dog());
  const [isWaiting, setIsWaiting] = useState(false);
  const submit = () => {
    setIsWaiting(true);
    setTimeout(() => {
      setIsWaiting(false);
    }, 4000);
  };

  const nameInput = (
    <Flex marginBottom="20px">
      <FormControl isRequired>
        <FormControl.Label>狗狗的名字</FormControl.Label>
        <Input
          value={dog?.name}
          onChangeText={(val) => setDog((prev) => ({ ...prev, name: val }))}
        />
        <FormControl.ErrorMessage>请填写您狗狗的名字</FormControl.ErrorMessage>
      </FormControl>
    </Flex>
  );

  const breedInput = (
    <FormControl isRequired>
      <FormControl.Label>狗狗的品种</FormControl.Label>
      <SearchableSelect
        width="100%"
        buttonText="请选择"
        search={async (keywords: string) =>
          Promise.resolve([
            { name: "金毛", value: "gt" },
            { name: "拉布拉多", value: "lb" },
            { name: "哈士奇", value: "hs" },
            { name: "柴犬", value: "jn" },
          ])
        }
        setValue={({ value }: { name: string; value: string }) => {
          setDog((prev) => ({ ...prev, breed: value }));
        }}
      />
      <FormControl.ErrorMessage>请选择您狗狗的品种</FormControl.ErrorMessage>
    </FormControl>
  );

  const genderInput = (
    <Flex marginBottom="20px">
      <FormControl isRequired>
        <FormControl.Label>狗狗的性别</FormControl.Label>
        <Radio.Group
          name="性别"
          onChange={(val) => {
            setDog((prev) => ({
              ...prev,
              gender: val as Dog["gender"],
            }));
          }}
        >
          <HStack>
            <Radio value="Boy">男生</Radio>
            <Radio value="Girl" marginLeft="30px">
              女生
            </Radio>
          </HStack>
        </Radio.Group>
        <FormControl.ErrorMessage>请选择您狗狗的性别</FormControl.ErrorMessage>
      </FormControl>
    </Flex>
  );

  const birthdayInput = (
    <Flex marginBottom="40px">
      <FormControl isRequired>
        <FormControl.Label>狗狗的生日</FormControl.Label>
        <DateTimePicker
          value={dog.birthday}
          mode="date"
          onChange={(event, date) => {
            if (event.type !== "set" || !date) {
              return;
            }
            setDog((prev) => ({ ...prev, birthday: date }));
          }}
        />
      </FormControl>
    </Flex>
  );

  const submitButton = (
    <Flex>
      <Button isDisabled={isWaiting} onPress={submit}>
        添加
      </Button>
    </Flex>
  );

  return (
    <Layout>
      <FormControl width="70%" height="100%">
        <VStack justifyContent="center" justifyItems="center" height="100%">
          {nameInput}
          {breedInput}
          {genderInput}
          {birthdayInput}
          {submitButton}
        </VStack>
      </FormControl>
    </Layout>
  );
};

export default Page;
