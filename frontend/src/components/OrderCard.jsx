import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function OrderCard({ order }) {
  return (
    <div className="w-full border-2 border-sky-100 bg-sky-100 rounded py-3 px-6 flex flex-col space-y-2">
      <div className="text-xl font-semibold text-violet-600">
      Тапсырыс № {order.id} - орналастырылған {(new Date(order.order_date)).toLocaleString()}
      </div>
      <span className="text-xl font-semibold text-violet-600">Сатып алынған өнімдер:</span>
      <div className="flex flex-col space-y-1 py-2">
      {order.products.map((product) => (
        <div className="w-full">
          <div className="flex w-full space-x-2 items-center text-violet-600">
            <div>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[100px] rounded p-1 "
              />
            </div>
            <div>
              <p className="text-lg font-bold">{product.title}</p>
              <p className="text-sm ">{product.brand}</p>
              <p className="font-semibold flex items-center">
                ${product.price}
                {"  "}
                <span className="text-violet-600 text-sm">
                  <CloseIcon style={{ width: "14px" }} />
                  {product.quantity}
                </span>
                = {product.quantity * product.price}тг
              </p>
            </div>
          </div>
        </div>
      ))}
      </div>

      <div >
        <span className="text-xl font-semibold text-violet-600">Жалпы бағасы:</span > <span className="text-violet-600">{order.totalPrice}тг - </span> <span className="text-green-600 ">
            Ақылы
        </span>
      </div>
      <div><span className="text-xl font-semibold text-violet-600">Жеткізу мерзімі:</span><span className="text-violet-600"> {(new Date(order.delivery_time)).toLocaleString()} </span> </div>
    </div>
  );
}

export default OrderCard;
