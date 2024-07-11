import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userService from "../services/user.service";
import UserContext from "../context/user";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import ErrorIcon from '@mui/icons-material/Error';

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    userService
      .login(credentials)
      .then((res) => res.status)
      .then((status) => {
        if (status == 200) {
          setLoading(false);
          updateUser();
          navigate("/");
        }
      })
      .catch((err) => {
        setError(err.message);
        setCredentials({
          email: "",
          password: "",
        });
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && (
          <div className="text-red-900 text-xl ">
            <ErrorIcon/>
            {error}. Қайталап көріңіз!
          </div>
        )}
        <form class="space-y-6" onSubmit={submitForm}>
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Электрондық пошта
            </label>
            <div class="mt-2 relative flex items-center text-gray-400 focus-within:text-gray-600">
            <EmailIcon className="w-5 h-5 absolute ml-3" />
              <input
               placeholder="example@gmail.com"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={credentials.email}
                disabled={loading}
                required
                className=" pr-3 pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Құпиясөз
              </label>
            </div>
            <div class="mt-2  relative flex items-center text-gray-400 focus-within:text-gray-600">
              <LockIcon className="w-5 h-5 absolute ml-3"/>
              <input
                placeholder="************"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={credentials.password}
                disabled={loading}
                required
                className=" pr-3 pl-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
          </div>
          <div class="text-sm">
            <Link
              to="/register"
              class="font-semibold text-gray-900 hover:text-slate-700"
            >
              Есептік жазбаңыз жоқ па?
            </Link>
          </div>
          <div>
            <button
              disabled={loading}
              type="submit"
              class="flex w-full justify-center rounded-md bg-cyan-600 text-white hover:text-cyan-600 hover:bg-sky-100 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            >
              {loading ? "Жүктелуде" : "Кіру"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
