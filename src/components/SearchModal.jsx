import { useDispatch, useSelector } from "react-redux";
import { toggleSearchModal } from "../redux/slice/FunctionalSlice";

export default function SearchModal() {
  const dispatch = useDispatch();
  const searchModalData = useSelector((state) => state.FunctionalSlice.searchModal);
  return (
    <> <div
      className="modal fade search-modal theme-modal-2 d-block show"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5">Search in store</h3>
            <button type="button" className="btn-close" onClick={() => dispatch(toggleSearchModal(!searchModalData))}>
              <img src="./images/xmark-solid.svg" alt="" width={20} />
            </button>
          </div>
          <div className="modal-body">
            <div className="search-input-box">
              <input
                type="text"
                className="form-control"
                placeholder="Search with brands and categories..."
              />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <ul className="search-category">
              <li className="category-title">Top search:</li>
              <li>
                <a href="category-page.html">Baby Essentials</a>
              </li>
              <li>
                <a href="category-page.html">Bag Emporium</a>
              </li>
              <li>
                <a href="category-page.html">Bags</a>
              </li>
              <li>
                <a href="category-page.html">Books</a>
              </li>
            </ul>
            <div className="search-product-box mt-sm-4 mt-3">
              <h3 className="search-title">Most Searched</h3>
              <div className="row row-cols-xl-4 row-cols-md-3 row-cols-2 g-sm-4 g-3">
                <div className="col">
                  <div className="basic-product theme-product-1">
                    <div className="overflow-hidden">
                      <div className="img-wrapper">
                        <div className="ribbon">
                          <span>Exclusive</span>
                        </div>
                        <a href="product-page(image-swatch).html">
                          <img
                            src="./images/fashion-1/product/1.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt
                          />
                        </a>
                        <div className="rating-label">
                          <i className="ri-star-fill" />
                          <span>2.5</span>
                        </div>
                        <div className="cart-info">
                          <a
                            href="#!"
                            title="Add to Wishlist"
                            className="wishlist-icon"
                          >
                            <i className="ri-heart-line" />
                          </a>
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                            title="Add to cart"
                          >
                            <i className="ri-shopping-cart-line" />
                          </button>
                          <a
                            href="#quickView"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ri-eye-line" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ri-loop-left-line" />
                          </a>
                        </div>
                      </div>
                      <div className="product-detail">
                        <div>
                          <div className="brand-w-color">
                            <a
                              className="product-title"
                              href="product-page(accordian).html"
                            >
                              Glamour Gaze
                            </a>
                            <div className="color-panel">
                              <ul>
                                <li style={{ backgroundColor: "papayawhip" }} />
                                <li style={{ backgroundColor: "burlywood" }} />
                                <li style={{ backgroundColor: "gainsboro" }} />
                              </ul>
                              <span>+2</span>
                            </div>
                          </div>
                          <h6>Boyfriend Shirts</h6>
                          <h4 className="price">
                            $ 2.79<del> $3.00 </del>
                            <span className="discounted-price"> 7% Off</span>
                          </h4>
                        </div>
                        <ul className="offer-panel">
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 4% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 4% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 4% off
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="basic-product theme-product-1">
                    <div className="overflow-hidden">
                      <div className="img-wrapper">
                        <a href="product-page(accordian).html">
                          <img
                            src="./images/fashion-1/product/11.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt
                          />
                        </a>
                        <div className="rating-label">
                          <i className="fa fa-star" />
                          <span>6.5</span>
                        </div>
                        <div className="cart-info">
                          <a
                            href="#!"
                            title="Add to Wishlist"
                            className="wishlist-icon"
                          >
                            <i className="ri-heart-line" />
                          </a>
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                            title="Add to cart"
                          >
                            <i className="ri-shopping-cart-line" />
                          </button>
                          <a
                            href="#quickView"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ri-eye-line" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ri-loop-left-line" />
                          </a>
                        </div>
                      </div>
                      <div className="product-detail">
                        <div>
                          <div className="brand-w-color">
                            <a
                              className="product-title"
                              href="product-page(accordian).html"
                            >
                              VogueVista
                            </a>
                          </div>
                          <h6>Chic Crop Top</h6>
                          <h4 className="price">
                            $ 5.60<del> $6.80 </del>
                            <span className="discounted-price"> 5% Off</span>
                          </h4>
                        </div>
                        <ul className="offer-panel">
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 25% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 25% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 25% off
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="basic-product theme-product-1">
                    <div className="overflow-hidden">
                      <div className="img-wrapper">
                        <a href="product-page(accordian).html">
                          <img
                            src="./images/fashion-1/product/15.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt
                          />
                        </a>
                        <div className="rating-label">
                          <i className="fa fa-star" />
                          <span>3.7</span>
                        </div>
                        <div className="cart-info">
                          <a
                            href="#!"
                            title="Add to Wishlist"
                            className="wishlist-icon"
                          >
                            <i className="ri-heart-line" />
                          </a>
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                            title="Add to cart"
                          >
                            <i className="ri-shopping-cart-line" />
                          </button>
                          <a
                            href="#quickView"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ri-eye-line" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ri-loop-left-line" />
                          </a>
                        </div>
                      </div>
                      <div className="product-detail">
                        <div>
                          <div className="brand-w-color">
                            <a
                              className="product-title"
                              href="product-page(accordian).html"
                            >
                              Urban Chic
                            </a>
                          </div>
                          <h6>Classic Jacket</h6>
                          <h4 className="price">$ 3.80 </h4>
                        </div>
                        <ul className="offer-panel">
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 10% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 10% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 10% off
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="basic-product theme-product-1">
                    <div className="overflow-hidden">
                      <div className="img-wrapper">
                        <a href="product-page(image-swatch).html">
                          <img
                            src="./images/fashion-1/product/16.jpg"
                            className="img-fluid blur-up lazyloaded"
                            alt
                          />
                        </a>
                        <div className="rating-label">
                          <i className="fa fa-star" />
                          <span>8.7</span>
                        </div>
                        <div className="cart-info">
                          <a
                            href="#!"
                            title="Add to Wishlist"
                            className="wishlist-icon"
                          >
                            <i className="ri-heart-line" />
                          </a>
                          <button
                            data-bs-toggle="offcanvas"
                            data-bs-target="#cartOffcanvas"
                            title="Add to cart"
                          >
                            <i className="ri-shopping-cart-line" />
                          </button>
                          <a
                            href="#quickView"
                            data-bs-toggle="modal"
                            title="Quick View"
                          >
                            <i className="ri-eye-line" />
                          </a>
                          <a href="compare.html" title="Compare">
                            <i className="ri-loop-left-line" />
                          </a>
                        </div>
                      </div>
                      <div className="product-detail">
                        <div>
                          <div className="brand-w-color">
                            <a
                              className="product-title"
                              href="product-page(accordian).html"
                            >
                              Couture Edge
                            </a>
                          </div>
                          <h6>Versatile Shacket</h6>
                          <h4 className="price"> $3.00</h4>
                        </div>
                        <ul className="offer-panel">
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 12% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 12% off
                          </li>
                          <li>
                            <span className="offer-icon">
                              <i className="ri-discount-percent-fill" />
                            </span>
                            Limited Time Offer: 12% off
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="backdrop" ></div></>
  );
}
