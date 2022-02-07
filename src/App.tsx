import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BlockMobile from "./lib/BlockMobile";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Tv from "./routes/Tv";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
