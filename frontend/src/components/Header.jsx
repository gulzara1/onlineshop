import React, { useEffect, useState, useContext, useRef } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import CartContext from "../context/cart";
import UserContext from "../context/user";
import userService from "../services/user.service";
import { Link } from "react-router-dom";
import BgHeader from "./ocean.jpg";

function Header() {
  const { cart } = useContext(CartContext);
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [authHover, setAuthHover] = useState(false);

  function handleAuth() { 
    if (!user) {
      navigate("/login");
    }
  }

  function logout() { 
    userService
      .logout()
      .then(res => res.status)
      .then(status => {
        if (status == 200) {
          updateUser()
          navigate("/")
          window.location.reload()
        }
      })
      .catch(err => alert(err.message))
  }




  return (
    <header className="flex justify-between item-center w-[1500px] bg-cover bg-center "
     style={{ backgroundImage: `url(${BgHeader})` }}
     >

      <div className="flex justify-between item-center text-white ">
        <img className=" mb-[500px] mr-[850px] mt-2" onClick={() => navigate("/")} src={'img/Logo.png'} alt="A text describing the image" width="320px" />
        <div className="flex space-x-3 text-cyan-600 items-center font-serif== italic mb-[500px]">
          <Link to="/products">Каталог</Link>
          {user && (
            <div
              className="flex gap-2 cursor-pointer border-violet-600 "
              onClick={() => navigate("/cart")}
            >
              <ShoppingBagIcon />
              <p className=" text-black rounded bg-sky-100  text-sky-600 ">
                {cart && cart.length}
              </p>
            </div>
          )}

          <div
            onMouseOver={() => setAuthHover(true)}
            onMouseOut={() => setAuthHover(false)}
            className="flex flex-col items-end w-auto"
          >
            <div className="cursor-pointer flex gap-2 text-cyan-600 " onClick={handleAuth}>
              <p >{user && user.firstname}</p>
              <AccountCircleIcon />
            </div>
            <div className="">
              {user && authHover && (
                <div
                  className={`flex flex-col w-max absolute right-0 `}
                >
                  <div className="px-3 py-2 bg-sky-100 text-cyan-600 hover:text-white hover:bg-violet-600 rounded" onClick={() => navigate("/purchases")}>Менің сатып алуларым</div>
                  <div className="px-3 py-2 bg-sky-100 textcyan-600 hover:text-white hover:bg-violet-600 rounded" onClick={logout}><LogoutIcon />Шығу</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </header >
  );
}

export default Header;
