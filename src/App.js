import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
