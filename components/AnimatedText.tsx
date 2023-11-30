"use client";
import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <>
      <h2 className="text-center">
        Mes compétences :{" "} <br />
        <TypeAnimation
          sequence={[
            1500,
            "Javascript",
            1500,
            "Python",
            1500,
            "Java",
            1500,
            "C#",
            1500,
            "Git",
            1500,
            "SQL",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h2>
    </>
    );
}