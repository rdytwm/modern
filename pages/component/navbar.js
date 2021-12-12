import Layout from '../../layouts'

export default function index() {
  return (
    <Layout>
      <div className="container">
        <div class="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Navbar Default</h3>
            <p>Navbar default align same equal</p>
            <code>.navbar-container</code>
          </div>
          <nav class="navbar shadow-2">
            <div className="navbar-container">
              <div class="navbar__logo">
                <img src="https://lh3.googleusercontent.com/proxy/6_MOqYQ7JpfKxv_0yNZ3T4roEyQT-ZnsmtlpLVyjk2pFKRBRglDD18oXwWiOot0zgzozMIBNiXBCO5DSA14lcDSZ7WY95yu9uExJ3s7UxnZMABfSsr9fhsO6gw" alt="" style={{height: 40}}/>
                <a href="#">MODERN</a>
              </div>
              <ul class="navbar__menu navbar__menu--right">
                <li>
                  <a class="navbar__menu__link" href="#">
                    <i class="bi-app-indicator"></i>
                    <span>CSS</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Component</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Theme</span>
                  </a>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Login</button>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Register</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-12 margin-bottom--20">
          <div className="prettier">
            <h3 className="prettier__title">Navbar Full Width</h3>
            <p>Navbar default align same equal</p>
            <code>.navbar-container</code>
          </div>
          <nav class="navbar shadow-2">
            <div className="navbar-container navbar-container--full">
              <div class="navbar__logo">
                <img src="https://lh3.googleusercontent.com/proxy/6_MOqYQ7JpfKxv_0yNZ3T4roEyQT-ZnsmtlpLVyjk2pFKRBRglDD18oXwWiOot0zgzozMIBNiXBCO5DSA14lcDSZ7WY95yu9uExJ3s7UxnZMABfSsr9fhsO6gw" alt="" style={{height: 40}}/>
                <a href="#">MODERN</a>
              </div>
              <ul class="navbar__menu navbar__menu--right">
                <li>
                  <a class="navbar__menu__link" href="#">
                    <i class="bi-app-indicator"></i>
                    <span>CSS</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Component</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Theme</span>
                  </a>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Login</button>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Register</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-12">
          <div className="prettier">
            <h3 className="prettier__title">Navbar Equal Width</h3>
            <p>width same on logo ex elements</p>
            <code>.navbar-container--left</code>
          </div>
          <nav class="navbar shadow-3">
            <div className="navbar-container navbar-container--equal">
              <div class="navbar__logo">
                <img src="https://lh3.googleusercontent.com/proxy/6_MOqYQ7JpfKxv_0yNZ3T4roEyQT-ZnsmtlpLVyjk2pFKRBRglDD18oXwWiOot0zgzozMIBNiXBCO5DSA14lcDSZ7WY95yu9uExJ3s7UxnZMABfSsr9fhsO6gw" alt="" style={{height: 40}}/>
                <a href="#">MODERN</a>
              </div>
              <ul class="navbar__menu navbar__menu--left">
                <li>
                  <a class="navbar__menu__link" href="#">
                    <i class="bi-app-indicator"></i>
                    <span>CSS</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Component</span>
                  </a>
                </li>
                <li>
                  <a class="navbar__menu__link" href="#">
                    <span>Theme</span>
                  </a>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Login</button>
                </li>
                <li>
                  <button class="button button--primary button--rounded">Register</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </Layout>
  )
}