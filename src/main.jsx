import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { RestaurantDetails } from "./pages/RestaurantDetails";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./lib/redux/reducer/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/restaurant-detail/:restaurantId",
    element: <RestaurantDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
