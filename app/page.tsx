"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LabTabs from "@/components/Tabs";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <LabTabs />
      <Footer />
    </div>
  );
}
