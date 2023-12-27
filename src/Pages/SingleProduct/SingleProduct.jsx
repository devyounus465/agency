import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import ReactImageMagnify from "react-image-magnify";
import { useState } from "react";

const SingleProduct = () => {
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const products = useLoaderData();
  //   console.log(products);

  const product = products.find((product) => product.id === id);
  const { img, name, category, price, ratings, seller, stock } = product;

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const totalPrice = price * count;

  return (
    <div className="container py-12">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        <div className="z-10">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Example",
                isFluidWidth: true,
                src: img,
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800,
              },
              enlargedImageContainerDimensions: {
                width: 600,
                height: 500,
              },
              shouldHideHintAfterFirstActivation: false,
            }}
          />
        </div>

        <div className="pt-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">{name}</h3>
            <h3>
              <Rating style={{ maxWidth: 180 }} value={ratings} readOnly />
            </h3>
            <h3 className="text-3xl font-semibold">Price: ${price}</h3>

            <div className="flex gap-4">
              <button className="btn bg-blue-500 text-white">
                Add To Cart
              </button>
              <div className="join join-vertical lg:join-horizontal">
                <button onClick={handleDecrease} className="btn join-item">
                  -
                </button>
                <button className="btn join-item cursor-none hover:bg-gray-200">
                  {count}
                </button>
                <button onClick={handleIncrease} className="btn join-item">
                  +
                </button>
              </div>
            </div>
            <p>price:{totalPrice}</p>
          </div>
          <div className="border-t-2 py-4 mt-4">
            <h4>Category:{category}</h4>
            <h4>Stock:{stock}</h4>
            <h4>
              Brand:<span className="text-blue-500">{seller}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
