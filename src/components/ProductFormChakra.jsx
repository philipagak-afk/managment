import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { db } from '../firebase';
export default 
function ProductForm() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [product, setProduct] = useState({
    name: "",
    category: "",
    stock: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");


      const {name, category, stock} = product


      if(!name || !category || !stock) return

      const newProduct = {
        name,
        category,
        stock: Number(stock),
        // eslint-disable-next-line react-hooks/purity
        updatedOn: Date.now(),       
         // eslint-disable-next-line react-hooks/purity
        createdOn: Date.now()
      }

      const collectionRef = collection(db, "products")

      await addDoc(collectionRef, newProduct)

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
      <Button onClick={onOpen}>Create Product</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id="create-product" onSubmit={handleCreateProduct}> 
                <FormControl>
                  
  <FormLabel>Name</FormLabel>
  <Input type='text' placeholder="e.g. laptop"
   value={product.name}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, name: e.target.value }))
                } />
  
  
</FormControl>
<FormControl>
    
  <FormLabel>Category</FormLabel>
  <Input type='text' placeholder="e.g. electronics"
  value={product.category}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, category: e.target.value }))
                } />
 
  
  
</FormControl>

<FormControl>
    
  <FormLabel>Stock</FormLabel>
  <Input type='text' placeholder="e.g. 12"
  value={product.stock}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, stock: e.target.value }))
                }/>
  
  
</FormControl>
</form>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" form="create-product" colorScheme={"blue"}> {isLoading ? " Creating product..." : " Create product"}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}