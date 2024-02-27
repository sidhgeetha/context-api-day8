import React, { useContext, useState, useEffect } from "react";
import products from "./components/products";
import ProductItem from "./components/ProductItem";
import QuantityContext from "./components/QuantityContext";

const App = () => {
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let sum = 0;
    products.forEach((item) => {
      sum += item.price;
    });
    setTotal(sum);
  }, [products]);

  useEffect(() => {
    let sum = 0;
    const count = products.length;
    setCount(count);
  }, [products]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div
          className="summary-container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",

            justifyContent: "flex-end",
            alignContent: "end",
            marginRight: "250px",
            marginBottom: "12px",
          }}
        >
          <h1 style={{ margin: "32px", fontSize: "24px", fontWeight: "bold" }}>
            Shopping cart
          </h1>
          <div
            style={{
              marginRight: "20px",
              backgroundColor: "#deb887",
              padding: "12px",
              borderRadius: "4px",
            }}
          >
            <h1
              style={{ fontSize: "18px", fontWeight: "normal" }}
              className="summary"
            >
              Total Quantity: {count}
            </h1>
          </div>

          <div
            style={{
              marginRight: "20px",
              backgroundColor: "#deb887",
              padding: "12px",
              borderRadius: "4px",
            }}
          >
            <h1
              style={{ fontSize: "18px", fontWeight: "normal" }}
              className="summary"
            >
              Sub Total: {total}
            </h1>
          </div>
        </div>
      </div>

      {products.map((item, index) => {
        return (
          <div key={index}>
            <QuantityContext.Provider value={1}>
              <ProductItem
                item={item}
                index={index}
                total={total}
                setTotal={setTotal}
                setCount={setCount}
              />
            </QuantityContext.Provider>
          </div>
        );
      })}
    </div>
  );
};

export default App;
