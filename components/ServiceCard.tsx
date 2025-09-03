import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
}
