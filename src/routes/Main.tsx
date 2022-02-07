import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import BlockMobile from "../lib/BlockMobile";
import Home from "./Home";
import Tv from "./Tv";
import Search from "./Search";

const Main = () => {
  return (
    <HashRouter>
      <BlockMobile />
      <Header />
      <Routes>
        <Route path="/movie" element={<Home />} />
        <Route path="/movie/*" element={<Home />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/*" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/*" element={<Search />} />
      </Routes>
    </HashRouter>
  );
};

export default Main;