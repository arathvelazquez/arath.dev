import { Component } from 'react';
import { Button } from '../components/Button';
import Underline from '../components/Underline';

class Banner extends Component {

  render() {
    return (
      <div className="h-96 bg-black flex">
        <div className="m-auto w-2/3 md:w-5/12 text-center">
          <div className="text-white uppercase text-6xl sm:text-main-title font-extrabold leading-none">Arath Fabricio</div>
          <Underline />
          <div className="text-white font-main-title">Web Developer</div>
          {/* <Button /> */}
        </div>
      </div>
    )
  }
}

export default Banner;