export default function Footer() {
  return (
    <footer className="footer-light footer-expand pb-0 mt-5">
      <div className="section-t-space section-b-space light-layout">
        <div className="container">
          <div className="row footer-theme partition-f">
            <div className="col-lg-4 col-md-6">
              <div className="footer-title footer-mobile-title">
                <h4>about</h4>
              </div>
              <div className="footer-content">
                <a href="index.html" className="d-block footer-logo">
                  <img src="./images/vegetables-4/logo.png" alt="" />
                </a>
                <p>
                  Discover the latest fashion trends, explore unique styles, and
                  enjoy seamless shopping with our carefully curated exclusive
                  collections, designed to elevate your wardrobe.
                </p>
                <ul className="store-details">
                  <li>
                    <a href="https://play.google.com/">
                      <img
                        src="./images/store/google.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.apple.com/in/app-store/">
                      <img
                        src="./images/store/app.png"
                        className="img-fluid"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>my account</h4>
                </div>
                <div className="footer-content">
                  <ul>
                    <li>
                      <a href="#!">mens</a>
                    </li>
                    <li>
                      <a href="#!">womans</a>
                    </li>
                    <li>
                      <a href="#!">clothing</a>
                    </li>
                    <li>
                      <a href="#!">accessories</a>
                    </li>
                    <li>
                      <a href="#!">featured</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>why we choose</h4>
                </div>
                <div className="footer-content">
                  <ul>
                    <li>
                      <a href="#!">shipping &amp; return</a>
                    </li>
                    <li>
                      <a href="#!">secure shopping</a>
                    </li>
                    <li>
                      <a href="#!">gallery</a>
                    </li>
                    <li>
                      <a href="#!">affiliates</a>
                    </li>
                    <li>
                      <a href="#!">contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="sub-title">
                <div className="footer-title">
                  <h4>store information</h4>
                </div>
                <div className="footer-content">
                  <ul className="contact-list">
                    <li>
                      <i className="fa-solid fa-location-dot" />
                      Multikart Demo Store, Demo store India 345-659
                    </li>
                    <li>
                      <i className="fa-solid fa-phone" />
                      Call Us: 123-456-7898
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope" />
                      Email Us: <a href="#!">Support@Multikart.com</a>
                    </li>
                    <li>
                      <i className="fa-solid fa-print" />
                      Fax: 123456
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="footer-end">
                <p>
                  <i className="fa-regular fa-copyright me-2" />
                  2024-25 themeforest powered by pixelstrap
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
              <div className="payment-card-bottom">
                <img src="./images/payment.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
