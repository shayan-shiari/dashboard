import Category from "./pages/category/Category";
import Music from "./pages/music/Music";
import Artist from "./pages/artist/Artist";
import Login from "./pages/login/Login";

export const routes = [
  {
    title: "category",
    icon: <ion-icon name="document-text-outline"></ion-icon>,
    route: "/",
    component: <Category />,
  },
  {
    title: "musics",
    icon: <ion-icon name="musical-notes-outline"></ion-icon>,
    route: "/musics",
    component: <Music />,
  },
  {
    title: "artists",
    icon: <ion-icon name="accessibility-outline"></ion-icon>,
    route: "/artists",
    component: <Artist />,
  },
  {
    title: "login",
    icon: <ion-icon name="accessibility-outline"></ion-icon>,
    route: "/login",
    component: <Login />,
  },
];
