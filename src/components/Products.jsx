import React, { useEffect, useState } from "react";
import { api_path, cldname } from "../helper/Api_path";

const VegIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect x="1" y="1" width="22" height="22" fill="white" stroke="green" strokeWidth="2" />
    <circle cx="12" cy="12" r="7" fill="green" />
  </svg>
);

const NonVegIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <rect x="1" y="1" width="22" height="22" fill="white" stroke="#8B4513" strokeWidth="2" />
    <polygon points="12,6 18,18 6,18" fill="#8B4513" />
  </svg>
);

const Products = () => {
  const [prods, setProds] = useState([]);
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem("cart") || "[]")
  );


  const getqty = (productId) => {
    const item = cart.find((i) => i.prod === productId);
    return item ? item.qty : 0;
  };

  const addprod = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.prod === productId);
      if (item) {
        return prev.map((k) =>
          k.prod === productId ? { ...k, qty: k.qty + 1 } : k
        );
      }
      return [...prev, { prod: productId, qty: 1 }];
    });
  };

  const removeprod = (productId) => {
    setCart((prev) => {
      const item = prev.find((i) => i.prod === productId);
      if (!item) return prev;
      if (item.qty === 1) {
        return prev.filter((k) => k.prod !== productId);
      }
      return prev.map((k) =>
        k.prod === productId ? { ...k, qty: k.qty - 1 } : k
      );
    });
  };

  /* ================= FETCH PRODUCTS ================= */

  const getprods = async () => {
    try {
      const response = await fetch(`${api_path}product/allproducts`);
      const res = await response.json();
      if (response.ok) {
        setProds(Array.isArray(res) ? res : []);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getprods();
  }, []);

  /* ================= UI ================= */

  return (
    <div className="w-full">
      {/* FILTER */}
      <div className="mt-4 flex justify-center">
        <p className="px-4 py-1 border-2 rounded-xl cursor-pointer">
          Filters
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="mt-6 mx-auto w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prods.length === 0 ? (
          <p className="col-span-full text-center">No Products Found</p>
        ) : (
          prods.map((product) => (
            <div
              key={product._id}
              className="bg-white border-2 border-black rounded-2xl w-full max-w-[380px] mx-auto flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative">
                <img
                  src={`${cldname}${product.image}`}
                  alt={product.productname}
                  className="h-[200px] w-full object-cover rounded-2xl"
                />

                <div className="absolute bottom-0 left-0 w-full h-[45px] bg-gradient-to-t from-black/70 to-transparent px-3 flex justify-between items-center">
                  <p className="text-white font-bold text-lg">
                    {product.firm.firmname}
                  </p>
                  <div className="flex items-center gap-1 text-white font-semibold">
                    <img
                      src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766413701/Screenshot_2025-12-22_195630_l6evrx.png"
                      className="w-4 h-4"
                      alt="rating"
                    />
                    4.2
                  </div>
                </div>
              </div>

              {/* DETAILS */}
              <div className="p-4 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <p className="flex items-center gap-2 font-semibold">
                    {product.productname}
                    {product.category === "veg" ? <VegIcon /> : <NonVegIcon />}
                  </p>
                  <b>₹{product.price}</b>
                </div>

                <p className="text-sm text-gray-600">
                  {product.firm.area}
                </p>


                {Number(product.discount) > 0 && (
                  <div className="mt-2 flex items-center justify-center gap-2 bg-green-700 text-white font-bold rounded-lg py-1">
                    <img
                      src="https://res.cloudinary.com/dme2vkioe/image/upload/v1766338630/Screenshot_2025-09-30_203920_rdklgc.png"
                      className="h-6"
                      alt="offer"
                    />
                    Flat {product.discount}% Discount
                  </div>
                )}

                {/* CART CONTROLS */}
                <div className="flex justify-end mt-3">
                  {getqty(product._id) === 0 ? (
                    <button
                      className="px-3 py-1 bg-green-700 text-white font-bold rounded-lg cursor-pointer"
                      onClick={() => addprod(product._id)}
                    >
                      ADD CART
                    </button>
                  ) : (
                    <div className="px-3 py-1 bg-green-700 flex items-center gap-4 text-white font-bold rounded-lg select-none">
                      <button onClick={() => removeprod(product._id)} className="cursor-pointer">-</button>
                      {getqty(product._id)}
                      <button onClick={() => addprod(product._id)} className="cursor-pointer">+</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
