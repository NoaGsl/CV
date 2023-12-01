import Image from "next/image";
import FlecheHaut from "@/public/flecheHaut.png";

export default function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <div className="sticky flex bottom-0 right-0 justify-end hover:cursor-pointer p-3 z-40">
        <Image
          onClick={handleClick}
          src={FlecheHaut}
          alt="Scroll to top"
          width={50}
          height={50}
        />
      </div>
  );
}
