import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListingCard from "../../components/ListingCard";
import { SALES } from "../../data/listings";

export default function Sales() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-rose-500">Property Sales</h1>
        {SALES.length === 0 ? (
          <p>Nothing available yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SALES.map(s => (
              <ListingCard key={s.id} title={s.title} location={s.location} price={s.price} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
