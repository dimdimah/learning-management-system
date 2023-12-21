import Image from "next/image";
import HeaderImage from "@/components/img/header-pic.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <div className="flex items-center p-24 bg-[#DC213E] text-white">
        <div className="w-2/4">
          <h1 className="text-[3rem] font-extrabold">
            Menjadi Bagian dari Revolusi Digital & Memberikan Pengaruh Positif
            Bersama Maca Edu
          </h1>
          <p className="text-lg">
            Bersama tingkatkan kompetensi digital, perluas portofolio, dan ikut
            serta memberikan dampak positif #EksplorasiSkillmu
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src={HeaderImage}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-row h-screen p-24 w-full justify-between">
        <div className="w-2/4">
          <h1 className="text-[3rem] font-extrabold">
            Menjadi Bagian dari Revolusi Digital & Memberikan Pengaruh Positif
            Bersama Maca Edu
          </h1>
          <p className="text-lg">
            Bersama tingkatkan kompetensi digital, perluas portofolio, dan ikut
            serta memberikan dampak positif #EksplorasiSkillmu
          </p>
        </div>
        <div className="">
          <Link className="p-5 bg-cyan-500" href={""}>
            Button
          </Link>
        </div>
      </div>
    </main>
  );
}
