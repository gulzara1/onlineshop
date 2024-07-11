import React, { useEffect, useState } from "react";
import productService from "../services/product.service";
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';


function Home() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    productService
      .getProducts()
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex-1 py-8 px-10">
      <div className="pr-6 pl-6 pt-16 pb-16 bg-gray-100 rounded">
        <div className="flex justify-evenly">
        <div className="text-sky-600" >
          <div className="flex justify-around"><DeliveryDiningOutlinedIcon/></div>
          <p>ЖЕТКІЗУ</p>
        </div>
        <div className="text-sky-600">
          <div className="flex justify-around"><EventRepeatOutlinedIcon/></div>
          <p>ҚАЙТАРУ</p>
        </div>
        <div className="text-sky-600">
          <div className="flex justify-around"><CheckCircleOutlineOutlinedIcon/></div>
          <p>КЕПІЛДІК</p>
        </div>
        <div className="text-sky-600">
          <div className="flex justify-around"><RedeemOutlinedIcon/></div>
          <p>СЫЙЛЫҚ ОРАУ</p>
        </div>
        </div>
      </div>
      <h1 className="font-sans flex justify-center text-sm font-semibold text-sky-800 mt-4">TOM FORD КҮН ҚОРҒАНЫС КӨЗІЛДІРІГІ</h1>
      <div className="flex-1 py-8 px-10 my-3 flex justify-evenly">
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
          src="https://avvenice.com/83710/tom-ford-rizzo-sunglasses-square-acetate-sunglasses-ft0730-black-tom-ford-eyewear.jpg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
          src="https://www.eyeons.com/images/catalog/products/tom-ford/ft0823-clark-28u-00.jpg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
          src="https://optika-outlet.ru/assets/images/products/33979/849-52f-1.jpg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
          src="https://avvenice.com/108927/tom-ford-slater-sunglasses-occhiali-da-sole-cat-eye-nero-ft0658-occhiali-da-sole-tom-ford-eyewear.jpg"/>
        </div>
      </div>
      
      {/* 2 block */}
      <div className="flex-1 py-8 px-10 ">
      <h2 className="font-sans flex justify-center text-sm font-semibold text-sky-800 ">MICHAEL KORS СӨМКЕЛЕРІ</h2>
        <div className="flex justify-center mt-6">
          <div>
            <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 mr-8" width={"200px"}
            src="https://www.usmagazine.com/wp-content/uploads/2019/02/Michael-Kors-Bag-Green.jpg?w=1000&quality=86&strip=all"/>
          </div>
          <div>
            <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
            src="https://ak1.ostkcdn.com/images/products/10878042/Michael-Michael-Kors-Cindy-Black-Gold-Saffiano-Leather-Dome-Handbag-13ef9e7c-1d1d-4181-a140-f8e344b79d98.jpg"/>
          </div>
          <div>
            <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 ml-10" width={"200px"} 
            src="http://www.panchemodan.ru/upload/iblock/10f/10fa5e64b402ef70050698378c7d91fa.jpg"/>
          </div>
          <div>
            <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 ml-8" width={"250px"}
            src="https://cdn.store-assets.com/s/395847/i/56767924.png"/>
          </div>
          <div>
            <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125" width={"250px"}
            src="https://i1.adis.ws/i/forzieri/ik130415-110-00-1x-t"/>
          </div>
        </div>
      </div>
      {/* 3 block */}
      <h2 className="font-sans flex justify-center text-sm font-semibold text-sky-800">CARTIER САҒАТЫ</h2>
      <div className="flex justify-evenly mt-7">
        <div className="flex justify-center ">
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 hover:shadow-xl" width={"200px"}
          src="https://storage.yandexcloud.net/cdn-prod.viled.kz/v3/original/230152s7rom.jpeg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 hover:shadow-xl " width={"250px"}
          src="https://miojewelry.com/wp-content/uploads/2016/07/Cartier-Ballon-Bleu-Silver-Dial-Alligator-Leather-Diamond-Mens-Watch-WE902056.jpg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 hover:shadow-xl"  width={"200px"}
          src="https://storage.yandexcloud.net/cdn-prod.viled.kz/v3/original/175604Zhg54.jpg"/>
        </div>
        <div>
          <img className="object-contain overflow-hidden h-46 transform 
                          transition duration-500 
                          hover:scale-125 hover:shadow-xl" width={"200px"}
          src="https://storage.yandexcloud.net/cdn-prod.viled.kz/v3/original/269022NjgYf.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
        