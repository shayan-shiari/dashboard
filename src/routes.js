import Category from "./pages/category/Category";
import Music from "./pages/music/Music";
import Artist from "./pages/artist/Artist";

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
];
