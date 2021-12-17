import React from "react";
import Navbar from "./NavBar";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Footer from "./Footer";
import { useHistory } from "react-router";

const Cart = ({ product, counter }) => {
  console.log(product);
  let totalprice = 0;

  product.forEach((item) => {
    totalprice += item.price;
  });
  console.log(totalprice);

  const history = useHistory();

  return (
    <>
      <Navbar />
      <div className="row me-4">
        <div className="row-1 container text-end mt-4 mb-4">
          <button className="btn btn-success">
            {" "}
            <Badge color="secondary" badgeContent={counter}>
              <ShoppingCartIcon />{" "}
            </Badge>
          </button>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "#F6F6F6" }}>
        {product.map((p) => {
          return (
            <div className="card ms-5 mb-4 mt-5" style={{ width: "17rem" }}>
              <div className="text-center mt-4 mb-4">
                <img
                  src={p.image}
                  className="rounded"
                  alt="name"
                  style={{
                    width: "150px",
                    height: "200px",
                  }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description.substring(0, 100)}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item fs-5 fw-bold">{p.price}$</li>
                <li className="list-group-item fs-5">{p.category}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="container text-center mt-5">
        <h4>Order Total: {totalprice.toFixed(2)}$</h4>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/ShippingForm")}
        >
          Confirm Order
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
