import React from "react";
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div>
      <div className="bg-blue-500 rounded-md p-4 text-white flex flex-col cursor-pointer">
        <h2 className="text-center">
          <span className="text-7xl font-extrabold">{price}</span>
          <span className="text-2xl">/mon</span>
        </h2>
        <h4 className="text-4xl text-center my-8">{name}</h4>
       <div className="pl-6 flex-grow">
       {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
       </div>
      </div>
      <button className="mt-4 bg-green-600 w-full py-4 hover:bg-green-900 font-bold">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
