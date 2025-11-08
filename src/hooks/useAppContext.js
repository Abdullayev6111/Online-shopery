import { useContext } from "react";
import { Context } from "../context/script";

const useAppContext = () => {
    const context = useContext(Context);

    if (!context) throw new Error("Context is not defined!");
    return context;
};

export default useAppContext;
