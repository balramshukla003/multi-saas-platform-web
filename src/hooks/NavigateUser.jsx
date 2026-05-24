import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthProvider";
const useNavigateUser = () => {
    const { user, isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const navigateLoggedInUser = (data) => {
        console.log("object, data", data)
        if (!data?.user?.products) return;
        switch (data.user.products[0]?.moduleName) {
            case "laundry":
                navigate("/laundry/dashboard");
                break;

            case "crm":
                navigate("/crm/dashboard");
                break;

            case "inventory":
                navigate("/inventory/dashboard");
                break;

            default:
                navigate("/no-products");
                break;
        }
    };
    return navigateLoggedInUser;
};

export default useNavigateUser;