import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";

export default function ProductSlider() {
  return (
    <section className="bag-product ratio_square">
      <div className="container">
        <div className="row">
          <SectionTitle />
          <div className="col-12">
            <div className="product-5 product-m no-arrow">
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="categorySlider"
              >
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
