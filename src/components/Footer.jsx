function Footer() {
  return (
    <footer>
      <div className="py-5 py-lg-6 bg-gray-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              {/*<svg className="svg-icon service-icon">
                <use xlink:href="/#delivery-time-1"> </use>
    </svg>*/}
              <div className="service-text">
                <h6 className="text-sm mb-1">Free shipping &amp; return</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  Free Shipping over $300
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              {/*<svg className="svg-icon service-icon">
                <use xlink:href="/#money-1"> </use>
</svg>*/}
              <div className="service-text">
                <h6 className="text-sm mb-1">Money back guarantee</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  30 Days Money Back Guarantee
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              {/*<svg className="svg-icon service-icon">
                <use xlink:href="/#special-price-1"> </use>
</svg>*/}
              <div className="service-text">
                <h6 className="text-sm mb-1">Best prices</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  Always the best prices
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 py-4 service-column">
              {/*<svg className="svg-icon service-icon">
                <use xlink:href="/#customer-support-1"> </use>
</svg>*/}
              <div className="service-text">
                <h6 className="text-sm mb-1">020-800-456-747</h6>
                <p className="text-muted fw-light text-sm mb-0">
                  24/7 Available Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 text-muted">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 pe-lg-5 pe-xl-6 mb-5 mb-lg-0">
              <h6 className="text-dark letter-spacing-1 mb-4">Be in touch</h6>
              <p className="text-sm mb-3">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                itaque temporibus.
              </p>
              <form action="#" id="newsletter-form">
                <div className="input-group input-group-underlined mb-3">
                  <input
                    className="form-control form-control-underlined"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className="btn btn-underlined text-gray-700 py-0"
                    type="button"
                  >
                    {/*<svg className="svg-icon w-2rem h-2rem">
                      <use xlink:href="/#envelope-1"> </use>
</svg>*/}
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4">
                  <a
                    className="d-lg-none block-toggler my-3"
                    data-bs-toggle="collapse"
                    href="/#footerMenu0"
                    aria-expanded="false"
                    aria-controls="footerMenu0"
                  >
                    Shop<span className="block-toggler-icon"></span>
                  </a>

                  <div className="expand-lg collapse" id="footerMenu0">
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                      Shop
                    </h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          For Women
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          For Men
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Stores
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Our Blog
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Shop
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <a
                    className="d-lg-none block-toggler my-3"
                    data-bs-toggle="collapse"
                    href="/#footerMenu1"
                    aria-expanded="false"
                    aria-controls="footerMenu1"
                  >
                    Company<span className="block-toggler-icon"></span>
                  </a>

                  <div className="expand-lg collapse" id="footerMenu1">
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                      Company
                    </h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Login
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Register
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Our Products
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Checkouts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <a
                    className="d-lg-none block-toggler my-3"
                    data-bs-toggle="collapse"
                    href="/#footerMenu2"
                    aria-expanded="false"
                    aria-controls="footerMenu2"
                  >
                    Your account<span className="block-toggler-icon"></span>
                  </a>

                  <div className="expand-lg collapse" id="footerMenu2">
                    <h6 className="text-dark letter-spacing-1 mb-4 d-none d-lg-block">
                      Your account
                    </h6>
                    <ul className="list-unstyled text-sm pt-2 pt-lg-0">
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Login
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Register
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Our Products
                        </a>
                      </li>
                      <li className="mb-2">
                        {" "}
                        <a
                          className="text-muted text-dark-hover link-animated"
                          href="/#"
                        >
                          Checkouts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 fw-light text-muted">
        <div className="container">
          <div className="row align-items-center text-sm text-gray-500">
            <div className="col-lg-4 text-center text-lg-start">
              <p className="mb-lg-0">
                {" "}
                &copy; 2022, Alivan Space. All rights reserved.
              </p>
            </div>
            <div className="col-lg-8">
              <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-lg-end">
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/#">
                    Terms &amp; Conditions{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/#">
                    Privacy &amp; cookies{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/#">
                    Accessibility{" "}
                  </a>
                </li>
                <li className="list-inline-item">
                  {" "}
                  <a className="text-reset" href="/#">
                    Customer Data Promise{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
