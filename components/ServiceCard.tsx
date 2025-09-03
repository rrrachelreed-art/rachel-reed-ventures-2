type ServiceProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceProps) {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
