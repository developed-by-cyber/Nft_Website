import "./Footer.css";
function Footer() {
  return (
      <>
      <footer>
        <div className="links">
          <div className="logo" data-aos="fade-down" 
            data-aos-delay="500">
            <h1>Logo</h1>
            <p>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
          </div>

          <div className="link-hold" data-aos="fade-up" 
            data-aos-delay="600">
            <div className="link" >
              <p>Market Place</p>
              <ul>
                <li>
                  <a href="/">All NFTs</a>
                </li>
                <li>
                  <a href="/">Art</a>
                </li>
                <li>
                  <a href="/">Gaming</a>
                </li>
                <li>
                  <a href="/">Photography</a>
                </li>
                <li>
                  <a href="/">Membership</a>
                </li>
                <li>
                  <a href="/">PFPs</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <p>My Account</p>
              <ul>
                <li>
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Favourites</a>
                </li>
                <li>
                  <a href="/">Watch Lists</a>
                </li>
                <li>
                  <a href="/">Collection</a>
                </li>
              </ul>
            </div>
            <div className="link link3">
              <ul>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Terms of Service</a>
                </li>
              </ul>
            </div>
            <div className="link">
              <p>Contact Us</p>
              <ul>
                <li>
                  <a href="/">Artmint@gmail.com</a>
                </li>
                <li>
                  <a href="/">+234 703 031 3557</a>
                </li>
                <li>
                  <a href="/">+234 123 456 7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <div className="copyright">
        <p>© 2018 - 2023 Artmint, Inc. All right reserved</p>
        <p className="p2">
          Privacy Policy <span>|</span> Terms of Service
        </p>
      </div>
    </>
  );
}

export default Footer;
