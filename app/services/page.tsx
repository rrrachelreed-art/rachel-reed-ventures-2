import ServiceCard from "../../components/ServiceCard";
import { SERVICES } from "../../data/services";

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-rose-500">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map(s => <ServiceCard key={s.id} title={s.title} description={s.description} />)}
      </div>
    </div>
  );
}
