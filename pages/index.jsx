import React from 'react';

export default function Home() {
  return (
    <>
      <nav class="navbar shadow-2 fixed-top fixed-right">
        <div className="navbar-container navbar-container-equal">
          <div class="navbar-logo">
            <img
              className="margin-right-7"
              src="/logo.svg"
              alt="logo"
              style={{ height: 30 }}
            />
            <a className="color-gray800" href="#">MODERN UI</a>
          </div>
          <ul class="navbar-menu navbar-menu-right">
            <li>
              <a class="navbar-menu-link" href="/docs">
                <i class="bi-book-half"></i>
                <span>Docs</span>
              </a>
            </li>
            <li>
              <a class="navbar-menu-link" href="/design">
                <span>Design</span>
              </a>
            </li>
            <li>
              <a class="navbar-menu-link" href="/component">
                <span>Component</span>
              </a>
            </li>
            <li>
              <button class="button button-outline-primary button-rounded">
                Example
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container" style={{ marginTop: 110 }}>
        <div
          className="hero background-color-gray100 rounded-20"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="hero-title">Intuitive.</div>
          <div className="hero-slug">Cobalorative & Design by @rhiday</div>
          <img
            class="width-30rem"
            src="https://cdn.dribbble.com/users/1293874/screenshots/12531701/media/9601b60e3b1c9e47147c5bd4baf06431.png?compress=1&resize=1200x900&vertical=top"
            alt="showcase"
            style={{ position: "absolute", right: 0, top: 0 }}
          />
        </div>
      </div>

      <div className="container" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col-12">
            <div className="divider margin-bottom-30">
              <div className="divider-label">
                <i className="bi-brightness-low-fill"></i>Playfull
              </div>
              <h2 className="divider-title">Feature</h2>
            </div>
          </div>

          <div className="col-6 col-md-3">
            <div className="card padding-5 shadow-1">
              <picture className="card-image">
                <img
                  class="height-100px display-block margin-auto"
                  src="https://gw.alipayobjects.com/zos/bmw-prod/dd5520d8-44b4-43a6-88ee-c970e3757d39.svg"
                  alt=""
                />
              </picture>
              <div className="card-title text-center">Small</div>
              <div className="card-body">
                <div className="card-body-description">
                  It is carefully optimized for harsh scenes, without
                  configuration, Faster Responsive
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card padding-5 shadow-1">
              <picture className="card-image">
                <img
                  class="height-100px display-block margin-auto"
                  src="https://gw.alipayobjects.com/zos/bmw-prod/33cb2ea7-3025-439a-9ce1-212aae26b1cc.svg"
                  alt=""
                />
              </picture>
              <div className="card-title text-center">Customizable</div>
              <div className="card-body">
                <div className="card-body-description">
                  Based on CSS variables, you can reliably and efficiently
                  adjust the appearance Theme Anytihing
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card padding-5 shadow-1">
              <picture className="card-image">
                <img
                  class="height-100px display-block margin-auto"
                  src="https://gw.alipayobjects.com/zos/bmw-prod/7329c998-6dfd-4764-865a-1839dbcc5653.svg"
                  alt=""
                />
              </picture>
              <div className="card-title text-center">Atomic</div>
              <div className="card-body">
                <div className="card-body-description">
                  The function of each component, neither more nor less, is
                  exactly what you need flexible.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card padding-5 shadow-1">
              <picture className="card-image">
                <img
                  class="height-100px display-block margin-auto"
                  src="https://gw.alipayobjects.com/zos/bmw-prod/0c1d3f71-9b1a-43df-84a8-8eed55700d65.svg"
                  alt=""
                />
              </picture>
              <div className="card-title text-center">Fluent</div>
              <div className="card-body">
                <div className="card-body-description">
                  With smooth gestures and delicate animation, it helps the
                  product create the ultimate experience.
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="divider margin-top-40 margin-bottom-30">
              <div className="divider-label">
                <i className="bi-phone-fill"></i>Ready Mobile
              </div>
              <h2 className="divider-title">Responsive everything.</h2>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body padding-0">
                <div className="card-description color-gray600 font-family-poppins">
                  Wrestling with a bunch of complex media queries in your CSS
                  sucks, so Tailwind lets you build responsive designs right in
                  your HTML instead. Throw a screen size in front of literally
                  any utility class and watch it magically apply at a specific
                  breakpoint.
                </div>
              </div>
              <div className="card-footer">
                <button className="button button-outline-primary button-rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="divider margin-top-40 margin-bottom-30">
              <div className="divider-label">
                <i className="bi-record"></i>State Variant
              </div>
              <h2 className="divider-title">
                Hover and focus states? We got ’em.
              </h2>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-body padding-0">
                <div className="card-description color-gray600 font-family-poppins">
                  Want to style something on hover? Stick hover: at the
                  beginning of the class you want to add. Works for focus,
                  active, disabled, focus-within, focus-visible, and even fancy
                  states we invented ourselves like group-hover.
                </div>
              </div>
              <div className="card-footer">
                <button className="button button-outline-danger button-rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 50 }}>
        <div
          className="hero background-color-blue900 rounded-35 text-center padding-top-40 padding-bottom-40"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <div className="hero-title color-white">Get started</div>
          <div className="hero-slug color-white margin-bottom-30">
            Instant access to the power of the Modern UI
          </div>
          <button className="button button-rounded color-gray900 button-lg padding-top-10 padding-bottom-10 padding-right-20 padding-left-20">
            See the docs
          </button>
        </div>
      </div>

      <footer class="background-color-gray200 padding-top-40 padding-bottom-20" style={{ marginTop: 120 }}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="info text-center">
                <img className="width-56px" src="/logo.svg" alt="logo" />
                <p className="margin-top-10 font-size-20 font-weight-800 color-gray900">Modern UI</p>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li className="title">
                  <a href="">Link</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Component</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
