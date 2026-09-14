import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>


<App />
    <Toaster position='top-right' reverseOrder={false}/>
    </ChakraProvider>
    
  </StrictMode>,
)
