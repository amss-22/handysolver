import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import JobForm from "./JobForm";
import { CopyIcon, DeleteIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  IconButton,
} from "@chakra-ui/react";

const PopeOver = ({ onDuplicate, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstFieldRef = React.useRef(null);

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      placement="right"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<SettingsIcon />}
        />
      </PopoverTrigger>
      <PopoverContent p={5} ml={5} width="13rem" mt="3rem">
        <HStack>
          <CopyIcon />
          <Button colorScheme="teal" variant="ghost" onClick={onDuplicate}>
            <Text>DUPLICATE</Text>
          </Button>
        </HStack>
        <HStack>
          <DeleteIcon />
          <Button colorScheme="teal" variant="ghost" onClick={onDelete}>
            <Text>DELETE</Text>
          </Button>
        </HStack>
      </PopoverContent>
    </Popover>
  );
};

const JobModal = ({ data, i, getFormData, onDuplicate, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{`Job No ${i}`}</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack justifyContent="space-between">
              <Text>Edit Job</Text>
              <PopeOver
                onDuplicate={() => onDuplicate(data)}
                onDelete={() => onDelete(data.id)}
              />
            </HStack>
          </ModalHeader>
          <ModalBody>
            <JobForm data={data} getFormData={getFormData} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobModal;
