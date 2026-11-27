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
    `rounded-md px-3 py-2 text-sm font-medium ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-4 py-3">
        <NavLink to="/" className="mr-4 text-lg font-bold text-indigo-600">
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
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                >
                  {item.label}
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full flex min-w-48 flex-col rounded-md border border-gray-200 bg-white p-1 shadow-lg">
                    {item.children.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => setOpenMenu(null)}
                        className="rounded px-3 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
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
      </div>
    </nav>
  );
}

export default Navbar;
