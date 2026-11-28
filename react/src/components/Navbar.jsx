import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "New Books",
    children: [
      { label: "Popular", path: "/newbook/popular" },
      { label: "Holiday Gift Ideas", path: "/newbook/holiday-gift-ideas" },
      { label: "Classics", path: "/newbook/classics" },
      { label: "See All", path: "/newbook/see-all" },
      { label: "Science Fiction", path: "/newbook/science-fiction" },
      { label: "Manga", path: "/newbook/manga" },
      { label: "Poetry", path: "/newbook/poetry" },
    ],
  },
  { label: "Ebook", path: "/ebook" },
  { label: "Contact Us", path: "/contactus" },
  { label: "Sign Up", path: "/signup" },
  { label: "Login", path: "/login" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const linkClass = ({ isActive }) =>
    `rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight transition duration-200 ${
      isActive
        ? "bg-black/[0.06] text-[#1d1d1f]"
        : "text-[#1d1d1f]/75 hover:bg-black/[0.03] hover:text-[#1d1d1f]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/70 backdrop-blur-2xl backdrop-saturate-150">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-5 py-3 sm:px-8">
        <NavLink
          to="/"
          className="mr-4 text-[17px] font-semibold tracking-tight text-[#1d1d1f]"
        >
          Bookstore
        </NavLink>

        {navItems.map((item) => {
          if (item.children) {
            const isOpen = openMenu === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className="rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-tight text-[#1d1d1f]/75 transition duration-200 hover:bg-black/[0.03] hover:text-[#1d1d1f]"
                >
                  {item.label}
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 flex min-w-56 flex-col rounded-2xl border border-black/[0.06] bg-white p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setOpenMenu(null)}
                        className="rounded-xl px-3.5 py-2 text-[13px] tracking-tight text-[#1d1d1f]/80 transition duration-150 hover:bg-black/[0.04] hover:text-[#1d1d1f]"
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;
