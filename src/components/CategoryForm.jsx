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
import { toast } from 'react-hot-toast';
import { db } from '../firebase';
import { addDoc, collection } from "firebase/firestore";

function CategoryForm() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [isLoading,setIsLoading ] = useState(false);
    const[name , setName] = useState("")
    const [error, setError] = useState(""); 

    const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");

      const collectionRef = collection(db, "categories");

      const newCategory = {
        name,
        createdOn: Date.now(),
        updatedOn: Date.now()
      }

      await addDoc(collectionRef, newCategory)

      toast.success("product created successfully")
      onClose()
      setProduct({name:"", category:"", stock:""})
    } catch (err) {
      console.error(err);
      setError("Failed to create product");

      toast.error("Failed to create product");
    } finally {
      setIsLoading(false);
    }
  };
  return (
      <>
      <Button m={"10px"}
       onClick={onOpen}>Create Category</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-category" onSubmit={handleCreateCategory}>
              <FormControl 
              
              >
                <FormLabel>Name</FormLabel>
                <Input type="text"
                placeholder="e.g. electronics"
                value={name}
              onChange={(e) => setName(e.target.value) }
                 />
              </FormControl>
              
            </form>
          </ModalBody>

          <ModalFooter>
            <Button variant={"ghost"} mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" form="create-category" colorScheme={"blue"}>
            
           {isLoading ? " Creating category..." : " Create category"}
          </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CategoryForm