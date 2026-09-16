import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

function CategoryForm() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [isLoading,setIsLoading ] = useState(false);
    const[name , setName] = useState("")
  return (
      <>
      <Button
       onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-product" onSubmit={()=>{}}>
              <FormControl 
              
              >
                <FormLabel>Name</FormLabel>
                <Input type="text"
                placeholder="e.g.laptop"
                value={name}
              onChange={(e) => setName(e.target.value) }
                 />
              </FormControl>
              
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" form="create-product" colorScheme={"blue"}>
            
           {isLoading ? " Creating product..." : " Create product"}
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CategoryForm