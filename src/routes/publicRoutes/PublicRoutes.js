import LayoutDefault from "../../components/Layouts/LayoutDefault/LayoutDefault";

import About from "../../pages/about/About";
import Acc from "../../pages/acc/Acc";
import Cart from "../../pages/cart/Cart";
import Colection from "../../pages/colection/Colection";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Order from "../../pages/oder/Order";
import PlaceOder from "../../pages/placeOrder/PlaceOder";
import Profile from "../../pages/profile/Profile";
import Register from "../../pages/register/Register";

export const PublicRoute = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "order", element: <Order /> },
      { path: "contact", element: <Contact /> },
      { path: "placeoder", element: <PlaceOder /> },
      { path: "colection", element: <Colection /> },
      { path: "cart", element: <Cart /> },
      { path: "acc", element: <Acc /> },
      { path: "profile", element: <Profile /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
];
