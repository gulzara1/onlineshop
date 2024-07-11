import React, { useContext, useEffect, useState } from "react";
import cartService from "../services/cart.service";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CartProduct from "../components/CartProduct";
import CartContext from "../context/cart";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const total = cart
    ? cart.reduce((acc, p) => acc + p.price * p.quantity, 0)
    : 0;
  const { updateCart } = useContext(CartContext);
  const navigate = useNavigate();


  function updateProduct(id, quantity) {
    cartService
      .updateCart(id, quantity)
      .then((res) => res.data)
      .then((data) => {
        setCart(data);
        updateCart();
      });
  }

  function removeProduct(id) {
    cartService
      .removeFromCart(id)
      .then((res) => res.data)
      .then((data) => {
        setCart(data);
        updateCart();
      });
  }

  useEffect(() => {
    setLoading(true);
    cartService
      .getCart()
      .then((res) => res.data)
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  }, []);

  return (
      <div className="flex-1 w-full h-full flex justify-center">
        <div className="w-[70%] py-5 flex space-x-4">
          <div className="w-[70%]">
            <div className="flex flex-col rounded space-y-4">
              {loading && (
                <Stack
                  direction={"row"}
                  spacing={1}
                  className="w-full py-6 h-[600px] flex justify-center items-start"
                >
                  <Skeleton
                    variant="rounded"
                    height={200}
                    width={200}
                    className="w-[40%] "
                  />

                  <Stack spacing={1}>
                    <Skeleton variant="rounded" height={30} width={500} />
                    <Skeleton variant="rounded" width={200} height={30} />
                    <Skeleton variant="rounded" width={150} height={30} />
                  </Stack>

                  <Stack spacing={1}>
                    <Skeleton variant="rounded"width={200} height={40} />
                    <Skeleton variant="rounded" width={200} height={40} />
                    <Skeleton variant="rounded" width={200} height={40} />
                  </Stack>
                </Stack>
              )}
              {cart &&
                cart.map((cartProduct) => (
                  <CartProduct
                    product={cartProduct}
                    update={updateProduct}
                    remove={removeProduct}
                  />
                ))}
            </div>
          </div>
          {cart && (
            <div className="w-[30%] flex flex-col space-y-3">
              <h1 className="text-2xl font-bold text-violet-600">Сіздің тапсырысыңыз</h1>
              <div className="flex space-x-2 text-xl font-bold w-full justify-between">
                <p className="text-violet-600">Барлығы: </p>
                <p className="text-violet-600">{total}тг</p>
              </div>
              <div>
                <p className="text-violet-600">{cart.length} зат</p>
              </div>
              <div className="text-sm text-slate-600 text-end text-violet-600">
                <div className="flex justify-between">
                  <p>0-0-3</p>
                  <p>{total / 3}тг x 3 ай</p>
                </div>
                <div className="flex justify-between">
                  <p>0-0-6</p>
                  <p>{total / 6}тг x 6 ай</p>
                </div>
                <div className="flex justify-between">
                  <p>0-0-12</p>
                  <p>{total / 12}тг x 12 ай</p>
                </div>
                <div className="flex justify-between">
                  <p>0-0-24</p>
                  <p>{total / 24}тг х 24 ай</p>
                </div>
              </div>
              <button className="w-full mx-4 text-violet-600 bg-sky-100 rounded-lg py-3 hover:text-white hover:bg-violet-600" onClick={() => navigate("/checkout")}>
              Тапсырыс беру
              </button>
            </div>
          )}
        </div>
      </div>
  );
}

export default Cart;
