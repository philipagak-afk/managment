import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { FaEdit } from "react-icons/fa";

function UpdateProduct({currentProduct}) {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(currentProduct);
console.log(currentProduct);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");


      const {name, category, stock} = product


      if(!name || !category || !stock) return

      const updatedProduct = {
        name,
        category,
        stock,
        updatedOn: Date.now(),
      }


      // console.log(updatedProduct);
      // return;
      

      const docRef = doc(db, "products", currentProduct.id)

      await updateDoc(docRef, updatedProduct)

      toast.success("product updated successfully")
      handleClose()
      setProduct(currentProduct)
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
      <Button variant="primary" onClick={handleShow}>
        <FaEdit/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {currentProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="update-product" onSubmit={handleUpdateProduct}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={product.name}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, name: e.target.value }))
                }
                type="text"
                placeholder="e.g. laptop"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={product.category}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, category: e.target.value }))
                }
                type="text"
                placeholder="e.g. electronics"
              />
            </Form.Group>
            <Form.Group className="mb-3" c>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                value={product.stock}
                onChange={(e) =>
                  setProduct((p) => ({ ...p, stock: e.target.value }))
                }
                type="text"
                placeholder="e.g. 12"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button disabled={isLoading} type="submit" variant="primary" form="update-product">
           {isLoading ? " Updating product..." : " Update product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateProduct;