import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

function UpdateCategory({ currentCategory }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (currentCategory) {
      setName(currentCategory.name);
    }
  }, [currentCategory]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated category:", name);
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        <FaEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Update {currentCategory?.name}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form
              id="update-category"
              onSubmit={handleSubmit}
            >
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>

                <Input
                  type="text"
                  placeholder="e.g. laptop"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>

            <Button
              type="submit"
              form="update-category"
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Updating"
            >
              Update Category
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateCategory;