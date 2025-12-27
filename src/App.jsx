import { Routes, Route } from "react-router-dom";
import Portfolio from "./portfolio.jsx";
import Login from "../components/g-auth/logIn.jsx";
import Blog from "../components/g-auth/blog.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
};

export default App;
