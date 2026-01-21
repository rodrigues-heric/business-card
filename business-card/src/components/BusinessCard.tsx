import type { JSX } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const badges: Array<{ name: string; url: string }> = [
  {
    name: 'React',
    url: 'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
  },
  {
    name: 'TypeScript',
    url: 'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
  },
  {
    name: 'TailwindCSS',
    url: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
  },
  {
    name: 'Shadcn',
    url: 'https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white',
  },
  {
    name: 'Node.js',
    url: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
  },
  {
    name: 'NestJS',
    url: 'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
  },
  {
    name: 'Go',
    url: 'https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white',
  },
  {
    name: 'RabbitMQ',
    url: 'https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white',
  },
  {
    name: 'Python',
    url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
  },
  {
    name: 'PostgreSQL',
    url: 'https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white',
  },
  {
    name: 'MongoDB',
    url: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
  },
  {
    name: 'Docker',
    url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white',
  },
  {
    name: 'CI/CD',
    url: 'https://img.shields.io/badge/CI/CD-FFB13B?style=for-the-badge&logo=github-actions&logoColor=white',
  },
]

export function BusinessCard(): JSX.Element {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d1117] p-4 font-sans">
      <div className="w-full max-w-lg rounded-2xl border border-gray-700 bg-[#161b22] p-8 shadow-2xl transition-all hover:border-teal-500/50">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-white">
            Heric Leite Rodrigues
          </h1>
          <p className="font-mono text-sm tracking-widest text-teal-400 uppercase">
            Full Stack Software Engineer
          </p>
        </div>

        {/* Contact info */}
        <div className="mb-8 grid grid-cols-1 gap-3">
          <a
            href="mailto:dev.heric.rodrigues@gmail.com"
            className="group flex items-center justify-center rounded-lg bg-gray-800/50 p-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
          >
            <FaEnvelope className="mr-3 transition-transform group-hover:scale-110" />
            <span className="text-sm">dev.heric.rodrigues@gmail.com</span>
          </a>
          <div className="flex gap-3">
            <a
              href="https://github.com/rodrigues-heric"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center rounded-lg bg-gray-800/50 p-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rodriguesheric/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center rounded-lg bg-gray-800/50 p-3 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Stack */}
        <div className="mb-8">
          <h2 className="mb-4 border-b border-gray-800 pb-2 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase italic">
            Main Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {badges.map((badge) => (
              <img
                key={badge.name}
                src={badge.url}
                alt={badge.name}
                className="h-6 transition-opacity hover:opacity-80"
              />
            ))}
          </div>
        </div>

        {/* Pitch */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm leading-relaxed text-gray-400">
            Specialist in creating scalable and resilient systems, from{' '}
            <span className="font-medium text-white">
              Front-end to Back-end
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
