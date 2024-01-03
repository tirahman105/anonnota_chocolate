import React from "react";

const Categories = () => {
  return (
    <div>
      <div className="container mx-auto mb-10 py-10">
        <h1 className="text-center text-3xl text-amber-800 font-bold py-10">
          Our Chocolate Categories
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 px-10">
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/512/3560/3560441.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Decorative Chocolate</p>
          </div>
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/256/7348/7348430.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Gift Package</p>
          </div>
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/512/3465/3465212.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Chocolate Bar</p>
          </div>
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/256/677/677678.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Regular Chocolate</p>
          </div>
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/512/5827/5827931.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Kid's Chocolate</p>
          </div>
          <div className="text-center hover:shadow-xl border rounded-3xl">
            <img
              className="w-1/2 mx-auto rounded-2xl p-4 "
              src="https://cdn-icons-png.flaticon.com/512/4080/4080314.png"
              alt=""
            />
            <p className="text-amber-800 mb-5">Regular Chocolate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
