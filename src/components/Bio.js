import React from 'react';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaRss} from "react-icons/fa"

const Bio = () => {
  return (
    <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-8 xl:px-12">
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="font-header font-light text-2xl leading-none mb-4">
            Web Developer
          </h3>
          <h2 className="font-header font-black text-5xl leading-none break-words mb-6">
            Andrés Bedoya G.
          </h2>
          <div className="inline-flex items-center bg-front mt-6 w-auto">
            <span className="bg-black text-yellow mr-1 pt-1 pb-1 px-2">
              <FaMapMarkerAlt className="h-6 w-6" />
            </span>
            <span className="bg-black text-white font-header font-bold py-1 px-3">
              Medellín, Colombia
            </span>
          </div>
        </div>
        <footer className="flex mb-12 sm:pt-6 lg:mb-0">
          <a
            aria-label="Personal Github account"
            className="bg-black h-12 inline-flex items-center justify-center -m-1 rounded-full text-white w-12"
            href="https://github.com/angelfire"
            rel="noopener noreferrer"
            target="_blank"
            title="Personal Github account"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            aria-label="Linkedin account"
            className="bg-white h-12 inline-flex items-center justify-center -m-1 rounded-full w-12"
            href="https://www.linkedin.com/in/sabedoya/"
            rel="noopener noreferrer"
            target="_blank"
            title="Linkedin account"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a
            aria-label="Rss Feed for Velocidad de Escape"
            className="bg-black h-12 inline-flex items-center justify-center -m-1 rounded-full text-white w-12"
            href="http://velocidadescape.com/rss.xml"
            rel="noopener noreferrer"
            target="_blank"
            title="Rss Feed for Velocidad de Escape"
          >
            <FaRss className="h-6 w-6" />
          </a>
        </footer>
      </div>
    </aside>
  )
};

export default Bio;
