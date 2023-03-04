import React, { useState } from "react";
import { fetchApi } from "../../../services/api";

const AddCategory = ({ open }) => {
  const [name, setName] =useState()
  const [image, setImage] = useState()

  const formHandler = () => {

  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto w-2/5">
          {/*content*/}
          <div className="border-0 text-white rounded-lg shadow-lg relative w-full bg-sky-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add Category</h3>
            </div>
            {/*body*/}
            <form className="">
              <div className="flex flex-col gap-y-5 p-5">
                <fieldset className="flex flex-col">
                  <label htmlFor="">name</label>
                  <input
                    className="w-2/3 p-1 rounded"
                    type="text"
                    placeholder="name"
                  />
                </fieldset>
                <fieldset className="flex flex-col">
                  <label htmlFor="">image</label>
                  <input type="file" name="" id="" />
                </fieldset>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => open(false)}
                >
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => open(false)}
                >
                  add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddCategory;
