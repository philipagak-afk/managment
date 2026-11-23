import { signOut } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';
import { auth } from '../firebase';
import toast from 'react-hot-toast';

function SignoutModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const navigate = useNavigate()
  const handleSignOut = async()=>{
    try {
      await signOut(auth)
      navigate("/signin")
      toast.success("signed out successfully")
    } catch (error) {
      console.error(error.message);
      
    }
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign out
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out ?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSignOut}>
            Sign out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignoutModal;