import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import productsContext from "../../Context/ProductsContext";
import "./Navbar.css";

export default function Navbar() {
  const contextData = useContext(productsContext);

  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <div className="container">
        <a href="#" className="navbar-brand">
          Techno Shop
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag">
            <BsBag
              className="text-white"
              onClick={() => contextData.setIsShowCart(true)}
            />
            <span className="bag-products-counter">
              {contextData.userCart.reduce(
                (total, product) => total + product.count,
                0
              )}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
