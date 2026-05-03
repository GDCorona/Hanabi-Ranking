import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { DialogProvider } from './context/DialogContext';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DialogProvider>
        <BrowserRouter>
          <App />
      </BrowserRouter>
    </DialogProvider>
  </StrictMode>
)
