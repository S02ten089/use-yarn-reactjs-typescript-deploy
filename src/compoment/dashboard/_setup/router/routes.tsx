import { createBrowserRouter } from "react-router-dom";
import _404 from "../../layout/_layout/_404";
import { Layout } from "../../layout/_layout/_layout";
// import { LayoutAuth } from "../../_base/component/_layout/_layoutAuth";
// import { AuthenticationTitle } from "../../_base/component/_login/_login";
import { SelectListItem } from "../../model/SelectListItem";
import Commune from "../../views/Address/Commune";
import District from "../../views/Address/District";
import Province from "../../views/Address/Province";

import Home from "../../views/home/homeView";

const router = createBrowserRouter([
  {
    // path: "/",
    id: "root",
    element: <Layout />,
    errorElement: <_404 />,
    action: async ({ request }) => {
      // if (auth)
      //  return protectedLoader;
    },
    children: [
      {
        path: "/",
        element: <Home />,
        handle: {
          crumb: () => {
            let model: SelectListItem = {
              Disabled: false,
              Group: null,
              Selected: false,
              Text: "",
              Value: "",
            };
            model.Text = "Trang chủ";
            model.Value = "/";
            return model;
          },
        },
      },
      {
        path: "/commune",
        element: <Commune />,
        handle: {
          crumb: () => {
            let model: SelectListItem = {
              Disabled: true,
              Group: null,
              Selected: false,
              Text: "",
              Value: "",
            };
            model.Text = "Danh sách Phường/Xã";
            model.Value = "/menu";
            return model;
          },
        },
      },
      {
        path: "/province",
        element: <Province />,
        handle: {
          crumb: () => {
            let model: SelectListItem = {
              Disabled: true,
              Group: null,
              Selected: false,
              Text: "",
              Value: "",
            };
            model.Text = "Danh sách Tỉnh/Thành phố";
            model.Value = "/menu";
            return model;
          },
        },
      },
      {
        path: "/district",
        element: <District />,
        handle: {
          crumb: () => {
            let model: SelectListItem = {
              Disabled: true,
              Group: null,
              Selected: false,
              Text: "",
              Value: "",
            };
            model.Text = "Danh sách Quận/Huyện";
            model.Value = "/menu";
            return model;
          },
        },
      },
    ],
  },
  {
    path: "auth",
    // element: <LayoutAuth />, // Define your Auth layout component here
    children: [
      {
        path: "login",
        // element: <AuthenticationTitle />, // Create a Login page component
      },
      {
        path: "register",
        // element: <AuthenticationRegister />, // Create a Login page component
      },

      // Add more authentication-related routes here
    ],
  },
]);

export default router;