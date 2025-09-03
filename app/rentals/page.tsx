import ListingCard from "../../components/ListingCard";
import { RENTALS } from "../../data/listings";

export default function Rentals() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-rose-500">Rentals</h1>
      {RENTALS.length === 0 ? <p>Nothing available yet</p> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RENTALS.map(r => <ListingCard key={r.id} title={r.title} location={r.location} price={r.price} />)}
        </div>
      )}
    </div>
  );
}
