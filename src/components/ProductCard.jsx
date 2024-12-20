export default function ProductCard() {
  return (
    <>
      <div className="basic-product theme-product-1">
        <div className="overflow-hidden">
          <div className="img-wrapper">
            <a href="product-page(accordian).html">
              <img src="./images/vegetables-1/product/1.png" className="w-100 img-fluid blur-up lazyloaded" alt />
            </a>
            <div className="rating-label"><i className="ri-star-fill" /><span>4.5</span>
            </div>
            <div className="cart-info">
              <a href="#!" title="Add to Wishlist" className="wishlist-icon">
                <i className="ri-heart-line" />
              </a>
              <button data-bs-toggle="modal" data-bs-target="#addtocart" title="Add to cart">
                <i className="ri-shopping-cart-line" />
              </button>
              <a href="#quickView" data-bs-toggle="modal" title="Quick View">
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
                <a className="product-title" href="product-page(accordian).html">
                  Couture Edge
                </a>
                <div className="color-panel">
                  <ul>
                    <li style={{ backgroundColor: 'papayawhip' }}>
                    </li>
                    <li style={{ backgroundColor: 'burlywood' }}>
                    </li>
                    <li style={{ backgroundColor: 'gainsboro' }}>
                    </li>
                  </ul>
                  <span>+2</span>
                </div>
              </div>
              <h6>Purple Mini Dress</h6>
              <p className="clamp-1">Elevate your style with our stunning Mini Dress,
                the epitome of chic and sophistication. Crafted
                with precision and designed to turn heads, this
                dress boasts a figure-flattering silhouette
                that
                accentuates your curves in all the right
                places.
              </p>
              <h4 className="price">$ 4.34<del> $5.00 </del><span className="discounted-price"> 5% Off
              </span>
              </h4>
            </div>
            <ul className="offer-panel">
              <li><span className="offer-icon"><i className="ri-discount-percent-fill" /></span>
                Limited Time Offer: 5% off</li>
              <li><span className="offer-icon"><i className="ri-discount-percent-fill" /></span>
                Limited Time Offer: 5% off</li>
              <li><span className="offer-icon"><i className="ri-discount-percent-fill" /></span>
                Limited Time Offer: 5% off</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}
