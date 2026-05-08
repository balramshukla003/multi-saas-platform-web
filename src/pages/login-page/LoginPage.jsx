import React, { useState } from "react";
import { loginUser } from "../../services/api-services/getData.js";
import { useAuth } from "../../context/auth/AuthProvider.jsx";
import useNavigateUser from "../../hooks/NavigateUser.jsx";


const LoginPage = () => {

    const { user, isLoggedIn, removeUserdata, setUserData } = useAuth();
    const navigateLoggedInUser = useNavigateUser();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const response = await loginUser(formData);
            if (response.success) {
                setUserData(response); console.log("Login Success:", response);
                navigateLoggedInUser(response);
            }
            
        } catch (err) {
            console.error(err);
            setError("Invalid username or password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Login
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-maroon text-white py-2 rounded-lg hover:bg-maroon-dark transition"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;