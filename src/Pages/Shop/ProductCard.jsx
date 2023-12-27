/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { id, name, img, price, seller } = item;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge bg-blue-600 text-white">{seller}</div>
        </h2>
        <p className="text-xl font-semibold">Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/single-product/${id}`}>
            <button className="btn btn-s bg-blue-600 text-white">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
