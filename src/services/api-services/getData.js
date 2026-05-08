export async function loginUser(data = {}) {
    try {
        const { username, password } = data;
        if (username === "admin" && password === "admin123") {
            return {
                success: true,
                token: "dummy-jwt-token",
                user: {
                    id: 1,
                    name: "Admin User",
                    username: "admin",
                    products: ["laundry", "crm"],
                },
                message: "Login successful",
            };
        }
        return {
            success: false,
            message: "Invalid username or password",
        };
    } catch (error) {
        return { success: false, message: "Something went wrong", error, };
    }
}