import * as React from "react"
import { Github } from "./icons/Github"
import { Linkedin } from "./icons/Linkedin"
import { Twitter } from "./icons/Twitter"
import { Rss } from "./icons/Rss"

const Bio = () => (
  <aside className="border-line w-full lg:w-1/4 lg:border-r lg:px-8 xl:px-12">
    <div className="flex flex-col">
      <div className="mb-6">
        <h2 className="font-header mb-4 text-2xl font-semibold">Index.</h2>
        <p className="break-words text-sm">
          I jot down some things about my personal interests, random thoughts
          and sometimes technical learnings from day to day. I hope you find
          some things useful.
        </p>
      </div>
      <footer className="mb-12 flex gap-3 md:mb-0 lg:pt-0">
        <a
          aria-label="Personal Github account"
          className="inline-flex w-5 items-center justify-center hover:opacity-60"
          href="https://github.com/angelfire"
          rel="noopener noreferrer"
          target="_blank"
          title="Personal Github account"
        >
          <Github />
        </a>
        <a
          aria-label="Linkedin account"
          className="inline-flex w-5 items-center justify-center hover:opacity-60"
          href="https://www.linkedin.com/in/sabedoya/"
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin account"
        >
          <Linkedin />
        </a>
        <a
          aria-label="Rss Feed for Velocidad de Escape"
          className="inline-flex w-5 items-center justify-center hover:opacity-60"
          href="http://velocidadescape.com/rss.xml"
          rel="noopener noreferrer"
          target="_blank"
          title="Rss Feed for Velocidad de Escape"
        >
          <Rss />
        </a>
        <a
          aria-label="Twitter account"
          className="inline-flex w-5 items-center justify-center hover:opacity-60"
          href="https://twitter.com/MonsieurHart"
          rel="noopener noreferrer"
          target="_blank"
          title="Linkedin account"
        >
          <Twitter />
        </a>
      </footer>
    </div>
  </aside>
)

export default Bio
