import React from 'react-dom';
import Underline from '../components/Underline';

const Title = (props) => {

  return (
    <div id={props.section} className="flex mt-32 mb-4 h-16">
      <div className="m-auto text-center">
        <a href={'#' + props.section} className="font-extrabold uppercase text-xl">{props.title}</a>
        <Underline />
        <span className="-z-10 uppercase text-gray-200 text-6xl sm:text-main-title font-extrabold relative -top-16">{props.subtitle}</span>
      </div>
    </div>
  )
}

export default Title;