import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "./context/script";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { MantineProvider } from "@mantine/core";

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <Context.Provider value={{ cart, setCart }}>
            <MantineProvider>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Routes>
            </MantineProvider>
        </Context.Provider>
    );
};

export default App;
