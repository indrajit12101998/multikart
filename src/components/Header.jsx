import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleSearchModal } from "../redux/slice/FunctionalSlice";

export default function Header() {
  const dispatch = useDispatch();
  const searchModalData = useSelector((state) => state.FunctionalSlice.searchModal);
  const cartBarData = useSelector((state) => state.FunctionalSlice.cartVisible);
  return (
    <header id="sticky-header" className="style-light header-compact">
      <div className="mobile-fix-option" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main-menu">
              <div className="menu-left">
                <div className="brand-logo">
                  <a href="index.html">
                    <img
                      src="./images/vegetables-4/logo.png"
                      className="img-fluid"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="menu-right pull-right">
                <div>
                  <div className="icon-nav">
                    <ul>
                      <li className="onhover-div mobile-cart" onClick={() => dispatch(toggleSearchModal(!searchModalData))}>
                        <div>
                          <img width={25} src="./images/magnifying-glass-solid.svg" alt="" />
                        </div>
                      </li>
                      <li className="onhover-div mobile-cart" onClick={() => dispatch(toggleCart(!cartBarData))}>
                        <div>
                          <img width={25} src="./images/basket-shopping-solid.svg" alt="" />
                        </div>
                        <span className="cart_qty_cls">2</span>
                      </li>
                      <li className="onhover-div mobile-cart">
                        <div>
                          <img width={20} src="./images/user-solid.svg" alt="" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part bottom-light">
        <div className="container">
          <div className="row">
            <div className="col-12 menu-row">
              <div className="main-nav-center">
                <nav id="main-nav" className="text-start">
                  <div className="toggle-nav">
                    <i className="fa-solid fa-bars" />
                  </div>
                  <ul id="main-menu" className="sm pixelstrap sm-horizontal">
                    <li className="mobile-box">
                      <div className="mobile-back text-end">
                        Menu
                        <i className="ri-close-line" />
                      </div>
                    </li>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#!">shop</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
