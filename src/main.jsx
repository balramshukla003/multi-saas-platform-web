import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider.jsx'

import App from './App.jsx'
import Loader from './common/Loader.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Suspense>
    </StrictMode>
  </BrowserRouter>
)