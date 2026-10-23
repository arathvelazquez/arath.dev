import { useState } from 'react';
import { experience } from '../data/experience';

const filters = [
  { label: 'All', value: 'hideContent' },
  { label: 'Professional', value: 'professional' },
  { label: 'Freelance', value: 'freelance' },
  { label: 'Entrepreneur', value: 'entrepreneur' },
  { label: 'Just for Fun', value: 'just_for_fun' },
  { label: 'Concepts', value: 'concepts' },
];

const Experience = () => {

  const [search, setSearch] = useState('hideContent');
  const states = ['hideContent', 'showContent'];

  const isActive = (value) => value === 'hideContent' ? states.includes(search) : search === value;

  const addImage = (image, companyName) => {
    if (image) {
      return (
        <div className=" border-14 rounded-xl border-black mt-6 mb-20 m-auto md:col-span-6 xl:col-span-5 md:h-[550px] h-[450px] w-4/5 relative overflow-hidden overflow-x-auto overflow-y-auto">
          <img className="m-auto relative" src={image} alt={`${companyName} website`} loading="lazy" />
        </div>
      )
    }
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
          <p className="text-sm mt-4 md:text-justify" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        {addImage(data.image[0], data.companyName)}
      </div>
    )
  });

  return (
    <div>
      <div className="w-full flex justify-between text-center mb-16">
        <ul className="m-auto flex flex-wrap justify-center gap-y-3 text-sm text-black uppercase">
          {filters.map(filter => (
            <li key={filter.value} className={`${isActive(filter.value) ? "shadow-link" : ""} px-3 md:px-5`}>
              <button type="button" className="uppercase cursor-pointer hover:shadow-link" onClick={() => setSearch(filter.value)}>{filter.label}</button>
            </li>
          ))}
        </ul>
      </div>
      {jobs}
      <div className="flex mt-3">
        <button type="button" className={`${search === 'hideContent' ? "block" : "hidden"} m-auto mb-20 cursor-pointer border-2 border-gray-200 text-white hover:text-white hover:border-primary bg-black font-extrabold uppercase p-2 text-sm outline-hidden`} onClick={() => setSearch('showContent')}>See all experience</button>
        <button type="button" className={`${search === 'showContent' ? "block" : "hidden"} m-auto mb-20 cursor-pointer border-2 border-gray-200 text-white hover:text-white hover:border-primary bg-black font-extrabold uppercase p-2 text-sm outline-hidden`} onClick={() => setSearch('hideContent')}>Hide experience</button>
      </div>
    </div>
  )
}

export default Experience;
