export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-4 mt-8">
      <div className="container mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rachel Reed Ventures. All rights reserved.
      </div>
    </footer>
  );
}
