import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

import { db } from "../firebase";

function DeleteProductChakra({ product }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteProduct = async () => {
    try {
      setIsLoading(true);
      setError("");

      const docRef = doc(db, "products", product.id);

      await deleteDoc(docRef);

      toast.success("Product deleted successfully");

      handleClose();
    } catch (err) {
      console.error(err);
      setError("Failed to delete product");
      toast.error("Failed to delete product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        colorScheme="red"
        onClick={handleShow}
        leftIcon={<FaTrash />}
      >
        Delete
      </Button>

      <Modal isOpen={show} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Delete {product.name}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            Are you sure you want to delete {product.name}?
            
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              onClick={handleClose}
              variant="ghost"
            >
              Close
            </Button>

            <Button
              colorScheme="red"
              onClick={handleDeleteProduct}
              isLoading={isLoading}
              loadingText="Deleting product..."
            >
              Delete Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteProductChakra;