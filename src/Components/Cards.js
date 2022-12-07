import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cardsdata from "./CardData";
import { ADD } from "../Redux/Actions/Action";
const Cards = () => {
  const dispatch = useDispatch()
  const getData = useSelector((state) => state.workReducer.cart)
  console.log(getData);
  return (
    <div className=" px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Cardsdata.map((element) => {
        const { id, imgdata, rname, price } = element
        return (
          <div className="my-8 " key={id}>
            <div>
              <div className="">
                <img
                  src={imgdata}
                  alt="foodImages "
                  className=" h-[300px] w-full object-cover"
                />
              </div>
              <h1 className="text-xl font-semibold my-4">{rname}</h1>
              <h3 className="text-gray-800 my-4">Price : ₹ {price}</h3>
              <button onClick={() => dispatch(ADD(element))} className=" bg-blue-600 text-white py-2 w-full rounded-sm hover:bg-blue-700 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Cards;
