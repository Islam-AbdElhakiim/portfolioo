import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
const CallToAction = () => {
  return (
    <div className="mx-auto">
      <Link
        href="/work"
        className="relative group bg-circleStar bg-cover bg-no-repeat w-[185px] h-[185px] flex justify-center items-center"
      >
        <Image
          src="/rounded-text.png"
          alt="work-stamp image"
          width={141}
          height={148}
          className="animate-spin-slow"
        />
        <HiArrowRight className="absolute top-1/2 left-1/2 text-4xl -translate-x-1/2 -translate-y-1/2 group-hover:translate-x-2 transition-transform duration-300 " />
      </Link>
    </div>
  );
};

export default CallToAction;
