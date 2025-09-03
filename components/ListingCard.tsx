import React from "react";

interface ListingCardProps {
  title: string;
  location: string;
  price: number;
}

export default function ListingCard({ title, location, price }: ListingCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p>{location}</p>
      <p>€{price}</p>
    </div>
  );
}
