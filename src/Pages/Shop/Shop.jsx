import { useEffect, useState } from "react";
import Banner from "../../Shared/Banner/Banner";
import ProductCard from "./ProductCard";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products);
  return (
    <div>
      <Banner pageTitle={"Shop"} />
      <div className="container py-6">
        <div className="grid grid-cols-3 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
