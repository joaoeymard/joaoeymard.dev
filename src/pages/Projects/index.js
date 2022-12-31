import { Link } from "react-router-dom";
import "./style.css";

import linkWhatsapp from "../../assets/projects/link-whatsapp.jpg";

export default function Home() {
  return (
    <aside className="container mt-4 px-3">
      <div className="list-projects">
        <Link
          to="/aboutme"
          className="card text-bg-dark mb-3 text-decoration-none border-0"
        >
          <div class="row g-0">
            <div class="col-4">
              <img
                src={linkWhatsapp}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">Whatsapp Link</h5>
                <p class="card-text lh-1">Inicie uma conversa no WhatsApp.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/aboutme"
          className="card text-bg-dark mb-3 text-decoration-none border-0"
        >
          <div class="row g-0">
            <div class="col-4">
              <img
                src={linkWhatsapp}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">Whatsapp Link</h5>
                <p class="card-text lh-1">Inicie uma conversa no WhatsApp.</p>
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="/aboutme"
          className="card text-bg-dark mb-3 text-decoration-none border-0"
        >
          <div class="row g-0">
            <div class="col-4">
              <img
                src={linkWhatsapp}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-8">
              <div class="card-body">
                <h5 class="card-title">Whatsapp Link</h5>
                <p class="card-text lh-1">Inicie uma conversa no WhatsApp.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
