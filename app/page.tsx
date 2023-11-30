"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LabTabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-around">
      <Header />
      <LabTabs />
      <Footer />
    </div>
  );
}

// const handleClick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
