export default async function loadApiEndpoints() {
    const response = await fetch("/json/apiendpoints.json");
    if (!response.ok) throw new Error("Failed to fetch API endpoints");
    const apiEndpoints = await response.json();
    return apiEndpoints;
};
