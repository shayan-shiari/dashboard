import React from "react";
import { routes } from "../../routes";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="dark:bg-slate-700 dark:text-white bg-white text-slate-800 w-44 sideBar-height fixed bottom-0 left-0">
      {routes.map((item) => {
        return (
          <Link to={item.route} className="p-3 flex gap-x-2 justify-center items-center text-2xl hover:bg-gray-300 dark:hover:text-black transition-all">
            {item.icon}
            <span className="w-full">{item.title}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Aside;
