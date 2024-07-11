import React from "react";
import { Link } from "react-router-dom"

function Main() {
  return (
    <div className="flex-1 flex">
      <div className="flex w-full h-min justify-center m-4 space-x-4">
      <Link to="/admin/list" className="bg-black text-white p-6 rounded-xl  text-3xl font-bold">
        Өнімдер тізімі
        </Link>
        <Link to="/admin/add" className="bg-black text-white p-6 rounded-xl  text-3xl font-bold">
        Жаңа өнімді қосыңыз
        </Link>
        <Link to="/admin/edit" className="bg-black text-white p-6 rounded-xl text-3xl font-bold">
        Өнімді өңдеу
        </Link>
        <Link to="/admin/delete" className="bg-black text-white p-6 rounded-xl text-3xl font-bold">
        Өнімді жою
        </Link>
      </div>
    </div>
  );
}

export default Main;
