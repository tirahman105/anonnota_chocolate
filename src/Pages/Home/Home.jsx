import React from "react";
import Banner from "../HomeComponents/Banner";
import FeaturedChocolate from "../HomeComponents/FeaturedChocolate";
import Categories from "../HomeComponents/Categories";
import LoveChocolate from "../HomeComponents/LoveChocolate";
import HealthBenifits from "../HomeComponents/HealthBenifits";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Categories></Categories>
      <LoveChocolate></LoveChocolate>
      <HealthBenifits></HealthBenifits>
      <FeaturedChocolate></FeaturedChocolate>
    </div>
  );
};

export default Home;
