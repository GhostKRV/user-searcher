import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:userName" element={<UserPage />} />
        <Route path="*" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
