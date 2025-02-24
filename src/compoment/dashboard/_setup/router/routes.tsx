import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import _404 from "../../layout/_layout/_404";
import { Layout } from "../../layout/_layout/_layout";
import { LayoutAuth } from "../../layout/_layout/_layoutAuth";
import { AuthenticationTitle } from "../../layout/_login/_login";
import { AuthenticationRegister } from "../../layout/_register/_register";
import Commune from "../../views/Address/Commune";
import District from "../../views/Address/District";
import Province from "../../views/Address/Province";
import Home from "../../views/home/homeView";
import { Box, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

const App: React.FC = () => {
  return (
    // <Router>
      <Box>
        <Suspense fallback={<Spinner />}>
          <Routes>
            {/* Main Layout */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="dashboard">
                <Route index element={<Home />} />
                <Route path="commune" element={<Commune />} />
                <Route path="district" element={<District />} />
                <Route path="province" element={<Province />} />
              </Route>
            </Route>

            {/* Auth Layout */}
            <Route path="/auth" element={<LayoutAuth />}>
              <Route path="login" element={<AuthenticationTitle />} />
              <Route path="register" element={<AuthenticationRegister />} />
            </Route>

            {/* 404 Not Found */}
            <Route path="*" element={<_404 />} />
          </Routes>
        </Suspense>
      </Box>
    // </Router>
  );
};

export default App;
