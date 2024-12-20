
export default function TopPannel() {
  return (
    <div className="top-panel-adv">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-10">
            <div className="panel-left-content">
              <h4 className="mb-0">
                Welcome to Multikart!! Delivery in <span>10 Minutes.</span>{" "}
              </h4>
              <div className="delivery-area d-md-block d-none">
                <div>
                  <h5>Limited Time offer</h5>
                  <h4>code: 25FsfuABdS</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <a href="javascript:void(0)" className="close-btn">
              <i data-feather="x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
