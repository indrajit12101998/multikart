// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

export default function ProductDetailsPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            {/* section start */}
            <section>
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="collection-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-4">
                                    <>
                                        <Swiper

                                            loop={true}
                                            spaceBetween={10}
                                            navigation={true}
                                            thumbs={{ swiper: thumbsSwiper }}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper2"
                                        >
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            loop={true}
                                            spaceBetween={10}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[FreeMode, Navigation, Thumbs]}
                                            className="mySwiper"
                                        >
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                            </SwiperSlide>
                                        </Swiper>
                                    </>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-page-details product-description-box sticky-details mt-0">
                                        <div className="trending-text ">
                                            <img src="./images/product-details/trending.gif" className="img-fluid" alt="" />
                                            <h5>Selling fast! 4 people have this in their carts.
                                            </h5>
                                        </div>
                                        <h2 className="main-title"> Gym Coords Set (Brown) </h2>
                                        <div className="product-rating">
                                            <div className="rating-list">
                                                <i className="ri-star-fill" />
                                                <i className="ri-star-fill" />
                                                <i className="ri-star-fill" />
                                                <i className="ri-star-fill" />
                                                <i className="ri-star-line" />
                                            </div>
                                            <span className="divider">|</span>
                                            <a href="#!">20 Reviews</a>
                                        </div>
                                        <div className="price-text">
                                            <h3><span className="fw-normal">MRP:</span>
                                                $15.00
                                            </h3><span>Inclusive all the text </span>
                                        </div>
                                        <div className="size-delivery-info flex-wrap">
                                            <a href="#return" data-bs-toggle="modal" className><i className="ri-truck-line" />
                                                Delivery &amp; Return </a>
                                            <a href="#ask-question" className data-bs-toggle="modal"><i className="ri-questionnaire-line" />
                                                Ask a Question </a>
                                        </div>
                                        <div className="accordion accordion-flush product-accordion" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">

                                                    Product Description
                                                </h2>
                                                <div className="accordion-collapse collapse show">
                                                    <div className="accordion-body">
                                                        <p>"Gym Coords Set" offers a
                                                            complete workout ensemble for
                                                            the modern fitness enthusiast. This coordinated set includes
                                                            everything needed for a
                                                            stylish and functional gym session, from moisture-wicking
                                                            tops to supportive
                                                            leggings, ensuring both comfort and performance during
                                                            workouts.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header">

                                                    Information
                                                </h2>
                                                <div className="accordion-collapse collapse show" >
                                                    <div className="accordion-body">
                                                        <div className="bordered-box border-0 mt-0 pt-0">
                                                            <h4 className="sub-title">
                                                                product Info</h4>
                                                            <ul className="shipping-info">
                                                                <li><span>SKU: </span>SP18
                                                                    (COPY) </li>
                                                                <li><span>Unit: </span>1
                                                                    Item </li>
                                                                <li><span>Weight:
                                                                </span>150 Gms </li>
                                                                <li><span>Stock Status:
                                                                </span>In stock </li>
                                                                <li><span>Quantity:
                                                                </span>40 Items Left </li>
                                                            </ul>
                                                        </div>
                                                        <div className="bordered-box">
                                                            <h4 className="sub-title">
                                                                Delivery Details</h4>
                                                            <ul className="delivery-details">
                                                                <li><i className="ri-truck-line" /> Your order is
                                                                    likely to reach you within 7 days. </li>
                                                                <li><i className="ri-arrow-left-right-line" />
                                                                    Hassle free returns within 7 Days. </li>
                                                            </ul>
                                                        </div>
                                                        <div className="dashed-border-box mb-0">
                                                            <h4 className="sub-title">Guaranteed Safe Checkout</h4>
                                                            <img className="img-fluid payment-img" alt="" src="./images/product-details/payments.png" />
                                                        </div>
                                                        <div className="dashed-border-box mb-0">
                                                            <h4 className="sub-title">Secure Checkout</h4>
                                                            <img className="img-fluid payment-img" alt="" src="./images/product-details/secure_payments.png" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="product-page-details product-form-box product-right-box d-flex
                          align-items-center flex-column my-0">
                                        <h4 className="sub-title">Colour:</h4>
                                        <div className="variation-box size-box">
                                            <ul className="image-box image">
                                                <li className="active">
                                                    <a>
                                                        <img src="./images/product-details/product/17.jpg" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src="./images/product-details/product/20.jpg" alt="" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <img src="./images/product-details/product/21.jpg" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-buttons">
                                            <div className="qty-section">
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-left-minus" data-type="minus" data-field>
                                                                <i className="ri-arrow-left-s-line" />
                                                            </button>
                                                        </span>
                                                        <input type="text" name="quantity" className="form-control input-number" defaultValue={1} />
                                                        <span className="input-group-prepend">
                                                            <button type="button" className="btn quantity-right-plus" data-type="plus" data-field>
                                                                <i className="ri-arrow-right-s-line" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <div className="d-flex align-items-center gap-3">
                                                <button className="btn btn-animation btn-solid hover-solid scroll-button disabled" type="button"> Out Of Stock
                                                </button>
                                                <a href="#!" className="btn btn-solid buy-button disabled">Buy Now
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left-progressbar w-100">
                                            <h6>Please Hurry Only 10 Left In Stock</h6>
                                            <div role="progressbar" className="progress">
                                                <div className="progress-bar" style={{ width: '100%' }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="buy-box justify-content-center gap-3">
                                            <a href="#!">
                                                <i className="ri-heart-line" />
                                                <span>Add To Wishlist</span>
                                            </a>
                                            <a href="#!" className="add-compare">
                                                <i className="ri-refresh-line" />
                                                <span>Add To Compare</span>
                                            </a>
                                            <a href="#share" data-bs-toggle="modal">
                                                <i className="ri-share-line" />
                                                <span>Share</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Section ends */}

        </>
    )
}
