import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function ProductForm() {
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    stock: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        updatedOn: Date.now(),
        createdOn: Date.now()
      }

      const collectionRef = collection(db, "products")

      await addDoc(collectionRef, newProduct)

      toast.success("product created successfully")
      handleClose()
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
      <Button variant="primary" onClick={handleShow}>
        Create Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="create-product" onSubmit={handleCreateProduct}>
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
          <Button disabled={isLoading} type="submit" variant="primary" form="create-product">
           {isLoading ? " Creating product..." : " Create product"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductForm;