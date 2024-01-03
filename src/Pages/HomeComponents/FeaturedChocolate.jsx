import React from "react";

const FeaturedChocolate = () => {
  return (
    <div className="container mx-auto bg-amber-50 py-10 ">
      <div className="">
        <div className="text-center py-10">
          <h3 className="text-amber-800 text-3xl font-bold">
            Featured Products
          </h3>
          <p className="text-amber-700">
            All our featured products loved by our customers.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 px-10 ">
          <div className="p-6 shadow-md bg-white rounded-xl ">
            <h1 className="text-2xl font-bold text-slate-500">
              Decorative Chocolate
            </h1>
            <p className="text-sm text-slate-500">Chocolate Bar</p>
            <img
              src="https://www.chocolatleroux.eu/617-catalog_medium/milk-chocolate-bars.jpg"
              alt="chocolate bar"
            />
            <h2 className="text-amber-800 font-bold text-xl">Price: 390 tk.</h2>{" "}
            <button className="btn bg-amber-800   border-0 ml  hover:bg-yellow-600 text-white font-bold hover:text-black">
              Order Now
            </button>
          </div>
          <div className="p-6 shadow-md bg-white rounded-xl ">
            <h1 className="text-2xl font-bold text-slate-500">
              Decorative Chocolate
            </h1>
            <p className="text-sm text-slate-500">Chocolate Bar</p>
            <img
              src="https://www.chocolatleroux.eu/617-catalog_medium/milk-chocolate-bars.jpg"
              alt="chocolate bar"
            />
            <h2 className="text-amber-800 font-bold text-xl">Price: 390 tk.</h2>{" "}
            <button className="btn bg-amber-800   border-0 ml  hover:bg-yellow-600 text-white font-bold hover:text-black">
              Order Now
            </button>
          </div>
          <div className="p-6 shadow-md bg-white rounded-xl ">
            <h1 className="text-2xl font-bold text-slate-500">
              Decorative Chocolate
            </h1>
            <p className="text-sm text-slate-500">Chocolate Bar</p>
            <img
              src="https://www.chocolatleroux.eu/617-catalog_medium/milk-chocolate-bars.jpg"
              alt="chocolate bar"
            />
            <h2 className="text-amber-800 font-bold text-xl">Price: 390 tk.</h2>{" "}
            <button className="btn bg-amber-800   border-0 ml  hover:bg-yellow-600 text-white font-bold hover:text-black">
              Order Now
            </button>
          </div>
          <div className="p-6 shadow-md bg-white rounded-xl ">
            <h1 className="text-2xl font-bold text-slate-500">
              Decorative Chocolate
            </h1>
            <p className="text-sm text-slate-500">Chocolate Bar</p>
            <img
              src="https://www.chocolatleroux.eu/617-catalog_medium/milk-chocolate-bars.jpg"
              alt="chocolate bar"
            />
            <h2 className="text-amber-800 font-bold text-xl">Price: 390 tk.</h2>{" "}
            <button className="btn bg-amber-800   border-0 ml  hover:bg-yellow-600 text-white font-bold hover:text-black">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedChocolate;
