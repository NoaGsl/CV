import Link from "next/link";
import Image from "next/image";
import linkedin from "../public/linkedin.png";

export default function Footer() {
    return(
    <div className="grid grid-cols-6 p-5 h-min-screen w-full bottom-0 bg-light_brown">
        <Link className="flex justify-center" href="https://www.linkedin.com/in/noa-gosselin-415b9626b/" target="_blank">
            <Image className="" src={linkedin} alt="linkedin"/>
        </Link>
    </div>
    );
}

"linkedin github mail téléchargement cv bouton retour haut de page DateMAJ"
