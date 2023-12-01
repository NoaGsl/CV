"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LabTabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen space-around">
      <Header />
      <LabTabs />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

