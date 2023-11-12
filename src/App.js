import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Weekly from "./components/Weekly";
import Daily from "./components/Daily";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Daily />} />
          <Route path="weekly" element={<Weekly />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
