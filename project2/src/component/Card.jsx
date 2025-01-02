import React from 'react'

function Card({username,btntext}) {

  return (
    <div> <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 m md:rounded-none rounded-full mx-auto" 
    src="https://images.pexels.com/photos/11791439/pexels-photo-11791439.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. It’s easy to customize, adapts to any design,
          and the build size is tiny.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold

Itext-white" mr-auto>

{btntext}</button>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}
export default Card
