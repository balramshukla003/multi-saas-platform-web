export default async function loadProductsList() {
    const response = await fetch("/json/products.json");
    if (!response.ok) throw new Error("Failed to fetch products");
    const products = await response.json();
    return products;
};
