import { Outlet } from "react-router-dom";
import Navbar from "./nav/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
