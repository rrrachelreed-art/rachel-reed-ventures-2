import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 border-b border-gray-200">
      <div className="text-2xl font-bold text-rose-500">Rachel Reed Ventures</div>
      <nav className="flex gap-4">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/rentals">Rentals</a>
        <a href="/sales">Sales</a>
        <a href="/cars">Cars</a>
        <a href="/jobs">Jobs</a>
        <a href="/products">Shop</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
