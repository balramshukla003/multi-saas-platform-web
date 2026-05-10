import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const LoginPage = lazy(() => import('./pages/login-page/LoginPage'))
const CRMRoutes = lazy(() => import('./routes/CRMRoutes'))
const InventoryRoutes = lazy(() => import('./routes/InventoryRoutes'))
const LaundryRoutes = lazy(() => import('./routes/LaundryRoutes'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Multi-SaaS Platform</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/crm/*" element={<CRMRoutes />} />
      <Route path="/inventory/*" element={<InventoryRoutes />} />
      <Route path="/laundry/*" element={<LaundryRoutes />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App