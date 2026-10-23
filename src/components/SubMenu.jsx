import React from 'react';

const SubMenu = () => {
  
  return (
    <div className="w-full flex justify-between text-center mb-16">
      <ul className="m-auto text-sm font-12 text-black uppercase">
        <li className="inline-block px-5 hover:shadow-link"><a href="/">Professional</a></li>
        <li className="inline-block px-5 hover:shadow-link"><a href="/">Freelance</a></li>
        <li className="inline-block px-5 hover:shadow-link"><a href="/">Entrepreneur</a></li>
        <li className="inline-block px-5 hover:shadow-link"><a href="/">Just for Fun</a></li>
        <li className="inline-block px-5 hover:shadow-link"><a href="/">Concepts</a></li>
      </ul>
    </div>
  )
}

export default SubMenu;
