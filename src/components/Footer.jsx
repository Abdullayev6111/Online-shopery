import { NavLink } from "react-router-dom";
import { FaInstagram, FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="container">
            <div className="footer-top">
                <div className="footer-card">
                    <h1>{t("footer.aboutUs")}</h1>
                    <NavLink>{t("footer.deliveryPoint")}</NavLink>
                    <NavLink>{t("footer.vacancies")}</NavLink>
                </div>
                <div className="footer-card">
                    <h1>{t("footer.forUsers")}</h1>
                    <NavLink>{t("footer.contact")}</NavLink>
                    <NavLink>{t("footer.faq")}</NavLink>
                </div>
                <div className="footer-card">
                    <h1>{t("footer.entrepreneur")}</h1>
                    <NavLink>{t("footer.sellInUzum")}</NavLink>
                    <NavLink>{t("footer.loginSellerAcoount")}</NavLink>
                    <NavLink>{t("footer.assignmenBox")}</NavLink>
                </div>
                <div className="footer-main-card">
                    <h3>{t("footer.download")}</h3>
                    <div style={{ display: "flex", gap: "15px" }}>
                        <NavLink to="https://www.apple.com/app-store/">
                            <i className="fa-brands fa-apple"></i> AppStore
                        </NavLink>{" "}
                        <NavLink to="https://play.google.com/store/apps">
                            <i className="fa-brands fa-google-play"></i> Google
                            Play
                        </NavLink>
                    </div>
                    <h4>{t("footer.socialMedia")}</h4>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                            fontSize: "30px",
                        }}
                        className="messengers"
                    >
                        <NavLink
                            target="_blank"
                            to="https://www.instagram.com/uzum.market/"
                        >
                            <FaInstagram color="#E4405F" />
                        </NavLink>
                        <NavLink target="_blank" to="https://t.me/uzum_market">
                            <FaTelegram color="#0088cc" />
                        </NavLink>
                        <NavLink
                            target="_blank"
                            to="https://www.facebook.com/uzummarket"
                        >
                            <FaFacebook color="#1877F2" />
                        </NavLink>
                        <NavLink
                            target="_blank"
                            to="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
                        >
                            <FaYoutube color="#FF0000" />
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-agreements">
                    <NavLink to="/privacy-policy">
                        {t("footer.security")}
                    </NavLink>
                    <NavLink to="/user-agreement">
                        {t("footer.userSecurity")}
                    </NavLink>
                </div>
                <p>{t("footer.rightsReserved")}</p>
            </div>
        </footer>
    );
}

export default Footer;
