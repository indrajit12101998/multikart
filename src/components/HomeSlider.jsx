import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect } from "react";
import { fetchBanner } from "../redux/slice/BaseSlice";
import { Link } from "react-router-dom";
export default function HomeSlider() {

  const dispatch = useDispatch();
  const bannerdata = useSelector((state) => state.BaseSlice.bannerData.data);
  const baseUrl = useSelector((state) => state.BaseSlice.baseUrl);

  useEffect(() => {
    dispatch(fetchBanner());
  }, []);
  return (
    <div className="slider-area home-2">
      <div className="slider-active-3 slider-hm8 owl-dot-style">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="heroSlider"
        >
          {bannerdata?.map((item) => {
            return (
              <SwiperSlide key={item.documentId}>
                <section className="p-0 small-slider">
                  <Link to=''>
                    <img
                      src={baseUrl + item.image.url}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </section>
              </SwiperSlide>
            )
          })}


        </Swiper>
      </div>
    </div>
  );
}
