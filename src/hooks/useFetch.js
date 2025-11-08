import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
    data: [],
    loading: false,
    error: "",
};

function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_DATA":
            return { ...state, data: payload };
        case "TOGGLE_LOADING":
            return { ...state, loading: !state.loading };
        case "ERROR":
            return { ...state, error: payload };
        default:
            state;
    }
}

const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "TOGGLE_LOADING" });
        axios
            .get(url)
            .then((res) =>
                dispatch({
                    type: "ADD_DATA",
                    payload: res.data.products,
                })
            )
            .catch((err) => {
                dispatch({
                    type: "ERROR",
                    payload: err.message || "Xatolik bor",
                });
            })
            .finally(() => {
                dispatch({ type: "TOGGLE_LOADING" });
            });
    }, [url]);

    return { ...state };
};

export default useFetch;
