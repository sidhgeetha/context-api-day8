import React, { useContext, useState } from "react";
import QuantityContext from "./QuantityContext";
import products from "./products";

const ProductItem = ({ item, index, total, setTotal, setCount }) => {
  const initialQuantity = useContext(QuantityContext);

  // initially the quantity will be 1
  const [quantity, setQuantity] = useState(initialQuantity);

  const [price, setPrice] = useState(item.price); // initial product price to display from product.json

  // intial product price is assigned for new price calculation
  // eg : product price * no of quantity gives the total price for given product item
  const [totalPrice, setTotalPrice] = useState(item.price);

  const updateQuantity = (operation) => {
    console.log({ operation } + "clicked!");

    if (operation == "+") {
      const newQuantity = quantity + 1; // when + button clicked, add 1 quantity

      // when quantity increases, product price * total quantity
      // this below variable return the total price of one product for the total quantity
      const newPrice = price * newQuantity;
      setQuantity(newQuantity);
      setTotalPrice(newPrice);

      // this below state variable displayed in top cart menu
      setTotal((prevTotal) => prevTotal + price);
      setCount((prevCount) => prevCount + 1);
    } else {
      const newQuantity = quantity - 1;
      if (newQuantity > 0) {
        const newPrice = price * newQuantity;
        setQuantity(newQuantity);
        setTotalPrice(newPrice);
        setTotal((prevTotal) => prevTotal - price);
        setCount((prevCount) => prevCount - 1);
      }
    }
  };



  ;

  return (
    <div className="container">
      <div
        className="card mb-3  d-flex justify-content-center"
        style={{
          maxWidth: "1200px",
          marginLeft: "200px",
          marginRight: "200px",
          boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1",
        }}
      >
        <div class="row ">
          <div class="col-md-4">
            <img
              src={item.thumbnail}
              class="rounded-start"
              width="300"
              height="300"
            ></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5
                class="card-title "
                style={{ fontWeight: "bold", marginLeft: "20px" }}
              >
                {item.title}
              </h5>
              <p
                class="card-text"
                style={{ fontWeight: "bold", marginLeft: "20px" }}
              >
                {item.description}
              </p>
              <p
                class="card-text"
                style={{ fontWeight: "bold", marginLeft: "20px" }}
              >
                {totalPrice}
              </p>
              <div style={{ marginLeft: "20px" }}>
                <button
                  style={{
                    padding: "6px",
                    margin: "12px",
                    backgroundColor: "#deb887",
                    borderRadius: "12px",
                  }}
                  onClick={() => updateQuantity("-")}
                >
                  -
                </button>
                <label>{quantity}</label>
                <button
                  style={{
                    padding: "6px",
                    margin: "12px",
                    backgroundColor: "#deb887",
                    borderRadius: "12px",
                  }}
                  onClick={() => updateQuantity("+")}
                >
                  +
                </button>
              </div>

              <br></br>
              <button
                type="button"
                class="btn btn-danger"
                style={{ marginTop: "12px" ,marginLeft:"20px" }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;































// const updateQuantity = () => {
  //   console.log("Button clicked!");
  //   const newQuantity = quantity + 1;
  //   const newPrice = price * newQuantity;
  //   setQuantity(newQuantity);
  //   console.log(newQuantity);
  //   setTotalPrice(newPrice);
  //   setTotal((prevTotal) => prevTotal + price);
  // };

  // const reduceQuantity = () => {
  //   const newQuantity = quantity - 1;
  //   if (newQuantity > 0) {
  //     const newPrice = price * newQuantity;
  //     setQuantity(newQuantity);
  //     console.log(newQuantity);
  //     setTotalPrice(newPrice);
  //     setTotal((prevTotal) => prevTotal - price);
  //   }
  // }