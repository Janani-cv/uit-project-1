import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        navigate("/bill"); // Navigate to Bill page
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);