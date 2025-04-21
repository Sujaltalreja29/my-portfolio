"use client"

import { useState } from "react"
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
} from "react-icons/si"


const getTechIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "nextjs":
      return <SiNextdotjs className="text-white" size={20} />
    case "reactjs":
      return <SiReact className="text-[#61DAFB]" size={20} />
    case "javascript":
      return <SiJavascript className="text-[#F7DF1E]" size={20} />
    default:
      return null
  }
}

const getTechStackIcon = (tech) => {
  switch (tech.toLowerCase()) {
    case "nextjs":
      return <SiNextdotjs size={16} />
    case "reactjs":
      return <SiReact size={16} />
    case "javascript":
      return <SiJavascript size={16} />
    case "mongodb":
      return <SiMongodb size={16} className="text-green-500" />
    case "typescript":
      return <SiTypescript size={16} className="text-blue-500" />
    case "tailwindcss":
      return <SiTailwindcss size={16} className="text-cyan-400" />
    case "html":
      return <SiHtml5 size={16} className="text-orange-500" />
    case "css":
      return <SiCss3 size={16} className="text-blue-400" />
    default:
      return null
  }
}

const getTechColor = (tech) => {
  switch (tech.toLowerCase()) {
    case "nextjs":
      return "from-gray-700 to-gray-900"
    case "reactjs":
      return "from-blue-400 to-blue-600"
    case "javascript":
      return "from-yellow-400 to-yellow-600"
    default:
      return "from-gray-500 to-gray-700"
  }
}

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const { title, tech, description, websiteLink, sourceLink, techStacks } = project

  const techColor = getTechColor(tech)
  const techIcon = getTechIcon(tech)

  // Truncate description if it's too long
  const shortDescription = description.length > 150 ? `${description.substring(0, 150)}...` : description

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-lg border border-[#25213b] bg-[#1a1443]/50 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r ${techColor}`}>
              {techIcon}
            </div>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">{tech}</span>
          </div>
        </div>

        <h3 className="mb-2 text-xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300">
          {title}
        </h3>

        <div className="mb-4">
          <p className="text-sm text-gray-300">{expanded ? description : shortDescription}</p>
          {description.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 flex items-center text-xs text-violet-400 hover:text-violet-300"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <FaChevronUp className="ml-1" size={12} />
                </>
              ) : (
                <>
                  <span>Read more</span>
                  <FaChevronDown className="ml-1" size={12} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStacks.map((stack) => (
            <div
              key={stack}
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#25213b] text-xs text-gray-300"
            >
              {getTechStackIcon(stack)}
              <span>{stack}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto flex justify-between items-center p-4 border-t border-[#25213b]">
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={16} />
          <span>Code</span>
        </a>

        {websiteLink ? (
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm bg-gradient-to-r from-pink-500 to-violet-600 text-white px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt size={12} />
          </a>
        ) : (
          <span className="text-xs text-gray-500 italic">No live demo available</span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
