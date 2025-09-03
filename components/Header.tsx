import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 mb-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold text-rose-500">Rachel Reed Ventures</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/rentals">Rentals</Link>
          <Link href="/sales">Sales</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/products">Shop</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
