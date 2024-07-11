import React, { useState } from "react";
import orderService from "../services/order.service";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/cart";

function Checkout() {
  const navigate = useNavigate();
  const { updateCart } = useContext(CartContext);

  const localTime = () => {
    let now = new Date();
    now.setDate(now.getDate() + 1);
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  };

  const [orderDetails, setOrderDetails] = useState({
    paymentMethod: "online",
    deliveryTime: localTime(),
    address: "",
  });

  function checkout(e) {
    e.preventDefault();
    if (
      orderDetails.paymentMethod === "" ||
      orderDetails.deliveryTime === "" ||
      orderDetails.address === ""
    ) {
      alert("Барлық өрістерді толтырыңыз");
      return;
    }
    orderService
      .checkoutOrder(orderDetails)
      .then((res) => res.status)
      .then((status) => {
        if (status == 200) {
          alert("Сіздің тапсырысыңыз орналастырылды");
          updateCart();
          navigate("/purchases");
        }
      })
      .catch((err) => alert(err.message));
  }

  return (
    <div className="w-full flex-1 flex justify-center py-8 ">
      <form
        className="flex flex-col space-y-4 w-[40%] h-[40%]"
        onSubmit={checkout}
      >
        <h1 className="text-3xl font-bold self-center text-violet-600">Төлем нысаны</h1>
        <div className="flex flex-col space-y-1">
          <label htmlFor="" className="text-sm font-light text-slate-600 text-violet-600 ">
          Жеткізу мекенжайы
          </label>
          <input
            type="text"
            placeholder="Сіздің мекен-жайыңыз"
            className="border p-2 rounded text-violet-600 "
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, address: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="" className="text-sm font-light text-slate-600 text-violet-600 ">
          Жеткізу күні мен уақыты
          </label>
          <input
            type="datetime-local"
            placeholder="Жеткізу мерзімі"
            className="border p-2 rounded text-violet-600"
            value={localTime()}
            onChange={(e) =>
              setOrderDetails({ ...orderDetails, deliveryTime: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="" className="text-sm font-light text-slate-600 text-violet-600 ">
          Төлем әдісі
          </label>
          <select
            name=""
            id=""
            className="border p-2 rounded text-violet-600"
            onChange={(e) =>
              setOrderDetails({
                ...orderDetails,
                paymentMethod: e.target.value,
              })
            }
          >
            <option value="online">Несие картасы арқылы онлайн</option>
            <option value="cash">Жеткізу кезінде қолма-қол ақша</option>
          </select>

          {
            <div className="flex flex-col space-x-2 border-2 p-3 border-violet-600 rounded-lg text-violet-600">
            <h1>Онлайн төлем</h1>
              <input type="text" className="text-violet-600 rounded" placeholder="Карта нөмірі" />
              <input type="text" className="text-violet-600 rounded" placeholder="Жарамдылық мерзімі" />
              <input type="text" className="text-violet-600 rounded" placeholder="Карточка ұстаушының аты-жөні" />
            </div>
          }
        </div>
        
        <button className="bg-sky-200 text-violet-600 px-8 py-3 rounded-lg w-max self-center hover:bg-violet-600 hover:text-white" >
        Тапсырысты растаңыз
        </button>
      </form>
    </div>
  );
}

export default Checkout;
