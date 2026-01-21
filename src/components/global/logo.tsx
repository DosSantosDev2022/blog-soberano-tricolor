import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      {/* Escudo do SPFC 
          Certifique-se de ter a imagem na pasta /public ou use uma URL oficial 
      */}
      <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
        <Image
          src="/spfc-logo.png" // Caminho da imagem na sua pasta public
          alt="Escudo São Paulo FC"
          fill
          className="object-contain"
        />
      </div>

      <span className="text-white font-black text-xl md:text-2xl tracking-tighter uppercase italic">
        Soberano<span className="text-red-600"> Tricolor</span>
      </span>
    </Link>
  );
};

export { Logo };