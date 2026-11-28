import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f7] text-[#1d1d1f]">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 sm:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
