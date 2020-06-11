import React from 'react';

const Bio = () => {
  return (
    <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-8 xl:px-12">
      <div className="flex flex-col h-full">
        <h3 className="font-header font-light text-2xl leading-none mb-4">
          Web Developer
        </h3>
        <h2 className="font-header font-black text-5xl leading-none break-words mb-6">
          Andrés Bedoya G.
        </h2>
        <div className="inline-flex items-center bg-front mt-6 w-auto">
          <span className="text-lead px-3">
            hola
          </span>
          <span className="bg-black text-white font-header font-bold py-1 px-3 text-lg">
            Medellín, Colombia
          </span>
        </div>
      </div>
    </aside>
  )
};

export default Bio;
