import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-rose-500">Contact</h1>
        <p>📞 +356 79989843</p>
        <p>📧 rr.rachelreed@gmail.com</p>
        <p>📍 Malta</p>
      </main>
      <Footer />
    </div>
  );
}
