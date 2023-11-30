import Link from "next/link";
import Image from "next/image";
import linkedin from "../public/linkedin.png";
import github from "../public/github.png";
import mail from "../public/mail.png";
import flecheHaut from "../public/flecheHaut.png";
import download from "../public/download.png";
import { Button } from "@mui/material";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className="grid grid-rows-[3fr_3fr_3fr] md:grid-rows-[8fr_2fr] lg:grid-rows-1 gap-4 space-y-4 md:space-y-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 w-full bottom-0 bg-light_brown lg:order-1">
      <div className="flex justify-center items-center ">
        <a href="/download.png" download="CV_Noa_Gosselin">
          <div className="flex justify-center items-center space-x-4">
            <Image
              className=""
              src={download}
              alt="download"
              width={40}
              height={40}
            />
            <p className="flex text-xl">Télécharger mon CV</p>
          </div>
        </a>
      </div>
      <div className="flex justify-center items-center space-x-4 lg:order-10">
        <div>
          <Link
            className="flex justify-center"
            href="https://www.linkedin.com/in/noa-gosselin-415b9626b/"
            target="_blank"
          >
            <Image
              className=""
              src={linkedin}
              alt="linkedin"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div>
          <Link
            className="flex justify-center"
            href="https://github.com/NoaGsl"
            target="_blank"
          >
            <Image
              className=""
              src={github}
              alt="github"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div>
          <Link className="flex justify-center" href="mailto:" target="_blank">
            <Image className="" src={mail} alt="mail" width={40} height={40} />
          </Link>
        </div>
      </div>

      <div className="flex justify-center col-span-full lg:col-span-1 lg:order-5 text-center flex-col">
        <p>Last updated : 29/11/23</p>
        <p>© {year} Noa Gosselin</p>
      </div>
    </footer>
  );
}

("linkedin github mail téléchargement cv bouton retour haut de page DateMAJ");
