import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [language, setLanguage] = useState("portugues");

  function changeLanguage() {
    if (language == "ingles") {
      setLanguage("portugues");
    } else {
      setLanguage("ingles");
    }
  }
  return (
    <div>
      {language == "ingles" ? (
        <div className="min-h-screen max-w-[1200px] m-auto px-20">
          <div className="py-28 space-y-10">
            <div className="space-y-2.5">
              <a
                href="/"
                className="flex gap-1.5 items-center opacity-60 hover:opacity-100 transition-all"
              >
                <ArrowLeft />
                <span className="text-2xl font-semibold">Home</span>
              </a>
              <div className="flex gap-4 items-center">
                <h1 className="text-4xl font-bold">Projects</h1>
                <button
                  onClick={changeLanguage}
                  className="rounded-md h-8 border border-zinc-100 border-opacity-50 p-2 hover:opacity-70 transition-all flex items-center gap-2"
                >
                  <img src="/united-states.png" className="h-7" />
                  <span className="text-textlow">Change the Language</span>
                </button>
              </div>
            </div>
            <div>
              <ul className="space-y-5">
                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                    href="https://piadas-co.vercel.app/"
                  >
                    <img
                      src="/piadas-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Piadas.co</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/piadas.co.git"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        Piadas.co is a project that aims to entertain its users
                        by generating a random joke from a famous Brazilian
                        creator.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Next.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Typescript
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          MongoDb
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                  >
                    <img
                      src="/mymovielistdb-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">MyMovieListDb</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/mymovielistdatabase-frontend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/mymovielistdatabase-backend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        MyMovieListDb is a movie manager where you can add
                        movies, check directors' ratings, and find any searched
                        movies.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Postgresql
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                  >
                    <img
                      src="/ibank-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">iBank</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/ibank-frontend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/ibank-backend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        iBank is a fictional digital bank where you can create
                        an account and manage your stored money. You can also
                        make transfers to other people and manage your credit
                        and debit cards.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Postgresql
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                    href="https://github.com/kaualimadesouza/desafio-picpayclone"
                  >
                    <img
                      src="/picpay.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">
                            PicPay Challenge
                          </h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        Technical challenge for a junior backend position at the
                        company PicPay. PicPay Simplified is a simplified
                        payment platform. Through it, users can deposit and
                        transfer money to each other.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring JPA
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring Web
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Flyway Migration
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Lombok
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <div className="flex gap-5 hover:opacity-80 cursor-pointer ">
                    <img
                      src="/trips-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Trip Planner</h4>
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/trips-frontend-nlw"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/trips-backend-nlw"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        Integration of the travel project API from NLW, with the
                        aim of successfully performing CRUD commands, as well as
                        implementing the frontend with React and other
                        libraries.
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring JPA
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring Web
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Flyway Migration
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Lombok
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          H2 database
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="https://github.com/kaualimadesouza?tab=repositories"
                    className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
                  >
                    <span>Other Projects</span>
                    <ArrowRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen max-w-[1200px] m-auto px-20">
          <div className="py-28 space-y-10">
            <div className="space-y-2.5">
              <a
                href="/"
                className="flex gap-1.5 items-center opacity-60 hover:opacity-100 transition-all"
              >
                <ArrowLeft />
                <span className="text-2xl font-semibold">Home</span>
              </a>
              <div className="flex gap-4 items-center">
                <h1 className="text-4xl font-bold">Projetos</h1>
                <button
                  onClick={changeLanguage}
                  className="rounded-md h-8 border border-zinc-100 border-opacity-50 p-2 hover:opacity-70 transition-all flex items-center gap-2"
                >
                  <img src="/brazil.png" className="h-7" />
                  <span className="text-textlow">Troque a Língua</span>
                </button>
              </div>
            </div>
            <div>
              <ul className="space-y-5">
                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                    href="https://piadas-co.vercel.app/"
                  >
                    <img
                      src="/piadas-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Piadas.co</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/piadas.co.git"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                      O piadas.co é um projeto que busca divertir seu usuário,
                        gerando uma piada aleatória de algum criador famoso do
                        Brasil.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Next.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Typescript
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          MongoDb
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                  >
                    <img
                      src="/mymovielistdb-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">MyMovieListDb</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/mymovielistdatabase-frontend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/mymovielistdatabase-backend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        É um gerenciador de filmes onde você pode adicionar
                        filmes, verificar notas de diretores e encontrar
                        qualquer filme que esteja no banco de dados.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Postgresql
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                  >
                    <img
                      src="/ibank-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">iBank</h4>
                          <ArrowUpRight />
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/ibank-frontend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/ibank-backend"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        iBank é um banco fictício onde você pode criar contas e
                        gerenciar seu dinheiro, com a possibilidade de realizar
                        transferências para outras contas e consultar seus
                        cartões de crédito e débito.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Postgresql
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer "
                    target="_blank"
                    href="https://github.com/kaualimadesouza/desafio-picpayclone"
                  >
                    <img
                      src="/picpay.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">
                            Desario técnico PicPay
                          </h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        Desafio técnico para vaga de backend junior na empresa
                        picpay. O PicPay Simplificado é uma plataforma de
                        pagamentos simplificada. Nela é possível depositar e
                        realizar transferências de dinheiro entre usuários.
                      </p>
                      <div className="space-x-3">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring JPA
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring Web
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Flyway Migration
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Lombok
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="border-t border-zinc-50 pt-6 border-opacity-40">
                  <div className="flex gap-5 hover:opacity-80 cursor-pointer ">
                    <img
                      src="/trips-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div className="flex gap-5">
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Trip Planner</h4>
                        </a>

                        <a
                          href="https://github.com/kaualimadesouza/trips-frontend-nlw"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Frontend Repository
                        </a>
                        <a
                          href="https://github.com/kaualimadesouza/trips-backend-nlw"
                          target="_blank"
                          className="opacity-60 hover:opacity-100"
                        >
                          Backend Repository
                        </a>
                      </div>
                      <p className="text-textlow text-sm">
                        Integração da API do projeto de viagens do NLW, com o
                        objetivo de realizar os comandos CRUD com sucesso, além
                        de implementar o frontend com React e outras
                        bibliotecas.
                      </p>
                      <div className="flex items-center flex-wrap gap-2">
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Java
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring JPA
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Spring Web
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Flyway Migration
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Lombok
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          H2 database
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </div>
                        <div className="px-5 py-2 bg-black rounded-full text-xs">
                          Tailwind CSS
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="https://github.com/kaualimadesouza?tab=repositories"
                    className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
                  >
                    <span>Other Projects</span>
                    <ArrowRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
