import { useEffect, useState } from "react";
import {
  FlatList,
  Input,
  Container,
  Box,
  Modal,
  Button,
  ScrollView,
} from "native-base";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useDebounce } from "../hooks/use-debounce";

interface SearchableSelectionProps<T> {
  buttonText: string;
  search: (keywords: string) => Promise<T[]>;
  setValue: (val: T) => void;
}

const SearchableSelect = <T,>(props: SearchableSelectionProps<T> & any) => {
  const [list, setList] = useState<T[]>([]);
  const [isWaiting, setIsWaiting] = useState(false);
  const [keywords, setKeywords] = useDebounce("", 500);
  const [isOpen, setIsOpen] = useState(false);

  const search = (keywords: string) => {
    setIsWaiting(true);
    props
      .search(keywords)
      .then((list: T[]) => {
        setList(list);
      })
      .catch((err: Error) => console.error(err))
      .finally(() => {
        setIsWaiting(false);
      });
  };

  useEffect(() => {
    search(keywords);
  }, [keywords]);

  const listItem = (item: any) => {
    return (
      <TouchableWithoutFeedback
        {...props}
        onPress={() => {
          props.setValue(item.item);
          setList([]);
        }}
      >
        <Container>{item.item.name}</Container>
      </TouchableWithoutFeedback>
    );
  };

  const onClose = () => {
    setList([]);
    setKeywords("");
    setIsOpen(false);
  };

  return (
    <Box {...props}>
      <Button onPress={() => setIsOpen(true)}>{props.buttonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Modal.Content position="absolute" top="10%" width="100%">
          <Modal.CloseButton />
          <Modal.Header>狗狗的品种</Modal.Header>
          <Modal.Body _scrollview={{ scrollEnabled: false }}>
            <Input
              placeholder="Search"
              onChangeText={(val) => setKeywords(val)}
            />
            <ScrollView scrollEnabled={true} maxHeight="200px">
              <FlatList data={list} renderItem={listItem} {...props} />
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default SearchableSelect;
