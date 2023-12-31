import Image from "next/image";
import HeaderImage from "@/components/img/header-pic.svg";
import CardCourses from "@/components/card.components";
import { Button } from "@/components/ui/button";
import { ClassCards } from "@/lib/constant/data.course";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <div className="flex p-24 bg-[#F3F4F6] text-[#212222] items-start">
        <div className="w-2/4">
          <h1 className="text-[3rem] font-extrabold mt-24">
            Menjadi Bagian dari Revolusi Digital & Memberikan Pengaruh Positif
            <span className="text-[#FD853A] px-3">Bersama Maca Edu</span>
          </h1>
          <p className="text-lg">
            Bersama tingkatkan kompetensi digital, perluas portofolio, dan ikut
            serta memberikan dampak positif #EksplorasiSkillmu
          </p>
          <Button className="my-5 border items-center justify-center rounded-md transition-colors font-semibold select-none hidden lg:inline-flex h-12 px-8 bg-[#FD853A] hover:bg-[#FD853A] text-white hover:text-white text-lg">
            Gabung Sekarang
          </Button>
        </div>
        <div className="mx-auto">
          <Image
            src={HeaderImage}
            width={500}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="flex flex-col h-screen p-24 w-full items-start">
        <div className="flex flex-row w-full justify-between items-start">
          <div className="w-4/5">
            <h1 className="text-3xl font-extrabold">Pilih Kelas Mu</h1>
            <p className="text-lg text-gray-500">
              Kami menyediakan berbagai macam kelas yang sudah berbasis industri
              untuk meningkatkan keterampilan digital kamu.
            </p>
          </div>
          <div className="">
            <Button className="border items-center justify-center rounded-md transition-colors font-semibold select-none hidden lg:inline-flex h-12 px-8 border-[#FD853A] bg-white hover:bg-[#FD853A] text-[#FD853A] hover:text-white text-lg">
              Pilih Kelas
            </Button>
          </div>
        </div>
        <div className="w-full my-8">
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            {ClassCards.map((CardLesson) => (
              <span key={CardLesson.id}>
                <CardCourses
                  title={CardLesson.title}
                  cost={CardLesson.cost}
                  description={CardLesson.description}
                  imageSrc={"/public/vercel.svg"}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
