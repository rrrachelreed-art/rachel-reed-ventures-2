import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-rose-500">Job Vacancies</h1>
        <p>No job listings yet</p>
      </main>
      <Footer />
    </div>
  );
}
