import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => <h1>CRM Dashboard</h1>
const CRM = () => <h1>CRM public Landing</h1>
const Leads = () => <h1>CRM Leads</h1>
const Customers = () => <h1>CRM Customers</h1>

const CRMRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<Leads />} />
            <Route path="customers" element={<Customers />} />
        </Routes>
    )
}

export default CRMRoutes
