import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <aside className="container mt-4">
      <div className="list-group">
        <Link to="aboutme" className="list-group-item mb-3 p-3">
          Sobre Mim
        </Link>
        <Link to="aboutme" className="list-group-item mb-3 p-3">
          Dicas
        </Link>
      </div>
    </aside>
  );
}
