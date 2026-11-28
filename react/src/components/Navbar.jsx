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
    `rounded-full px-4 py-1.5 text-sm transition ${
      isActive
        ? "bg-black/[0.06] text-[#1d1d1f]"
        : "text-[#1d1d1f]/80 hover:text-[#1d1d1f]"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-2.5">
        <NavLink
          to="/"
          className="mr-4 text-base font-semibold tracking-tight text-[#1d1d1f]"
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
                  className="rounded-full px-4 py-1.5 text-sm text-[#1d1d1f]/80 transition hover:text-[#1d1d1f]"
                >
                  {item.label}
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full flex min-w-52 flex-col rounded-2xl border border-black/[0.08] bg-white/95 p-1.5 shadow-xl backdrop-blur-xl">
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setOpenMenu(null)}
                        className="rounded-xl px-4 py-2 text-sm text-[#1d1d1f]/80 transition hover:bg-black/[0.04] hover:text-[#1d1d1f]"
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
