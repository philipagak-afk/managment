import { useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

import toast from "react-hot-toast";

import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

import { FaEdit } from "react-icons/fa";

function UpdateProductChakra({ currentProduct }) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(currentProduct);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setProduct(currentProduct);
    setShow(true);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setError("");

      const { name, category, stock } = product;

      if (!name || !category || !stock) {
        setError("Please fill in all fields");
        return;
      }

      const updatedProduct = {
        name,
        category,
        stock,
        updatedOn: Date.now(),
      };

      const docRef = doc(db, "products", currentProduct.id);

      await updateDoc(docRef, updatedProduct);

      toast.success("Product updated successfully");

      handleClose();
    } catch (err) {
      console.error(err.message);
      setError("Failed to update product");
      toast.error("Failed to update product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={handleShow}
        leftIcon={<FaEdit />}
      >
        Edit
      </Button>

      <Modal isOpen={show} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Update {currentProduct.name}
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <form id="update-product" onSubmit={handleUpdateProduct}>
              <FormControl mb={4}>
                <FormLabel>Name</FormLabel>

                <Input
                  value={product.name || ""}
                  onChange={(e) =>
                    setProduct((p) => ({
                      ...p,
                      name: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="e.g. laptop"
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Category</FormLabel>

                <Input
                  value={product.category || ""}
                  onChange={(e) =>
                    setProduct((p) => ({
                      ...p,
                      category: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="e.g. electronics"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Stock</FormLabel>

                <Input
                  value={product.stock || ""}
                  onChange={(e) =>
                    setProduct((p) => ({
                      ...p,
                      stock: e.target.value,
                    }))
                  }
                  type="number"
                  placeholder="e.g. 12"
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
              mr={3}
              onClick={handleClose}
              variant="ghost"
            >
              Close
            </Button>

            <Button
              colorScheme="blue"
              isLoading={isLoading}
              loadingText="Updating..."
              type="submit"
              form="update-product"
            >
              Update Product
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UpdateProductChakra;