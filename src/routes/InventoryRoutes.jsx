import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Dashboard = () => <h1>Inventory Dashboard</h1>
const Items = () => <h1>Items</h1>
const Stock = () => <h1>Stock Entry</h1>

const InventoryRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="items" element={<Items />} />
            <Route path="stock-entry" element={<Stock />} />
        </Routes>
    )
}

export default InventoryRoutes
