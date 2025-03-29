import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="px-4 md:px-36">
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}
