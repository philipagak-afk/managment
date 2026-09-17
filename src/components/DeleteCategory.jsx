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
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
function DeleteCategory({category}) {
  const{isOpen, onOpen, onClose}= useDisclosure();
  const[isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState("");

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
              </ModalBody>
    
              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  Close
                </Button>
    
                <Button
                  colorScheme="red"
                  onClick={()=>{}}
                  isLoading={isLoading}
                  loadingText="Deleting..."
                >
                  Delete Category
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
  )
}

export default DeleteCategory