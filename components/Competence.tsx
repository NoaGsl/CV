import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import JS from "@/public/JS.png";
import Python from "@/public/Python.png";
import Java from "@/public/Java.png";
import CS from "@/public/CS.png";
import git from "@/public/git.png";

export default function Competence() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <p className="text-4xl">
          <AnimatedText />
        </p>
      </div>
      <div className="flex grid grid-cols-3 grid-row-2">
        <Image src={JS} alt="Javascript" />
        <Image src={Python} alt="Python" />
        <Image src={Java} alt="Java" />
        <Image src={CS} alt="C#" />
        <Image src={git} alt="Git" />
      </div>
    </div>
  );
}
