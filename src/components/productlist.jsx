import React, { useEffect, useState } from "react";

function Productlist() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product") 
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default Productlist;
