"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const setStyle = () => {
  return { fontSize: "2em", display: "inline-block", color: "black" };
};

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "GOsselin",
        1000,
        "gOSSELIN",
        1000,
        "Gosselin",
        1000,
        "GOSSELIN",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={1}
    />
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl text-center" style={setStyle()}>
          Je m appelle Noa <ExampleComponent />
        </h2>
        <h3 className="text-2xl text-center">h3</h3>
        <h4 className="text-2xl text-center">h4</h4>
      </div>
    </main>
  );
}
