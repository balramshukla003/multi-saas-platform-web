import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense fallback={<h1>Loading Application...</h1>}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Suspense>
    </StrictMode>
  </BrowserRouter>
)