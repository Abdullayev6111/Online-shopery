import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context/script";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <Context.Provider value={{ cart, setCart }}>
            <MantineProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                    </Route>
                </Routes>
            </MantineProvider>
        </Context.Provider>
    );
};

export default App;
