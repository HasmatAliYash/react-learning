import "../App.css";
import React, { Component } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      responseVar: "",
    };
    this.change = this.change.bind(this);
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ productList: response.splice(4, 4) });
      });
  }
  change(event) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ productList: response.splice(4, event.target.value) });
      });
  }

  render() {
    return (
      <>
        <h4 className="userAllign">Add User</h4>
        <h6 className="addedUser">Show items per page:</h6>
        <select
          className="dropDownAllign txtColor"
          id="lang"
          onChange={this.change}
          value={this.state.value}
        >
          <option className="txtColor" value="4">
            {4}
          </option>
          <option className="txtColor" value="6">
            {6}
          </option>
          <option className="txtColor" value="8">
            {8}
          </option>
        </select>
        <p></p>
        <p>{this.state.value}</p>

        <hr />
        {this.state.productList.length === 0 && (
          <img height="100" width="100" src="./../loader.gif" alt="loader" />
        )}
        {this.state.productList.length > 0 && (
          <div className="row d-flex justify-content-around">
            {this.state.productList.map((product) => (
              <div key={product.id} className="row tiles">
                <div className="col-4">
                  <div className="image-hover-zoom" scale="2.0">
                    <img
                      style={{ height: "160px", width: "100px" }}
                      src={product.image}
                      alt={product.image}
                      height="200px"
                    />
                  </div>
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
                    {[...Array(Math.round(product.rating.rate))].map(
                      (elementInArray, index) => (
                        <span className="" key={index}>
                          <FaStar color="3c73b0"></FaStar>
                        </span>
                      )
                    )}
                    {[...Array(5 - Math.round(product.rating.rate))].map(
                      (elementInArray, index) => (
                        <span className="" key={index}>
                          <FaRegStar color="3c73b0"></FaRegStar>
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}
