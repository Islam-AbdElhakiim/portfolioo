import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants";
const Header = () => {
  return (
    <header className="fixed w-full h-[16vh]  flex flex-col items-center pt-5 z-20 md:justify-between md:px-[10%] md:flex-row md:py-8 lg:pt-20 xl:px-[20%]">
      <Link
        className="flex text-center items-center md:text-start cursor-pointer w-full"
        href={"/"}
      >
        <h2 className=" text-[28px] lg:text-[30px] xl:text-[40px] font-sora font-bold w-full">
          Islam <span className="text-white/80 font-light">Abdelhakiim</span>
          <span className="font-normal font-sora -ml-1 text-white/50">
            <span className=" text-accent">.</span>
          </span>
        </h2>
      </Link>
      <div className="flex justify-around w-96 max-w-full items-center p-3 text-[24px]">
        {socialLinks &&
          socialLinks.map((link) => (
            <a target="_blank" href={link.path} key={link.name + "header"} className="hover:text-accent transition-colors duration-300">
              {link.icon}
            </a> 
          ))}
      </div>
    </header>
  );
};

export default Header;
