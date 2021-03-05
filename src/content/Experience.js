import React, { useState } from 'react';
import { experience } from '../data/experience';
import Technology from '../components/Technology';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {

  const [search, setSearch] = useState(0);

  const software = (stack) => {

    let maxPerRow = 3;
    let items = Math.floor(stack.length / maxPerRow);

    let resultComponent = [];
    for (let i = 1; i <= items + 1; i++) {
      let start = parseInt((i - 1) * maxPerRow);
      let end = parseInt(i * maxPerRow);

      let tempArray = stack.slice(start, end);

      resultComponent.push(
        <div className="flex">
          {tempArray.map((tool, index) => {
            return <Technology name={tool} key={index + tool} />
          })}
        </div>
      )
    }

    return resultComponent;
  }

  const jobs = experience.filter(data => {
    if (search === 0) {
      return data;
    } else {
      return data.category.includes(search);
    }
  }).map((data, key) => {
    return (
      <div key={key} className="m-auto w-10/12 mb-12 text-center md:grid md:grid-cols-12 md:gap-4 md:text-left">
        <div className="md:col-start-1 md:col-end-7 xl:col-end-8">
          <div className="m-auto text-black text-2xl block uppercase font-extrabold">
            {data.companyName}
          </div>
          <div className="m-auto text-primary text-sm block">
            {data.role}
          </div>
          <div className="text-xs">
            {data.location}
          </div>
          <div className="text-xs">
            {data.period}
          </div>
          <div className="md:inline hidden">
            {software(data.stack)}
          </div>
          <p className="text-sm mt-4 md:text-justify" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div className="mt-3 md:col-span-6 xl:col-span-5">
          <img className="m-auto" src={data.image[0]} alt="website logo"/>
        </div>
      </div>
    )
  });

  return (
    <div>
      <div className="w-full flex justify-between text-center mb-16">
      <ul className="m-auto text-sm font-12 text-black uppercase">
        <li className={search === 'professional' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 focus:outline-none'}><a href="#" className="hover:shadow-link" onClick={(e)=> {setSearch('professional'); e.preventDefault();}}>Professional</a></li>
        <li className={search === 'freelance' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 focus:outline-none'}><a href="#" className="hover:shadow-link" onClick={(e)=> {setSearch('freelance'); e.preventDefault();}}>Freelance</a></li>
        <li className={search === 'entrepreneur' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 focus:outline-none'}><a href="#" className="hover:shadow-link" onClick={(e)=> {setSearch('entrepreneur'); e.preventDefault();}}>Entrepreneur</a></li>
        <li className={search === 'just_for_fun' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 focus:outline-none'}><a href="#" className="hover:shadow-link" onClick={(e)=> {setSearch('just_for_fun'); e.preventDefault();}}>Just for Fun</a></li>
        <li className={search === 'concepts' ? 'inline-block px-5 shadow-link focus:outline-none' : 'inline-block px-5 focus:outline-none'}><a href="#" className="hover:shadow-link" onClick={(e)=> {setSearch('concepts'); e.preventDefault();}}>Concepts</a></li>
      </ul>
    </div>
      {jobs}
    </div>
  )
}

export default Experience;
