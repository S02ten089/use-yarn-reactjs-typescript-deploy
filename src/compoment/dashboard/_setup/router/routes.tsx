import { createBrowserRouter } from "react-router-dom";
import _404 from "../../layout/_layout/_404";
import { Layout } from "../../layout/_layout/_layout";
import { LayoutAuth } from "../../layout/_layout/_layoutAuth";
import { AuthenticationTitle } from "../../layout/_login/_login";
import { AuthenticationRegister } from "../../layout/_register/_register";
import { SelectListItem } from "../../model/SelectListItem";
import Commune from "../../views/Address/Commune";
import District from "../../views/Address/District";
import Province from "../../views/Address/Province";

import Home from "../../views/home/homeView";

const router = createBrowserRouter([
  {
    // path: "/",  <-- Đã loại bỏ route này
    id: "root",
    element: <Layout />,
    errorElement: <_404 />,
    action: async ({ request }) => {
      // if (auth)
      //  return protectedLoader;
    },
    children: [
      {
        path: "dashboard", // Parent route for dashboard
        children: [
          {
            index: true, // This makes dashboard the default page
            element: <Home />,
            handle: {
              crumb: () => ({
                Text: "Dashboard",
                Value: "/dashboard",
              }),
            },
          },
          {
            path: "commune",
            element: <Commune />,
            handle: {
              crumb: () => ({
                Text: "Danh sách Phường/Xã",
                Value: "/dashboard/commune",
              }),
            },
          },
          {
            path: "province",
            element: <Province />,
            handle: {
              crumb: () => ({
                Text: "Danh sách Tỉnh/Thành phố",
                Value: "/dashboard/province",
              }),
            },
          },
          {
            path: "district",
            element: <District />,
            handle: {
              crumb: () => ({
                Text: "Danh sách Quận/Huyện",
                Value: "/dashboard/district",
              }),
            },
          },
        ],
      },
    ],
  },
  {
    path: "auth",
    element: <LayoutAuth />, // Define your Auth layout component here
    children: [
      {
        path: "login",
        element: <AuthenticationTitle />, // Create a Login page component
      },
      {
        path: "register",
        element: <AuthenticationRegister />, // Create a Login page component
      },

      // Add more authentication-related routes here
    ],
  },
]);

export default router;