import Header from "./Header";

export default function LoaderSkeleton() {
  return (
    <div className="loader_skeleton">
      <Header />
      <div className="small-slider">
        <div className="home-slider">
          <div className="home" />
        </div>
      </div>
      <section className="vegetables-category">
        <div className="container">
          <div className="vector-slide-8 no-arrow slick-default-margin ratio_square">
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
            <div>
              <div className="category-boxes"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="collection-banner banner-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="ldr-bg">
                <div className="contain-banner banner-3">
                  <div>
                    <h4 />
                    <h2 />
                    <h6 />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ldr-bg">
                <div className="contain-banner banner-3">
                  <div>
                    <h4 />
                    <h2 />
                    <h6 />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ldr-bg">
                <div className="contain-banner banner-3">
                  <div>
                    <h4 />
                    <h2 />
                    <h6 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
