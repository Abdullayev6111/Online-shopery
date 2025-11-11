import { useMemo } from "react";
import useAppContext from "../hooks/useAppContext";
import { Badge } from "@mantine/core";
import { useTranslation } from "react-i18next";

function Cart({ product }) {
    const { t } = useTranslation();
    const { cart, setCart } = useAppContext();

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.count * item.price, 0);
    }, [cart]);

    const handleAddToCart = (id) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === id);
            if (exists) {
                return prev.map((p) =>
                    p.id === id ? { ...p, count: p.count + 1 } : p
                );
            }
            return [...prev, { ...product, count: 1 }];
        });
    };

    const handleDec = (id) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === id);
            if (!exists) return prev;
            if (exists.count === 1) {
                return prev.filter((p) => p.id !== id);
            }
            return prev.map((p) =>
                p.id === id ? { ...p, count: p.count - 1 } : p
            );
        });
    };

    const handleDelete = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <section className="container cart">
            <h1 className="cart-main-text">
                {t("cart.title")},{" "}
                <span>
                    {cart.length} {t("cart.product")}
                </span>
            </h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "15px",
                }}
            >
                <div className="cart-left">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-left">
                                <img src={item.images} alt={item.title} />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Badge color="rgb(255, 68, 153)">
                                        {item.category}
                                    </Badge>
                                    <h3>{item.title}</h3>
                                    <h4>
                                        {t("cart.delivery")}:{" "}
                                        <span>{item.shippingInformation}</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="cart-item-right">
                                <div className="cart-inc-dec-btn">
                                    <button onClick={() => handleDec(item.id)}>
                                        -
                                    </button>
                                    <p>{item.count}</p>
                                    <button
                                        onClick={() => handleAddToCart(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <button
                                        className="cart-delete-btn"
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        {t("cart.deleteBtn")}
                                    </button>
                                    <h6
                                        style={{
                                            color: "#7f4dff",
                                            fontSize: "16px",
                                        }}
                                    >
                                        {t("cart.price")}:{" "}
                                        {item.price * item.count} $
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-right">
                    <div className="cart-order">
                        <h1>{t("cart.order")}</h1>
                        <h2>
                            {t("cart.products")} ({cart.length}):{" "}
                            <span>{totalPrice} $</span>
                        </h2>
                    </div>
                    <p>
                        {t("cart.total")}:{" "}
                        <span>{(totalPrice * 60) / 100} $</span>
                    </p>
                    <h4>
                        {t("cart.savings")}:{" "}
                        <span>{(totalPrice * 40) / 100} $</span>
                    </h4>
                    <button className="order-btn">
                        {t("cart.formalization")}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Cart;
