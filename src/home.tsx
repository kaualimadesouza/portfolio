import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export function Home() {
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
        <div className="min-h-screen max-w-[1200px] m-auto xl:px-20 pt-28 xl:pt-0">
          <div className="xl:fixed xl:min-h-screen xl:w-1/5 flex flex-col list-none xl:justify-between xl:py-28 px-12 xl:px-0 gap-8 xl:gap-0">
            <div className="space-y-32">
              <div className="space-y-2">
                <h1 className="font-bold text-5xl">Kauã Lima</h1>
                <h2 className="font-semibold text-xl">Fullstack programmer</h2>
                <p className="font-light text-sm opacity-40">
                  Freelancer programmer engaged in building
                  <br /> efficient REST API applications.
                </p>
                <button
                  onClick={changeLanguage}
                  className="rounded-md h-8 border border-zinc-100 border-opacity-50 p-2 hover:opacity-70 transition-all xl:flex items-center gap-2 hidden"
                >
                  <img src="/united-states.png" className="h-7" />
                  <span className="text-textlow">Change the language</span>
                </button>
              </div>
              <div className="hidden xl:block">
                <nav className="text-textlow font-semibold text-sm space-y-7">
                  <li className="hover:text-textnormal transition-all">
                    <a href="#">ABOUT</a>
                  </li>
                  <li className="hover:text-textnormal transition-all">
                    <a href="#projects">PROJECTS</a>
                  </li>
                  <li className="hover:text-textnormal transition-all">
                    <a href="#education">EDUCATION</a>
                  </li>
                </nav>
              </div>
            </div>

            <div>
              <nav className="flex gap-6 text-textlow items-center">
                <li className="hover:text-textnormal transition-all">
                  <a href="https://github.com/kaualimadesouza">
                    <Github className="size-7" />
                  </a>
                </li>

                <li className="hover:text-textnormal transition-all">
                  <a href="https://www.linkedin.com/in/kaualimadesouza/">
                    <Linkedin className="size-7" />
                  </a>
                </li>

                <li className="hover:text-textnormal transition-all underline">
                  <a href="/Curriculo_Kauã-Lima-de-Souza.pdf" target="_blank">
                    View Full Resume
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div className="flex w-full xl:py-28">
            <div className="xl:w-1/2"></div>
            <div className="xl:w-1/2 space-y-8 p-12 xl:p-0">
              <p className="text-textlow text-justify xl:text-left">
                My name is <span className="text-textnormal">Kauã</span> and I
                am 19 years old, studying higher education at{" "}
                <span className="text-textnormal">USP</span> and have a degree
                in technical{" "}
                <span className="text-textnormal">
                  Systems Development by ETEC
                </span>
                . Studies currently in knowledge about Web Development. I
                recently graduated from the Brazilian Army, where I improved in
                professional matters, a place that also helped in my learning to
                practice my function in the best way. My main focus these days
                is constant learning and building{" "}
                <span className="text-textnormal">backend applications</span>.
              </p>
              
              <div
                className="h-px bg-white opacity-40 w-full"
                id="projects"
              ></div>
              <div className="space-y-5">
                <h3 className="text-base font-bold">PROJECTS</h3>
                <div className="space-y-8 ">
                  <a
                    target="_blank"
                    href="https://piadas-co.vercel.app/"
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                  >
                    <img
                      src="/piadas-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Piadas.co</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        Piadas.co is a project that aims to entertain its users
                        by generating a random joke from a famous Brazilian
                        creator.
                      </p>
                      <div className="space-x-3 hidden xl:block">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Next.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Typescript
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          MongoDb
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                    target="_blank"
                    href="https://github.com/kaualimadesouza/mymovielistdatabase-frontend.git "
                  >
                    <img
                      src="/mymovielistdb-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">MyMovieListDb</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        MyMovieListDb is a movie manager where you can add
                        movies, check directors' ratings, and find any searched
                        movies.
                      </p>
                      <div className="space-x-3 hidden xl:block">
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
                      </div>
                    </div>
                  </a>

                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                    target="_blank"
                    href="https://github.com/kaualimadesouza/ibank-frontend.git"
                  >
                    <img
                      src="/ibank-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />
                    <div className="space-y-3">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">iBank</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        iBank is a fictional digital bank where you can create
                        an account and manage your stored money. You can also
                        make transfers to other people and manage your credit
                        and debit cards.
                      </p>
                      <div className="space-x-3 hidden xl:block">
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
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="/projects"
                  className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
                >
                  View Full Projects Archive
                  <ArrowRight />
                </a>
              </div>

  
              <div
                className="h-px bg-white opacity-40 w-full"
                id="education"
              ></div>

              <div className="space-y-5">
                <h3 className="text-base font-bold">EDUCATION</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <img
                      src="/usp-img.png"
                      className="w-[142px] h-[70px] rounded-md"
                      alt="project1"
                    />

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-bold">
                          University of São Paulo (USP)
                        </h4>
                      </div>
                      <span className="text-sm text-textlow font-light">
                        2024 - Actually
                      </span>
                      <p className="text-textlow xl:text-sm text-xs">
                        Bacharelo's degree in Information Systems taking the 2nd
                        semester with expected graduation in 2027
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <img
                      src="/etec-img.png"
                      className="w-[142px] h-[70px] rounded-md"
                      alt="project1"
                    />

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-bold">
                          Technical education
                        </h4>
                      </div>
                      <span className="text-sm text-textlow font-light">
                        2020 - 2022
                      </span>
                      <p className="text-textlow xl:text-sm text-xs">
                        Technical course in systems development, in which I was
                        introduced to programming and the world of technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="xl:pt-20 pt-10 text-textlow text-xs w-3/4">
                Loosely designed in{" "}
                <span className="text-textnormal">Figma</span> and coded in{" "}
                <span className="text-textnormal">Visual Studio Code</span> by
                yours truly. Built with{" "}
                <span className="text-textnormal">React</span> and{" "}
                <span className="text-textnormal">Tailwind CSS</span>, deployed
                with <span className="text-textnormal">Vercel</span>. All text
                is set in the <span className="text-textnormal">Inter</span>{" "}
                typeface.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen max-w-[1200px] m-auto xl:px-20 pt-28 xl:pt-0">
          <div className="xl:fixed xl:min-h-screen xl:w-1/5 flex flex-col list-none xl:justify-between xl:py-28 px-12 xl:px-0 gap-8 xl:gap-0">
            <div className="space-y-32">
              <div className="space-y-2">
                <h1 className="font-bold text-5xl">Kauã Lima</h1>
                <h2 className="font-semibold text-xl">Programador Fullstack</h2>
                <p className="font-light text-sm opacity-40">
                  Programador freelancer engajado na construção de
                  <br /> aplicações API REST eficientes.
                </p>
                <button
                  onClick={changeLanguage}
                  className="rounded-md h-8 border border-zinc-100 border-opacity-50 p-2 hover:opacity-70 transition-all xl:flex items-center gap-2 hidden"
                >
                  <img src="/brazil.png" className="h-7" />
                  <span className="text-textlow">Troque a Língua</span>
                </button>
              </div>
              <div className="hidden xl:block">
                <nav className="text-textlow font-semibold text-sm space-y-6">
                  <li className="hover:text-textnormal transition-all">
                    <a href="#">SOBRE</a>
                  </li>
                  <li className="hover:text-textnormal transition-all">
                    <a href="#projects">PROJETOS</a>
                  </li>
                  <li className="hover:text-textnormal transition-all">
                    <a href="#education">EDUCAÇÂO</a>
                  </li>
                </nav>
              </div>
            </div>

            <div>
              <nav className="flex gap-6 text-textlow items-center">
                <li className="hover:text-textnormal transition-all">
                  <a href="https://github.com/kaualimadesouza">
                    <Github className="size-7" />
                  </a>
                </li>

                <li className="hover:text-textnormal transition-all">
                  <a href="https://www.linkedin.com/in/kaualimadesouza/">
                    <Linkedin className="size-7" />
                  </a>
                </li>

                <li className="hover:text-textnormal transition-all underline">
                  <a href="/Curriculo_Kauã-Lima-de-Souza.pdf" target="_blank">
                    Ver Currículo Inteiro
                  </a>
                </li>
              </nav>
            </div>
          </div>

          <div className="flex w-full xl:py-28">
            <div className="xl:w-1/2"></div>
            <div className="xl:w-1/2 space-y-8 p-12 xl:p-0">
              <p className="text-textlow text-justify xl:text-left">
                Meu nome é{" "}
                <span className="text-textnormal">Kauã Lima de Souza</span>,
                Tenho 19 anos e cursando ensino superior na{" "}
                <span className="text-textnormal">USP</span> , possuo técnico em{" "}
                <span className="text-textnormal">
                  Desenvolvimento de Sistemas pela ETEC
                </span>
                . Estudos atualmente em conhecimentos acerca de Web Development
                backend. Recentemente fui licenciado do Exército Brasileiro,
                lugar onde me aprimorei na questão profissional, lugar que
                também auxiliou no meu aprendizado a exercer minha função da
                melhor maneira. Hoje estou em busca de uma oportunidade para meu
                melhoramento profissional.
              </p>
              <div
                className="h-px bg-white opacity-40 w-full"
                id="projects"
              ></div>
              <div className="space-y-5">
                <h3 className="text-base font-bold">PROJETOS</h3>
                <div className="space-y-8 ">
                  <a
                    target="_blank"
                    href="https://piadas-co.vercel.app/"
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                  >
                    <img
                      src="/piadas-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">Piadas.co</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        O piadas.co é um projeto que busca divertir seu usuário,
                        gerando uma piada aleatória de algum criador famoso do
                        Brasil.
                      </p>
                      <div className="space-x-3 hidden xl:block">
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Next.js
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          React
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          Typescript
                        </span>
                        <span className="px-5 py-2 bg-black rounded-full text-xs">
                          MongoDb
                        </span>
                      </div>
                    </div>
                  </a>

                  <a
                    target="_blank"
                    href="https://github.com/kaualimadesouza/mymovielistdatabase-frontend.git"
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                  >
                    <img
                      src="/mymovielistdb-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />

                    <div className="space-y-3 ">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">MyMovieListDb</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        É um gerenciador de filmes onde você pode adicionar
                        filmes, verificar notas de diretores e encontrar
                        qualquer filme que esteja no banco de dados.
                      </p>
                      <div className="space-x-3 hidden xl:block">
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
                      </div>
                    </div>
                  </a>

                  <a
                    className="flex gap-5 hover:opacity-80 cursor-pointer"
                    target="_blank"
                    href="https://github.com/kaualimadesouza/ibank-frontend.git"
                  >
                    <img
                      src="/ibank-img.png"
                      className="w-[142px] h-[70px]"
                      alt="project1"
                    />
                    <div className="space-y-3">
                      <div>
                        <a href="#" className="flex gap-1.5 items-center">
                          <h4 className="text-sm font-bold">iBank</h4>
                          <ArrowUpRight />
                        </a>
                      </div>
                      <p className="text-textlow xl:text-sm text-xs">
                        iBank é um banco fictício onde você pode criar contas e
                        gerenciar seu dinheiro, com a possibilidade de realizar
                        transferências para outras contas e consultar seus
                        cartões de crédito e débito.
                      </p>
                      <div className="space-x-3 hidden xl:block">
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
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="/projects"
                  className="flex gap-1.5 font-medium opacity-60 hover:opacity-100 transition-all"
                >
                  Ver todos os projetos
                  <ArrowRight />
                </a>
              </div>

              <div
                className="h-px bg-white opacity-40 w-full"
                id="education"
              ></div>

              <div className="space-y-5">
                <h3 className="text-base font-bold">EDUCAÇÂO</h3>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <img
                      src="/usp-img.png"
                      className="w-[142px] h-[70px] rounded-md"
                      alt="project1"
                    />

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-bold">
                          Universidade de São Paulo (USP)
                        </h4>
                      </div>
                      <span className="text-sm text-textlow font-light">
                        2024 - Atualmente
                      </span>
                      <p className="text-textlow xl:text-sm text-xs">
                        2º semestre do Bacharelado em sistemas de informação com
                        expectativa de formação em 2027
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <img
                      src="/etec-img.png"
                      className="w-[142px] h-[70px] rounded-md"
                      alt="project1"
                    />

                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-bold">
                          Ensino Técnico em Desenvolvimento de Sistemas
                        </h4>
                      </div>
                      <span className="text-sm text-textlow font-light">
                        2020 - 2022
                      </span>
                      <p className="text-textlow xl:text-sm text-xs">
                        Curso técnico em Desenvolvimento de Sistemas, no qual
                        fui introduzido à programação e ao mundo da tecnologia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="xl:pt-20 pt-10 text-textlow text-xs w-3/4">
                Loosely designed in{" "}
                <span className="text-textnormal">Figma</span> and coded in{" "}
                <span className="text-textnormal">Visual Studio Code</span> by
                yours truly. Built with{" "}
                <span className="text-textnormal">React</span> and{" "}
                <span className="text-textnormal">Tailwind CSS</span>, deployed
                with <span className="text-textnormal">Vercel</span>. All text
                is set in the <span className="text-textnormal">Inter</span>{" "}
                typeface.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
