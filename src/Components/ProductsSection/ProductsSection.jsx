import { useContext } from "react";
import productsContext from "../../Context/ProductsContext";
import "./ProductsSection.css";

export default function ProductsSection() {
  const contextData = useContext(productsContext);

  const addToCart = product => {
    contextData.setIsShowToast(true);

    setTimeout(() => {
      contextData.setIsShowToast(false);
    }, 3000);

    let isInUserCart = contextData.userCart.some(
      (bagProduct) => bagProduct.title === product.title
    );

    if (!isInUserCart) {
      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: product.title,
        price: product.price,
        count: 1,
        img: product.img,
      };

      contextData.setUserCart((prevProducts) => [
        ...prevProducts,
        newUserCartProduct,
      ]);
    } else {
      let userCart = [...contextData.userCart];

      // userCart.some(bagProduct => {
      //   if (bagProduct.title === product.title) {
      //     bagProduct.count += 1
      //     return true
      //   }
      // })
      // contextData.setUserCart(userCart)

      let newUserCart = userCart.map((bagProduct) => {
        if (bagProduct.title === product.title) {
          bagProduct.count += 1;
        }
        return bagProduct;
      });

      contextData.setUserCart(newUserCart);
    }
  };

  return (
    <>
      {contextData.allProducts.map((productSection, sectionIndex) => (
        <div className="row justify-content-center mt-5" key={sectionIndex}>
          <h3 className="text-center">{productSection.title}</h3>

          {productSection.infos.map((product, productIndex) => (
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-5" key={productIndex}>
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img
                    src={product.img}
                    alt="Product Image"
                    className="card-img-top w-75"
                  />
                </div>

                <div className="card-body text-center">
                  <p className="card-text">{product.title}</p>
                  <p className="price">{product.price}$</p>
                  <br />
                  <a
                    href="javascript:void(0)"
                    className="btn btn-danger"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark mt-3 text-capitalize"
                  >
                    More Information
                  </a>
                  <p className="number">Number: {product.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
}