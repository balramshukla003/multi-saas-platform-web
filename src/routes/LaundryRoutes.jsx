import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => <h1>Laundry Dashboard</h1>
const Orders = () => <h1>Laundry Orders</h1>
const Customers = () => <h1>Laundry Customers</h1>

const LaundryRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
        </Routes>
    )
}

export default LaundryRoutes