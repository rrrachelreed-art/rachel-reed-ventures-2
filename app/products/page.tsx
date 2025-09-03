import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Products() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-rose-500">Shop</h1>
        <p>Nothing available yet</p>
      </main>
      <Footer />
    </div>
  );
}
