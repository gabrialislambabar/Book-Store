import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
