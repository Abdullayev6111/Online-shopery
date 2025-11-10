import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

const images = [
    "https://images.uzum.uz/d48omoej76ohd6e0rrk0/main_page_banner.jpg",
    "https://images.uzum.uz/d466105v2sjo4rvgpbr0/main_page_banner.jpg",
    "https://images.uzum.uz/d44rieej76ohd6dvnre0/main_page_banner.jpg",
    "https://images.uzum.uz/d408qftv2sjj05orru0g/main_page_banner.jpg",
    "https://images.uzum.uz/d44p8alv2sjo4rvgbss0/main_page_banner.jpg",
    "https://images.uzum.uz/d403nfdsp2tj49o76nb0/main_page_banner.jpg",
    "https://images.uzum.uz/d44q2stsp2tk7h6373t0/main_page_banner.jpg",
    "https://images.uzum.uz/d4722plv2sjo4rvh2tlg/main_page_banner.jpg",
];

function CarouselEl() {
    const autoplay = useRef(Autoplay({ delay: 3000 }));
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
            <Image src={url} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            withIndicators
            height={400}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={() => autoplay.current.play()}
            style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                overflow: "hidden",
            }}
        >
            {slides}
        </Carousel>
    );
}

export default CarouselEl;
