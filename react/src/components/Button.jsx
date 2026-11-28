import { useNavigate } from "react-router-dom";

export default function Button({ to, children }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#0077ed]"
    >
      {children}
    </button>
  );
}
