import { deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { db } from '../firebase';

function DeleteProduct({product}) {
  const [show, setShow] = useState(false);

  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleDeleteProduct = async()=>{
    try {
        setIsLoading(true)
        setError("")

        const docRef = doc(db, "products", product.id)

        await deleteDoc(docRef)

        toast.success("product deleted successfully")
        handleClose()
        
    } catch(err){
        console.error(err);
        setError("failed to delete product")
        toast.error("failed to delete product")
    }

    finally{
        setIsLoading(false)
    }
}
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <FaTrash/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {product.name}?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteProduct}>
            {isLoading ? "Deleteing product...": "Delete product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProduct;