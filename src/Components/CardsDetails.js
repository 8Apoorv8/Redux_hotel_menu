import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DEL } from '../Redux/Actions/Action'
import { Link } from "react-router-dom";
const CardsDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const getData = useSelector((state) => state.workReducer.cart);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id;
    });
    setData(compareData);
  };
  useEffect(() => {
    compare();
  }, [id]);
  return (
    <div className="flex justify-center items-center flex-col px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl font-bold my-3">Food Detailes</h1>
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {data.map((ele) => (
          <>
            <div className="LEFT flex-1">
              <img
                src={ele.imgdata}
                alt="imgdata"
                className="w-[20rem] md:w-[40rem] h-[20rem] object-cover"
              />
            </div>
            <div className="RIGHT flex-1">
              <div>
                <h1>
                  <span className="font-bold">Resturant</span>: La
                </h1>
                <p>
                  <span className="font-bold"></span> {ele.rname}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <h1>
                    <span className="font-bold">Price</span>: ₹ {ele.price}
                  </h1>
                  <h1 className="flex items-center">
                    <span className="font-bold">Rating</span>:
                    <span className="flex items-center bg-green-800 w-fit px-1 rounded text-white">
                      {ele.rating} <AiFillStar />
                    </span>
                  </h1>
                  <h1>
                    <span className="font-bold">Dishes</span>: {ele.address}
                  </h1>
                  <h1>
                    <span className="font-bold">Order Review</span>:{" "}
                    {ele.somedata}
                  </h1>
                  <h1>
                    <span className="font-bold">Total</span>: ₹1
                  </h1>
                  <h1 className="flex">
                    <span className="font-bold "> Remove </span>:
                    <Link to="/">
                      <AiFillDelete size={23} style={{ color: "red" }} onClick={() => dispatch(DEL(ele.id))} className="cursor-pointer" />
                    </Link>
                  </h1>
                </div>
                <div className="flex my-4 px-4 bg-slate-200 w-fit items-center">
                  <button className="text-4xl px-3">-</button>
                  <p className="text-7xl">{ele.qnty}</p>

                  <button className="text-4xl px-3">+</button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CardsDetails;
