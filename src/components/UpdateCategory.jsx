import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { FaEdit } from "react-icons/fa";

function UpdateCategory({ currentCategory }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [category, setCategory] = useState(currentCategory);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      const { name } = category;

      if (!name) return;

      const updatedCategory = {
        name,
        updatedOn: Date.now(),
      };

      const docRef = doc(db, "categories", currentCategory.id);

      await updateDoc(docRef, updatedCategory);

      toast.success("Category updated successfully");

      onClose();

      setCategory(currentCategory);
    } catch (err) {
      console.error(err);
      setError("Failed to update category");
      toast.error("Failed to update category");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        <FaEdit />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Update {currentCategory.name}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form
              id="update-category"
              onSubmit={handleUpdateCategory}
            >
              <FormControl>
                <FormLabel>Category</FormLabel>

                <Input
                  type="text"
                  placeholder="e.g. Electronics"
                  value={category.name}
                  onChange={(e) =>
                    setCategory((p) => ({
                      ...p,
                      name: e.target.value,
                    }))
                  }
                />
              </FormControl>

              {error && (
                <p style={{ color: "red", marginTop: "10px" }}>
                  {error}
                </p>
              )}
            </form>
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
              type="submit"
              form="update-category"
              colorScheme="blue"
              isLoading={isLoading}
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