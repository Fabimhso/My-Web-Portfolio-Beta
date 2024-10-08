"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            H3LL0 W0RLD!
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Sou o Fabiano Oliveira
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Sou um desenvolvedor Full-Stack <b>C#/.NET</b>. Trabalho criando sistemas web, desktop e mobile.
            Sou especialista nos frameworks <b>React.JS, Node.JS, Next.JS, Vue.JS, Three.JS e Vite.JS</b>
          </p>
          <span className="text-transparent bg-clip-text animate-rainbowText">
            <b>Site Criado com NodeJS, React, TailwindCSS, NextJS, Framer Motion, TypeScript e Amor S2</b>
          </span>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
            target="_blank"
              href="https://drive.google.com/file/d/1F_w4cXp4JBev_QjZxzL4eE2yJX31Odjj/view?usp=sharing"
              className="rounded-[70px] group relative bg-purple-900 hover:bg-purple-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Meu C.V.
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[70px] group relative bg-transparent px-5 border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Tecnologias
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[70px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Projetos
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[70px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contato
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
