import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Chats } from "./pages/Chats/Chats";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chats" element={<Chats />}></Route>
      </Routes>
    </div>
  );
}

export default App;
