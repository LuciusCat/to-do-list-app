import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/tasks">
        <button>Ir a TaskPage</button>
      </Link>
    </div>
  );
}
