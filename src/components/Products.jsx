import React, { Component } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.splice(10, 4));
        this.setState({ productList: response.splice(10, 4) });
      });
  }

  render() {
    return (
      <>
        <h4>Products List</h4>
        <hr />
        <div className="row d-flex justify-content-around">
          {this.state.productList.map((product) => (
            <div key={product.id} className="row tiles">
              <div className="col-4">
                <img
                  style={{ height: "160px", width: "100px" }}
                  src={product.image}
                  alt={product.image}
                  height="200px"
                />
              </div>
              <div className="col-8">
                <span className="catagory">{product.category}</span>
                <p className="item">{product.title}</p>
                <p
                  className="description text-truncate"
                  title={product.description}
                >
                  {product.description}
                </p>
                <span className="discount-price">
                  ${(product.price - (product.price * 10) / 100).toFixed(2)}
                </span>
                <span className="price">${product.price}</span>
                <div>
                  {[...Array(5)].map((elementInArray, index) => (
                    <span className="" key={index}>
                      {/* <FaRegStar color="3c73b0"></FaRegStar> */}
                      <FaStar color="3c73b0"></FaStar>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}