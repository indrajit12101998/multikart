import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../redux/slice/FunctionalSlice";

export default function CartSideBar() {
    const dispatch = useDispatch();
    const cartBarData = useSelector((state) => state.FunctionalSlice.cartVisible);
    return (
        <>
            <div className={`offcanvas offcanvas-end cart-offcanvas ${cartBarData == true ? "show" : ""}`} tabIndex={-1} id="cartOffcanvas" aria-modal="true" role="dialog">
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title">My Cart (3)</h3>
                    <button type="button" className="btn-close" style={{ backgroundColor: '#206664' }} onClick={() => dispatch(toggleCart(!cartBarData))}>
                        <img src="./images/xmark-solid.svg" alt="" width={20} />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="pre-text-box">
                        <p>spend $20.96 More And Enjoy Free Shipping!</p>
                        <div className="progress" role="progressbar">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '58.08%' }}>
                                <i className="ri-truck-line" />
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-title">
                        <a href="#!">Clear Cart</a>
                    </div>
                    <div className="cart-media">
                        <ul className="cart-product">
                            <li>
                                <div className="media">
                                    <a href="#!">
                                        <img src="./images/fashion-1/product/5.jpg" className="img-fluid" alt="Classic Jacket" />
                                    </a>
                                    <div className="media-body">
                                        <a href="#!">
                                            <h4>Couture Edge</h4>
                                        </a>
                                        <h4 className="quantity">
                                            <span>1 x $6.74</span>
                                        </h4>
                                        <div className="qty-box">
                                            <div className="input-group qty-container">
                                                <button className="btn qty-btn-minus">
                                                    <i className="ri-subtract-line" />
                                                </button>
                                                <input type="number" readOnly name="qty" className="form-control input-qty" defaultValue={1} />
                                                <button className="btn qty-btn-plus">
                                                    <i className="ri-add-line" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="close-circle">
                                            <button className="close_button edit-button" data-bs-toggle="modal" data-bs-target="#variationModal">
                                                <i className="ri-pencil-line" />
                                            </button>
                                            <button className="close_button delete-button" type="submit">
                                                <i className="ri-delete-bin-line" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <a href="#!">
                                        <img src="./images/fashion-1/product/13.jpg" className="img-fluid" alt="Classic Jacket" />
                                    </a>
                                    <div className="media-body">
                                        <a href="#!">
                                            <h4>Classic Jacket</h4>
                                        </a>
                                        <h4 className="quantity">
                                            <span>1 x $7.84</span>
                                        </h4>
                                        <div className="qty-box">
                                            <div className="input-group qty-container">
                                                <button className="btn qty-btn-minus">
                                                    <i className="ri-subtract-line" />
                                                </button>
                                                <input type="number" readOnly name="qty" className="form-control input-qty" defaultValue={1} />
                                                <button className="btn qty-btn-plus">
                                                    <i className="ri-add-line" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="close-circle">
                                            <button className="close_button delete-button" type="submit">
                                                <i className="ri-delete-bin-line" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="media">
                                    <a href="#!">
                                        <img src="./images/fashion-1/product/12.jpg" className="img-fluid" alt="Classic Jacket" />
                                    </a>
                                    <div className="media-body">
                                        <a href="#!">
                                            <h4>Urban Chic</h4>
                                        </a>
                                        <h4 className="quantity">
                                            <span>2 x $3.84</span>
                                        </h4>
                                        <div className="qty-box">
                                            <div className="input-group qty-container">
                                                <button className="btn qty-btn-minus">
                                                    <i className="ri-subtract-line" />
                                                </button>
                                                <input type="number" readOnly name="qty" className="form-control input-qty" defaultValue={1} />
                                                <button className="btn qty-btn-plus">
                                                    <i className="ri-add-line" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="close-circle">
                                            <button className="close_button delete-button" type="submit">
                                                <i className="ri-delete-bin-line" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="cart_total">
                            <li>
                                <div className="total">
                                    <h5>Sub Total : <span>$36.74</span>
                                    </h5>
                                </div>
                            </li>
                            <li>
                                <div className="buttons">
                                    <a href="cart.html" className="btn view-cart">View Cart</a>
                                    <a href="checkout.html" className="btn checkout">Check Out</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {cartBarData && <div className="backdrop" onClick={() => dispatch(toggleCart(!cartBarData))}></div>}
        </>
    )
}
