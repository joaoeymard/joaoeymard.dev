import "./style.css";

function Header({ srcImg, title, description, link }) {
  return (
    <a
      href={link}
      className="card card-item-project text-bg-dark text-decoration-none mb-1 p-3"
    >
      <div className="card-header p-1 border-0">
        <div className="d-flex align-items-center">
          <img
            src={srcImg}
            className="img-fluid rounded me-3 img-project"
            alt={title}
          />
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
      <div className="card-body p-1">
        <p className="card-text lh-1">{description}</p>
      </div>
    </a>
  );
}

export default Header;
