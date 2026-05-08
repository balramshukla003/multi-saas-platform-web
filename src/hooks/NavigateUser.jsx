import { useNavigate } from "react-router-dom";
const useNavigateUser = () => {
    const navigate = useNavigate();
    const navigateLoggedInUser = (data) => {
        console.log("object, data", data)
        if (!data?.user?.products) return;
        const product = data.user.products.length;
        if (data.user.products.length === 0) {
            navigate("/no-products");
            return;
        }

        if (product > 1) {
            navigate("/common-dashboard");
        } else {
            switch (data.user.products[0]) {
                case "laundry":
                    navigate("/laundry/dashboard");
                    break;

                case "crm":
                    navigate("/crm/dashboard");
                    break;

                default:
                    navigate("/");
                    break;
            }
        }
    };
    return navigateLoggedInUser;
};

export default useNavigateUser;