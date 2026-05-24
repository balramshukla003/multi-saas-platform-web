import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoutes'
const LoginPage = lazy(() => import('./pages/login-page/LoginPage'))
const CRMRoutes = lazy(() => import('./routes/CRMRoutes'))
const InventoryRoutes = lazy(() => import('./routes/InventoryRoutes'))
const LaundryRoutes = lazy(() => import('./routes/LaundryRoutes'))
const CommonDashboard = lazy(() => import('./pages/common-dashboard/CommonDashboard.jsx'))

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Welcome to Multi-SaaS Platform</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/crm/*" element={<CRMRoutes />} />
      <Route path="/inventory/*" element={<InventoryRoutes />} />
      <Route path="/laundry/*" element={<LaundryRoutes />} />
      <Route path="/common-dashboard" element={<CommonDashboard />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  )
}

export default App