import React, { createContext, useContext, useEffect, useState } from "react";
import { loadProductsList } from "../../utils/loadProductsList";

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const [permissions, setPermissions] = useState({
        isCRM: false,
        isInventory: false,
        isLaundry: false,
    });

    const [modules, setModules] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await loadProductsList();

            const assignedProducts = ["crm", "inventory"];

            const allowedProducts = data.products.filter((item) =>
                assignedProducts.includes(item.key)
            );

            setProducts(allowedProducts);

            // Boolean Permissions
            const updatedPermissions = {
                isCRM: assignedProducts.includes("crm"),
                isInventory: assignedProducts.includes("inventory"),
                isLaundry: assignedProducts.includes("laundry"),
            };

            setPermissions(updatedPermissions);

            // Collect all allowed modules
            const allowedModules = allowedProducts.flatMap(
                (item) => item.modules
            );

            setModules(allowedModules);

        } catch (error) {
            console.error("Error loading products:", error);
        }
    };

    // Check Product Access
    const hasProductAccess = (productKey) => {
        return products.some((item) => item.key === productKey);
    };

    // Check Module Access
    const hasModuleAccess = (moduleName) => {
        return modules.includes(moduleName);
    };

    return (
        <ProductContext.Provider
            value={{
                products,
                permissions,
                modules,
                hasProductAccess,
                hasModuleAccess,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;