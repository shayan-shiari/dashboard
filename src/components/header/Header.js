import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    switch (theme) {
      case true:
        document.documentElement.classList.add("dark");
        break;
      case false:
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <header className="max-w-6xl mx-auto my-5 rounded dark:bg-slate-700 shadow-2xl bg-white">
      <div className="flex justify-between items-center p-2">
        <a
          className="bg-sky-500 text-white p-1 rounded-md dark:bg-slate-600"
          href="https://roocket.ir/"
        >
          Your Site
        </a>
        <div className="flex gap-x-2">
          <button
            className={`${theme && "text-sky-600"}`}
            onClick={() => setTheme(!theme)}
          >
            {theme ? (
              <ion-icon size="large" name={"moon"}></ion-icon>
            ) : (
              <ion-icon size="large" name={"sunny"}></ion-icon>
            )}
          </button>
          <a className="dark:text-sky-600" href="https://roocket.ir/">
            <ion-icon  size="large" name="log-out-outline"></ion-icon>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
