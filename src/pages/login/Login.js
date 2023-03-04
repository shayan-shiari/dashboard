import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchApi } from "../../services/api";

const Login = () => {
  const register_url = "api/register";
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formHandler = (e) => {
    e.preventDefault();
    console.log("ok");
    fetchApi(register_url, {
      name: name,
      email: email,
      password: password,
    }).then((res) => console.log(res));
    // await axios.post(
    //   "https://127.0.0.1:8000/api/register",
    //   {
    //     name: name,
    //     email: email,
    //     password: password,
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // ).then(res => console.log(res))
  };

  return (
    <div className="bg-blue-500 bg-opacity-50 h-screen flex justify-center items-center">
      <div className="flex justify-center items-center flex-col bg-slate-200 w-2/6 p-3 rounded">
        <h2 className="font-bold text-lg">Login</h2>
        <form className="flex flex-col gap-y-4" onSubmit={formHandler}>
          <fieldset className="flex flex-col w-1/2">
            <label htmlFor="">name</label>
            <input
              className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={name}
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-col w-1/2">
            <label htmlFor="">email</label>
            <input
              className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-col w-1/2">
            <label htmlFor="">password</label>
            <input
              className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
