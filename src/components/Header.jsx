import { useTranslation } from "react-i18next";
import "./Header.css";
import LanguageSelect from "./LanguageSelect";
import { NavLink } from "react-router-dom";
import { Badge } from "@mantine/core";
import useAppContext from "../hooks/useAppContext";

function Header() {
    const { t } = useTranslation();
    const { cart } = useAppContext();
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="left">
                        <span>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            Toshkent
                        </span>
                        <span>{t("header.deliveryPoints")}</span>
                    </div>
                    <div className="right">
                        <span className="purple">
                            {t("header.becomeSeller")}
                        </span>
                        <span className="divider"></span>
                        <span className="purple">
                            {t("header.openPickupPoint")}
                        </span>
                        <span>{t("header.faq")}</span>
                        <span>{t("header.myOrders")}</span>
                        <LanguageSelect />
                    </div>
                </div>
            </div>

            <div className="main-header container">
                <NavLink
                    to="/"
                    style={{ textDecoration: "none" }}
                    className="logo"
                >
                    <img
                        src="https://uzum.com/images/services/market.png"
                        alt="logo"
                    />
                    <h1>uzum market</h1>
                </NavLink>

                <div className="search">
                    <button className="catalog-btn">
                        {t("header.catalog")}
                    </button>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder={t("header.searchPlaceholder")}
                        />
                        <span className="icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>

                <div className="user-links">
                    <div className="link">
                        <span className="icon">
                            <i className="fa-regular fa-user"></i>
                        </span>
                        <span>{t("header.login")}</span>
                    </div>
                    <div className="link">
                        <span className="icon">
                            <i className="fa-regular fa-heart"></i>
                        </span>
                        <span>{t("header.favorites")}</span>
                    </div>
                    <NavLink
                        to="/cart"
                        style={{
                            textDecoration: "none",
                            color: "black",
                            position: "relative",
                            display: "flex",
                            gap: "10px",
                            flexDirection: "row",
                            alignItems: "center",
                            fontSize: "14px",
                        }}
                    >
                        <div style={{ position: "relative" }}>
                            <i
                                className="fa-solid fa-bag-shopping"
                                style={{ fontSize: "22px", color: "black" }}
                            ></i>
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-5px",
                                    right: "-10px",
                                    backgroundColor: "#7000FF",
                                    color: "white",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "12px",
                                    fontWeight: "500",
                                }}
                            >
                                {cart.length}
                            </span>
                        </div>
                        <span style={{ marginTop: "5px" }}>
                            {t("header.cart")}
                        </span>
                    </NavLink>
                </div>
            </div>

            <div className="categories container">
                <span style={{ display: "flex" }}>
                    <img
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                        src="https://static.uzum.uz/fast_categories/Topsales.png"
                    />{" "}
                    {t("header.weeklyProducts")}
                </span>
                <span style={{ display: "flex" }}>
                    <img
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                        src="https://static.uzum.uz/baner/feshn3110.png"
                    />{" "}
                    {t("header.winterCollection")}
                </span>
                <span style={{ display: "flex" }}>
                    <img
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                        src="https://static.uzum.uz/baner/hobbi2110.png"
                    />{" "}
                    {t("header.hobbyAndArt")}
                </span>
                <span style={{ display: "flex" }}>
                    <img
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                        src="https://static.uzum.uz/baner/smart2010.png"
                    />{" "}
                    {t("header.smartphones")}
                </span>
                <span>{t("header.tourism")}</span>
                <span>{t("header.electronics")}</span>
                <span>{t("header.homeAppliances")}</span>
                <span>{t("header.clothing")}</span>
                <span>{t("header.shoes")}</span>
                <span>{t("header.accessories")}</span>
                <span
                    style={{
                        display: "flex",
                        gap: "3px",
                        alignItems: "center",
                    }}
                >
                    {t("header.more")}{" "}
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
        </header>
    );
}

export default Header;
