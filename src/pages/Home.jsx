import useFetch from "../hooks/useFetch";
import CardEl from "../components/Card";
import LoadingCard from "../components/LoadinCard";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import CarouselEl from "../components/CarouselEl";

function Home() {
    const { data, loading, error } = useFetch("https://dummyjson.com/products");
    useEffect(() => {
        if (error) {
            toast.error("Xatolik yuz berdi", { position: "top-right" });
        } else if (!loading && data.length) {
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
    return (
        <main className="container">
            <ToastContainer />
            <div className="home-hero">
                <CarouselEl />
                <div className="home-hero-cards">
                    <div className="hh-card"></div>
                </div>
            </div>

            <h1 className="product-text">
                Products <i className="fa-solid fa-chevron-right"></i>
            </h1>
            <div className="products">
                {loading
                    ? Array.from({ length: 6 }).map((_, i) => (
                          <LoadingCard key={i} />
                      ))
                    : data?.map((item) => (
                          <CardEl key={item.id} product={item} />
                      ))}
            </div>
        </main>
    );
}

export default Home;
