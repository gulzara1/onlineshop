import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../services/product.service";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import cartService from "../services/cart.service";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function addToCart() {
    cartService
      .addToCart({ id: product.id })
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    setLoading(true);
    productService
      .getProduct(id)
      .then((response) => response.data)
      .then((data) => {
        setProduct(data);
        setInCart(data.inCart);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center ">
      <div className="w-[70%] h-full">
        {loading && (
          <Stack direction={"row"} spacing={1} className="w-full py-6 h-[600px] flex justify-center items-start" >
            <Skeleton variant="rounded" height={400} className="w-[40%]" />

            <Stack spacing={1}>
              <Skeleton variant="rounded" width={180} height={40} />
              <Skeleton variant="rounded" width={250} height={40} />
              <Skeleton variant="rounded" width={190} height={40} />
              <Skeleton variant="rounded" width={210} height={40} />
              <Skeleton variant="rounded" width={100} height={40} />
            </Stack>
          </Stack>
        )}
        {product && (
          <div className="flex flex-col">
            <div className="flex space-x-6 p-4">
              <div className="w-[40%]">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper h-max"
                  centeredSlides
                  style={{
                    "--swiper-navigation-color": "gray",
                  }}
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index} className="h-auto bg-slate-200">
                      <img
                        src={image}
                        alt={product.title}
                        className="object-contain overflow-hidden h-full flex items-center"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex flex-col space-y-2 py-4">
                <div className="flex items-center">
                  <p className="text-3xl font-bold hover:text-violet-400">{product.title}</p>
                  <div className="flex">
                    <StarRoundedIcon style={{ color: "yellow" }} />{" "}
                    <p>{product.rating}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <p className="text-base font-semibold text-black">Бренд:</p>
                  <p className="text-base font-semibold text-gray-600">
                    {product.brand}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-base font-semibold text-black">
                  Санат:
                  </p>
                  <p className="text-base font-semibold text-gray-600 ">
                    {product.category}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-base font-semibold text-black">
                  Сипаттамасы:
                  </p>
                  <p className="text-base font-semibold text-gray-600">
                    {product.description}
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <p className="text-2xl font-bold text-orange-700">
                    {product.price}тг
                  </p>
                  <p className="text-gray-600">
                  Жеңілдік{product.discount_percentage}%
                  </p>
                </div>
                <p className="text-green-700">
                  {product.stock} Қол жетімді бөліктер
                </p>
                <div>
                  {!product.inCart && (
                    <button
                      className="py-2 px-4 bg-violet-400 text-white rounded hover:bg-sky-100 text-violet-600"
                      onClick={addToCart}
                    >
                      Себетке қосу
                    </button>
                  )}
                  {product.inCart && (
                    <button
                      className="py-2 px-4 border rounded bg-violet-400 text-slate-50 "
                      onClick={() => navigate("/cart")}
                    >
                      Себетке өту
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
