type ListingProps = {
  title: string;
  location: string;
  price: number;
};

export default function ListingCard({ title, location, price }: ListingProps) {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="mb-1">{location}</p>
      <p className="font-semibold">€{price}</p>
    </div>
  );
}
