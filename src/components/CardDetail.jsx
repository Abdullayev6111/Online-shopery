import { Badge } from "@mantine/core";
import { useFetch } from "@mantine/hooks";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { Carousel } from "@mantine/carousel";
import { useTranslation } from "react-i18next";
import useAppContext from "../hooks/useAppContext";

function CardDetail() {
    const { id } = useParams();
    const { t } = useTranslation();
    const { data, loading, error } = useFetch(
        `https://dummyjson.com/products/${id}`
    );
    useEffect(() => {
        if (error) {
            toast.error("Xatolik yuz berdi", { position: "top-right" });
        } else if (!loading) {
            toast.success("Ma'lumotlar muvaffaqiyatli yuklandi", {
                position: "top-right",
                autoClose: 3000,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                transition: Bounce,
            });
        }
    }, [loading, data, error]);

    const { cart } = useAppContext();

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.count * item.price, 0);
    }, [cart]);

    const slides = data?.reviews?.map((com, index) => (
        <Carousel.Slide key={index}>
            <div className="product-comments-card">
                <div className="comments-card-top">
                    <div>
                        <h6>{com.reviewerName}</h6>
                        <p>{new Date(com.date).toLocaleDateString()}</p>
                    </div>
                    <p>
                        {" "}
                        <i
                            className="fa-solid fa-star"
                            style={{ color: "#ffc800" }}
                        ></i>{" "}
                        {com.rating}
                    </p>
                </div>
                <h5>
                    {t("cardDetail.reviewerEmail")}:{" "}
                    <span>{com.reviewerEmail}</span>
                </h5>
                <h5>{com.comment}</h5>
            </div>
        </Carousel.Slide>
    ));

    return (
        <section className="container">
            {loading ? (
                "Yuklanmoqda..."
            ) : (
                <section className="container card-detail">
                    <div className="card-detail-left">
                        <div className="card-detail-info">
                            <h1>{data?.description}</h1>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                }}
                            >
                                <p
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 5,
                                    }}
                                >
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#ffc800" }}
                                    ></i>{" "}
                                    {data?.rating} ({data?.stock}{" "}
                                    {t("cardDetail.comment")})
                                </p>
                                <h3>
                                    {t("cardDetail.brand")}: {data?.brand}
                                </h3>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 5,
                                }}
                            >
                                <Badge
                                    style={{
                                        background: "rgb(255, 255, 0)",
                                        color: "black",
                                        fontSize: "12px",
                                        fontWeight: "500",
                                        letterSpacing: "0.3px",
                                    }}
                                >
                                    -{data?.discountPercentage}%
                                </Badge>
                                <Badge>{data?.category}</Badge>
                                <Badge color="#f58b00">
                                    {data?.availabilityStatus}
                                </Badge>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>
                            <img
                                src={data?.images?.[0]}
                                alt={data?.title}
                                style={{
                                    height: "400px",
                                    width: "350px",
                                    borderRadius: "10px",
                                }}
                            />
                            <img
                                src={data?.thumbnail}
                                alt={data?.title}
                                style={{
                                    height: "400px",
                                    width: "350px",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                        <div className="product-comments">
                            <Carousel
                                withIndicators
                                height={140}
                                slideSize="50%"
                                slideGap="md"
                                emblaOptions={{
                                    loop: true,
                                    align: "start",
                                    slidesToScroll: 1,
                                }}
                            >
                                {slides}
                            </Carousel>
                        </div>
                    </div>

                    <div className="card-detail-right">
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
                </section>
            )}
        </section>
    );
}

export default CardDetail;
