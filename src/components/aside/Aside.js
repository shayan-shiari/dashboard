import React from "react";
import { routes } from "../../routes";

const Aside = () => {
  return (
    <aside className="dark:bg-slate-700 dark:text-white bg-white text-slate-800 w-2/12">
      {routes.map((item) => {
        return (
          <div className="p-3 flex gap-x-2 items-center text-2xl hover:bg-gray-300 dark:hover:text-black transition-all">
            {item.icon}
            <a>{item.title}</a>
          </div>
        );
      })}
    </aside>
  );
};

export default Aside;
