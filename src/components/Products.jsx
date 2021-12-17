import React, { useState } from "react";
import { useHistory } from "react-router";
import { useFetch } from "../hook/useFetch";
import Navbar from "./NavBar";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Footer from "./Footer";

const url = "https://fakestoreapi.com/products";

function Products({
  handleStateChange,
  productData,
  setCounter,
  counter,
  data = [],
}) {
  const history = useHistory();
  const [readMore, setReadMore] = useState(false);
  const { loading, products } = useFetch(url);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="text-center mt-5 mb-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  if (!loading) {
    return (
      <>
        <Navbar />
        <div className="row-1 container text-end mt-5">
          <div className="container text-center">
            {data.map((a) => {
              return (
                <div>
                  {a.firstName && <h4>Hello!! {a.firstName} Let's Shop</h4>}
                </div>
              );
            })}
            <button
              className="btn btn-success"
              onClick={() => history.push("/Cart")}
            >
              {" "}
              <Badge color="secondary" badgeContent={counter}>
                <ShoppingCartIcon />{" "}
              </Badge>
            </button>
          </div>
        </div>
        <div className="row mt-5 mb-5" style={{ backgroundColor: "#F6F6F6" }}>
          {products.map((person) => {
            return (
              <>
                <div className="col container-fluid mt-4 ms-4">
                  <div
                    className="card"
                    style={{ width: "17rem" }}>
                    <div className="text-center mt-4 mb-4">
                      <img
                        src={person.image}
                        className="rounded"
                        alt="name"
                        style={{
                          width: "150px",
                          height: "200px",
                        }}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title container-fluid">
                        {person.title.substring(0, 20)}
                      </h5>
                      <p className="card-text">
                        {readMore
                          ? person.description
                          : `${person.description.substring(0, 60)}...`}
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => setReadMore(!readMore)}
                        >
                          {readMore ? "show less" : "  read more"}
                        </button>
                      </p>
                      <h5 className="card-text">{person.price}$</h5>
                      <h5 className="card-text">{person.category}</h5>
                      <div className="mb-2">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => {
                            const temp = [...productData];
                            temp.push(person);
                            handleStateChange(temp);
                            setCounter(counter + 1);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}

export default Products;
