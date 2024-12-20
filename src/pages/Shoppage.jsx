import Breadcumb from "../components/Breadcumb";
import ProductCard from "../components/ProductCard";


export default function Shoppage() {
    return (
        <>
            <Breadcumb />
            <section className="section-b-space ratio_asos">
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="collection-content col-xl-12">
                                <div className="page-main-content">
                                    <div className="top-banner-wrapper">
                                        <a href="#!">
                                            <img src="./images/inner-page/banner/1.png" className="img-fluid blur-up lazyloaded" alt />
                                        </a>
                                    </div>
                                    <button className="filter-btn btn"><i className="ri-arrow-left-s-line" /> Filter
                                    </button>
                                    <div className="collection-product-wrapper">
                                        <div className="product-top-filter">
                                            <div className="product-filter-content w-100">
                                                <div className="d-flex align-items-center gap-sm-3 gap-2">
                                                    <select className="form-select">
                                                        <option selected>Ascending Order</option>
                                                        <option value={1}>Descending Order</option>
                                                        <option value={2}>Low - High Price</option>
                                                        <option value={3}>High - Low Price</option>
                                                    </select>
                                                    <select className="form-select">
                                                        <option selected>10 Products</option>
                                                        <option value={1}>25 Products</option>
                                                        <option value={2}>50 Products</option>
                                                        <option value={3}>100 Products</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-wrapper-grid">
                                            <div className="row g-3 g-sm-4">
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                                <div className="col-xl-3 col-6 col-grid-box">
                                                    <ProductCard />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-pagination">
                                            <div className="theme-paggination-block">
                                                <nav>
                                                    <ul className="pagination">
                                                        <li className="page-item">
                                                            <a className="page-link" href="#!" aria-label="Previous">
                                                                <span>
                                                                    <i className="ri-arrow-left-s-line" />
                                                                </span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link" href="#!">1</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#!">2</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#!">3</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#!" aria-label="Next">
                                                                <span>
                                                                    <i className="ri-arrow-right-s-line" />
                                                                </span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
