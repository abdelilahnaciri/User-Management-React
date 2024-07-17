import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="d-flex top-bar container">
      <h1>Store</h1>
      <Link to="/" className="register-nav">
        Go To Web Site
      </Link>
    </div>
  );
}
