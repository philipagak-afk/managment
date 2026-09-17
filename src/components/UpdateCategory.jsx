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
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
function UpdateCategory({currentCategory}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading,setIsLoading] = useState(false);
    const[error,setError] = useState("");
    const[name , setName] = useState("")

  return (
     <>
          <Button onClick={onOpen} colorScheme="blue">
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
                  id="update-product"
                  onSubmit={()=>{}}
                >
                  <FormControl mb={4}>
                    <FormLabel>Name</FormLabel>
    
                    <Input
                      type="text"
                      placeholder="e.g. laptop"
                      value={name}
                      onChange={(e) =>
                        setName(e.target.value)
                      }
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
                  form="update-product"
                  colorScheme="blue"
                  isLoading={isLoading}
                  loadingText="Updating"
                >
                  Update Product
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
  )
}

export default UpdateCategory