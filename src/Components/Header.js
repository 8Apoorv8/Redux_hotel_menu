import React, { useEffect, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import { DEL } from '../Redux/Actions/Action'
import MenuItem from "@mui/material/MenuItem";
import { AiFillDelete } from "react-icons/ai";
import { BsFillCartXFill } from "react-icons/bs";

const Header = () => {
  const [price, setPrice] = useState(0)
  const dispatch = useDispatch()
  const getData = useSelector((state) => state.workReducer.cart);

  // DROP DOWN MENU SECTION FROM MUI
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ----------------------

  const total = () => {
    let price = 0
    getData.map((ele, k) => {
      price = price + ele.price
    })
    setPrice(price)
  }

  useEffect(() => { total() }, [total])



  return (
    <div className="flex justify-between items-center px-8 md:px-16 lg:px-24 bg-zinc-700 py-3 text-white">
      <div className="flex text-xl">
        <Link to="/">
          <h1 className="hover:cursor-pointer hover:text-gray-200">
            Add to cart
          </h1>
        </Link>
        <Link to="/">
          <h2 className="hover:cursor-pointer hover:text-gray-200 ml-3">
            Home
          </h2>
        </Link>
      </div>
      <div>
        <Badge
          badgeContent={getData.length}
          color="primary"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <BsCartFill
            size={20}
            className="hover:cursor-pointer hover:text-gray-200"
          />
        </Badge>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length !== 0 ? (
            <div className="w-[300px]">
              <div className="flex gap-14 px-4">
                <h1 className="font-bold">Photo</h1>
                <h1 className="font-bold mb-2">Resturant Name</h1>
              </div>
              <hr />
              {getData.map((e) => (
                <div className="px-4 py-2 flex gap-[17px]">
                  <div>
                    <Link to={`/cart/${e.id}`} onClick={handleClose}>
                      <img
                        src={e.imgdata}
                        alt="imgdata"
                        className="w-[5rem] h-[5rem]"
                      />
                    </Link>
                    <div className="md:hidden mt-2 cursor-pointer">
                      <AiFillDelete size={23} style={{ color: "red" }} onClick={() => dispatch(DEL(e.id))} />
                    </div>
                  </div>

                  <div>
                    <p>{e.rname}</p>
                    <p>Price : ₹ {e.price}</p>
                    <p>Quantity : {e.qnty}</p>
                  </div>
                  <div className="md:block hidden absolute right-2 cursor-pointer">
                    <AiFillDelete size={23} style={{ color: "red" }} onClick={() => dispatch(DEL(e.id))} />
                  </div>
                </div>
              ))}
              <div className="px-4">Total : ₹ {price} </div>
            </div>
          ) : (
            <div className="w-full">
              <h1 className="px-3 flex items-center font-semibold">
                Your Cart is Empty{" "}
                <BsFillCartXFill
                  style={{ color: "red" }}
                  size={20}
                  className="ml-2"
                />
              </h1>
            </div>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
