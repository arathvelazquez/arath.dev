import React, { useState } from 'react';
import { experience } from '../data/experience';
import Technology from '../components/Technology';
import { CommonButton } from '../components/Button';

const Experience = () => {

  const [search, setSearch] = useState('hideContent');
  const states = ['hideContent', 'showContent'];

  const addImage = (image) => {
    if (image) {
      return (
        <div className=" border-14 rounded-xl border-black mt-6 mb-20 m-auto md:col-span-6 xl:col-span-5 md:h-xl h-sm w-4/5 relative overflow-hidden overflow-x-auto overflow-y-auto">
          <img className="m-auto relative" src={image} alt="website logo"/>
        </div>
      )
    }
  }

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
    if (search === 'showContent') {
      return data;
    } else if (search === 'hideContent') {
      return data.fullContent;
    }
    return data.category.includes(search);
  }).map((data, key) => {
    return (
      <div key={key} className={`${data.fullContent ? "mt-14" : "-mt-4 mb-12"} m-auto w-10/12 text-center md:grid md:grid-cols-12 md:gap-4 md:text-left`}>
        <div className={data.image[0] ? "md:col-start-1 md:col-end-7 xl:col-end-8" : "md:col-start-1 md:col-end-12"}>
          <div className={`${data.fullContent ? "mt-36" : ""} m-auto text-black text-2xl block uppercase font-extrabold`}>
            {data.companyName}
          </div>
          <div className="m-auto text-primary text-sm block">
            {data.role}
          </div>
          <div className="text-sm">
            {data.location}
          </div>
          <div className="text-xs">
            {data.period}
          </div>
          <div className="md:inline hidden">
            {/* {software(data.stack)} */}
          </div>
          <p className="text-sm mt-4 md:text-justify" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        {addImage(data.image[0])}
      </div>
    )
  });

  return (
    <div>
      <div className="w-full flex justify-between text-center mb-16">
        <ul className="m-auto text-sm font-12 text-black uppercase">
          <li className={`${states.includes(search) ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('hideContent'); e.preventDefault();}}>All</a>
          </li>
          <li className={`${search === 'professional' ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('professional'); e.preventDefault();}}>Professional</a>
          </li>
          <li className={`${search === 'freelance' ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('freelance'); e.preventDefault();}}>Freelance</a>
          </li>
          <li className={`${search === 'entrepreneur' ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('entrepreneur'); e.preventDefault();}}>Entrepreneur</a>
          </li>
          <li className={`${search === 'just_for_fun' ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('just_for_fun'); e.preventDefault();}}>Just for Fun</a>
          </li>
          <li className={`${search === 'concepts' ? "shadow-link" : ""} inline-block px-5 focus:outline-none`}>
            <a href="/" className="hover:shadow-link" onClick={(e)=> {setSearch('concepts'); e.preventDefault();}}>Concepts</a>
          </li>
        </ul>
      </div>
      {jobs}
      <div className="flex mt-3">
        <a href="/" className={`${search === 'hideContent' ? "block" : "hidden"} m-auto mb-20 border-2 text-white hover:text-white hover:border-primary bg-black font-extrabold uppercase p-2 text-sm outline-none`} onClick={(e)=> {setSearch('showContent'); e.preventDefault();}}>See all experience</a>
        <a href="/" className={`${search === 'showContent' ? "block" : "hidden"} m-auto mb-20 border-2 text-white hover:text-white hover:border-primary bg-black font-extrabold uppercase p-2 text-sm outline-none`} onClick={(e)=> {setSearch('hideContent'); e.preventDefault();}}>Hide experience</a>
      </div>
    </div>
  )
}

export default Experience;
