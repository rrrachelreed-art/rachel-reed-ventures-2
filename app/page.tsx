import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { RENTALS } from "../data/listings";
import { SERVICES } from "../data/services";
import ListingCard from "../components/ListingCard";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-10">
        {/* Hero */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Rachel Reed</h1>
            <h2 className="text-xl font-semibold text-rose-500 mb-4">
              Freelance Professional | Real Estate • Beauty • Lifestyle • Design
            </h2>
            <p className="mb-6">
              Empowering clients with tailored solutions — from finding the perfect home 🏡 to personalized beauty consultancy 💄, creative design 🎨, and lifestyle services ✨.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button text="Real Estate" link="/rentals" />
              <Button text="Cars" link="/cars" />
              <Button text="Shop" link="/products" />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/images/hero.jpg" alt="Hero" className="rounded-lg shadow-lg"/>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-rose-500">Exclusive Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map(s => <ServiceCard key={s.id} title={s.title} description={s.description} />)}
          </div>
        </section>

        {/* Rentals Preview */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-rose-500">Latest Rentals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RENTALS.map(r => <
