import { Button, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";
    export default function SignoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()
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
      <Button colorScheme='red' onClick={onOpen}>
        Sign Out
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Sign Out
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleSignOut} ml={3}>
                Sign Out
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}