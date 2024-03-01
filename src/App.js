import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/Detail";

function App() {
  return (
    // 리액트 라우터를 이용
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
