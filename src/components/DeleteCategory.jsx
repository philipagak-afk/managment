import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { db } from "../firebase";

function DeleteCategory({ category }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDeleteCategory = async () => {
    try {
      setIsLoading(true);
      setError("");

      const docRef = doc(db, "categories", category.id);

      await deleteDoc(docRef);

      toast.success("Category deleted successfully");

      onClose();
    } catch (err) {
      console.error(err);

      setError("Failed to delete category");

      toast.error("Failed to delete category");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        <FaTrash />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Delete {category.name}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            Are you sure you want to delete {category.name}?
            
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>

            <Button
              colorScheme="red"
              onClick={handleDeleteCategory}
              isLoading={isLoading}
            >
              Delete Category
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteCategory;