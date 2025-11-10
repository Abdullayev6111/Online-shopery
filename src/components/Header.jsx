import { useTranslation } from "react-i18next";
import Select from "react-select";
import "./Header.css";
import LanguageSelect from "./LanguageSelect";

function Header() {
    const { t } = useTranslation();

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
                <div className="logo">
                    <img
                        src="https://uzum.com/images/services/market.png"
                        alt="logo"
                    />
                    <h1>uzum market</h1>
                </div>

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
                    <div className="link">
                        <span className="icon">
                            <i className="fa-solid fa-shopping-bag"></i>
                        </span>
                        <span>{t("header.cart")}</span>
                    </div>
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
