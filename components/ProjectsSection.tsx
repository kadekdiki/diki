import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "resident evil 4",
    description:
      "The story of a journey to save the president's daughter from a remote village.",
    image: "/residenevil4.jpeg",
    github: "https://github.com/kadekdiki/residenevil_4",
    link: "https://kadekdiki.github.io/residenevil_4/",
  },
  {
    name: "First Project",
    description: "The first project that I made using HTML and CSS",
    image: "/websederhana.png",
    github: "https://github.com/kadekdiki/cssuh",
    link: "https://cssuh-a18ij1vdw-kadekdiki.vercel.app/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-90"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-yellow-500">
                    {project.description}
                  </p>
                  <div className="flex flex-col align-bottom md:flex-row md:space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection