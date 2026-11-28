import { useNavigate } from "react-router-dom";

export default function Button({ to, children }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white shadow-[0_1px_2px_rgba(0,0,0,0.08)] transition duration-200 hover:bg-[#0077ed] hover:shadow-[0_8px_24px_rgba(0,113,227,0.28)] active:scale-[0.97]"
    >
      {children}
    </button>
  );
}
