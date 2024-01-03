import React from "react";

const LoveChocolate = () => {
  return (
    // <div className="flex items-center justify-center">
    //   <div className="grid grid-cols-2">
    //     <div className="p-10">
    //       <img
    //         className="w-3/4"
    //         src="https://img.freepik.com/free-vector/hand-drawn-world-chocolate-day-illustration-with-chocolate-bar-muffin_23-2149429538.jpg?w=740&t=st=1704274909~exp=1704275509~hmac=478267a85652c38c90207d82dd262291c2802f12cd82f3a6aef9642f843137cf"
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <p className="text-2xl">
    //         Indulge in the pure joy of AnonnoTa Chocolate, where every bite is a
    //         journey into happiness. Our handcrafted chocolates are more than
    //         treats; they are moments of bliss and delight. Savor the richness,
    //         experience the decadence, and let the exquisite flavors dance on
    //         your palate. At AnonnoTa Chocolate, we believe that chocolate is not
    //         just a confectionery; it's a pathway to happiness. Welcome to a
    //         world where each piece tells a story of passion, craftsmanship, and
    //         the sheer joy of savoring life's sweetest moments. Discover
    //         happiness in every bite.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="container mx-auto">
      <div className="md:flex justify-between">
        <div className="w-full lg:w-1/2 ">
          <img
            className="lg:w-3/4 mx-auto"
            src="https://img.freepik.com/free-vector/hand-drawn-world-chocolate-day-illustration-with-chocolate-bar-muffin_23-2149429538.jpg?w=740&t=st=1704274909~exp=1704275509~hmac=478267a85652c38c90207d82dd262291c2802f12cd82f3a6aef9642f843137cf"
            alt="Album"
          />
        </div>
        <div className="w-full lg:w-1/2  flex items-center">
          <div>
            <h1 className=" text-amber-800 text-3xl font-normal mb-5">
              Chocolate is <span className="font-bold">Happiness</span>
            </h1>

            <p className="text-start text-xl text-gray-700">
              Indulge in the pure joy of AnonnoTa Chocolate, where every bite is
              a journey into happiness. Our handcrafted chocolates are more than
              treats; they are moments of bliss and delight. Savor the richness,
              experience the decadence, and let the exquisite flavors dance on
              your palate. At AnonnoTa Chocolate, we believe that chocolate is
              not just a confectionery; it's a pathway to happiness. Welcome to
              a world where each piece tells a story of passion, craftsmanship,
              and the sheer joy of savoring life's sweetest moments. Discover
              happiness in every bite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveChocolate;
