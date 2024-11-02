import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
