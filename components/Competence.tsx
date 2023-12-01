import AnimatedText from "@/components/AnimatedText";
import Java from "./Java";
import CS from "./CS";
import Git from "./Git";
import SQL from "./SQL";
import * as React from 'react';
import Javascript from "./Javascript";
import Python from "./Python";

export default function Competence() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <p className="text-4xl">
          <AnimatedText />
        </p>
      </div>
      <div className="flex grid grid-cols-3 grid-row-2 space-y-4 space-x-4">
        <Javascript />
        <Python />
        <Java />
        <CS />
        <Git />
        <SQL />
      </div>
    </div>
  );
}
