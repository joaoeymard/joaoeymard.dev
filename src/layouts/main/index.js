import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";

import "./style.css";

export default function Main() {
  return (
    <main className="page-container">
      <Header></Header>

      <div className="page-content">
        <Outlet />
      </div>

      <Footer></Footer>
    </main>
  );
}
