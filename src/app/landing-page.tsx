import React from "react";
import HeaderImage from "@/components/img/header-pic.svg";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-between w-screen bg-slate-600">
      <div>
        <h1 className="text-4xl">
          Menjadi Bagian dari Revolusi Digital & Memberikan Pengaruh Positif
          Bersama InovaEdu
        </h1>
        <p>
          Bersama tingkatkan kompetensi digital, perluas portofolio, dan ikut
          serta memberikan dampak positif #EksplorasiSkillmu
        </p>
      </div>
      <div>
        <Image
          src={HeaderImage}
          width={800}
          height={800}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
