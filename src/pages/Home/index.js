import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
  return (
    <aside className="container px-3">
      <div className="list-group menu-items mt-4 pb-4">
        <Link to="/aboutme" className="list-group-item mb-3 p-3">
          Sobre Mim
        </Link>
        <Link to="/projects" className="list-group-item mb-3 p-3">
          Projetos
        </Link>
      </div>
    </aside>
  );
}
