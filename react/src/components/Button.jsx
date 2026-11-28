import { useNavigate } from "react-router-dom";

export default function Button({ to, children }) {
  const navigate = useNavigate();
  return <button onClick={() => useNavigate(to)}>{children}</button>;
}
