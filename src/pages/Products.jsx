import React from "react";
import { Link } from "react-router-dom";
import Watch from "../components/Watch";

const Products = ({ data, addToCart }) => {
  return (
    <main className="container mx-auto mt-10">
      <h2 className="text-center text-4xl font-bold">Nuestra Colección</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data.map((watch) => (
          <div key={watch.id}>
            <Link to={`/products/${watch.id}`}>
              <Watch watch={watch} addToCart={addToCart} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;

