import { Card, Image, Text, Badge, Button, Group, Flex } from "@mantine/core";
import { useState } from "react";
import useAppContext from "../hooks/useAppContext";
import "@mantine/core/styles.css";
import { useTranslation } from "react-i18next";

function CardEl({ product }) {
    const { cart, setCart } = useAppContext();
    const { t } = useTranslation();
    const [liked, setLiked] = useState(false);
    const inCart = cart.find((p) => p.id === product.id);
    const handleAddToCart = () => {
        if (inCart) {
            const newCartData = cart.map((p) => {
                if (p.id === product.id) {
                    return { ...p, count: p.count + 1 };
                } else return p;
            });
            setCart(newCartData);
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    };
    const handleDec = () => {
        if (inCart.count === 1) {
            const newData = cart.filter((p) => p.id !== product.id);
            setCart(newData);
        } else {
            const newCartData = cart.map((p) => {
                if (p.id === product.id) {
                    return { ...p, count: p.count - 1 };
                } else return p;
            });
            setCart(newCartData);
        }
    };

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            pos="relative"
            style={{
                transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
            <Card.Section>
                <Button
                    onClick={() => setLiked(!liked)}
                    pos="absolute"
                    color="#f0f2f5"
                    variant="transparent"
                    style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        top: 5,
                        right: 5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 0,
                    }}
                >
                    <i
                        className={
                            liked ? "fa-solid fa-heart" : "fa-regular fa-heart"
                        }
                        style={{
                            color: liked ? "red" : "black",
                        }}
                    ></i>
                </Button>
                <Image src={product.images[0]} height={160} alt="Norway" />
                <Badge color="#FF4499">{product.category}</Badge>
                <Badge color="#5CA3FF">
                    {t("card.disc")} {product.discountPercentage} %
                </Badge>
                <Badge color="#F58B00">
                    {t("card.price")}: {product.price} $
                </Badge>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={1}>
                    {product.title}
                </Text>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={2}>
                {product.description}
            </Text>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 12,
                    marginTop: 10,
                }}
            >
                <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                ></i>
                <p style={{ color: "#B4B5BC" }}>
                    {product.rating} ({product.stock} {t("card.comment")})
                </p>
            </div>
            {!inCart && (
                <Button
                    onClick={handleAddToCart}
                    color="#7000FF"
                    fullWidth
                    mt="md"
                    radius="md"
                >
                    <i
                        className="fa-solid fa-bag-shopping"
                        style={{ marginTop: "3px", marginRight: "3px" }}
                    ></i>
                    {t("card.buyBtn")}
                </Button>
            )}
            {inCart && (
                <div className="inCart-btn">
                    <button onClick={handleDec}>-</button>
                    <p>{inCart.count}</p>
                    <button onClick={handleAddToCart}>+</button>
                </div>
            )}
        </Card>
    );
}

export default CardEl;
