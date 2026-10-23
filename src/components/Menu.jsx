import { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="w-full flex flex-wrap items-center p-3 bg-black text-center">
        <div className="flex m-auto md:w-4/12 text-white text-sm uppercase justify-between p-3">
          <a href="/" className="inline-block px-3 hover:shadow-link">Home</a>
          <a href="#about" className="inline-block px-3 hover:shadow-link">About</a>
          <a href="#experience" className="inline-block px-3 hover:shadow-link">Experience</a>
        </div>
      </div>
    )
  }
}

export default Menu;