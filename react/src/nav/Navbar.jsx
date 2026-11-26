// src/components/Navbar.jsx
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Navigation Links */}
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            Holiday Gift Guide
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            Gift Cards
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setIsOpen(false)}>
            New Books
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Ebooks
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Ebooks
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Best Sellers
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            kids
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Fiction
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Nonfiction
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            YA
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Games & Puzzles
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Stationary & More
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Offers
          </a>
        </li>
      </ul>
    </nav>
  );
}
