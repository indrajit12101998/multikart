
export default function ShopSidebar() {
    return (
        <>
            <div className="collection-filter-block">
                {/* brand filter start */}
                <div className="collection-mobile-back"><span className="filter-back"><i className="ri-arrow-left-s-line" /> back</span></div>
                <div className="collection-collapse-block open">
                    <div className="accordion collection-accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button pt-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Categories <i className="fa-solid fa-chevron-up" />
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <ul className="collection-listing">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox1" />
                                                <label className="form-check-label" htmlFor="checkbox1">
                                                    Fashion
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox2" />
                                                <label className="form-check-label" htmlFor="checkbox2">
                                                    Furniture
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox3" />
                                                <label className="form-check-label" htmlFor="checkbox3">
                                                    Book
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox4" />
                                                <label className="form-check-label" htmlFor="checkbox4">
                                                    Vegetable
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox5" />
                                                <label className="form-check-label" htmlFor="checkbox5">
                                                    Bag
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox6" />
                                                <label className="form-check-label" htmlFor="checkbox6">
                                                    Shoes
                                                </label>
                                            </div>
                                        </li></ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Brand </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <ul className="collection-listing">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox11" />
                                                <label className="form-check-label" htmlFor="checkbox11">
                                                    Couture Edge
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox12" />
                                                <label className="form-check-label" htmlFor="checkbox12">
                                                    Glamour Gaze
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox13" />
                                                <label className="form-check-label" htmlFor="checkbox13">
                                                    Urban Chic
                                                </label>
                                            </div>
                                        </li><li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox14" />
                                                <label className="form-check-label" htmlFor="checkbox14">
                                                    VogueVista
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox15" />
                                                <label className="form-check-label" htmlFor="checkbox15">
                                                    Velocity Vibe
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox16" />
                                                <label className="form-check-label" htmlFor="checkbox16">
                                                    Nourish Naturally
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                    Colours </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <ul className="collection-listing">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox31" />
                                                <label className="form-check-label" htmlFor="checkbox31">
                                                    Blue </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox32" />
                                                <label className="form-check-label" htmlFor="checkbox32">
                                                    Green </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox33" />
                                                <label className="form-check-label" htmlFor="checkbox33">
                                                    Red </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox34" />
                                                <label className="form-check-label" htmlFor="checkbox34">
                                                    Beige </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox35" />
                                                <label className="form-check-label" htmlFor="checkbox35">
                                                    Black </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox36" />
                                                <label className="form-check-label" htmlFor="checkbox36">
                                                    Brown </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                    Rating </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <ul className="collection-listing">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox51" />
                                                <label className="form-check-label" htmlFor="checkbox51">
                                                    <span>
                                                        <span className="star-rating">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                        </span>
                                                        <span>(5 Star)</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox52" />
                                                <label className="form-check-label" htmlFor="checkbox52">
                                                    <span>
                                                        <span className="star-rating">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-line" />
                                                            <span>(4 Star)</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox53" />
                                                <label className="form-check-label" htmlFor="checkbox53">
                                                    <span>
                                                        <span className="star-rating">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <span>(3 Star)</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox54" />
                                                <label className="form-check-label" htmlFor="checkbox54">
                                                    <span>
                                                        <span className="star-rating">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <span>(2 Star)</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" defaultValue id="checkbox55" />
                                                <label className="form-check-label" htmlFor="checkbox55">
                                                    <span>
                                                        <span className="star-rating">
                                                            <i className="ri-star-fill" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <i className="ri-star-line" />
                                                            <span>(1 Star)</span>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
